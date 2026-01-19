export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  countryCode: string;
  flag: string;
}

// Major airports worldwide for departure city selection
export const airports: Airport[] = [
  // India
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International", city: "Mumbai", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "DEL", name: "Indira Gandhi International", city: "Delhi", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "BLR", name: "Kempegowda International", city: "Bangalore", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "MAA", name: "Chennai International", city: "Chennai", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "CCU", name: "Netaji Subhas Chandra Bose International", city: "Kolkata", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "HYD", name: "Rajiv Gandhi International", city: "Hyderabad", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "COK", name: "Cochin International", city: "Kochi", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "AMD", name: "Sardar Vallabhbhai Patel International", city: "Ahmedabad", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "PNQ", name: "Pune Airport", city: "Pune", country: "India", countryCode: "IN", flag: "🇮🇳" },
  { code: "GOI", name: "Goa International", city: "Goa", country: "India", countryCode: "IN", flag: "🇮🇳" },

  // United States
  { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "ORD", name: "O'Hare International", city: "Chicago", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "MIA", name: "Miami International", city: "Miami", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "ATL", name: "Hartsfield-Jackson Atlanta International", city: "Atlanta", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "DFW", name: "Dallas/Fort Worth International", city: "Dallas", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "SEA", name: "Seattle-Tacoma International", city: "Seattle", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "BOS", name: "Boston Logan International", city: "Boston", country: "United States", countryCode: "US", flag: "🇺🇸" },
  { code: "EWR", name: "Newark Liberty International", city: "Newark", country: "United States", countryCode: "US", flag: "🇺🇸" },

  // United Kingdom
  { code: "LHR", name: "Heathrow Airport", city: "London", country: "United Kingdom", countryCode: "GB", flag: "🇬🇧" },
  { code: "LGW", name: "Gatwick Airport", city: "London", country: "United Kingdom", countryCode: "GB", flag: "🇬🇧" },
  { code: "MAN", name: "Manchester Airport", city: "Manchester", country: "United Kingdom", countryCode: "GB", flag: "🇬🇧" },
  { code: "EDI", name: "Edinburgh Airport", city: "Edinburgh", country: "United Kingdom", countryCode: "GB", flag: "🇬🇧" },
  { code: "BHX", name: "Birmingham Airport", city: "Birmingham", country: "United Kingdom", countryCode: "GB", flag: "🇬🇧" },

  // Europe
  { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France", countryCode: "FR", flag: "🇫🇷" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", countryCode: "DE", flag: "🇩🇪" },
  { code: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands", countryCode: "NL", flag: "🇳🇱" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas", city: "Madrid", country: "Spain", countryCode: "ES", flag: "🇪🇸" },
  { code: "BCN", name: "Barcelona–El Prat", city: "Barcelona", country: "Spain", countryCode: "ES", flag: "🇪🇸" },
  { code: "FCO", name: "Leonardo da Vinci–Fiumicino", city: "Rome", country: "Italy", countryCode: "IT", flag: "🇮🇹" },
  { code: "MXP", name: "Milan Malpensa", city: "Milan", country: "Italy", countryCode: "IT", flag: "🇮🇹" },
  { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany", countryCode: "DE", flag: "🇩🇪" },
  { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland", countryCode: "CH", flag: "🇨🇭" },
  { code: "VIE", name: "Vienna International", city: "Vienna", country: "Austria", countryCode: "AT", flag: "🇦🇹" },
  { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark", countryCode: "DK", flag: "🇩🇰" },
  { code: "OSL", name: "Oslo Gardermoen", city: "Oslo", country: "Norway", countryCode: "NO", flag: "🇳🇴" },
  { code: "ARN", name: "Stockholm Arlanda", city: "Stockholm", country: "Sweden", countryCode: "SE", flag: "🇸🇪" },
  { code: "HEL", name: "Helsinki-Vantaa", city: "Helsinki", country: "Finland", countryCode: "FI", flag: "🇫🇮" },
  { code: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland", countryCode: "IE", flag: "🇮🇪" },
  { code: "LIS", name: "Lisbon Portela", city: "Lisbon", country: "Portugal", countryCode: "PT", flag: "🇵🇹" },
  { code: "ATH", name: "Athens International", city: "Athens", country: "Greece", countryCode: "GR", flag: "🇬🇷" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey", countryCode: "TR", flag: "🇹🇷" },

  // Middle East
  { code: "DXB", name: "Dubai International", city: "Dubai", country: "UAE", countryCode: "AE", flag: "🇦🇪" },
  { code: "AUH", name: "Abu Dhabi International", city: "Abu Dhabi", country: "UAE", countryCode: "AE", flag: "🇦🇪" },
  { code: "DOH", name: "Hamad International", city: "Doha", country: "Qatar", countryCode: "QA", flag: "🇶🇦" },
  { code: "RUH", name: "King Khalid International", city: "Riyadh", country: "Saudi Arabia", countryCode: "SA", flag: "🇸🇦" },
  { code: "JED", name: "King Abdulaziz International", city: "Jeddah", country: "Saudi Arabia", countryCode: "SA", flag: "🇸🇦" },
  { code: "KWI", name: "Kuwait International", city: "Kuwait City", country: "Kuwait", countryCode: "KW", flag: "🇰🇼" },
  { code: "BAH", name: "Bahrain International", city: "Manama", country: "Bahrain", countryCode: "BH", flag: "🇧🇭" },
  { code: "MCT", name: "Muscat International", city: "Muscat", country: "Oman", countryCode: "OM", flag: "🇴🇲" },

  // Asia Pacific
  { code: "SIN", name: "Singapore Changi", city: "Singapore", country: "Singapore", countryCode: "SG", flag: "🇸🇬" },
  { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "Hong Kong", countryCode: "HK", flag: "🇭🇰" },
  { code: "NRT", name: "Narita International", city: "Tokyo", country: "Japan", countryCode: "JP", flag: "🇯🇵" },
  { code: "HND", name: "Haneda Airport", city: "Tokyo", country: "Japan", countryCode: "JP", flag: "🇯🇵" },
  { code: "ICN", name: "Incheon International", city: "Seoul", country: "South Korea", countryCode: "KR", flag: "🇰🇷" },
  { code: "PEK", name: "Beijing Capital International", city: "Beijing", country: "China", countryCode: "CN", flag: "🇨🇳" },
  { code: "PVG", name: "Shanghai Pudong International", city: "Shanghai", country: "China", countryCode: "CN", flag: "🇨🇳" },
  { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand", countryCode: "TH", flag: "🇹🇭" },
  { code: "KUL", name: "Kuala Lumpur International", city: "Kuala Lumpur", country: "Malaysia", countryCode: "MY", flag: "🇲🇾" },
  { code: "CGK", name: "Soekarno-Hatta International", city: "Jakarta", country: "Indonesia", countryCode: "ID", flag: "🇮🇩" },
  { code: "MNL", name: "Ninoy Aquino International", city: "Manila", country: "Philippines", countryCode: "PH", flag: "🇵🇭" },
  { code: "SGN", name: "Tan Son Nhat International", city: "Ho Chi Minh City", country: "Vietnam", countryCode: "VN", flag: "🇻🇳" },
  { code: "HAN", name: "Noi Bai International", city: "Hanoi", country: "Vietnam", countryCode: "VN", flag: "🇻🇳" },

  // Australia & New Zealand
  { code: "SYD", name: "Sydney Kingsford Smith", city: "Sydney", country: "Australia", countryCode: "AU", flag: "🇦🇺" },
  { code: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia", countryCode: "AU", flag: "🇦🇺" },
  { code: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia", countryCode: "AU", flag: "🇦🇺" },
  { code: "PER", name: "Perth Airport", city: "Perth", country: "Australia", countryCode: "AU", flag: "🇦🇺" },
  { code: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand", countryCode: "NZ", flag: "🇳🇿" },

  // South America
  { code: "GRU", name: "São Paulo–Guarulhos International", city: "São Paulo", country: "Brazil", countryCode: "BR", flag: "🇧🇷" },
  { code: "EZE", name: "Ministro Pistarini International", city: "Buenos Aires", country: "Argentina", countryCode: "AR", flag: "🇦🇷" },
  { code: "SCL", name: "Santiago International", city: "Santiago", country: "Chile", countryCode: "CL", flag: "🇨🇱" },
  { code: "BOG", name: "El Dorado International", city: "Bogotá", country: "Colombia", countryCode: "CO", flag: "🇨🇴" },
  { code: "LIM", name: "Jorge Chávez International", city: "Lima", country: "Peru", countryCode: "PE", flag: "🇵🇪" },

  // Africa
  { code: "JNB", name: "O.R. Tambo International", city: "Johannesburg", country: "South Africa", countryCode: "ZA", flag: "🇿🇦" },
  { code: "CPT", name: "Cape Town International", city: "Cape Town", country: "South Africa", countryCode: "ZA", flag: "🇿🇦" },
  { code: "CAI", name: "Cairo International", city: "Cairo", country: "Egypt", countryCode: "EG", flag: "🇪🇬" },
  { code: "NBO", name: "Jomo Kenyatta International", city: "Nairobi", country: "Kenya", countryCode: "KE", flag: "🇰🇪" },
  { code: "ADD", name: "Addis Ababa Bole International", city: "Addis Ababa", country: "Ethiopia", countryCode: "ET", flag: "🇪🇹" },
  { code: "CMN", name: "Mohammed V International", city: "Casablanca", country: "Morocco", countryCode: "MA", flag: "🇲🇦" },

  // Canada
  { code: "YYZ", name: "Toronto Pearson International", city: "Toronto", country: "Canada", countryCode: "CA", flag: "🇨🇦" },
  { code: "YVR", name: "Vancouver International", city: "Vancouver", country: "Canada", countryCode: "CA", flag: "🇨🇦" },
  { code: "YUL", name: "Montréal–Trudeau International", city: "Montreal", country: "Canada", countryCode: "CA", flag: "🇨🇦" },
  { code: "YYC", name: "Calgary International", city: "Calgary", country: "Canada", countryCode: "CA", flag: "🇨🇦" },

  // Mexico & Caribbean
  { code: "MEX", name: "Mexico City International", city: "Mexico City", country: "Mexico", countryCode: "MX", flag: "🇲🇽" },
  { code: "CUN", name: "Cancún International", city: "Cancún", country: "Mexico", countryCode: "MX", flag: "🇲🇽" },

  // South Asia
  { code: "CMB", name: "Bandaranaike International", city: "Colombo", country: "Sri Lanka", countryCode: "LK", flag: "🇱🇰" },
  { code: "KTM", name: "Tribhuvan International", city: "Kathmandu", country: "Nepal", countryCode: "NP", flag: "🇳🇵" },
  { code: "DAC", name: "Hazrat Shahjalal International", city: "Dhaka", country: "Bangladesh", countryCode: "BD", flag: "🇧🇩" },
  { code: "KHI", name: "Jinnah International", city: "Karachi", country: "Pakistan", countryCode: "PK", flag: "🇵🇰" },
  { code: "ISB", name: "Islamabad International", city: "Islamabad", country: "Pakistan", countryCode: "PK", flag: "🇵🇰" },
  { code: "MLE", name: "Velana International", city: "Malé", country: "Maldives", countryCode: "MV", flag: "🇲🇻" },
];

export const searchAirports = (query: string): Airport[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  return airports
    .filter(
      (airport) =>
        airport.city.toLowerCase().includes(normalizedQuery) ||
        airport.country.toLowerCase().includes(normalizedQuery) ||
        airport.code.toLowerCase().includes(normalizedQuery) ||
        airport.name.toLowerCase().includes(normalizedQuery)
    )
    .slice(0, 8);
};

export const getAirportByCode = (code: string): Airport | undefined => {
  return airports.find((airport) => airport.code === code);
};

// Get default airports for different regions
export const getDefaultAirports = (countryCode?: string): Airport[] => {
  if (countryCode === "IN") {
    return airports.filter((a) => a.countryCode === "IN").slice(0, 3);
  }
  if (countryCode === "US") {
    return airports.filter((a) => a.countryCode === "US").slice(0, 3);
  }
  if (countryCode === "GB") {
    return airports.filter((a) => a.countryCode === "GB").slice(0, 3);
  }
  // Default to major hubs
  return airports.filter((a) => ["BOM", "DEL", "DXB", "SIN", "LHR"].includes(a.code));
};
