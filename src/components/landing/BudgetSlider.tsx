"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { GlowButton } from "@/components/shared/GlowButton";
import { DepartureCitySelect } from "./DepartureCitySelect";
import { formatCurrency } from "@/lib/utils/currency";
import { Sparkles } from "lucide-react";

export function BudgetSlider() {
  const router = useRouter();
  const [budget, setBudget] = useState([45000]);
  const [departureCity, setDepartureCity] = useState("BOM");

  const handleExplore = () => {
    router.push(`/explore?budget=${budget[0]}&from=${departureCity}`);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="space-y-6">
        {/* Departure City */}
        <div className="flex items-center gap-4">
          <label className="text-white/70 text-sm whitespace-nowrap">From:</label>
          <DepartureCitySelect
            value={departureCity}
            onChange={setDepartureCity}
            className="flex-1"
          />
        </div>

        {/* Budget Slider */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-white/70 text-sm">Budget:</label>
            <span className="text-2xl font-bold gradient-text">
              {formatCurrency(budget[0])}
            </span>
          </div>
          <div className="relative py-2">
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={20000}
              max={200000}
              step={5000}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-xs text-white/40">
              <span>{formatCurrency(20000)}</span>
              <span>{formatCurrency(200000)}</span>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <GlowButton onClick={handleExplore} className="w-full" size="lg">
          <Sparkles className="w-5 h-5 mr-2" />
          Explore Destinations
        </GlowButton>
      </div>
    </div>
  );
}
