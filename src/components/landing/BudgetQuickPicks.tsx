"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatINR } from "@/lib/utils/currency";

interface BudgetTier {
  budget: number;
  destinations: Array<{ name: string; slug: string; flag: string }>;
}

const budgetTiers: BudgetTier[] = [
  {
    budget: 30000,
    destinations: [
      { name: "Bangkok", slug: "bangkok", flag: "🇹🇭" },
      { name: "Colombo", slug: "colombo", flag: "🇱🇰" },
      { name: "Kuala Lumpur", slug: "kuala-lumpur", flag: "🇲🇾" },
    ],
  },
  {
    budget: 50000,
    destinations: [
      { name: "Bali", slug: "bali", flag: "🇮🇩" },
      { name: "Dubai", slug: "dubai", flag: "🇦🇪" },
      { name: "Phuket", slug: "phuket", flag: "🇹🇭" },
    ],
  },
  {
    budget: 75000,
    destinations: [
      { name: "Singapore", slug: "singapore", flag: "🇸🇬" },
      { name: "Maldives", slug: "maldives", flag: "🇲🇻" },
      { name: "Da Nang", slug: "da-nang", flag: "🇻🇳" },
    ],
  },
];

export function BudgetQuickPicks() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Quick Budget Picks
          </h2>
          <p className="text-white/50">
            See where your budget can take you from Mumbai
          </p>
        </motion.div>

        <div className="space-y-6">
          {budgetTiers.map((tier, index) => (
            <motion.div
              key={tier.budget}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <div className="flex-shrink-0 w-48">
                <Link
                  href={`/explore?budget=${tier.budget}&from=BOM`}
                  className="text-lg font-semibold text-white/80 hover:text-white transition-colors"
                >
                  Where can{" "}
                  <span className="gradient-text">{formatINR(tier.budget)}</span>{" "}
                  take you?
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {tier.destinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/explore/${dest.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] hover:border-purple-500/30 transition-all"
                  >
                    <span>{dest.flag}</span>
                    <span className="text-sm font-medium">{dest.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
