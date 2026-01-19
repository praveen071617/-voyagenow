import { NextRequest, NextResponse } from "next/server";
import { getDestinations, searchDestinations, getDestinationsByBudget } from "@/lib/services/destinations";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const continent = searchParams.get("continent");
  const origin = searchParams.get("origin");
  const budget = searchParams.get("budget");
  const days = searchParams.get("days");
  const currency = searchParams.get("currency") || "INR";

  try {
    // If budget search
    if (origin && budget && days) {
      const results = await getDestinationsByBudget(
        origin,
        parseFloat(budget),
        parseInt(days),
        currency
      );
      return NextResponse.json({ destinations: results });
    }

    // If search query
    if (query || continent) {
      const results = await searchDestinations(query || "", {
        continent: continent || undefined,
      });
      return NextResponse.json({ destinations: results });
    }

    // Return all destinations
    const destinations = await getDestinations();
    return NextResponse.json({ destinations });
  } catch (error) {
    console.error("Error in destinations API:", error);
    return NextResponse.json(
      { error: "Failed to fetch destinations" },
      { status: 500 }
    );
  }
}
