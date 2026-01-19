"use client";

import Link from "next/link";
import { Plane } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.06]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
                <Plane className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">VoyageNow</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/explore"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Explore
            </Link>
            <Link
              href="#how-it-works"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              How it Works
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/explore"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.08] border border-white/[0.12] text-white text-sm font-medium hover:bg-white/[0.12] transition-colors"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
