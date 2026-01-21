"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { addDays } from "date-fns";
import { Slider } from "@/components/ui/slider";
import { DatePicker } from "@/components/ui/date-picker";
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
  const [tripType, setTripType] = useState<"return" | "oneway">("return");
  const [days, setDays] = useState([7]);
  const [departDate, setDepartDate] = useState<Date | undefined>(addDays(new Date(), 14));
  const [returnDate, setReturnDate] = useState<Date | undefined>(addDays(new Date(), 21));
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Update return date when depart date or days change
  useEffect(() => {
    if (departDate && tripType === "return") {
      setReturnDate(addDays(departDate, days[0]));
    }
  }, [departDate, days, tripType]);

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
          <div className="glass-card p-5 mb-8">
            {/* Trip Type Toggle */}
            <div className="flex items-center gap-2 mb-5">
              <button
                onClick={() => setTripType("return")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  tripType === "return"
                    ? "bg-purple-500 text-white"
                    : "bg-white/[0.06] text-white/70 hover:bg-white/[0.1]"
                }`}
              >
                Round Trip
              </button>
              <button
                onClick={() => setTripType("oneway")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  tripType === "oneway"
                    ? "bg-purple-500 text-white"
                    : "bg-white/[0.06] text-white/70 hover:bg-white/[0.1]"
                }`}
              >
                One Way
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Departure City */}
              <div>
                <label className="text-white/70 text-sm mb-2 block">From</label>
                <DepartureCitySelect
                  value={departureCity}
                  onChange={setDepartureCity}
                  className="w-full"
                />
              </div>

              {/* Departure Date */}
              <div>
                <label className="text-white/70 text-sm mb-2 block">Departure</label>
                <DatePicker
                  date={departDate}
                  onDateChange={setDepartDate}
                  placeholder="Select date"
                  minDate={new Date()}
                />
              </div>

              {/* Return Date - only show for round trip */}
              {tripType === "return" && (
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Return</label>
                  <DatePicker
                    date={returnDate}
                    onDateChange={setReturnDate}
                    placeholder="Select date"
                    minDate={departDate || new Date()}
                  />
                </div>
              )}

              {/* Duration */}
              <div>
                <label className="text-white/70 text-sm mb-2 block">
                  Trip Duration: {days[0]} days
                </label>
                <Slider
                  value={days}
                  onValueChange={setDays}
                  min={3}
                  max={14}
                  step={1}
                  className="mt-3"
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
              departDate={departDate}
              returnDate={tripType === "return" ? returnDate : undefined}
              tripType={tripType}
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
