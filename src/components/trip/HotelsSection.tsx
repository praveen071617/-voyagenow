"use client";

import { motion } from "framer-motion";
import { Building, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Destination } from "@/lib/utils/calculations";
import { formatCurrency } from "@/lib/utils/currency";
import { buildBookingLink } from "@/lib/utils/affiliateLinks";
import { getDateString } from "@/lib/utils/calculations";

interface HotelsSectionProps {
  destination: Destination;
  days: number;
}

export function HotelsSection({ destination, days }: HotelsSectionProps) {
  const nights = days - 1;
  const checkin = getDateString(14);
  const checkout = getDateString(14 + days);

  const hotels = [
    {
      label: "Budget",
      desc: "Hostels, basic hotels",
      perNight: destination.hotel_budget,
      total: destination.hotel_budget * nights,
    },
    {
      label: "Mid-Range",
      desc: "3-4 star hotels",
      perNight: destination.hotel_mid,
      total: destination.hotel_mid * nights,
    },
    {
      label: "Luxury",
      desc: "5 star resorts",
      perNight: destination.hotel_luxury,
      total: destination.hotel_luxury * nights,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <GlassCard hover={false} className="p-5">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-cyan-500/10">
            <Building className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Accommodation ({nights} nights)
            </h3>
            <p className="text-white/50 text-sm">Estimated hotel costs</p>
          </div>
        </div>

        {/* Hotel Tiers */}
        <div className="space-y-3 mb-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.label}
              className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0"
            >
              <div>
                <p className="text-white font-medium">{hotel.label}</p>
                <p className="text-white/40 text-sm">{hotel.desc}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">{formatCurrency(hotel.total)}</p>
                <p className="text-white/40 text-xs">
                  {formatCurrency(hotel.perNight)}/night
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={buildBookingLink(
            `${destination.name}, ${destination.country}`,
            checkin,
            checkout
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlowButton variant="secondary" className="w-full">
            <Building className="h-4 w-4 mr-2" />
            Find Hotels on Booking.com
            <ExternalLink className="h-4 w-4 ml-2" />
          </GlowButton>
        </a>
      </GlassCard>
    </motion.div>
  );
}
