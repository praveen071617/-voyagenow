"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
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
  best_time: string;
  hotel_budget: number;
  visa_required: boolean;
  visa_type: string;
}

export function TrendingDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch("/api/destinations");
        const data = await res.json();
        // Get first 12 popular destinations
        const popular = (data.destinations || [])
          .filter((d: Destination & { popular?: boolean }) => d.popular)
          .slice(0, 12);
        setDestinations(popular.length > 0 ? popular : (data.destinations || []).slice(0, 12));
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
      setLoading(false);
    }
    fetchDestinations();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Trending Destinations
            </h2>
            <p className="text-white/50 mt-1">
              Popular picks for Indian travelers
            </p>
          </motion.div>

          {/* Scroll Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Destinations Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-start"
              >
                <Link href={`/explore/${dest.slug}`}>
                  <GlassCard className="h-full group">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={dest.image_url || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-3 left-3 text-2xl">{dest.flag}</div>
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 text-xs text-white/80">
                        {dest.best_time?.split(" - ")[0] || "Year-round"}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {dest.name}
                          </h3>
                          <p className="text-white/50 text-sm">{dest.country}</p>
                        </div>
                      </div>
                      <p className="text-white/40 text-xs mb-3 line-clamp-1">
                        {dest.tagline}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-white/40">Hotels from</p>
                          <p className="text-lg font-semibold gradient-text">
                            {formatINR(dest.hotel_budget)}/night
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-white/40">Visa</p>
                          <p className="text-sm text-white/70">
                            {dest.visa_required ? dest.visa_type : "Free"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
