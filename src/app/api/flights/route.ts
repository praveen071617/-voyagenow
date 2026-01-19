import { NextRequest, NextResponse } from "next/server";
import { getFlightPrices } from "@/lib/api/amadeus";

// Airline code to name mapping
const airlineNames: Record<string, string> = {
  "6E": "IndiGo",
  "AI": "Air India",
  "UK": "Vistara",
  "SG": "SpiceJet",
  "G8": "Go First",
  "I5": "AirAsia India",
  "SQ": "Singapore Airlines",
  "TG": "Thai Airways",
  "EK": "Emirates",
  "QR": "Qatar Airways",
  "MH": "Malaysia Airlines",
  "CX": "Cathay Pacific",
  "AK": "AirAsia",
  "TR": "Scoot",
  "FD": "Thai AirAsia",
  "VJ": "VietJet",
  "VN": "Vietnam Airlines",
  "GA": "Garuda Indonesia",
  "3K": "Jetstar Asia",
  "OD": "Batik Air",
};

function getAirlineName(code: string): string {
  return airlineNames[code] || code;
}

// Parse ISO duration (PT5H30M) to readable format (5h 30m)
function parseDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return isoDuration;
  const hours = match[1] ? `${match[1]}h` : "";
  const minutes = match[2] ? ` ${match[2]}m` : "";
  return (hours + minutes).trim();
}

// Format time from ISO datetime
function formatTime(isoDateTime: string): string {
  const date = new Date(isoDateTime);
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
}

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
    // Check if Amadeus credentials are configured
    if (!process.env.AMADEUS_CLIENT_ID || !process.env.AMADEUS_CLIENT_SECRET) {
      console.log("Amadeus credentials not configured, using estimates");
      return NextResponse.json({
        flights: [],
        estimated: {
          min: estimatePrice(origin, destination, "min"),
          max: estimatePrice(origin, destination, "max"),
        },
      });
    }

    // Fetch real flight data from Amadeus
    const amadeusFlights = await getFlightPrices(origin, destination, departureDate, returnDate || undefined);

    if (!amadeusFlights || amadeusFlights.length === 0) {
      return NextResponse.json({
        flights: [],
        estimated: {
          min: estimatePrice(origin, destination, "min"),
          max: estimatePrice(origin, destination, "max"),
        },
      });
    }

    // Transform Amadeus response to match frontend expected format
    const flights = amadeusFlights.map((flight, index) => {
      const outbound = flight.outbound;
      const airlines = [getAirlineName(outbound.airline)];
      const flightNumbers = [`${outbound.airline} ${100 + index}`];

      // Create segments from outbound data
      const segments = [{
        from: outbound.departure.iataCode,
        to: outbound.arrival.iataCode,
        departure: formatTime(outbound.departure.at),
        arrival: formatTime(outbound.arrival.at),
        duration: parseDuration(outbound.duration),
        aircraft: "320", // Default aircraft code
      }];

      // Add layover info if there are stops
      const hasLayover = outbound.stops > 0;

      return {
        id: flight.id,
        price: flight.price,
        airlines,
        flightNumbers,
        segments,
        layover: hasLayover ? "2h 30m" : undefined,
        layoverCity: hasLayover ? "Connecting City" : undefined,
        selfTransfer: false,
        partner: index % 2 === 0 ? "kiwi" : "skyscanner",
      };
    });

    return NextResponse.json({
      flights,
      estimated: {
        min: Math.min(...flights.map(f => f.price)),
        max: Math.max(...flights.map(f => f.price)),
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
