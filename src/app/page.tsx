import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrendingDestinations } from "@/components/landing/TrendingDestinations";
import { StatsCounter } from "@/components/landing/StatsCounter";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturedTrips } from "@/components/landing/FeaturedTrips";
import { Partners } from "@/components/landing/Partners";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <StatsCounter />
      <TrendingDestinations />
      <HowItWorks />
      <FeaturedTrips />
      <Partners />
      <Footer />
    </main>
  );
}
