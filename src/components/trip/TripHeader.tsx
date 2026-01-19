"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Coins, Globe, Clock } from "lucide-react";
import { Destination } from "@/lib/utils/calculations";

interface TripHeaderProps {
  destination: Destination;
}

export function TripHeader({ destination }: TripHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      {/* Hero Image */}
      <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden mb-6">
        <Image
          src={destination.image_url || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 896px) 100vw, 896px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl">{destination.flag}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                {destination.name}, {destination.country}
              </h1>
              <p className="text-white/80 text-sm sm:text-base drop-shadow">
                {destination.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1]">
          <Calendar className="h-4 w-4 text-purple-400" />
          <span className="text-white/70 text-sm">
            Best: {destination.best_time || "Year-round"}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1]">
          <Coins className="h-4 w-4 text-cyan-400" />
          <span className="text-white/70 text-sm">
            {destination.currency || "Local Currency"}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1]">
          <Globe className="h-4 w-4 text-green-400" />
          <span className="text-white/70 text-sm">
            Visa: {destination.visa_required ? destination.visa_type : "Free"}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1]">
          <Clock className="h-4 w-4 text-orange-400" />
          <span className="text-white/70 text-sm">{destination.timezone || "Local Time"}</span>
        </div>
      </div>
    </motion.div>
  );
}
