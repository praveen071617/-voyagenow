"use client";

import { motion } from "framer-motion";
import { Ticket, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Destination } from "@/lib/utils/calculations";
import { formatCurrencyRange } from "@/lib/utils/currency";
import { buildKlookLink } from "@/lib/utils/affiliateLinks";

interface ActivitiesSectionProps {
  destination: Destination;
}

export function ActivitiesSection({ destination }: ActivitiesSectionProps) {
  // Estimate activities cost based on daily costs
  const activitiesLow = Math.round(destination.daily_cost_low * 0.3);
  const activitiesHigh = Math.round(destination.daily_cost_high * 0.5);

  // Use highlights or activities from destination
  const activities = destination.highlights || destination.activities || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <GlassCard hover={false} className="p-5">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-green-500/10">
              <Ticket className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Experiences & Activities
              </h3>
              <p className="text-white/50 text-sm">Popular things to do</p>
            </div>
          </div>
          <p className="text-lg font-bold gradient-text">
            {formatCurrencyRange(activitiesLow, activitiesHigh)}/day
          </p>
        </div>

        {/* Activities List */}
        {activities.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activities.slice(0, 8).map((activity, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/70 text-sm"
              >
                {activity}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <a
          href={buildKlookLink(destination.name)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlowButton variant="secondary" className="w-full">
            <Ticket className="h-4 w-4 mr-2" />
            Browse on Klook
            <ExternalLink className="h-4 w-4 ml-2" />
          </GlowButton>
        </a>
      </GlassCard>
    </motion.div>
  );
}
