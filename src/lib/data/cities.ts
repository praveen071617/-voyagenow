export interface DepartureCity {
  code: string;
  name: string;
  country: string;
  airport: string;
}

export const departureCities: DepartureCity[] = [
  {
    code: "BOM",
    name: "Mumbai",
    country: "India",
    airport: "Chhatrapati Shivaji Maharaj International",
  },
  {
    code: "DEL",
    name: "Delhi",
    country: "India",
    airport: "Indira Gandhi International",
  },
  {
    code: "BLR",
    name: "Bangalore",
    country: "India",
    airport: "Kempegowda International",
  },
];

export interface SearchableCity {
  name: string;
  country: string;
  code: string;
  flag: string;
  slug: string;
}

export const searchableCities: SearchableCity[] = [
  // Thailand
  { name: "Bangkok", country: "Thailand", code: "BKK", flag: "🇹🇭", slug: "bangkok" },
  { name: "Phuket", country: "Thailand", code: "HKT", flag: "🇹🇭", slug: "phuket" },
  { name: "Chiang Mai", country: "Thailand", code: "CNX", flag: "🇹🇭", slug: "chiang-mai" },
  { name: "Krabi", country: "Thailand", code: "KBV", flag: "🇹🇭", slug: "krabi" },

  // Vietnam
  { name: "Ho Chi Minh City", country: "Vietnam", code: "SGN", flag: "🇻🇳", slug: "ho-chi-minh" },
  { name: "Hanoi", country: "Vietnam", code: "HAN", flag: "🇻🇳", slug: "hanoi" },
  { name: "Da Nang", country: "Vietnam", code: "DAD", flag: "🇻🇳", slug: "da-nang" },
  { name: "Phu Quoc", country: "Vietnam", code: "PQC", flag: "🇻🇳", slug: "phu-quoc" },

  // Indonesia
  { name: "Bali", country: "Indonesia", code: "DPS", flag: "🇮🇩", slug: "bali" },
  { name: "Jakarta", country: "Indonesia", code: "CGK", flag: "🇮🇩", slug: "jakarta" },

  // Malaysia
  { name: "Kuala Lumpur", country: "Malaysia", code: "KUL", flag: "🇲🇾", slug: "kuala-lumpur" },
  { name: "Langkawi", country: "Malaysia", code: "LGK", flag: "🇲🇾", slug: "langkawi" },
  { name: "Penang", country: "Malaysia", code: "PEN", flag: "🇲🇾", slug: "penang" },

  // Others
  { name: "Singapore", country: "Singapore", code: "SIN", flag: "🇸🇬", slug: "singapore" },
  { name: "Dubai", country: "UAE", code: "DXB", flag: "🇦🇪", slug: "dubai" },
  { name: "Colombo", country: "Sri Lanka", code: "CMB", flag: "🇱🇰", slug: "colombo" },
  { name: "Tbilisi", country: "Georgia", code: "TBS", flag: "🇬🇪", slug: "tbilisi" },
  { name: "Maldives", country: "Maldives", code: "MLE", flag: "🇲🇻", slug: "maldives" },
  { name: "Kathmandu", country: "Nepal", code: "KTM", flag: "🇳🇵", slug: "kathmandu" },
  { name: "Hong Kong", country: "Hong Kong", code: "HKG", flag: "🇭🇰", slug: "hong-kong" },
  { name: "Tokyo", country: "Japan", code: "NRT", flag: "🇯🇵", slug: "tokyo" },
  { name: "Seoul", country: "South Korea", code: "ICN", flag: "🇰🇷", slug: "seoul" },
  { name: "Barcelona", country: "Spain", code: "BCN", flag: "🇪🇸", slug: "barcelona" },
  { name: "Paris", country: "France", code: "CDG", flag: "🇫🇷", slug: "paris" },
  { name: "London", country: "UK", code: "LHR", flag: "🇬🇧", slug: "london" },
];

export const searchCities = (query: string): SearchableCity[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  return searchableCities
    .filter(
      (city) =>
        city.name.toLowerCase().includes(normalizedQuery) ||
        city.country.toLowerCase().includes(normalizedQuery) ||
        city.code.toLowerCase().includes(normalizedQuery)
    )
    .slice(0, 8);
};

export const getCityBySlug = (slug: string): SearchableCity | undefined => {
  return searchableCities.find((city) => city.slug === slug);
};
