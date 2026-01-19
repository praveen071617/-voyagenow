"use client";

import { motion } from "framer-motion";
import { Share2, Mail, Heart } from "lucide-react";
import { formatCurrencyRange } from "@/lib/utils/currency";
import { TripCostBreakdown } from "@/lib/utils/calculations";

interface TotalCostProps {
  breakdown: TripCostBreakdown;
  days: number;
  departureCity: string;
}

export function TotalCost({ breakdown, days, departureCity }: TotalCostProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "VoyageNow - Trip Estimate",
          text: `Check out this trip estimate from ${departureCity}!`,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="sticky bottom-4 z-10"
    >
      <div className="glass-card p-6 border border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Total */}
          <div>
            <p className="text-white/50 text-sm">
              Total Estimated Cost ({days} days from {departureCity})
            </p>
            <p className="text-3xl sm:text-4xl font-bold gradient-text">
              {formatCurrencyRange(breakdown.total.low, breakdown.total.high)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-colors"
              title="Share"
            >
              <Share2 className="h-5 w-5" />
            </button>
            <button
              className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </button>
            <button
              className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-colors"
              title="Save"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-white/30 text-xs mt-4">
          Prices are estimates based on historical data. Click through to partners
          for live prices.
        </p>
      </div>
    </motion.div>
  );
}
