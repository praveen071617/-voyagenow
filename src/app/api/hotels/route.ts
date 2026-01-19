import { NextRequest, NextResponse } from "next/server";
import { getHotelPrices } from "@/lib/api/amadeus";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const cityCode = searchParams.get("cityCode");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  if (!cityCode || !checkIn || !checkOut) {
    return NextResponse.json(
      { error: "Missing required parameters: cityCode, checkIn, checkOut" },
      { status: 400 }
    );
  }

  try {
    // Check if Amadeus is configured
    if (!process.env.AMADEUS_CLIENT_ID || !process.env.AMADEUS_CLIENT_SECRET) {
      return NextResponse.json({
        hotels: [],
        message: "Live hotel data unavailable. Configure Amadeus API for real prices.",
        estimated: getEstimatedHotelPrices(cityCode),
      });
    }

    const hotels = await getHotelPrices(cityCode, checkIn, checkOut);

    return NextResponse.json({ hotels });
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch hotel prices",
        estimated: getEstimatedHotelPrices(cityCode),
      },
      { status: 500 }
    );
  }
}

// Get estimated hotel prices by region
function getEstimatedHotelPrices(cityCode: string): { budget: number; mid: number; luxury: number } {
  const seaCodes = ["BKK", "SIN", "KUL", "HKT", "SGN", "HAN", "DPS", "MNL", "CMB", "MLE"];
  const middleEastCodes = ["DXB", "DOH", "AUH", "MCT", "BAH", "KWI", "RUH"];
  const eastAsiaCodes = ["HKG", "NRT", "ICN", "TPE", "PVG", "PEK"];
  const europeCodes = ["LHR", "CDG", "AMS", "FCO", "FRA", "BCN", "IST"];

  if (seaCodes.includes(cityCode)) {
    return { budget: 1500, mid: 4000, luxury: 12000 };
  }
  if (middleEastCodes.includes(cityCode)) {
    return { budget: 3000, mid: 8000, luxury: 25000 };
  }
  if (eastAsiaCodes.includes(cityCode)) {
    return { budget: 3500, mid: 8000, luxury: 20000 };
  }
  if (europeCodes.includes(cityCode)) {
    return { budget: 5000, mid: 12000, luxury: 30000 };
  }

  return { budget: 2000, mid: 5000, luxury: 15000 };
}
