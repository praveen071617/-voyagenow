// Destination service - fetches from Supabase with fallback to static data
import { supabase } from "../supabase/client";
import type { Destination, FlightRoute, Activity, Airport } from "../supabase/types";
import { destinations as staticDestinationsMap, searchDestinations as staticSearch, getAllDestinations as getStaticDestinations } from "../data/destinations";

// Cache for destinations to reduce API calls
let destinationsCache: Destination[] | null = null;
let airportsCache: Airport[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Get all destinations from Supabase
 */
export async function getDestinations(): Promise<Destination[]> {
  // Check cache
  if (destinationsCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return destinationsCache;
  }

  try {
    const { data, error } = await supabase
      .from("destinations")
      .select("*")
      .order("popular", { ascending: false });

    if (error) throw error;

    if (data && data.length > 0) {
      destinationsCache = data;
      cacheTimestamp = Date.now();
      return data;
    }
  } catch (error) {
    console.error("Error fetching destinations from Supabase:", error);
  }

  // Fallback to static data if Supabase fails or is empty
  return convertStaticToDestinations();
}

/**
 * Get a single destination by slug
 */
export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  try {
    const { data, error } = await supabase
      .from("destinations")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching destination:", error);
    // Fallback to static - staticDestinationsMap is keyed by slug/id
    const staticDest = staticDestinationsMap[slug];
    return staticDest ? convertStaticDestination(staticDest) : null;
  }
}

/**
 * Get popular/featured destinations
 */
export async function getFeaturedDestinations(limit = 6): Promise<Destination[]> {
  try {
    const { data, error } = await supabase
      .from("destinations")
      .select("*")
      .eq("featured", true)
      .limit(limit);

    if (error) throw error;

    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching featured destinations:", error);
  }

  // Fallback
  return convertStaticToDestinations().slice(0, limit);
}

/**
 * Search destinations by name, country, or continent
 */
export async function searchDestinations(
  query: string,
  filters?: {
    continent?: string;
    maxBudget?: number;
    visaFree?: boolean;
  }
): Promise<Destination[]> {
  try {
    let supabaseQuery = supabase.from("destinations").select("*");

    if (query) {
      supabaseQuery = supabaseQuery.or(
        `name.ilike.%${query}%,country.ilike.%${query}%,continent.ilike.%${query}%`
      );
    }

    if (filters?.continent) {
      supabaseQuery = supabaseQuery.eq("continent", filters.continent);
    }

    if (filters?.visaFree) {
      supabaseQuery = supabaseQuery.eq("visa_required", false);
    }

    const { data, error } = await supabaseQuery;

    if (error) throw error;

    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    console.error("Error searching destinations:", error);
  }

  // Fallback to static search
  const staticResults = staticSearch(query);
  return staticResults.map(convertStaticDestination);
}

/**
 * Get flight routes for a destination from a specific origin
 */
export async function getFlightRoutes(
  destinationId: string,
  originCode?: string
): Promise<FlightRoute[]> {
  try {
    let query = supabase
      .from("flight_routes")
      .select("*")
      .eq("destination_id", destinationId);

    if (originCode) {
      query = query.eq("origin_code", originCode);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching flight routes:", error);
    return [];
  }
}

/**
 * Get activities for a destination
 */
export async function getActivities(destinationId: string): Promise<Activity[]> {
  try {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .eq("destination_id", destinationId)
      .order("popular", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching activities:", error);
    return [];
  }
}

/**
 * Get all airports (for departure city selection)
 */
export async function getAirports(): Promise<Airport[]> {
  if (airportsCache) {
    return airportsCache;
  }

  try {
    const { data, error } = await supabase
      .from("airports")
      .select("*")
      .order("is_major", { ascending: false });

    if (error) throw error;

    if (data && data.length > 0) {
      airportsCache = data;
      return data;
    }
  } catch (error) {
    console.error("Error fetching airports:", error);
  }

  // Fallback to static airports
  return getStaticAirports();
}

/**
 * Get destinations matching budget criteria
 */
export async function getDestinationsByBudget(
  originCode: string,
  maxBudget: number,
  days: number,
  currencyCode: string = "INR"
): Promise<Array<Destination & { estimatedCost: number; flightPrice: number }>> {
  const destinations = await getDestinations();
  const results: Array<Destination & { estimatedCost: number; flightPrice: number }> = [];

  // Currency conversion rates (approximate, for filtering)
  const toINR: Record<string, number> = {
    INR: 1,
    USD: 83,
    EUR: 90,
    GBP: 105,
    AED: 22.6,
    SGD: 62,
    THB: 2.4,
    MYR: 18,
    JPY: 0.56,
    AUD: 54,
  };

  const conversionRate = toINR[currencyCode] || 1;
  const budgetInINR = maxBudget * conversionRate;

  for (const dest of destinations) {
    // Get flight price for this route
    const routes = await getFlightRoutes(dest.id, originCode);
    const flightPrice = routes[0]?.price_low || estimateFlightPrice(originCode, dest.airport_code);

    // Calculate total cost
    const hotelCost = dest.hotel_mid * days;
    const dailyCost = dest.daily_cost_high * days;
    const activitiesCost = dest.activities_cost_high;
    const visaCost = dest.visa_required ? dest.visa_cost : 0;

    const totalCost = flightPrice * 2 + hotelCost + dailyCost + activitiesCost + visaCost;

    if (totalCost <= budgetInINR) {
      results.push({
        ...dest,
        estimatedCost: Math.round(totalCost / conversionRate),
        flightPrice: Math.round(flightPrice / conversionRate),
      });
    }
  }

  // Sort by estimated cost
  return results.sort((a, b) => a.estimatedCost - b.estimatedCost);
}

// Helper: Estimate flight price based on distance/region
function estimateFlightPrice(origin: string, destination: string): number {
  // Very rough estimates based on common routes from India
  const domesticCodes = ["DEL", "BOM", "BLR", "MAA", "HYD", "CCU", "COK", "AMD", "PNQ", "GOI"];
  const seaCodes = ["BKK", "SIN", "KUL", "HKT", "SGN", "HAN", "DPS", "MNL", "CMB", "MLE"];
  const middleEastCodes = ["DXB", "DOH", "AUH", "MCT", "BAH", "KWI", "RUH"];
  const eastAsiaCodes = ["HKG", "NRT", "ICN", "TPE", "PVG", "PEK"];
  const europeCodes = ["LHR", "CDG", "AMS", "FCO", "FRA", "BCN", "IST"];

  if (domesticCodes.includes(destination)) return 5000;
  if (seaCodes.includes(destination)) return 12000;
  if (middleEastCodes.includes(destination)) return 15000;
  if (eastAsiaCodes.includes(destination)) return 25000;
  if (europeCodes.includes(destination)) return 35000;

  return 40000; // Default for long-haul
}

// Helper: Convert static destination to Supabase format
function convertStaticDestination(dest: ReturnType<typeof getStaticDestinations>[0]): Destination {
  return {
    id: dest.id,
    slug: dest.slug || dest.id,
    name: dest.name,
    country: dest.country,
    country_code: dest.countryCode || "XX",
    continent: dest.region || "Asia",
    flag: dest.flag,
    airport_code: dest.airportCode,
    image_url: dest.image,
    tagline: dest.tagline,
    description: dest.tagline,
    hotel_budget: dest.costs.hotels.budget,
    hotel_mid: dest.costs.hotels.mid,
    hotel_luxury: dest.costs.hotels.luxury,
    daily_cost_low: dest.costs.daily.low,
    daily_cost_high: dest.costs.daily.high,
    activities_cost_low: dest.costs.activities?.low || 2000,
    activities_cost_high: dest.costs.activities?.high || 6000,
    visa_required: dest.visa.required,
    visa_type: dest.visa.type,
    visa_cost: dest.visa.cost,
    visa_duration: dest.visa.duration,
    visa_notes: dest.visa.notes || "",
    best_time: dest.info.bestTime,
    currency_name: dest.info.currency,
    currency_code: dest.info.currencyCode,
    language: dest.info.language,
    timezone: dest.info.timezone,
    esim_provider: "Airalo",
    esim_affiliate_link: "",
    popular: dest.popular || false,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

// Helper: Convert all static destinations
function convertStaticToDestinations(): Destination[] {
  return getStaticDestinations().map(convertStaticDestination);
}

// Helper: Get static airports
function getStaticAirports(): Airport[] {
  return [
    { id: "1", code: "DEL", name: "Indira Gandhi International", city: "New Delhi", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 28.5562, longitude: 77.1000, is_major: true },
    { id: "2", code: "BOM", name: "Chhatrapati Shivaji Maharaj International", city: "Mumbai", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 19.0896, longitude: 72.8656, is_major: true },
    { id: "3", code: "BLR", name: "Kempegowda International", city: "Bangalore", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 13.1979, longitude: 77.7063, is_major: true },
    { id: "4", code: "MAA", name: "Chennai International", city: "Chennai", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 12.9941, longitude: 80.1709, is_major: true },
    { id: "5", code: "HYD", name: "Rajiv Gandhi International", city: "Hyderabad", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 17.2403, longitude: 78.4294, is_major: true },
    { id: "6", code: "CCU", name: "Netaji Subhas Chandra Bose International", city: "Kolkata", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 22.6547, longitude: 88.4467, is_major: true },
    { id: "7", code: "COK", name: "Cochin International", city: "Kochi", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 10.1520, longitude: 76.4019, is_major: true },
    { id: "8", code: "AMD", name: "Sardar Vallabhbhai Patel International", city: "Ahmedabad", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 23.0772, longitude: 72.6347, is_major: true },
    { id: "9", code: "PNQ", name: "Pune Airport", city: "Pune", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 18.5802, longitude: 73.9197, is_major: false },
    { id: "10", code: "GOI", name: "Goa International", city: "Goa", country: "India", country_code: "IN", flag: "🇮🇳", latitude: 15.3808, longitude: 73.8314, is_major: false },
  ];
}
