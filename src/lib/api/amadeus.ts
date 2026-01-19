// Amadeus API Integration for real-time flight and hotel prices
// Sign up at https://developers.amadeus.com/ to get API keys

interface AmadeusToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

interface FlightSearchParams {
  originCode: string;
  destinationCode: string;
  departureDate: string;
  returnDate?: string;
  adults?: number;
  currencyCode?: string;
  max?: number;
}

interface HotelSearchParams {
  cityCode: string;
  checkInDate: string;
  checkOutDate: string;
  adults?: number;
  roomQuantity?: number;
  currencyCode?: string;
}

class AmadeusAPI {
  private baseUrl: string;
  private clientId: string;
  private clientSecret: string;
  private token: string | null = null;
  private tokenExpiry: number = 0;

  constructor() {
    // Use test environment by default, production for live data
    const isProduction = process.env.AMADEUS_ENV === "production";
    this.baseUrl = isProduction
      ? "https://api.amadeus.com"
      : "https://test.api.amadeus.com";
    this.clientId = process.env.AMADEUS_CLIENT_ID || "";
    this.clientSecret = process.env.AMADEUS_CLIENT_SECRET || "";
  }

  private async getToken(): Promise<string> {
    // Return cached token if still valid
    if (this.token && Date.now() < this.tokenExpiry) {
      return this.token;
    }

    const response = await fetch(`${this.baseUrl}/v1/security/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: this.clientId,
        client_secret: this.clientSecret,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get Amadeus token: ${response.statusText}`);
    }

    const data: AmadeusToken = await response.json();
    this.token = data.access_token;
    // Set expiry 5 minutes before actual expiry for safety
    this.tokenExpiry = Date.now() + (data.expires_in - 300) * 1000;

    return this.token;
  }

  private async request<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const token = await this.getToken();
    const url = new URL(`${this.baseUrl}${endpoint}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) url.searchParams.append(key, value);
      });
    }

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        `Amadeus API error: ${response.statusText} - ${JSON.stringify(error)}`
      );
    }

    return response.json();
  }

  /**
   * Search for flight offers
   */
  async searchFlights(params: FlightSearchParams) {
    const { data } = await this.request<{ data: FlightOffer[] }>(
      "/v2/shopping/flight-offers",
      {
        originLocationCode: params.originCode,
        destinationLocationCode: params.destinationCode,
        departureDate: params.departureDate,
        returnDate: params.returnDate || "",
        adults: String(params.adults || 1),
        currencyCode: params.currencyCode || "INR",
        max: String(params.max || 10),
      }
    );

    return data.map((offer) => ({
      id: offer.id,
      price: parseFloat(offer.price.total),
      currency: offer.price.currency,
      outbound: {
        departure: offer.itineraries[0].segments[0].departure,
        arrival: offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival,
        duration: offer.itineraries[0].duration,
        stops: offer.itineraries[0].segments.length - 1,
        airline: offer.itineraries[0].segments[0].carrierCode,
      },
      inbound: offer.itineraries[1]
        ? {
            departure: offer.itineraries[1].segments[0].departure,
            arrival: offer.itineraries[1].segments[offer.itineraries[1].segments.length - 1].arrival,
            duration: offer.itineraries[1].duration,
            stops: offer.itineraries[1].segments.length - 1,
            airline: offer.itineraries[1].segments[0].carrierCode,
          }
        : null,
    }));
  }

  /**
   * Search for hotels in a city
   */
  async searchHotels(params: HotelSearchParams) {
    // First, get hotel list for the city
    const { data: hotels } = await this.request<{ data: HotelData[] }>(
      "/v1/reference-data/locations/hotels/by-city",
      {
        cityCode: params.cityCode,
      }
    );

    if (!hotels || hotels.length === 0) {
      return [];
    }

    // Get offers for first 20 hotels
    const hotelIds = hotels.slice(0, 20).map((h) => h.hotelId).join(",");

    const { data: offers } = await this.request<{ data: HotelOffer[] }>(
      "/v3/shopping/hotel-offers",
      {
        hotelIds,
        checkInDate: params.checkInDate,
        checkOutDate: params.checkOutDate,
        adults: String(params.adults || 2),
        roomQuantity: String(params.roomQuantity || 1),
        currency: params.currencyCode || "INR",
      }
    );

    return offers.map((offer) => ({
      hotelId: offer.hotel.hotelId,
      name: offer.hotel.name,
      rating: parseInt(offer.hotel.rating || "0"),
      price: offer.offers[0] ? parseFloat(offer.offers[0].price.total) : null,
      currency: offer.offers[0]?.price.currency || "INR",
      roomType: offer.offers[0]?.room.type,
    }));
  }

  /**
   * Get flight price analysis for a route
   */
  async getFlightPriceAnalysis(
    originCode: string,
    destinationCode: string,
    departureDate: string
  ) {
    try {
      const { data } = await this.request<{ data: PriceMetrics[] }>(
        "/v1/analytics/itinerary-price-metrics",
        {
          originIataCode: originCode,
          destinationIataCode: destinationCode,
          departureDate,
          currencyCode: "INR",
        }
      );

      if (data && data[0]) {
        return {
          min: data[0].priceMetrics.find((p) => p.quartileRanking === "MINIMUM")?.amount,
          median: data[0].priceMetrics.find((p) => p.quartileRanking === "MEDIUM")?.amount,
          max: data[0].priceMetrics.find((p) => p.quartileRanking === "MAXIMUM")?.amount,
        };
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Get destination content (points of interest)
   */
  async getPointsOfInterest(latitude: number, longitude: number) {
    try {
      const { data } = await this.request<{ data: PointOfInterest[] }>(
        "/v1/reference-data/locations/pois",
        {
          latitude: String(latitude),
          longitude: String(longitude),
          radius: "20",
        }
      );
      return data;
    } catch {
      return [];
    }
  }
}

// Types for Amadeus responses
interface FlightOffer {
  id: string;
  price: { total: string; currency: string };
  itineraries: {
    duration: string;
    segments: {
      departure: { iataCode: string; at: string };
      arrival: { iataCode: string; at: string };
      carrierCode: string;
    }[];
  }[];
}

interface HotelData {
  hotelId: string;
  name: string;
}

interface HotelOffer {
  hotel: {
    hotelId: string;
    name: string;
    rating?: string;
  };
  offers: {
    price: { total: string; currency: string };
    room: { type: string };
  }[];
}

interface PriceMetrics {
  priceMetrics: {
    quartileRanking: string;
    amount: number;
  }[];
}

interface PointOfInterest {
  name: string;
  category: string;
  rank: number;
}

// Export singleton instance
export const amadeus = new AmadeusAPI();

// Export helper functions
export async function getFlightPrices(
  origin: string,
  destination: string,
  departureDate: string,
  returnDate?: string
) {
  try {
    return await amadeus.searchFlights({
      originCode: origin,
      destinationCode: destination,
      departureDate,
      returnDate,
    });
  } catch (error) {
    console.error("Error fetching flight prices:", error);
    return null;
  }
}

export async function getHotelPrices(
  cityCode: string,
  checkIn: string,
  checkOut: string
) {
  try {
    return await amadeus.searchHotels({
      cityCode,
      checkInDate: checkIn,
      checkOutDate: checkOut,
    });
  } catch (error) {
    console.error("Error fetching hotel prices:", error);
    return null;
  }
}
