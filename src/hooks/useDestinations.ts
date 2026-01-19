"use client";

import { useState, useEffect, useCallback } from "react";
import { getAllDestinations, getDestinationsByBudget as getStaticByBudget } from "@/lib/data/destinations";

// Unified destination type that works with both static and Supabase data
export interface UnifiedDestination {
  id: string;
  slug: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  flag: string;
  airportCode: string;
  image: string;
  tagline: string;
  description: string;
  hotelCosts: { budget: number; mid: number; luxury: number };
  dailyCost: { low: number; high: number };
  activitiesCost: { low: number; high: number };
  visa: { required: boolean; type: string; cost: number; duration: string; notes: string };
  bestTime: string;
  currency: { name: string; code: string };
  language: string;
  timezone: string;
  popular: boolean;
  featured: boolean;
  // For static data compatibility
  costs?: {
    flights: Record<string, { low: number; high: number }>;
    hotels: { budget: number; mid: number; luxury: number };
    daily: { low: number; high: number };
  };
  info?: {
    bestTime: string;
    currency: { name: string; code: string };
    language: string;
    timezone: string;
  };
}

interface UseDestinationsOptions {
  budget?: number;
  origin?: string;
  days?: number;
  currency?: string;
  query?: string;
}

export function useDestinations(options: UseDestinationsOptions = {}) {
  const [destinations, setDestinations] = useState<ReturnType<typeof getAllDestinations>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDestinations = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Try to fetch from API first
      const params = new URLSearchParams();
      if (options.budget) params.append("budget", String(options.budget));
      if (options.origin) params.append("origin", options.origin);
      if (options.days) params.append("days", String(options.days));
      if (options.currency) params.append("currency", options.currency);
      if (options.query) params.append("q", options.query);

      const response = await fetch(`/api/destinations?${params.toString()}`);

      if (response.ok) {
        const data = await response.json();
        if (data.destinations && data.destinations.length > 0) {
          // Transform API data to match static data format
          const transformed = data.destinations.map(transformApiDestination);
          setDestinations(transformed);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.log("API fetch failed, using static data:", err);
    }

    // Fallback to static data
    if (options.budget && options.origin && options.days) {
      setDestinations(getStaticByBudget(options.budget, options.origin, options.days));
    } else {
      setDestinations(getAllDestinations());
    }
    setLoading(false);
  }, [options.budget, options.origin, options.days, options.currency, options.query]);

  useEffect(() => {
    fetchDestinations();
  }, [fetchDestinations]);

  return { destinations, loading, error, refetch: fetchDestinations };
}

// Transform API/Supabase destination to static format for compatibility
function transformApiDestination(dest: Record<string, unknown>) {
  // If already in static format, return as-is
  if (dest.costs && dest.info) {
    return dest;
  }

  // Transform from Supabase format to static format
  return {
    id: dest.slug || dest.id,
    slug: dest.slug,
    name: dest.name,
    country: dest.country,
    countryCode: dest.country_code || "XX",
    region: dest.continent || "Asia",
    flag: dest.flag,
    airportCode: dest.airport_code,
    image: dest.image_url || "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    tagline: dest.tagline,
    description: dest.description,
    popular: dest.popular,
    featured: dest.featured,
    costs: {
      flights: {
        // Provide estimated flight costs
        DEL: { low: (dest as { estimatedCost?: number }).estimatedCost || 15000, high: 25000 },
        BOM: { low: (dest as { estimatedCost?: number }).estimatedCost || 15000, high: 25000 },
        BLR: { low: (dest as { estimatedCost?: number }).estimatedCost || 15000, high: 25000 },
        MAA: { low: (dest as { estimatedCost?: number }).estimatedCost || 15000, high: 25000 },
        HYD: { low: (dest as { estimatedCost?: number }).estimatedCost || 15000, high: 25000 },
        CCU: { low: (dest as { estimatedCost?: number }).estimatedCost || 15000, high: 25000 },
        COK: { low: (dest as { estimatedCost?: number }).estimatedCost || 15000, high: 25000 },
      },
      hotels: {
        budget: dest.hotel_budget || 1500,
        mid: dest.hotel_mid || 4000,
        luxury: dest.hotel_luxury || 10000,
      },
      daily: {
        low: dest.daily_cost_low || 1500,
        high: dest.daily_cost_high || 3000,
      },
    },
    visa: {
      required: dest.visa_required || false,
      type: dest.visa_type || "Visa-free",
      cost: dest.visa_cost || 0,
      duration: dest.visa_duration || "30 days",
      notes: dest.visa_notes || "",
    },
    info: {
      bestTime: dest.best_time || "Year-round",
      currency: {
        name: dest.currency_name || "Local Currency",
        code: dest.currency_code || "USD",
      },
      language: dest.language || "English",
      timezone: dest.timezone || "UTC",
    },
    hotelCosts: {
      budget: dest.hotel_budget || 1500,
      mid: dest.hotel_mid || 4000,
      luxury: dest.hotel_luxury || 10000,
    },
    dailyCost: {
      low: dest.daily_cost_low || 1500,
      high: dest.daily_cost_high || 3000,
    },
    activitiesCost: {
      low: dest.activities_cost_low || 2000,
      high: dest.activities_cost_high || 6000,
    },
    bestTime: dest.best_time || "Year-round",
    currency: {
      name: dest.currency_name || "Local Currency",
      code: dest.currency_code || "USD",
    },
    language: dest.language || "English",
    timezone: dest.timezone || "UTC",
  };
}

export function useDestination(slug: string) {
  const [destination, setDestination] = useState<ReturnType<typeof getAllDestinations>[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDestination() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/destinations/${slug}`);
        if (response.ok) {
          const data = await response.json();
          if (data.destination) {
            const transformed = transformApiDestination(data.destination);
            setDestination(transformed as unknown as ReturnType<typeof getAllDestinations>[0]);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.log("API fetch failed, using static data:", err);
      }

      // Fallback to static
      const all = getAllDestinations();
      const found = all.find((d) => d.slug === slug || d.id === slug);
      setDestination(found || null);
      setLoading(false);
    }

    fetchDestination();
  }, [slug]);

  return { destination, loading, error };
}
