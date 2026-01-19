"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, ExternalLink } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search destination or set budget",
    description:
      "Type any city name or use the budget slider to find destinations that fit your wallet.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "See real cost breakdown",
    description:
      "Get detailed estimates for flights, hotels, daily expenses, visa, and eSIM costs.",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    icon: ExternalLink,
    title: "Book directly with partners",
    description:
      "Click through to Skyscanner, Booking.com, or Airalo to complete your booking.",
    color: "from-cyan-500 to-green-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Plan your trip in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-30`}
                  />
                  <div
                    className={`relative p-4 rounded-2xl bg-gradient-to-r ${step.color}`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0A0A0F] border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
