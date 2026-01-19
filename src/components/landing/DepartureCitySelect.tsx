"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Loader2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchAirports, getAirportByCode, Airport, getDefaultAirports } from "@/lib/data/airports";
import { useDebounce } from "@/lib/hooks/useDebounce";

interface DepartureCitySelectProps {
  value: string;
  onChange: (code: string) => void;
  className?: string;
}

export function DepartureCitySelect({ value, onChange, className }: DepartureCitySelectProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Airport[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debouncedQuery = useDebounce(query, 200);

  const selectedAirport = getAirportByCode(value);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      setIsLoading(true);
      const searchResults = searchAirports(debouncedQuery);
      setResults(searchResults);
      setIsLoading(false);
      setSelectedIndex(-1);
    } else {
      // Show default airports when no query
      setResults(getDefaultAirports());
    }
  }, [debouncedQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (airport: Airport) => {
    onChange(airport.code);
    setQuery("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Selected Value / Input */}
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
      >
        {isOpen ? (
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search city or airport..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-white/[0.06] border border-white/[0.1] text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
              autoFocus
            />
            {isLoading && (
              <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 animate-spin" />
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between h-10 px-3 rounded-lg bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.08] transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-lg">{selectedAirport?.flag || "🌍"}</span>
              <span className="text-sm font-medium">
                {selectedAirport?.city || "Select city"}
              </span>
              <span className="text-xs text-white/40">
                ({selectedAirport?.code || "---"})
              </span>
            </div>
            <ChevronDown className="h-4 w-4 text-white/40" />
          </div>
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-[#12121A] border border-white/[0.1] overflow-hidden shadow-2xl z-50 max-h-64 overflow-y-auto"
          >
            {results.length > 0 ? (
              <div>
                {!query.trim() && (
                  <div className="px-3 py-2 text-xs text-white/40 uppercase tracking-wider border-b border-white/[0.06]">
                    Popular Airports
                  </div>
                )}
                {results.map((airport, index) => (
                  <button
                    key={airport.code}
                    onClick={() => handleSelect(airport)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-white/[0.06] transition-colors ${
                      selectedIndex === index ? "bg-white/[0.06]" : ""
                    } ${value === airport.code ? "bg-purple-500/10" : ""}`}
                  >
                    <span className="text-xl">{airport.flag}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">
                        {airport.city}
                      </p>
                      <p className="text-white/40 text-xs truncate">
                        {airport.name}
                      </p>
                    </div>
                    <span className="text-white/50 text-xs font-mono">
                      {airport.code}
                    </span>
                  </button>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="px-4 py-6 text-center text-white/50 text-sm">
                No airports found for &quot;{query}&quot;
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
