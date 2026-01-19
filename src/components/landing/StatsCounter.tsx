"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Plane, IndianRupee } from "lucide-react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Stat({ value, suffix, label, icon }: StatProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1]">
        {icon}
      </div>
      <div>
        <p className="text-2xl sm:text-3xl font-bold text-white">
          <AnimatedNumber value={value} suffix={suffix} />
        </p>
        <p className="text-white/50 text-sm">{label}</p>
      </div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Stat
              value={2400}
              suffix="+"
              label="Cities worldwide"
              icon={<Globe className="h-6 w-6 text-purple-400" />}
            />
            <Stat
              value={500}
              suffix="+"
              label="Airlines covered"
              icon={<Plane className="h-6 w-6 text-cyan-400" />}
            />
            <Stat
              value={100}
              suffix="%"
              label="Real-time costs"
              icon={<IndianRupee className="h-6 w-6 text-green-400" />}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
