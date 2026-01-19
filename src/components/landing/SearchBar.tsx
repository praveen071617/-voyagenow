"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchCities, SearchableCity } from "@/lib/data/cities";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchableCity[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useLocalStorage<SearchableCity[]>(
    "recent-searches",
    []
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      setIsLoading(true);
      const searchResults = searchCities(debouncedQuery);
      setResults(searchResults);
      setIsLoading(false);
      setSelectedIndex(-1);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  const handleSelect = (city: SearchableCity) => {
    // Add to recent searches
    const newRecent = [city, ...recentSearches.filter((c) => c.code !== city.code)].slice(0, 5);
    setRecentSearches(newRecent);

    setQuery("");
    setIsOpen(false);
    router.push(`/explore/${city.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const items = query.trim() ? results : recentSearches;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(items[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const showDropdown = isOpen && (results.length > 0 || (!query.trim() && recentSearches.length > 0));

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder="Search any city... (Da Nang, Bali, Dubai...)"
          className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/[0.06] border border-white/[0.1] text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.08] transition-all text-lg"
        />
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-[#12121A] border border-white/[0.1] overflow-hidden shadow-2xl z-50"
          >
            {/* Recent Searches */}
            {!query.trim() && recentSearches.length > 0 && (
              <div>
                <div className="px-4 py-2 text-xs text-white/40 uppercase tracking-wider">
                  Recent Searches
                </div>
                {recentSearches.map((city, index) => (
                  <button
                    key={city.code}
                    onClick={() => handleSelect(city)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/[0.06] transition-colors ${
                      selectedIndex === index ? "bg-white/[0.06]" : ""
                    }`}
                  >
                    <span className="text-2xl">{city.flag}</span>
                    <div>
                      <p className="text-white font-medium">{city.name}</p>
                      <p className="text-white/50 text-sm">{city.country}</p>
                    </div>
                    <span className="ml-auto text-white/30 text-sm">
                      {city.code}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Search Results */}
            {query.trim() && results.length > 0 && (
              <div>
                {results.map((city, index) => (
                  <button
                    key={city.code}
                    onClick={() => handleSelect(city)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/[0.06] transition-colors ${
                      selectedIndex === index ? "bg-white/[0.06]" : ""
                    }`}
                  >
                    <span className="text-2xl">{city.flag}</span>
                    <div>
                      <p className="text-white font-medium">{city.name}</p>
                      <p className="text-white/50 text-sm">{city.country}</p>
                    </div>
                    <span className="ml-auto text-white/30 text-sm">
                      {city.code}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* No Results */}
            {query.trim() && results.length === 0 && !isLoading && (
              <div className="px-4 py-8 text-center text-white/50">
                No destinations found for &quot;{query}&quot;
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
