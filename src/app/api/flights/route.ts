import { NextRequest, NextResponse } from "next/server";
import { getFlightPrices } from "@/lib/api/amadeus";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const departureDate = searchParams.get("departureDate");
  const returnDate = searchParams.get("returnDate");

  if (!origin || !destination || !departureDate) {
    return NextResponse.json(
      { error: "Missing required parameters: origin, destination, departureDate" },
      { status: 400 }
    );
  }

  try {
    // For now, return empty flights and let the frontend generate mock data
    // The frontend will use the estimated prices to show realistic pricing
    // TODO: Transform Amadeus API response to match frontend expected format
    return NextResponse.json({
      flights: [],
      estimated: {
        min: estimatePrice(origin, destination, "min"),
        max: estimatePrice(origin, destination, "max"),
      },
    });
  } catch (error) {
    console.error("Error fetching flights:", error);
    return NextResponse.json({
      flights: [],
      estimated: {
        min: estimatePrice(origin, destination, "min"),
        max: estimatePrice(origin, destination, "max"),
      },
    });
  }
}

// Estimate prices based on route distance
function estimatePrice(origin: string, destination: string, type: "min" | "max"): number {
  const seaCodes = ["BKK", "SIN", "KUL", "HKT", "SGN", "HAN", "DPS", "MNL", "CMB", "MLE", "DAD", "REP"];
  const middleEastCodes = ["DXB", "DOH", "AUH", "MCT", "BAH", "KWI", "RUH", "AMM", "TLV"];
  const eastAsiaCodes = ["HKG", "NRT", "HND", "ICN", "TPE", "PVG", "PEK", "KIX"];
  const europeCodes = ["LHR", "CDG", "AMS", "FCO", "FRA", "BCN", "IST", "ATH", "ZRH", "VIE"];
  const longHaulCodes = ["JFK", "LAX", "SFO", "SYD", "MEL", "AKL"];

  let baseMin = 15000;
  let baseMax = 25000;

  if (seaCodes.includes(destination)) {
    baseMin = 8000;
    baseMax = 18000;
  } else if (middleEastCodes.includes(destination)) {
    baseMin = 12000;
    baseMax = 25000;
  } else if (eastAsiaCodes.includes(destination)) {
    baseMin = 18000;
    baseMax = 35000;
  } else if (europeCodes.includes(destination)) {
    baseMin = 30000;
    baseMax = 60000;
  } else if (longHaulCodes.includes(destination)) {
    baseMin = 50000;
    baseMax = 100000;
  }

  return type === "min" ? baseMin : baseMax;
}
