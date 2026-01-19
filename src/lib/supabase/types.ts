export interface Database {
  public: {
    Tables: {
      destinations: {
        Row: Destination;
        Insert: Omit<Destination, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Destination, "id">>;
      };
      airports: {
        Row: Airport;
        Insert: Omit<Airport, "id">;
        Update: Partial<Omit<Airport, "id">>;
      };
      flight_routes: {
        Row: FlightRoute;
        Insert: Omit<FlightRoute, "id">;
        Update: Partial<Omit<FlightRoute, "id">>;
      };
      activities: {
        Row: Activity;
        Insert: Omit<Activity, "id">;
        Update: Partial<Omit<Activity, "id">>;
      };
      esim_plans: {
        Row: EsimPlan;
        Insert: Omit<EsimPlan, "id">;
        Update: Partial<Omit<EsimPlan, "id">>;
      };
    };
  };
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  country_code: string;
  continent: string;
  flag: string;
  airport_code: string;
  image_url: string;
  tagline: string;
  description: string;

  // Costs (in INR)
  hotel_budget: number;
  hotel_mid: number;
  hotel_luxury: number;
  daily_cost_low: number;
  daily_cost_high: number;
  activities_cost_low: number;
  activities_cost_high: number;

  // Visa
  visa_required: boolean;
  visa_type: string;
  visa_cost: number;
  visa_duration: string;
  visa_notes: string;

  // Info
  best_time: string;
  currency_name: string;
  currency_code: string;
  language: string;
  timezone: string;

  // eSIM
  esim_provider: string;
  esim_affiliate_link: string;

  // Metadata
  popular: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Airport {
  id: string;
  code: string;
  name: string;
  city: string;
  country: string;
  country_code: string;
  flag: string;
  latitude: number;
  longitude: number;
  is_major: boolean;
}

export interface FlightRoute {
  id: string;
  origin_code: string;
  destination_id: string;
  price_low: number;
  price_high: number;
  flight_duration: string;
  airlines: string[];
  direct_available: boolean;
}

export interface Activity {
  id: string;
  destination_id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  image_url: string;
  affiliate_link: string;
  popular: boolean;
}

export interface EsimPlan {
  id: string;
  destination_id: string;
  data_amount: string;
  validity: string;
  price: number;
  recommended: boolean;
}

// API Response types for Amadeus
export interface AmadeusFlightOffer {
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  itineraries: {
    duration: string;
    segments: {
      departure: { iataCode: string; at: string };
      arrival: { iataCode: string; at: string };
      carrierCode: string;
      number: string;
      aircraft: { code: string };
      duration: string;
    }[];
  }[];
  price: {
    currency: string;
    total: string;
    base: string;
  };
  travelerPricings: {
    travelerId: string;
    fareOption: string;
    travelerType: string;
    price: { currency: string; total: string };
  }[];
}

export interface AmadeusHotelOffer {
  hotel: {
    hotelId: string;
    name: string;
    rating: string;
    cityCode: string;
    latitude: number;
    longitude: number;
  };
  offers: {
    id: string;
    checkInDate: string;
    checkOutDate: string;
    price: {
      currency: string;
      total: string;
    };
    room: {
      type: string;
      description: { text: string };
    };
  }[];
}
