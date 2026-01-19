"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plane, Sparkles } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { DepartureCitySelect } from "./DepartureCitySelect";
import { GlowButton } from "@/components/shared/GlowButton";

export function Hero() {
  const router = useRouter();
  const [departureCity, setDepartureCity] = useState("BOM");

  const handleExplore = () => {
    router.push(`/explore?from=${departureCity}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            From your city,{" "}
            <span className="gradient-text">explore the world</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            See where you can go and how much it costs. Flights, hotels, food, activities — all in one place.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <SearchBar />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 my-8 max-w-md mx-auto"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="text-white/40 text-sm">OR browse all destinations</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>

        {/* Departure + Explore */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Plane className="h-5 w-5 text-purple-400" />
              <span className="text-white/70">I&apos;m flying from</span>
            </div>
            <DepartureCitySelect
              value={departureCity}
              onChange={setDepartureCity}
              className="w-full"
            />
            <GlowButton onClick={handleExplore} className="w-full" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Show Me Destinations
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
