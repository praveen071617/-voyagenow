"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Plane,
  Clock,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Filter,
  Loader2,
} from "lucide-react";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Badge } from "@/components/ui/badge";
import { formatINR } from "@/lib/utils/currency";
import { getAircraft } from "@/lib/data/aircraft";
import { buildSkyscannerLink, buildKiwiLink } from "@/lib/utils/affiliateLinks";

interface FlightSegment {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  aircraft: string;
}

interface Flight {
  id: string;
  price: number;
  airlines: string[];
  flightNumbers: string[];
  segments: FlightSegment[];
  layover?: string;
  layoverCity?: string;
  selfTransfer: boolean;
  partner: string;
}

// Generate dynamic mock flights based on destination
function generateMockFlights(from: string, to: string): Flight[] {
  // Common hub cities for connections
  const hubs = [
    { code: "SIN", city: "Singapore", airlines: ["Singapore Airlines", "Scoot"] },
    { code: "BKK", city: "Bangkok", airlines: ["Thai Airways", "Thai VietJet"] },
    { code: "KUL", city: "Kuala Lumpur", airlines: ["Malaysia Airlines", "AirAsia"] },
    { code: "DXB", city: "Dubai", airlines: ["Emirates", "FlyDubai"] },
    { code: "DOH", city: "Doha", airlines: ["Qatar Airways"] },
    { code: "HKG", city: "Hong Kong", airlines: ["Cathay Pacific"] },
  ];

  // Select 2-3 random hubs for connections
  const shuffledHubs = hubs.sort(() => Math.random() - 0.5).slice(0, 3);

  // Base prices by region
  const getPriceRange = (dest: string) => {
    const seaCodes = ["BKK", "SIN", "KUL", "HKT", "SGN", "HAN", "DPS", "MNL", "CMB", "MLE", "DAD", "REP", "PPS", "CEB", "PQC", "RGN"];
    const middleEastCodes = ["DXB", "DOH", "AUH", "MCT", "BAH", "KWI", "RUH", "AMM", "TLV"];
    const eastAsiaCodes = ["HKG", "NRT", "HND", "ICN", "TPE", "PVG", "PEK", "KIX"];
    const europeCodes = ["LHR", "CDG", "AMS", "FCO", "FRA", "BCN", "IST", "ATH", "ZRH", "VIE"];

    if (seaCodes.includes(dest)) return { min: 12000, max: 25000 };
    if (middleEastCodes.includes(dest)) return { min: 18000, max: 35000 };
    if (eastAsiaCodes.includes(dest)) return { min: 22000, max: 45000 };
    if (europeCodes.includes(dest)) return { min: 35000, max: 70000 };
    return { min: 15000, max: 30000 };
  };

  const priceRange = getPriceRange(to);

  return shuffledHubs.map((hub, index) => {
    const price = Math.round(priceRange.min + Math.random() * (priceRange.max - priceRange.min));
    const isSelfTransfer = Math.random() > 0.6;

    return {
      id: String(index + 1),
      price,
      airlines: isSelfTransfer ? [hub.airlines[0], hub.airlines[1] || hub.airlines[0]] : [hub.airlines[0]],
      flightNumbers: [`${hub.airlines[0].substring(0, 2).toUpperCase()} ${100 + Math.floor(Math.random() * 900)}`, `${hub.airlines[0].substring(0, 2).toUpperCase()} ${100 + Math.floor(Math.random() * 900)}`],
      segments: [
        {
          from,
          to: hub.code,
          departure: `${String(5 + Math.floor(Math.random() * 6)).padStart(2, "0")}:${["00", "15", "30", "45"][Math.floor(Math.random() * 4)]}`,
          arrival: `${String(10 + Math.floor(Math.random() * 5)).padStart(2, "0")}:${["00", "15", "30", "45"][Math.floor(Math.random() * 4)]}`,
          duration: `${4 + Math.floor(Math.random() * 2)}h ${[0, 15, 30, 45][Math.floor(Math.random() * 4)]}m`,
          aircraft: ["320", "321", "32N", "789", "77W", "359"][Math.floor(Math.random() * 6)],
        },
        {
          from: hub.code,
          to,
          departure: `${String(14 + Math.floor(Math.random() * 4)).padStart(2, "0")}:${["00", "15", "30", "45"][Math.floor(Math.random() * 4)]}`,
          arrival: `${String(17 + Math.floor(Math.random() * 4)).padStart(2, "0")}:${["00", "15", "30", "45"][Math.floor(Math.random() * 4)]}`,
          duration: `${2 + Math.floor(Math.random() * 2)}h ${[0, 15, 30, 45][Math.floor(Math.random() * 4)]}m`,
          aircraft: ["320", "321", "32N", "738", "739"][Math.floor(Math.random() * 5)],
        },
      ],
      layover: `${2 + Math.floor(Math.random() * 3)}h ${Math.floor(Math.random() * 4) * 15}m`,
      layoverCity: hub.city,
      selfTransfer: isSelfTransfer,
      partner: index % 2 === 0 ? "kiwi" : "skyscanner",
    };
  }).sort((a, b) => a.price - b.price);
}

function FlightResults() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "BOM";
  const to = searchParams.get("to") || "BKK";
  const departDate = searchParams.get("depart") || "";
  const returnDate = searchParams.get("return") || "";

  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [estimated, setEstimated] = useState<{ min: number; max: number } | null>(null);
  const [filter, setFilter] = useState<"all" | "airbus" | "boeing" | "widebody">("all");

  useEffect(() => {
    async function fetchFlights() {
      setLoading(true);
      try {
        // Try to fetch from API
        const params = new URLSearchParams({
          origin: from,
          destination: to,
          departureDate: departDate,
          ...(returnDate && { returnDate }),
        });

        const res = await fetch(`/api/flights?${params}`);
        const data = await res.json();

        if (data.flights && data.flights.length > 0) {
          setFlights(data.flights);
        } else {
          // Use generated mock data based on actual destination
          setFlights(generateMockFlights(from, to));
          if (data.estimated) {
            setEstimated(data.estimated);
          }
        }
      } catch (error) {
        console.error("Error fetching flights:", error);
        // Fallback to generated mock data
        setFlights(generateMockFlights(from, to));
      }
      setLoading(false);
    }

    if (departDate) {
      fetchFlights();
    } else {
      // No dates, show generated mock data
      setFlights(generateMockFlights(from, to));
      setLoading(false);
    }
  }, [from, to, departDate, returnDate]);

  const filteredFlights = flights.filter((flight) => {
    if (filter === "all") return true;
    if (!flight.segments) return true;
    if (filter === "widebody") {
      return flight.segments.some((seg) => {
        const aircraft = getAircraft(seg.aircraft);
        return aircraft?.type === "Wide-body";
      });
    }
    if (filter === "airbus") {
      return flight.segments.some((seg) => {
        const aircraft = getAircraft(seg.aircraft);
        return aircraft?.manufacturer === "Airbus";
      });
    }
    if (filter === "boeing") {
      return flight.segments.some((seg) => {
        const aircraft = getAircraft(seg.aircraft);
        return aircraft?.manufacturer === "Boeing";
      });
    }
    return true;
  });

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Plane className="h-6 w-6 text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Flights: {from} → {to}
            </h1>
          </div>
          <p className="text-white/50">
            {departDate && returnDate
              ? `${departDate} - ${returnDate}`
              : "Select dates to search"}
            {" • "}1 Adult
          </p>
        </motion.div>

        {/* Estimated Price Banner */}
        {estimated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="glass-card p-4 mb-6 border-purple-500/30"
          >
            <p className="text-white/70 text-sm">
              Estimated price range: <span className="text-white font-semibold">{formatINR(estimated.min)} - {formatINR(estimated.max)}</span>
            </p>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-6"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-white/50" />
            <span className="text-white/50 text-sm mr-2">Filter:</span>
            {[
              { key: "all", label: "All" },
              { key: "airbus", label: "Airbus" },
              { key: "boeing", label: "Boeing" },
              { key: "widebody", label: "Wide-body" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key as typeof filter)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  filter === f.key
                    ? "bg-purple-500 text-white"
                    : "bg-white/[0.06] text-white/70 hover:bg-white/[0.1]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
          </div>
        ) : (
        /* Flight Results */
        <div className="space-y-4">
          {filteredFlights.map((flight, index) => (
            <motion.div
              key={flight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <GlassCard hover={false} className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold gradient-text">
                      {formatINR(flight.price)}
                    </p>
                    <p className="text-white/50 text-sm">
                      {flight.airlines?.join(" + ") || "Multiple Airlines"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/50 text-sm">
                      {flight.flightNumbers?.join(" → ") || ""}
                    </p>
                  </div>
                </div>

                {/* Segments */}
                <div className="space-y-4 mb-4">
                  {(flight.segments || []).map((segment, segIndex) => {
                    const aircraft = getAircraft(segment.aircraft);
                    return (
                      <div key={segIndex}>
                        <div className="flex items-center gap-4">
                          {/* Departure */}
                          <div className="text-center">
                            <p className="text-xl font-bold text-white">
                              {segment.departure}
                            </p>
                            <p className="text-white/50 text-sm">{segment.from}</p>
                          </div>

                          {/* Flight Line */}
                          <div className="flex-1 relative">
                            <div className="flex items-center">
                              <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
                              <Plane className="h-4 w-4 text-white/50 mx-2" />
                              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
                            </div>
                            <div className="flex items-center justify-center mt-1">
                              <Clock className="h-3 w-3 text-white/40 mr-1" />
                              <span className="text-white/40 text-xs">
                                {segment.duration}
                              </span>
                            </div>
                          </div>

                          {/* Arrival */}
                          <div className="text-center">
                            <p className="text-xl font-bold text-white">
                              {segment.arrival}
                            </p>
                            <p className="text-white/50 text-sm">{segment.to}</p>
                          </div>
                        </div>

                        {/* Aircraft Info */}
                        {aircraft && (
                          <div className="flex items-center justify-center gap-2 mt-2">
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                aircraft.manufacturer === "Airbus"
                                  ? "border-blue-500/50 text-blue-400"
                                  : "border-green-500/50 text-green-400"
                              }`}
                            >
                              {aircraft.manufacturer === "Airbus" ? "A" : "B"}{" "}
                              {aircraft.name}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-xs border-white/20 text-white/60"
                            >
                              {aircraft.type}
                            </Badge>
                          </div>
                        )}

                        {/* Layover */}
                        {segIndex < (flight.segments?.length || 0) - 1 && flight.layover && (
                          <div className="flex justify-center my-3">
                            <div className="px-3 py-1 rounded-full bg-white/[0.06] text-white/50 text-xs">
                              {flight.layover} layover in {flight.layoverCity || "connecting city"}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Transfer Warning */}
                <div
                  className={`p-3 rounded-lg mb-4 ${
                    flight.selfTransfer
                      ? "bg-yellow-500/10 border border-yellow-500/30"
                      : "bg-green-500/10 border border-green-500/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {flight.selfTransfer ? (
                      <>
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">
                          SELF-TRANSFER{flight.layoverCity ? ` at ${flight.layoverCity}` : ""}
                        </span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 text-sm font-medium">
                          PROTECTED CONNECTION
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-white/50 text-xs mt-1">
                    {flight.selfTransfer
                      ? "Collect bags • Re-checkin • 2 tickets"
                      : "Single booking • Bags transferred"}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={
                    flight.partner === "kiwi"
                      ? buildKiwiLink(from, to, departDate, returnDate)
                      : buildSkyscannerLink(from, to, departDate, returnDate)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlowButton variant="secondary" className="w-full">
                    Search on{" "}
                    {flight.partner === "kiwi" ? "Kiwi.com" : "Skyscanner"}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </GlowButton>
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        )}

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/30 text-xs text-center mt-8"
        >
          Flight results are illustrative examples. Click through to partners for
          live prices and availability.
        </motion.p>
      </div>
    </div>
  );
}

export default function FlightsPage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Suspense
        fallback={
          <div className="pt-24 pb-20 px-4 text-center">
            <p className="text-white/50">Loading flights...</p>
          </div>
        }
      >
        <FlightResults />
      </Suspense>
      <Footer />
    </main>
  );
}
