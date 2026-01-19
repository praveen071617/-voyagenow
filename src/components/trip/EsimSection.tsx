"use client";

import { motion } from "framer-motion";
import { Smartphone, Star, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Destination } from "@/lib/utils/calculations";
import { formatCurrency } from "@/lib/utils/currency";

interface EsimSectionProps {
  destination: Destination;
}

export function EsimSection({ destination }: EsimSectionProps) {
  // Generate eSIM plans based on base price
  const basePrice = destination.esim_price || 500;
  const plans = [
    { data: "1GB", validity: "7 days", price: basePrice, recommended: false },
    { data: "3GB", validity: "15 days", price: Math.round(basePrice * 1.8), recommended: true },
    { data: "5GB", validity: "30 days", price: Math.round(basePrice * 2.5), recommended: false },
    { data: "10GB", validity: "30 days", price: Math.round(basePrice * 4), recommended: false },
  ];

  const airaloLink = `https://www.airalo.com/search?query=${encodeURIComponent(destination.country)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <GlassCard hover={false} className="p-5">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-pink-500/10">
            <Smartphone className="h-6 w-6 text-pink-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
            <p className="text-white/50 text-sm">
              eSIM plans for {destination.country}
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.data}
              className={`relative p-4 rounded-xl border ${
                plan.recommended
                  ? "border-purple-500/50 bg-purple-500/10"
                  : "border-white/[0.1] bg-white/[0.03]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500 text-white text-xs font-medium">
                  <Star className="h-3 w-3" />
                  BEST
                </div>
              )}
              <p className="text-xl font-bold text-white">{plan.data}</p>
              <p className="text-white/50 text-sm">{plan.validity}</p>
              <p className="text-lg font-semibold gradient-text mt-2">
                {formatCurrency(plan.price)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={airaloLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlowButton variant="secondary" className="w-full">
            <Smartphone className="h-4 w-4 mr-2" />
            Get eSIM on Airalo
            <ExternalLink className="h-4 w-4 ml-2" />
          </GlowButton>
        </a>

        <p className="text-white/30 text-xs text-center mt-3">
          Instant delivery - Scan QR to install
        </p>
      </GlassCard>
    </motion.div>
  );
}
