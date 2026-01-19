"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function GlowButton({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]",
    secondary:
      "bg-white/[0.08] text-white border border-white/[0.12] hover:bg-white/[0.12] hover:border-purple-500/30",
    outline:
      "bg-transparent text-white border border-white/[0.2] hover:border-purple-500/50 hover:bg-white/[0.05]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={!disabled ? { y: -2 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.button>
  );
}
