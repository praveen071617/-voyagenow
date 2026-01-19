// Supabase destination format
export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  flag: string;
  airport_code: string;
  image_url: string;
  tagline: string;
  description?: string;
  hotel_budget: number;
  hotel_mid: number;
  hotel_luxury: number;
  daily_cost_low: number;
  daily_cost_high: number;
  visa_required: boolean;
  visa_type: string;
  visa_cost: number;
  best_time: string;
  timezone?: string;
  language?: string;
  currency?: string;
  esim_price?: number;
  activities?: string[];
  highlights?: string[];
}

export interface TripCostBreakdown {
  flights: { low: number; high: number };
  hotels: {
    budget: { perNight: number; total: number };
    mid: { perNight: number; total: number };
    luxury: { perNight: number; total: number };
  };
  daily: { low: number; high: number; totalLow: number; totalHigh: number };
  activities: { low: number; high: number };
  visa: number;
  total: { low: number; high: number };
}

// Estimated flight costs based on departure city (will be replaced by Amadeus API)
const estimatedFlights: Record<string, Record<string, { low: number; high: number }>> = {
  BOM: { default: { low: 15000, high: 35000 } },
  DEL: { default: { low: 16000, high: 38000 } },
  BLR: { default: { low: 17000, high: 40000 } },
  MAA: { default: { low: 16000, high: 38000 } },
  HYD: { default: { low: 16500, high: 39000 } },
  CCU: { default: { low: 18000, high: 42000 } },
  COK: { default: { low: 17500, high: 40000 } },
  AMD: { default: { low: 16000, high: 37000 } },
  PNQ: { default: { low: 17000, high: 39000 } },
  GOI: { default: { low: 18000, high: 42000 } },
};

export const calculateTripCost = (
  destination: Destination,
  departureCity: string,
  days: number
): TripCostBreakdown => {
  // Get estimated flight cost (fallback until Amadeus API provides real prices)
  const cityFlights = estimatedFlights[departureCity] || estimatedFlights.BOM;
  const flightCost = cityFlights.default;

  const nights = days - 1;

  const hotels = {
    budget: {
      perNight: destination.hotel_budget,
      total: destination.hotel_budget * nights,
    },
    mid: {
      perNight: destination.hotel_mid,
      total: destination.hotel_mid * nights,
    },
    luxury: {
      perNight: destination.hotel_luxury,
      total: destination.hotel_luxury * nights,
    },
  };

  const daily = {
    low: destination.daily_cost_low,
    high: destination.daily_cost_high,
    totalLow: destination.daily_cost_low * days,
    totalHigh: destination.daily_cost_high * days,
  };

  // Estimate activities as 20% of daily costs
  const activities = {
    low: Math.round(destination.daily_cost_low * days * 0.2),
    high: Math.round(destination.daily_cost_high * days * 0.3),
  };

  const visaCost = destination.visa_required ? destination.visa_cost : 0;

  const totalLow =
    flightCost.low +
    hotels.budget.total +
    daily.totalLow +
    activities.low +
    visaCost;

  const totalHigh =
    flightCost.high +
    hotels.mid.total +
    daily.totalHigh +
    activities.high +
    visaCost;

  return {
    flights: flightCost,
    hotels,
    daily,
    activities,
    visa: visaCost,
    total: { low: totalLow, high: totalHigh },
  };
};

export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const getDateString = (daysFromNow: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toISOString().split("T")[0];
};
