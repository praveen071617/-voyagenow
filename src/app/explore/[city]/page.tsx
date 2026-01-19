"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { DepartureCitySelect } from "@/components/landing/DepartureCitySelect";
import { TripHeader } from "@/components/trip/TripHeader";
import { FlightsSection } from "@/components/trip/FlightsSection";
import { HotelsSection } from "@/components/trip/HotelsSection";
import { EsimSection } from "@/components/trip/EsimSection";
import { ActivitiesSection } from "@/components/trip/ActivitiesSection";
import { VisaSection } from "@/components/trip/VisaSection";
import { TotalCost } from "@/components/trip/TotalCost";
import { getAirportByCode } from "@/lib/data/airports";
import { calculateTripCost, Destination } from "@/lib/utils/calculations";
import { Loader2 } from "lucide-react";

export default function CityPage() {
  const params = useParams();
  const citySlug = params.city as string;

  const [departureCity, setDepartureCity] = useState("BOM");
  const [days, setDays] = useState([7]);
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchDestination() {
      try {
        const res = await fetch(`/api/destinations/${citySlug}`);
        if (!res.ok) {
          setNotFound(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        if (data.destination) {
          setDestination(data.destination);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching destination:", error);
        setNotFound(true);
      }
      setLoading(false);
    }
    fetchDestination();
  }, [citySlug]);

  if (loading) {
    return (
      <main className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <div className="pt-24 pb-20 px-4 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
        </div>
        <Footer />
      </main>
    );
  }

  if (notFound || !destination) {
    return (
      <main className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <div className="pt-24 pb-20 px-4 text-center">
          <p className="text-5xl mb-4">🌍</p>
          <h2 className="text-xl font-semibold text-white mb-2">Destination not found</h2>
          <p className="text-white/60">
            Sorry, we couldn&apos;t find information for this destination.
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  const breakdown = calculateTripCost(destination, departureCity, days[0]);
  const departureAirport = getAirportByCode(departureCity);
  const departureCityName = departureAirport?.city || "Mumbai";

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <div className="pt-24 pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <TripHeader destination={destination} />

          {/* Trip Config */}
          <div className="glass-card p-4 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <label className="text-white/70 text-sm whitespace-nowrap">
                  From:
                </label>
                <DepartureCitySelect
                  value={departureCity}
                  onChange={setDepartureCity}
                  className="flex-1 min-w-[200px]"
                />
              </div>

              <div className="flex items-center gap-4 flex-1">
                <label className="text-white/70 text-sm whitespace-nowrap">
                  Duration: {days[0]} days
                </label>
                <Slider
                  value={days}
                  onValueChange={setDays}
                  min={3}
                  max={14}
                  step={1}
                  className="w-32 sm:w-40"
                />
              </div>
            </div>
          </div>

          {/* Cost Sections */}
          <div className="space-y-4">
            <FlightsSection
              destination={destination}
              departureCity={departureCity}
              days={days[0]}
            />
            <HotelsSection destination={destination} days={days[0]} />
            <EsimSection destination={destination} />
            <ActivitiesSection destination={destination} />
            <VisaSection destination={destination} />
          </div>

          {/* Total Cost */}
          <div className="mt-8">
            <TotalCost
              breakdown={breakdown}
              days={days[0]}
              departureCity={departureCityName}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
