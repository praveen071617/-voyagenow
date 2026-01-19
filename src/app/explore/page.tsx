"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { DepartureCitySelect } from "@/components/landing/DepartureCitySelect";
import { formatCurrency } from "@/lib/utils/currency";
import { Loader2, ArrowUpDown, Filter } from "lucide-react";

interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  flag: string;
  airport_code: string;
  image_url: string;
  tagline: string;
  hotel_budget: number;
  hotel_mid: number;
  hotel_luxury: number;
  daily_cost_low: number;
  daily_cost_high: number;
  visa_required: boolean;
  visa_type: string;
  visa_cost: number;
  best_time: string;
  continent?: string;
}

// Estimated flight prices from Indian cities (will be replaced by Amadeus)
const flightEstimates: Record<string, Record<string, number>> = {
  // Southeast Asia
  BKK: { BOM: 12000, DEL: 14000, BLR: 13000, MAA: 11000, HYD: 13000 },
  SIN: { BOM: 14000, DEL: 16000, BLR: 12000, MAA: 10000, HYD: 14000 },
  KUL: { BOM: 13000, DEL: 15000, BLR: 11000, MAA: 9000, HYD: 13000 },
  DPS: { BOM: 18000, DEL: 20000, BLR: 16000, MAA: 15000, HYD: 18000 },
  SGN: { BOM: 15000, DEL: 17000, BLR: 14000, MAA: 13000, HYD: 15000 },
  HAN: { BOM: 16000, DEL: 18000, BLR: 15000, MAA: 14000, HYD: 16000 },
  MNL: { BOM: 18000, DEL: 20000, BLR: 17000, MAA: 16000, HYD: 18000 },
  PPS: { BOM: 20000, DEL: 22000, BLR: 19000, MAA: 18000, HYD: 20000 },
  // Middle East
  DXB: { BOM: 10000, DEL: 12000, BLR: 11000, MAA: 10000, HYD: 11000 },
  DOH: { BOM: 12000, DEL: 14000, BLR: 13000, MAA: 12000, HYD: 13000 },
  // East Asia
  HKG: { BOM: 20000, DEL: 22000, BLR: 21000, MAA: 20000, HYD: 21000 },
  NRT: { BOM: 35000, DEL: 38000, BLR: 36000, MAA: 35000, HYD: 36000 },
  ICN: { BOM: 30000, DEL: 32000, BLR: 31000, MAA: 30000, HYD: 31000 },
  // Europe
  LHR: { BOM: 35000, DEL: 32000, BLR: 38000, MAA: 38000, HYD: 38000 },
  CDG: { BOM: 38000, DEL: 35000, BLR: 40000, MAA: 40000, HYD: 40000 },
  // Default
  default: { BOM: 18000, DEL: 20000, BLR: 19000, MAA: 18000, HYD: 19000 },
};

function getFlightEstimate(airportCode: string, origin: string): number {
  const destFlights = flightEstimates[airportCode] || flightEstimates.default;
  return destFlights[origin] || destFlights.BOM || 18000;
}

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialFrom = searchParams.get("from") || "BOM";

  const [departureCity, setDepartureCity] = useState(initialFrom);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"price" | "name">("price");
  const [filterVisa, setFilterVisa] = useState<"all" | "free" | "required">("all");
  const days = 7;

  // Fetch all destinations
  useEffect(() => {
    async function fetchDestinations() {
      setLoading(true);
      try {
        const res = await fetch("/api/destinations");
        const data = await res.json();
        setDestinations(data.destinations || []);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
      setLoading(false);
    }
    fetchDestinations();
  }, []);

  // Calculate estimated cost for a destination
  const getEstimatedCost = (dest: Destination) => {
    const flightEstimate = getFlightEstimate(dest.airport_code, departureCity);
    const hotelCost = dest.hotel_budget * (days - 1);
    const dailyCost = dest.daily_cost_low * days;
    const visaCost = dest.visa_required ? dest.visa_cost : 0;
    return flightEstimate + hotelCost + dailyCost + visaCost;
  };

  // Filter and sort destinations
  const filteredDestinations = destinations
    .filter((dest) => {
      if (filterVisa === "free") return !dest.visa_required;
      if (filterVisa === "required") return dest.visa_required;
      return true;
    })
    .map((dest) => ({ ...dest, estimatedCost: getEstimatedCost(dest) }))
    .sort((a, b) => {
      if (sortBy === "price") return a.estimatedCost - b.estimatedCost;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Where will you go?
          </h1>
          <p className="text-white/50 text-lg">
            {destinations.length} destinations sorted by price from cheapest
          </p>
        </motion.div>

        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Departure City */}
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <span className="text-white/70 text-sm whitespace-nowrap">From:</span>
              <DepartureCitySelect
                value={departureCity}
                onChange={setDepartureCity}
                className="flex-1"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-white/50" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "price" | "name")}
                className="bg-white/[0.06] border border-white/[0.1] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500/50"
              >
                <option value="price">Cheapest First</option>
                <option value="name">A-Z</option>
              </select>
            </div>

            {/* Visa Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-white/50" />
              <select
                value={filterVisa}
                onChange={(e) => setFilterVisa(e.target.value as "all" | "free" | "required")}
                className="bg-white/[0.06] border border-white/[0.1] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500/50"
              >
                <option value="all">All Visas</option>
                <option value="free">Visa Free</option>
                <option value="required">Visa Required</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          {loading ? (
            <p className="text-white/50 flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading destinations...
            </p>
          ) : (
            <p className="text-white/50">
              Showing {filteredDestinations.length} destinations • {days} day trips
            </p>
          )}
        </motion.div>

        {/* Destinations Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
          </div>
        ) : filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.3) }}
              >
                <Link href={`/explore/${dest.slug}`}>
                  <GlassCard className="h-full group overflow-hidden">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={dest.image_url || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-3 left-3 text-2xl">{dest.flag}</div>
                      {!dest.visa_required && (
                        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-green-500/80 text-xs text-white font-medium">
                          Visa Free
                        </div>
                      )}
                      {/* Price Badge */}
                      <div className="absolute bottom-3 right-3">
                        <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm">
                          <p className="text-xs text-white/60">From</p>
                          <p className="text-lg font-bold text-white">
                            {formatCurrency(dest.estimatedCost)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {dest.name}
                      </h3>
                      <p className="text-white/50 text-sm mb-2">{dest.country}</p>
                      <p className="text-white/40 text-xs line-clamp-2">
                        {dest.tagline}
                      </p>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-5xl mb-4">🌍</p>
            <h3 className="text-xl font-semibold text-white mb-2">
              No destinations found
            </h3>
            <p className="text-white/50">
              Try changing your filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Suspense
        fallback={
          <div className="pt-24 pb-20 px-4 text-center">
            <div className="flex items-center justify-center gap-2 text-white/50">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading destinations...
            </div>
          </div>
        }
      >
        <ExploreContent />
      </Suspense>
      <Footer />
    </main>
  );
}
