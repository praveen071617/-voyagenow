"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Skyscanner", description: "Flight search" },
  { name: "Booking.com", description: "Hotels" },
  { name: "Airalo", description: "eSIM" },
  { name: "Klook", description: "Activities" },
  { name: "Kiwi.com", description: "Multi-city flights" },
];

export function Partners() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/40 text-sm mb-6">
            Book with trusted partners
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <p className="text-lg font-semibold text-white/40 group-hover:text-white transition-colors">
                  {partner.name}
                </p>
                <p className="text-xs text-white/20">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
