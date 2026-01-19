import Link from "next/link";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <div className="pt-24 pb-20 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-8xl mb-4">🌍</p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Destination Not Found
          </h1>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            We couldn&apos;t find the page you&apos;re looking for. Maybe it&apos;s a new
            destination we haven&apos;t added yet!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
