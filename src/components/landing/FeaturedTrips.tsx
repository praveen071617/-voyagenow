"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { formatINR } from "@/lib/utils/currency";

interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  flag: string;
  image_url: string;
  tagline: string;
  hotel_budget: number;
  daily_cost_low: number;
  featured?: boolean;
}

const highlights = [
  "Beach Paradise",
  "City & Culture",
  "Luxury Shopping",
  "Modern Marvel",
  "Nature Escape",
  "Adventure Hub",
  "Historic Charm",
  "Island Getaway",
];

export function FeaturedTrips() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch("/api/destinations");
        const data = await res.json();
        // Get featured destinations or first 4
        const featured = (data.destinations || [])
          .filter((d: Destination) => d.featured)
          .slice(0, 4);
        setDestinations(featured.length >= 4 ? featured : (data.destinations || []).slice(0, 4));
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
      setLoading(false);
    }
    fetchDestinations();
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Trips
          </h2>
          <p className="text-white/50 text-lg">
            Popular routes with estimated costs
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((dest, index) => {
              const estimatedPrice = dest.hotel_budget * 6 + dest.daily_cost_low * 7 + 15000; // rough estimate

              return (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/explore/${dest.slug}`}>
                    <GlassCard className="h-full group overflow-hidden">
                      {/* Image */}
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={dest.image_url || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"}
                          alt={dest.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-3 left-3 text-xl">{dest.flag}</div>
                        <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-purple-500/80 text-white">
                          {highlights[index % highlights.length]}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-white font-medium">Mumbai</span>
                          <ArrowRight className="h-4 w-4 text-white/40" />
                          <span className="text-white font-medium">{dest.name}</span>
                        </div>

                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xs text-white/40">From</p>
                            <p className="text-xl font-bold gradient-text">
                              {formatINR(estimatedPrice)}
                            </p>
                          </div>
                          <p className="text-sm text-white/50">7 days</p>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
