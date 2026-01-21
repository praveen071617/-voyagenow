"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";
import { Plane, Search, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Destination } from "@/lib/utils/calculations";
import { formatCurrencyRange } from "@/lib/utils/currency";
import { buildSkyscannerLink } from "@/lib/utils/affiliateLinks";
import { getDateString } from "@/lib/utils/calculations";

// Estimated flight costs (will be replaced by Amadeus API)
const estimatedFlights: Record<string, { low: number; high: number }> = {
  BOM: { low: 15000, high: 35000 },
  DEL: { low: 16000, high: 38000 },
  BLR: { low: 17000, high: 40000 },
  MAA: { low: 16000, high: 38000 },
  HYD: { low: 16500, high: 39000 },
  CCU: { low: 18000, high: 42000 },
  COK: { low: 17500, high: 40000 },
  AMD: { low: 16000, high: 37000 },
  PNQ: { low: 17000, high: 39000 },
  GOI: { low: 18000, high: 42000 },
};

interface FlightsSectionProps {
  destination: Destination;
  departureCity: string;
  days: number;
  departDate?: Date;
  returnDate?: Date;
  tripType?: "return" | "oneway";
}

export function FlightsSection({
  destination,
  departureCity,
  days,
  departDate: departDateProp,
  returnDate: returnDateProp,
  tripType = "return",
}: FlightsSectionProps) {
  const flightCost = estimatedFlights[departureCity] || estimatedFlights.BOM;
  const isOneWay = tripType === "oneway";

  // Use provided dates or fallback to auto-generated dates
  const departDate = departDateProp
    ? format(departDateProp, "yyyy-MM-dd")
    : getDateString(14);
  const returnDate = !isOneWay && returnDateProp
    ? format(returnDateProp, "yyyy-MM-dd")
    : !isOneWay ? getDateString(14 + days) : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <GlassCard hover={false} className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10">
              <Plane className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Flights</h3>
              <p className="text-white/50 text-sm">
                {isOneWay ? "One way" : "Round trip"} estimate
              </p>
            </div>
          </div>
          <p className="text-xl font-bold gradient-text">
            {formatCurrencyRange(flightCost.low, flightCost.high)}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/flights?from=${departureCity}&to=${destination.airport_code}&depart=${departDate}&return=${returnDate}`}
            className="flex-1"
          >
            <GlowButton variant="primary" className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Search Flights
            </GlowButton>
          </Link>

          <a
            href={buildSkyscannerLink(
              departureCity,
              destination.airport_code,
              departDate,
              returnDate
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <GlowButton variant="secondary" className="w-full">
              Skyscanner
              <ExternalLink className="h-4 w-4 ml-2" />
            </GlowButton>
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}
