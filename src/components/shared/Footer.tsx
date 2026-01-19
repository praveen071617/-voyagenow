"use client";

import Link from "next/link";
import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#0A0A0F]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VoyageNow</span>
            </Link>
            <p className="text-white/50 text-sm max-w-md">
              Your journey starts here. Explore destinations worldwide and see
              complete trip cost breakdowns including flights, hotels, food, and
              activities.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/explore?budget=30000"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Budget Trips
                </Link>
              </li>
              <li>
                <Link
                  href="/explore/bangkok"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Bangkok
                </Link>
              </li>
              <li>
                <Link
                  href="/explore/bali"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Bali
                </Link>
              </li>
              <li>
                <Link
                  href="/explore/dubai"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Dubai
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <p className="text-white/30 text-xs text-center mb-4">
            Book with trusted partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <span className="text-white/50 text-sm font-medium">Skyscanner</span>
            <span className="text-white/50 text-sm font-medium">Booking.com</span>
            <span className="text-white/50 text-sm font-medium">Airalo</span>
            <span className="text-white/50 text-sm font-medium">Klook</span>
            <span className="text-white/50 text-sm font-medium">Kiwi.com</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/[0.08]">
          <p className="text-white/30 text-xs text-center max-w-3xl mx-auto">
            VoyageNow helps you estimate trip costs. We don&apos;t sell flights,
            hotels, or travel services. All bookings are made directly with our
            partners (Skyscanner, Booking.com, Airalo, etc.) and are subject to
            their terms and conditions. Prices shown are estimates based on
            historical data and may vary. Always check live prices before booking.
          </p>
          <p className="text-white/20 text-xs text-center mt-4">
            &copy; {new Date().getFullYear()} VoyageNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
