"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-white/[0.03] backdrop-blur-xl",
        "border border-white/[0.08]",
        hover && "cursor-pointer",
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              borderColor: "rgba(139, 92, 246, 0.3)",
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.1)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
