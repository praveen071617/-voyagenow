"use client";

import { motion } from "framer-motion";
import { Plane, Building, Coffee, Ticket, FileText, Smartphone } from "lucide-react";
import { TripCostBreakdown } from "@/lib/utils/calculations";
import { formatINR, formatINRRange } from "@/lib/utils/currency";
import { GlassCard } from "@/components/shared/GlassCard";

interface CostBreakdownProps {
  breakdown: TripCostBreakdown;
  days: number;
}

export function CostBreakdown({ breakdown, days }: CostBreakdownProps) {
  const nights = days - 1;

  const sections = [
    {
      icon: Plane,
      title: "Flights",
      subtitle: "Round trip estimate",
      cost: formatINRRange(breakdown.flights.low, breakdown.flights.high),
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Building,
      title: `Accommodation (${nights} nights)`,
      subtitle: "",
      cost: "",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      details: [
        {
          label: "Budget",
          desc: "Hostels, basic hotels",
          cost: formatINR(breakdown.hotels.budget.total),
        },
        {
          label: "Mid-Range",
          desc: "3-4 star hotels",
          cost: formatINR(breakdown.hotels.mid.total),
        },
        {
          label: "Luxury",
          desc: "5 star resorts",
          cost: formatINR(breakdown.hotels.luxury.total),
        },
      ],
    },
    {
      icon: Coffee,
      title: "Daily Expenses",
      subtitle: `Food, transport, misc (${days} days)`,
      cost: formatINRRange(breakdown.daily.totalLow, breakdown.daily.totalHigh),
      secondaryText: `${formatINRRange(breakdown.daily.low, breakdown.daily.high)}/day`,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Ticket,
      title: "Activities",
      subtitle: "Tours, attractions, experiences",
      cost: formatINRRange(breakdown.activities.low, breakdown.activities.high),
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
  ];

  if (breakdown.visa > 0) {
    sections.push({
      icon: FileText,
      title: "Visa",
      subtitle: "Processing fee",
      cost: formatINR(breakdown.visa),
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    });
  }

  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <GlassCard hover={false} className="p-5">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${section.bgColor}`}>
                <section.icon className={`h-6 w-6 ${section.color}`} />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <p className="text-white/50 text-sm">{section.subtitle}</p>
                    )}
                  </div>
                  {section.cost && (
                    <p className="text-xl font-bold gradient-text">{section.cost}</p>
                  )}
                </div>

                {section.secondaryText && (
                  <p className="text-white/40 text-sm mt-1">
                    {section.secondaryText}
                  </p>
                )}

                {section.details && (
                  <div className="mt-4 space-y-3">
                    {section.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex items-center justify-between py-2 border-t border-white/[0.06]"
                      >
                        <div>
                          <p className="text-white font-medium">{detail.label}</p>
                          <p className="text-white/40 text-sm">{detail.desc}</p>
                        </div>
                        <p className="text-white font-semibold">{detail.cost}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
