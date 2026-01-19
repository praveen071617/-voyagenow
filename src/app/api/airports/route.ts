import { NextRequest, NextResponse } from "next/server";
import { getAirports } from "@/lib/services/destinations";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q")?.toLowerCase();

  try {
    const airports = await getAirports();

    if (query) {
      const filtered = airports.filter(
        (airport) =>
          airport.code.toLowerCase().includes(query) ||
          airport.city.toLowerCase().includes(query) ||
          airport.name.toLowerCase().includes(query) ||
          airport.country.toLowerCase().includes(query)
      );
      return NextResponse.json({ airports: filtered });
    }

    return NextResponse.json({ airports });
  } catch (error) {
    console.error("Error fetching airports:", error);
    return NextResponse.json(
      { error: "Failed to fetch airports" },
      { status: 500 }
    );
  }
}
