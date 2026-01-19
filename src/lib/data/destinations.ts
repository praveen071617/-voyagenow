export interface Destination {
  id: string;
  slug?: string;
  name: string;
  country: string;
  countryCode: string;
  region?: string;
  flag: string;
  airportCode: string;
  image: string;
  tagline: string;
  popular?: boolean;

  costs: {
    flights: Record<string, { low: number; high: number }>;
    hotels: {
      budget: number;
      mid: number;
      luxury: number;
    };
    daily: { low: number; high: number };
    activities: { low: number; high: number };
  };

  visa: {
    required: boolean;
    type: string;
    cost: number;
    duration: string;
    notes: string;
  };

  esim: {
    provider: string;
    plans: Array<{
      data: string;
      validity: string;
      price: number;
      recommended?: boolean;
    }>;
    affiliateLink: string;
  };

  info: {
    bestTime: string;
    currency: string;
    currencyCode: string;
    language: string;
    timezone: string;
  };

  activities: Array<{
    name: string;
    price: number;
    duration: string;
    affiliateLink: string;
  }>;
}

export const destinations: Record<string, Destination> = {
  // Vietnam
  "hoi-an": {
    id: "hoi-an",
    slug: "hoi-an",
    name: "Hoi An",
    country: "Vietnam",
    countryCode: "VN",
    region: "Southeast Asia",
    flag: "🇻🇳",
    airportCode: "DAD",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    tagline: "Ancient town of lanterns and tailor shops",
    popular: true,

    costs: {
      flights: {
        BOM: { low: 14000, high: 22000 },
        DEL: { low: 12000, high: 20000 },
        BLR: { low: 15000, high: 24000 },
        MAA: { low: 13000, high: 21000 },
        HYD: { low: 14000, high: 22000 },
        CCU: { low: 12000, high: 20000 },
        COK: { low: 15000, high: 23000 },
      },
      hotels: {
        budget: 800,
        mid: 1800,
        luxury: 4500,
      },
      daily: { low: 1200, high: 2500 },
      activities: { low: 2000, high: 6000 },
    },

    visa: {
      required: false,
      type: "Free on arrival",
      cost: 0,
      duration: "45 days",
      notes: "Indian passport holders get 45 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 450 },
        { data: "3GB", validity: "30 days", price: 750 },
        { data: "5GB", validity: "30 days", price: 1100, recommended: true },
        { data: "10GB", validity: "30 days", price: 1600 },
      ],
      affiliateLink: "https://www.airalo.com/vietnam-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "February - April",
      currency: "Vietnamese Dong",
      currencyCode: "VND",
      language: "Vietnamese",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Ancient Town Walking Tour", price: 500, duration: "3 hours", affiliateLink: "" },
      { name: "Lantern Making Class", price: 600, duration: "2 hours", affiliateLink: "" },
      { name: "Cooking Class", price: 800, duration: "4 hours", affiliateLink: "" },
      { name: "Basket Boat Ride", price: 400, duration: "1 hour", affiliateLink: "" },
    ],
  },

  "da-nang": {
    id: "da-nang",
    name: "Da Nang",
    country: "Vietnam",
    countryCode: "VN",
    flag: "🇻🇳",
    airportCode: "DAD",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    tagline: "The coastal gem of Central Vietnam",

    costs: {
      flights: {
        BOM: { low: 14000, high: 22000 },
        DEL: { low: 12000, high: 20000 },
        BLR: { low: 15000, high: 24000 },
        MAA: { low: 13000, high: 21000 },
        HYD: { low: 14000, high: 22000 },
        CCU: { low: 12000, high: 20000 },
        COK: { low: 15000, high: 23000 },
      },
      hotels: {
        budget: 1000,
        mid: 2000,
        luxury: 5000,
      },
      daily: { low: 1500, high: 3000 },
      activities: { low: 3000, high: 8000 },
    },

    visa: {
      required: false,
      type: "Free on arrival",
      cost: 0,
      duration: "45 days",
      notes: "Indian passport holders get 45 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 450 },
        { data: "3GB", validity: "30 days", price: 750 },
        { data: "5GB", validity: "30 days", price: 1100, recommended: true },
        { data: "10GB", validity: "30 days", price: 1600 },
      ],
      affiliateLink: "https://www.airalo.com/vietnam-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "February - May",
      currency: "Vietnamese Dong",
      currencyCode: "VND",
      language: "Vietnamese",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Marble Mountains Tour", price: 800, duration: "3 hours", affiliateLink: "" },
      { name: "Ba Na Hills Day Trip", price: 2500, duration: "Full day", affiliateLink: "" },
      { name: "Hoi An Ancient Town", price: 600, duration: "Half day", affiliateLink: "" },
      { name: "My Khe Beach Activities", price: 500, duration: "Flexible", affiliateLink: "" },
    ],
  },

  hanoi: {
    id: "hanoi",
    name: "Hanoi",
    country: "Vietnam",
    countryCode: "VN",
    flag: "🇻🇳",
    airportCode: "HAN",
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=800&q=80",
    tagline: "Where tradition meets chaos",

    costs: {
      flights: {
        BOM: { low: 13000, high: 21000 },
        DEL: { low: 11000, high: 18000 },
        BLR: { low: 14000, high: 22000 },
        MAA: { low: 12000, high: 20000 },
        HYD: { low: 13000, high: 21000 },
        CCU: { low: 10000, high: 17000 },
        COK: { low: 14000, high: 22000 },
      },
      hotels: {
        budget: 700,
        mid: 1500,
        luxury: 4000,
      },
      daily: { low: 1000, high: 2500 },
      activities: { low: 2000, high: 6000 },
    },

    visa: {
      required: false,
      type: "Free on arrival",
      cost: 0,
      duration: "45 days",
      notes: "Indian passport holders get 45 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 450 },
        { data: "3GB", validity: "30 days", price: 750 },
        { data: "5GB", validity: "30 days", price: 1100, recommended: true },
        { data: "10GB", validity: "30 days", price: 1600 },
      ],
      affiliateLink: "https://www.airalo.com/vietnam-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "October - December",
      currency: "Vietnamese Dong",
      currencyCode: "VND",
      language: "Vietnamese",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Old Quarter Walking Tour", price: 400, duration: "3 hours", affiliateLink: "" },
      { name: "Ha Long Bay Day Trip", price: 2500, duration: "Full day", affiliateLink: "" },
      { name: "Water Puppet Show", price: 300, duration: "1 hour", affiliateLink: "" },
      { name: "Street Food Tour", price: 600, duration: "3 hours", affiliateLink: "" },
    ],
  },

  "ho-chi-minh": {
    id: "ho-chi-minh",
    name: "Ho Chi Minh City",
    country: "Vietnam",
    countryCode: "VN",
    flag: "🇻🇳",
    airportCode: "SGN",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    tagline: "The bustling heart of Vietnam",

    costs: {
      flights: {
        BOM: { low: 12000, high: 20000 },
        DEL: { low: 11000, high: 18000 },
        BLR: { low: 13000, high: 21000 },
        MAA: { low: 11000, high: 19000 },
        HYD: { low: 12000, high: 20000 },
        CCU: { low: 11000, high: 18000 },
        COK: { low: 13000, high: 21000 },
      },
      hotels: {
        budget: 800,
        mid: 1800,
        luxury: 5000,
      },
      daily: { low: 1200, high: 2800 },
      activities: { low: 2000, high: 6000 },
    },

    visa: {
      required: false,
      type: "Free on arrival",
      cost: 0,
      duration: "45 days",
      notes: "Indian passport holders get 45 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 450 },
        { data: "3GB", validity: "30 days", price: 750 },
        { data: "5GB", validity: "30 days", price: 1100, recommended: true },
        { data: "10GB", validity: "30 days", price: 1600 },
      ],
      affiliateLink: "https://www.airalo.com/vietnam-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "December - April",
      currency: "Vietnamese Dong",
      currencyCode: "VND",
      language: "Vietnamese",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Cu Chi Tunnels", price: 800, duration: "Half day", affiliateLink: "" },
      { name: "Mekong Delta Tour", price: 1500, duration: "Full day", affiliateLink: "" },
      { name: "War Remnants Museum", price: 200, duration: "2 hours", affiliateLink: "" },
      { name: "Saigon Street Food Tour", price: 700, duration: "3 hours", affiliateLink: "" },
    ],
  },

  // Thailand
  bangkok: {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    countryCode: "TH",
    flag: "🇹🇭",
    airportCode: "BKK",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    tagline: "The city that never sleeps",

    costs: {
      flights: {
        BOM: { low: 10000, high: 16000 },
        DEL: { low: 9000, high: 15000 },
        BLR: { low: 11000, high: 17000 },
        MAA: { low: 9500, high: 15500 },
        HYD: { low: 10000, high: 16000 },
        CCU: { low: 11000, high: 17000 },
        COK: { low: 10500, high: 16500 },
      },
      hotels: {
        budget: 800,
        mid: 2500,
        luxury: 6000,
      },
      daily: { low: 1200, high: 2500 },
      activities: { low: 2000, high: 6000 },
    },

    visa: {
      required: false,
      type: "Visa exemption",
      cost: 0,
      duration: "60 days",
      notes: "Indian passport holders get 60 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 600 },
        { data: "5GB", validity: "30 days", price: 850, recommended: true },
        { data: "10GB", validity: "30 days", price: 1250 },
      ],
      affiliateLink: "https://www.airalo.com/thailand-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - February",
      currency: "Thai Baht",
      currencyCode: "THB",
      language: "Thai",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Grand Palace & Wat Pho", price: 600, duration: "3 hours", affiliateLink: "" },
      { name: "Floating Market Tour", price: 1200, duration: "Half day", affiliateLink: "" },
      { name: "Street Food Tour", price: 800, duration: "3 hours", affiliateLink: "" },
      { name: "Ayutthaya Day Trip", price: 1500, duration: "Full day", affiliateLink: "" },
    ],
  },

  phuket: {
    id: "phuket",
    name: "Phuket",
    country: "Thailand",
    countryCode: "TH",
    flag: "🇹🇭",
    airportCode: "HKT",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
    tagline: "Pearl of the Andaman",

    costs: {
      flights: {
        BOM: { low: 12000, high: 20000 },
        DEL: { low: 11000, high: 18000 },
        BLR: { low: 13000, high: 21000 },
        MAA: { low: 10500, high: 18500 },
        HYD: { low: 11500, high: 19500 },
        CCU: { low: 12500, high: 20500 },
        COK: { low: 11000, high: 19000 },
      },
      hotels: {
        budget: 1000,
        mid: 3000,
        luxury: 8000,
      },
      daily: { low: 1500, high: 3000 },
      activities: { low: 3000, high: 10000 },
    },

    visa: {
      required: false,
      type: "Visa exemption",
      cost: 0,
      duration: "60 days",
      notes: "Indian passport holders get 60 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 600 },
        { data: "5GB", validity: "30 days", price: 850, recommended: true },
        { data: "10GB", validity: "30 days", price: 1250 },
      ],
      affiliateLink: "https://www.airalo.com/thailand-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - April",
      currency: "Thai Baht",
      currencyCode: "THB",
      language: "Thai",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Phi Phi Islands Tour", price: 2500, duration: "Full day", affiliateLink: "" },
      { name: "Big Buddha Visit", price: 0, duration: "2 hours", affiliateLink: "" },
      { name: "James Bond Island", price: 3000, duration: "Full day", affiliateLink: "" },
      { name: "Patong Beach Activities", price: 1000, duration: "Flexible", affiliateLink: "" },
    ],
  },

  krabi: {
    id: "krabi",
    name: "Krabi",
    country: "Thailand",
    countryCode: "TH",
    flag: "🇹🇭",
    airportCode: "KBV",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    tagline: "Limestone cliffs and emerald waters",

    costs: {
      flights: {
        BOM: { low: 13000, high: 21000 },
        DEL: { low: 12000, high: 19000 },
        BLR: { low: 14000, high: 22000 },
        MAA: { low: 11500, high: 19500 },
        HYD: { low: 12500, high: 20500 },
        CCU: { low: 13500, high: 21500 },
        COK: { low: 12000, high: 20000 },
      },
      hotels: {
        budget: 900,
        mid: 2500,
        luxury: 7000,
      },
      daily: { low: 1200, high: 2500 },
      activities: { low: 2500, high: 8000 },
    },

    visa: {
      required: false,
      type: "Visa exemption",
      cost: 0,
      duration: "60 days",
      notes: "Indian passport holders get 60 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 600 },
        { data: "5GB", validity: "30 days", price: 850, recommended: true },
        { data: "10GB", validity: "30 days", price: 1250 },
      ],
      affiliateLink: "https://www.airalo.com/thailand-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - April",
      currency: "Thai Baht",
      currencyCode: "THB",
      language: "Thai",
      timezone: "UTC+7",
    },

    activities: [
      { name: "4 Islands Tour", price: 1800, duration: "Full day", affiliateLink: "" },
      { name: "Railay Beach", price: 500, duration: "Half day", affiliateLink: "" },
      { name: "Tiger Cave Temple", price: 0, duration: "3 hours", affiliateLink: "" },
      { name: "Hong Islands Tour", price: 2200, duration: "Full day", affiliateLink: "" },
    ],
  },

  "chiang-mai": {
    id: "chiang-mai",
    name: "Chiang Mai",
    country: "Thailand",
    countryCode: "TH",
    flag: "🇹🇭",
    airportCode: "CNX",
    image: "https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=800&q=80",
    tagline: "The Rose of the North",

    costs: {
      flights: {
        BOM: { low: 12000, high: 19000 },
        DEL: { low: 11000, high: 17000 },
        BLR: { low: 13000, high: 20000 },
        MAA: { low: 11000, high: 18000 },
        HYD: { low: 12000, high: 19000 },
        CCU: { low: 12000, high: 19000 },
        COK: { low: 12500, high: 19500 },
      },
      hotels: {
        budget: 600,
        mid: 1500,
        luxury: 4000,
      },
      daily: { low: 1000, high: 2000 },
      activities: { low: 2000, high: 5000 },
    },

    visa: {
      required: false,
      type: "Visa exemption",
      cost: 0,
      duration: "60 days",
      notes: "Indian passport holders get 60 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 600 },
        { data: "5GB", validity: "30 days", price: 850, recommended: true },
        { data: "10GB", validity: "30 days", price: 1250 },
      ],
      affiliateLink: "https://www.airalo.com/thailand-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - February",
      currency: "Thai Baht",
      currencyCode: "THB",
      language: "Thai",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Doi Suthep Temple", price: 400, duration: "3 hours", affiliateLink: "" },
      { name: "Elephant Sanctuary", price: 2500, duration: "Full day", affiliateLink: "" },
      { name: "Night Bazaar", price: 0, duration: "Evening", affiliateLink: "" },
      { name: "Thai Cooking Class", price: 1200, duration: "Half day", affiliateLink: "" },
    ],
  },

  // Indonesia
  bali: {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    countryCode: "ID",
    flag: "🇮🇩",
    airportCode: "DPS",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    tagline: "Island of the Gods",

    costs: {
      flights: {
        BOM: { low: 12000, high: 20000 },
        DEL: { low: 11000, high: 19000 },
        BLR: { low: 13000, high: 21000 },
        MAA: { low: 11500, high: 19500 },
        HYD: { low: 12000, high: 20000 },
        CCU: { low: 13000, high: 21000 },
        COK: { low: 12500, high: 20500 },
      },
      hotels: {
        budget: 1200,
        mid: 3000,
        luxury: 8000,
      },
      daily: { low: 1500, high: 3500 },
      activities: { low: 3000, high: 10000 },
    },

    visa: {
      required: false,
      type: "Visa on arrival",
      cost: 500,
      duration: "30 days",
      notes: "VOA fee ~$35, extendable once",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 600 },
        { data: "5GB", validity: "30 days", price: 900, recommended: true },
        { data: "10GB", validity: "30 days", price: 1350 },
      ],
      affiliateLink: "https://www.airalo.com/indonesia-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "April - October",
      currency: "Indonesian Rupiah",
      currencyCode: "IDR",
      language: "Indonesian",
      timezone: "UTC+8",
    },

    activities: [
      { name: "Ubud Rice Terraces", price: 800, duration: "Half day", affiliateLink: "" },
      { name: "Uluwatu Temple Sunset", price: 600, duration: "3 hours", affiliateLink: "" },
      { name: "Mount Batur Sunrise Trek", price: 1500, duration: "6 hours", affiliateLink: "" },
      { name: "Nusa Penida Day Trip", price: 2000, duration: "Full day", affiliateLink: "" },
    ],
  },

  // UAE
  dubai: {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    countryCode: "AE",
    flag: "🇦🇪",
    airportCode: "DXB",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    tagline: "Where luxury meets adventure",

    costs: {
      flights: {
        BOM: { low: 8000, high: 15000 },
        DEL: { low: 9000, high: 16000 },
        BLR: { low: 10000, high: 17000 },
        MAA: { low: 9000, high: 16000 },
        HYD: { low: 8500, high: 15500 },
        CCU: { low: 10000, high: 17000 },
        COK: { low: 9500, high: 16500 },
      },
      hotels: {
        budget: 3000,
        mid: 6000,
        luxury: 15000,
      },
      daily: { low: 3000, high: 6000 },
      activities: { low: 5000, high: 15000 },
    },

    visa: {
      required: true,
      type: "Tourist Visa",
      cost: 5500,
      duration: "30 days",
      notes: "Online application, processed in 3-4 days",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 550 },
        { data: "3GB", validity: "30 days", price: 950 },
        { data: "5GB", validity: "30 days", price: 1400, recommended: true },
        { data: "10GB", validity: "30 days", price: 2100 },
      ],
      affiliateLink: "https://www.airalo.com/uae-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - March",
      currency: "UAE Dirham",
      currencyCode: "AED",
      language: "Arabic, English",
      timezone: "UTC+4",
    },

    activities: [
      { name: "Burj Khalifa At The Top", price: 1500, duration: "2 hours", affiliateLink: "" },
      { name: "Desert Safari", price: 2500, duration: "6 hours", affiliateLink: "" },
      { name: "Dubai Frame", price: 500, duration: "1 hour", affiliateLink: "" },
      { name: "Dhow Cruise Dinner", price: 1800, duration: "3 hours", affiliateLink: "" },
    ],
  },

  "abu-dhabi": {
    id: "abu-dhabi",
    name: "Abu Dhabi",
    country: "UAE",
    countryCode: "AE",
    flag: "🇦🇪",
    airportCode: "AUH",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80",
    tagline: "The capital of culture and luxury",

    costs: {
      flights: {
        BOM: { low: 8000, high: 14000 },
        DEL: { low: 9000, high: 15000 },
        BLR: { low: 10000, high: 16000 },
        MAA: { low: 9000, high: 15000 },
        HYD: { low: 8500, high: 14500 },
        CCU: { low: 10000, high: 16000 },
        COK: { low: 9500, high: 15500 },
      },
      hotels: {
        budget: 3500,
        mid: 7000,
        luxury: 18000,
      },
      daily: { low: 3500, high: 7000 },
      activities: { low: 4000, high: 12000 },
    },

    visa: {
      required: true,
      type: "Tourist Visa",
      cost: 5500,
      duration: "30 days",
      notes: "Same UAE visa works for Dubai and Abu Dhabi",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 550 },
        { data: "3GB", validity: "30 days", price: 950 },
        { data: "5GB", validity: "30 days", price: 1400, recommended: true },
        { data: "10GB", validity: "30 days", price: 2100 },
      ],
      affiliateLink: "https://www.airalo.com/uae-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - March",
      currency: "UAE Dirham",
      currencyCode: "AED",
      language: "Arabic, English",
      timezone: "UTC+4",
    },

    activities: [
      { name: "Sheikh Zayed Mosque", price: 0, duration: "2 hours", affiliateLink: "" },
      { name: "Ferrari World", price: 3000, duration: "Full day", affiliateLink: "" },
      { name: "Louvre Abu Dhabi", price: 600, duration: "3 hours", affiliateLink: "" },
      { name: "Yas Island", price: 2000, duration: "Full day", affiliateLink: "" },
    ],
  },

  // Singapore
  singapore: {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    flag: "🇸🇬",
    airportCode: "SIN",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    tagline: "The Garden City",

    costs: {
      flights: {
        BOM: { low: 12000, high: 20000 },
        DEL: { low: 13000, high: 22000 },
        BLR: { low: 11000, high: 19000 },
        MAA: { low: 10000, high: 18000 },
        HYD: { low: 11000, high: 19000 },
        CCU: { low: 12000, high: 20000 },
        COK: { low: 10500, high: 18500 },
      },
      hotels: {
        budget: 4000,
        mid: 8000,
        luxury: 18000,
      },
      daily: { low: 3000, high: 5000 },
      activities: { low: 4000, high: 12000 },
    },

    visa: {
      required: false,
      type: "Visa-free",
      cost: 0,
      duration: "30 days",
      notes: "Indian passport holders get visa-free entry",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 400 },
        { data: "3GB", validity: "30 days", price: 700 },
        { data: "5GB", validity: "30 days", price: 1000, recommended: true },
        { data: "10GB", validity: "30 days", price: 1500 },
      ],
      affiliateLink: "https://www.airalo.com/singapore-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "February - April",
      currency: "Singapore Dollar",
      currencyCode: "SGD",
      language: "English, Mandarin, Malay, Tamil",
      timezone: "UTC+8",
    },

    activities: [
      { name: "Gardens by the Bay", price: 1200, duration: "3 hours", affiliateLink: "" },
      { name: "Universal Studios", price: 4500, duration: "Full day", affiliateLink: "" },
      { name: "Marina Bay Sands SkyPark", price: 800, duration: "1 hour", affiliateLink: "" },
      { name: "Sentosa Island", price: 2000, duration: "Full day", affiliateLink: "" },
    ],
  },

  // Malaysia
  "kuala-lumpur": {
    id: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    countryCode: "MY",
    flag: "🇲🇾",
    airportCode: "KUL",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    tagline: "A melting pot of cultures",

    costs: {
      flights: {
        BOM: { low: 8000, high: 14000 },
        DEL: { low: 9000, high: 15000 },
        BLR: { low: 8500, high: 14500 },
        MAA: { low: 7500, high: 13500 },
        HYD: { low: 8000, high: 14000 },
        CCU: { low: 9500, high: 15500 },
        COK: { low: 8000, high: 14000 },
      },
      hotels: {
        budget: 1500,
        mid: 3500,
        luxury: 8000,
      },
      daily: { low: 1500, high: 3000 },
      activities: { low: 2000, high: 6000 },
    },

    visa: {
      required: false,
      type: "Visa-free",
      cost: 0,
      duration: "30 days",
      notes: "Indian passport holders get visa-free entry",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 300 },
        { data: "3GB", validity: "30 days", price: 550 },
        { data: "5GB", validity: "30 days", price: 800, recommended: true },
        { data: "10GB", validity: "30 days", price: 1200 },
      ],
      affiliateLink: "https://www.airalo.com/malaysia-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "March - October",
      currency: "Malaysian Ringgit",
      currencyCode: "MYR",
      language: "Malay, English",
      timezone: "UTC+8",
    },

    activities: [
      { name: "Petronas Towers", price: 800, duration: "2 hours", affiliateLink: "" },
      { name: "Batu Caves", price: 0, duration: "Half day", affiliateLink: "" },
      { name: "KL Tower", price: 600, duration: "1 hour", affiliateLink: "" },
      { name: "Genting Highlands", price: 1500, duration: "Full day", affiliateLink: "" },
    ],
  },

  langkawi: {
    id: "langkawi",
    name: "Langkawi",
    country: "Malaysia",
    countryCode: "MY",
    flag: "🇲🇾",
    airportCode: "LGK",
    image: "https://images.unsplash.com/photo-1609946860441-a51ffcf22208?w=800&q=80",
    tagline: "Jewel of Kedah",

    costs: {
      flights: {
        BOM: { low: 10000, high: 17000 },
        DEL: { low: 11000, high: 18000 },
        BLR: { low: 10500, high: 17500 },
        MAA: { low: 9500, high: 16500 },
        HYD: { low: 10000, high: 17000 },
        CCU: { low: 11500, high: 18500 },
        COK: { low: 10000, high: 17000 },
      },
      hotels: {
        budget: 1200,
        mid: 3000,
        luxury: 8000,
      },
      daily: { low: 1200, high: 2500 },
      activities: { low: 2000, high: 5000 },
    },

    visa: {
      required: false,
      type: "Visa-free",
      cost: 0,
      duration: "30 days",
      notes: "Indian passport holders get visa-free entry",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 300 },
        { data: "3GB", validity: "30 days", price: 550 },
        { data: "5GB", validity: "30 days", price: 800, recommended: true },
        { data: "10GB", validity: "30 days", price: 1200 },
      ],
      affiliateLink: "https://www.airalo.com/malaysia-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - April",
      currency: "Malaysian Ringgit",
      currencyCode: "MYR",
      language: "Malay, English",
      timezone: "UTC+8",
    },

    activities: [
      { name: "Sky Bridge & Cable Car", price: 800, duration: "3 hours", affiliateLink: "" },
      { name: "Island Hopping", price: 1200, duration: "Half day", affiliateLink: "" },
      { name: "Mangrove Tour", price: 900, duration: "3 hours", affiliateLink: "" },
      { name: "Underwater World", price: 500, duration: "2 hours", affiliateLink: "" },
    ],
  },

  // Maldives
  maldives: {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    countryCode: "MV",
    flag: "🇲🇻",
    airportCode: "MLE",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    tagline: "Paradise on Earth",

    costs: {
      flights: {
        BOM: { low: 12000, high: 22000 },
        DEL: { low: 13000, high: 24000 },
        BLR: { low: 14000, high: 25000 },
        MAA: { low: 11000, high: 20000 },
        HYD: { low: 12500, high: 23000 },
        CCU: { low: 14000, high: 25000 },
        COK: { low: 10000, high: 18000 },
      },
      hotels: {
        budget: 5000,
        mid: 15000,
        luxury: 50000,
      },
      daily: { low: 3000, high: 8000 },
      activities: { low: 5000, high: 20000 },
    },

    visa: {
      required: false,
      type: "Visa on arrival",
      cost: 0,
      duration: "30 days",
      notes: "Free visa on arrival for all nationalities",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 600 },
        { data: "3GB", validity: "30 days", price: 1100 },
        { data: "5GB", validity: "30 days", price: 1600, recommended: true },
        { data: "10GB", validity: "30 days", price: 2400 },
      ],
      affiliateLink: "https://www.airalo.com/maldives-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - April",
      currency: "Maldivian Rufiyaa",
      currencyCode: "MVR",
      language: "Dhivehi, English",
      timezone: "UTC+5",
    },

    activities: [
      { name: "Snorkeling Trip", price: 3000, duration: "Half day", affiliateLink: "" },
      { name: "Sunset Dolphin Cruise", price: 4000, duration: "3 hours", affiliateLink: "" },
      { name: "Scuba Diving", price: 6000, duration: "Half day", affiliateLink: "" },
      { name: "Male City Tour", price: 1500, duration: "3 hours", affiliateLink: "" },
    ],
  },

  // Sri Lanka
  colombo: {
    id: "colombo",
    name: "Colombo",
    country: "Sri Lanka",
    countryCode: "LK",
    flag: "🇱🇰",
    airportCode: "CMB",
    image: "https://images.unsplash.com/photo-1586076585229-a4a7ffb9c8b5?w=800&q=80",
    tagline: "The gateway to Sri Lanka",

    costs: {
      flights: {
        BOM: { low: 8000, high: 14000 },
        DEL: { low: 10000, high: 16000 },
        BLR: { low: 7000, high: 12000 },
        MAA: { low: 6000, high: 10000 },
        HYD: { low: 8000, high: 14000 },
        CCU: { low: 9000, high: 15000 },
        COK: { low: 5500, high: 9500 },
      },
      hotels: {
        budget: 1000,
        mid: 2500,
        luxury: 6000,
      },
      daily: { low: 1200, high: 2500 },
      activities: { low: 2000, high: 5000 },
    },

    visa: {
      required: true,
      type: "ETA (Electronic Travel Authorization)",
      cost: 2000,
      duration: "30 days",
      notes: "Apply online before travel",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 600 },
        { data: "5GB", validity: "30 days", price: 900, recommended: true },
        { data: "10GB", validity: "30 days", price: 1300 },
      ],
      affiliateLink: "https://www.airalo.com/sri-lanka-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "December - March",
      currency: "Sri Lankan Rupee",
      currencyCode: "LKR",
      language: "Sinhala, Tamil, English",
      timezone: "UTC+5:30",
    },

    activities: [
      { name: "Galle Day Trip", price: 2000, duration: "Full day", affiliateLink: "" },
      { name: "Temple of the Tooth", price: 500, duration: "3 hours", affiliateLink: "" },
      { name: "Sigiriya Rock", price: 3000, duration: "Full day", affiliateLink: "" },
      { name: "Whale Watching", price: 4000, duration: "Half day", affiliateLink: "" },
    ],
  },

  // Japan
  tokyo: {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    airportCode: "NRT",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    tagline: "Where tradition meets the future",

    costs: {
      flights: {
        BOM: { low: 28000, high: 45000 },
        DEL: { low: 26000, high: 42000 },
        BLR: { low: 30000, high: 48000 },
        MAA: { low: 28000, high: 45000 },
        HYD: { low: 29000, high: 46000 },
        CCU: { low: 27000, high: 44000 },
        COK: { low: 30000, high: 48000 },
      },
      hotels: {
        budget: 4000,
        mid: 8000,
        luxury: 20000,
      },
      daily: { low: 4000, high: 8000 },
      activities: { low: 5000, high: 15000 },
    },

    visa: {
      required: true,
      type: "Tourist Visa",
      cost: 400,
      duration: "15 days",
      notes: "Apply at Japanese embassy/consulate",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 500 },
        { data: "3GB", validity: "30 days", price: 900 },
        { data: "5GB", validity: "30 days", price: 1400, recommended: true },
        { data: "10GB", validity: "30 days", price: 2200 },
      ],
      affiliateLink: "https://www.airalo.com/japan-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "March - May, October - November",
      currency: "Japanese Yen",
      currencyCode: "JPY",
      language: "Japanese",
      timezone: "UTC+9",
    },

    activities: [
      { name: "Senso-ji Temple", price: 0, duration: "2 hours", affiliateLink: "" },
      { name: "Mt. Fuji Day Trip", price: 5000, duration: "Full day", affiliateLink: "" },
      { name: "Shibuya & Harajuku", price: 0, duration: "Half day", affiliateLink: "" },
      { name: "Tokyo DisneySea", price: 6000, duration: "Full day", affiliateLink: "" },
    ],
  },

  osaka: {
    id: "osaka",
    name: "Osaka",
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    airportCode: "KIX",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80",
    tagline: "Japan's kitchen",

    costs: {
      flights: {
        BOM: { low: 26000, high: 42000 },
        DEL: { low: 24000, high: 40000 },
        BLR: { low: 28000, high: 45000 },
        MAA: { low: 26000, high: 42000 },
        HYD: { low: 27000, high: 43000 },
        CCU: { low: 25000, high: 41000 },
        COK: { low: 28000, high: 45000 },
      },
      hotels: {
        budget: 3500,
        mid: 7000,
        luxury: 18000,
      },
      daily: { low: 3500, high: 7000 },
      activities: { low: 4000, high: 12000 },
    },

    visa: {
      required: true,
      type: "Tourist Visa",
      cost: 400,
      duration: "15 days",
      notes: "Apply at Japanese embassy/consulate",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 500 },
        { data: "3GB", validity: "30 days", price: 900 },
        { data: "5GB", validity: "30 days", price: 1400, recommended: true },
        { data: "10GB", validity: "30 days", price: 2200 },
      ],
      affiliateLink: "https://www.airalo.com/japan-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "March - May, October - November",
      currency: "Japanese Yen",
      currencyCode: "JPY",
      language: "Japanese",
      timezone: "UTC+9",
    },

    activities: [
      { name: "Osaka Castle", price: 600, duration: "2 hours", affiliateLink: "" },
      { name: "Dotonbori Street Food", price: 1500, duration: "3 hours", affiliateLink: "" },
      { name: "Universal Studios Japan", price: 6500, duration: "Full day", affiliateLink: "" },
      { name: "Nara Day Trip", price: 1500, duration: "Full day", affiliateLink: "" },
    ],
  },

  // South Korea
  seoul: {
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    countryCode: "KR",
    flag: "🇰🇷",
    airportCode: "ICN",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
    tagline: "Dynamic K-culture capital",

    costs: {
      flights: {
        BOM: { low: 24000, high: 40000 },
        DEL: { low: 22000, high: 38000 },
        BLR: { low: 26000, high: 42000 },
        MAA: { low: 24000, high: 40000 },
        HYD: { low: 25000, high: 41000 },
        CCU: { low: 23000, high: 39000 },
        COK: { low: 26000, high: 42000 },
      },
      hotels: {
        budget: 3000,
        mid: 6000,
        luxury: 15000,
      },
      daily: { low: 3000, high: 6000 },
      activities: { low: 3000, high: 10000 },
    },

    visa: {
      required: true,
      type: "Tourist Visa",
      cost: 3500,
      duration: "30 days",
      notes: "Apply at Korean embassy/consulate",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 450 },
        { data: "3GB", validity: "30 days", price: 800 },
        { data: "5GB", validity: "30 days", price: 1200, recommended: true },
        { data: "10GB", validity: "30 days", price: 1900 },
      ],
      affiliateLink: "https://www.airalo.com/south-korea-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "March - May, September - November",
      currency: "Korean Won",
      currencyCode: "KRW",
      language: "Korean",
      timezone: "UTC+9",
    },

    activities: [
      { name: "Gyeongbokgung Palace", price: 300, duration: "2 hours", affiliateLink: "" },
      { name: "DMZ Tour", price: 4000, duration: "Full day", affiliateLink: "" },
      { name: "Bukchon Hanok Village", price: 0, duration: "2 hours", affiliateLink: "" },
      { name: "Korean BBQ Experience", price: 2000, duration: "2 hours", affiliateLink: "" },
    ],
  },

  // Cambodia
  "siem-reap": {
    id: "siem-reap",
    name: "Siem Reap",
    country: "Cambodia",
    countryCode: "KH",
    flag: "🇰🇭",
    airportCode: "REP",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&q=80",
    tagline: "Gateway to Angkor Wat",

    costs: {
      flights: {
        BOM: { low: 15000, high: 24000 },
        DEL: { low: 14000, high: 22000 },
        BLR: { low: 16000, high: 25000 },
        MAA: { low: 14000, high: 23000 },
        HYD: { low: 15000, high: 24000 },
        CCU: { low: 13000, high: 21000 },
        COK: { low: 16000, high: 25000 },
      },
      hotels: {
        budget: 600,
        mid: 1500,
        luxury: 4000,
      },
      daily: { low: 1000, high: 2000 },
      activities: { low: 2000, high: 5000 },
    },

    visa: {
      required: true,
      type: "e-Visa / Visa on Arrival",
      cost: 2500,
      duration: "30 days",
      notes: "e-Visa recommended, VOA also available",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 400 },
        { data: "3GB", validity: "30 days", price: 700 },
        { data: "5GB", validity: "30 days", price: 1000, recommended: true },
        { data: "10GB", validity: "30 days", price: 1500 },
      ],
      affiliateLink: "https://www.airalo.com/cambodia-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - February",
      currency: "US Dollar / Cambodian Riel",
      currencyCode: "USD",
      language: "Khmer, English",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Angkor Wat Sunrise", price: 3000, duration: "Full day", affiliateLink: "" },
      { name: "Angkor Thom", price: 0, duration: "Half day", affiliateLink: "" },
      { name: "Tonle Sap Lake", price: 1500, duration: "Half day", affiliateLink: "" },
      { name: "Pub Street Night", price: 0, duration: "Evening", affiliateLink: "" },
    ],
  },

  // Hong Kong
  "hong-kong": {
    id: "hong-kong",
    name: "Hong Kong",
    country: "Hong Kong",
    countryCode: "HK",
    flag: "🇭🇰",
    airportCode: "HKG",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
    tagline: "Where East meets West",

    costs: {
      flights: {
        BOM: { low: 15000, high: 25000 },
        DEL: { low: 14000, high: 24000 },
        BLR: { low: 16000, high: 26000 },
        MAA: { low: 14000, high: 24000 },
        HYD: { low: 15000, high: 25000 },
        CCU: { low: 14000, high: 23000 },
        COK: { low: 16000, high: 26000 },
      },
      hotels: {
        budget: 4000,
        mid: 8000,
        luxury: 18000,
      },
      daily: { low: 3000, high: 6000 },
      activities: { low: 3000, high: 10000 },
    },

    visa: {
      required: false,
      type: "Visa-free",
      cost: 0,
      duration: "14 days",
      notes: "Indian passport holders get 14 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 400 },
        { data: "3GB", validity: "30 days", price: 700 },
        { data: "5GB", validity: "30 days", price: 1100, recommended: true },
        { data: "10GB", validity: "30 days", price: 1700 },
      ],
      affiliateLink: "https://www.airalo.com/hong-kong-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "October - December",
      currency: "Hong Kong Dollar",
      currencyCode: "HKD",
      language: "Cantonese, English",
      timezone: "UTC+8",
    },

    activities: [
      { name: "Victoria Peak", price: 400, duration: "2 hours", affiliateLink: "" },
      { name: "Hong Kong Disneyland", price: 5500, duration: "Full day", affiliateLink: "" },
      { name: "Star Ferry & Avenue of Stars", price: 100, duration: "2 hours", affiliateLink: "" },
      { name: "Big Buddha & Ngong Ping", price: 1200, duration: "Half day", affiliateLink: "" },
    ],
  },

  // Philippines
  manila: {
    id: "manila",
    name: "Manila",
    country: "Philippines",
    countryCode: "PH",
    flag: "🇵🇭",
    airportCode: "MNL",
    image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80",
    tagline: "Pearl of the Orient",

    costs: {
      flights: {
        BOM: { low: 14000, high: 23000 },
        DEL: { low: 13000, high: 21000 },
        BLR: { low: 15000, high: 24000 },
        MAA: { low: 13000, high: 22000 },
        HYD: { low: 14000, high: 23000 },
        CCU: { low: 14000, high: 22000 },
        COK: { low: 15000, high: 24000 },
      },
      hotels: {
        budget: 1200,
        mid: 3000,
        luxury: 7000,
      },
      daily: { low: 1500, high: 3000 },
      activities: { low: 2000, high: 6000 },
    },

    visa: {
      required: false,
      type: "Visa-free",
      cost: 0,
      duration: "30 days",
      notes: "Indian passport holders get 30 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 600 },
        { data: "5GB", validity: "30 days", price: 900, recommended: true },
        { data: "10GB", validity: "30 days", price: 1400 },
      ],
      affiliateLink: "https://www.airalo.com/philippines-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "December - May",
      currency: "Philippine Peso",
      currencyCode: "PHP",
      language: "Filipino, English",
      timezone: "UTC+8",
    },

    activities: [
      { name: "Intramuros Walking Tour", price: 500, duration: "3 hours", affiliateLink: "" },
      { name: "Manila Ocean Park", price: 800, duration: "Half day", affiliateLink: "" },
      { name: "Tagaytay Day Trip", price: 1500, duration: "Full day", affiliateLink: "" },
      { name: "Manila Bay Sunset", price: 0, duration: "2 hours", affiliateLink: "" },
    ],
  },

  palawan: {
    id: "palawan",
    name: "Palawan",
    country: "Philippines",
    countryCode: "PH",
    flag: "🇵🇭",
    airportCode: "PPS",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    tagline: "The Last Frontier",

    costs: {
      flights: {
        BOM: { low: 18000, high: 28000 },
        DEL: { low: 17000, high: 26000 },
        BLR: { low: 19000, high: 29000 },
        MAA: { low: 17000, high: 27000 },
        HYD: { low: 18000, high: 28000 },
        CCU: { low: 18000, high: 27000 },
        COK: { low: 19000, high: 29000 },
      },
      hotels: {
        budget: 1500,
        mid: 4000,
        luxury: 12000,
      },
      daily: { low: 2000, high: 4000 },
      activities: { low: 3000, high: 8000 },
    },

    visa: {
      required: false,
      type: "Visa-free",
      cost: 0,
      duration: "30 days",
      notes: "Indian passport holders get 30 days visa-free",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 600 },
        { data: "5GB", validity: "30 days", price: 900, recommended: true },
        { data: "10GB", validity: "30 days", price: 1400 },
      ],
      affiliateLink: "https://www.airalo.com/philippines-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "December - May",
      currency: "Philippine Peso",
      currencyCode: "PHP",
      language: "Filipino, English",
      timezone: "UTC+8",
    },

    activities: [
      { name: "El Nido Island Hopping", price: 2500, duration: "Full day", affiliateLink: "" },
      { name: "Underground River", price: 1800, duration: "Half day", affiliateLink: "" },
      { name: "Coron Island Tour", price: 2200, duration: "Full day", affiliateLink: "" },
      { name: "Firefly Watching", price: 800, duration: "Evening", affiliateLink: "" },
    ],
  },

  // Nepal
  kathmandu: {
    id: "kathmandu",
    name: "Kathmandu",
    country: "Nepal",
    countryCode: "NP",
    flag: "🇳🇵",
    airportCode: "KTM",
    image: "https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=800&q=80",
    tagline: "City of temples",

    costs: {
      flights: {
        BOM: { low: 8000, high: 14000 },
        DEL: { low: 6000, high: 11000 },
        BLR: { low: 9000, high: 15000 },
        MAA: { low: 9000, high: 15000 },
        HYD: { low: 8500, high: 14500 },
        CCU: { low: 5000, high: 9000 },
        COK: { low: 10000, high: 16000 },
      },
      hotels: {
        budget: 800,
        mid: 2000,
        luxury: 5000,
      },
      daily: { low: 1000, high: 2500 },
      activities: { low: 2000, high: 6000 },
    },

    visa: {
      required: false,
      type: "Visa-free",
      cost: 0,
      duration: "Unlimited",
      notes: "Indian citizens don't need visa for Nepal",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 400 },
        { data: "3GB", validity: "30 days", price: 700 },
        { data: "5GB", validity: "30 days", price: 1000, recommended: true },
        { data: "10GB", validity: "30 days", price: 1500 },
      ],
      affiliateLink: "https://www.airalo.com/nepal-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "October - December, March - April",
      currency: "Nepalese Rupee",
      currencyCode: "NPR",
      language: "Nepali, English",
      timezone: "UTC+5:45",
    },

    activities: [
      { name: "Pashupatinath Temple", price: 100, duration: "2 hours", affiliateLink: "" },
      { name: "Everest Mountain Flight", price: 15000, duration: "1 hour", affiliateLink: "" },
      { name: "Boudhanath Stupa", price: 400, duration: "2 hours", affiliateLink: "" },
      { name: "Pokhara Day Trip", price: 3000, duration: "Full day", affiliateLink: "" },
    ],
  },

  // Bhutan
  paro: {
    id: "paro",
    name: "Paro",
    country: "Bhutan",
    countryCode: "BT",
    flag: "🇧🇹",
    airportCode: "PBH",
    image: "https://images.unsplash.com/photo-1553856622-d1b352e24a82?w=800&q=80",
    tagline: "Land of the Thunder Dragon",

    costs: {
      flights: {
        BOM: { low: 15000, high: 25000 },
        DEL: { low: 12000, high: 20000 },
        BLR: { low: 16000, high: 26000 },
        MAA: { low: 16000, high: 26000 },
        HYD: { low: 15000, high: 25000 },
        CCU: { low: 8000, high: 15000 },
        COK: { low: 18000, high: 28000 },
      },
      hotels: {
        budget: 3000,
        mid: 6000,
        luxury: 15000,
      },
      daily: { low: 3000, high: 6000 },
      activities: { low: 3000, high: 8000 },
    },

    visa: {
      required: true,
      type: "Bhutan Permit",
      cost: 0,
      duration: "As per itinerary",
      notes: "Indians need permit, not visa. SDF $100/day for SAARC",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 600 },
        { data: "3GB", validity: "30 days", price: 1100 },
        { data: "5GB", validity: "30 days", price: 1600, recommended: true },
        { data: "10GB", validity: "30 days", price: 2400 },
      ],
      affiliateLink: "https://www.airalo.com/bhutan-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "March - May, September - November",
      currency: "Ngultrum / Indian Rupee",
      currencyCode: "BTN",
      language: "Dzongkha, English",
      timezone: "UTC+6",
    },

    activities: [
      { name: "Tiger's Nest Monastery", price: 2000, duration: "Full day", affiliateLink: "" },
      { name: "Punakha Dzong", price: 500, duration: "3 hours", affiliateLink: "" },
      { name: "Dochula Pass", price: 0, duration: "2 hours", affiliateLink: "" },
      { name: "Thimphu City Tour", price: 1500, duration: "Full day", affiliateLink: "" },
    ],
  },

  // Australia
  sydney: {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    countryCode: "AU",
    flag: "🇦🇺",
    airportCode: "SYD",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    tagline: "Harbour City",

    costs: {
      flights: {
        BOM: { low: 40000, high: 70000 },
        DEL: { low: 38000, high: 68000 },
        BLR: { low: 42000, high: 72000 },
        MAA: { low: 40000, high: 70000 },
        HYD: { low: 41000, high: 71000 },
        CCU: { low: 42000, high: 72000 },
        COK: { low: 42000, high: 72000 },
      },
      hotels: {
        budget: 6000,
        mid: 12000,
        luxury: 30000,
      },
      daily: { low: 5000, high: 10000 },
      activities: { low: 5000, high: 15000 },
    },

    visa: {
      required: true,
      type: "Tourist Visa (subclass 600)",
      cost: 12000,
      duration: "Up to 12 months",
      notes: "Apply online, processing 15-30 days",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 500 },
        { data: "3GB", validity: "30 days", price: 900 },
        { data: "5GB", validity: "30 days", price: 1400, recommended: true },
        { data: "10GB", validity: "30 days", price: 2200 },
      ],
      affiliateLink: "https://www.airalo.com/australia-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "September - November, March - May",
      currency: "Australian Dollar",
      currencyCode: "AUD",
      language: "English",
      timezone: "UTC+10/11",
    },

    activities: [
      { name: "Sydney Opera House Tour", price: 2500, duration: "1 hour", affiliateLink: "" },
      { name: "Harbour Bridge Climb", price: 15000, duration: "3.5 hours", affiliateLink: "" },
      { name: "Bondi Beach", price: 0, duration: "Half day", affiliateLink: "" },
      { name: "Blue Mountains Day Trip", price: 8000, duration: "Full day", affiliateLink: "" },
    ],
  },

  // Taiwan
  taipei: {
    id: "taipei",
    name: "Taipei",
    country: "Taiwan",
    countryCode: "TW",
    flag: "🇹🇼",
    airportCode: "TPE",
    image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&q=80",
    tagline: "Traditional meets modern",

    costs: {
      flights: {
        BOM: { low: 20000, high: 32000 },
        DEL: { low: 18000, high: 30000 },
        BLR: { low: 22000, high: 34000 },
        MAA: { low: 20000, high: 32000 },
        HYD: { low: 21000, high: 33000 },
        CCU: { low: 19000, high: 31000 },
        COK: { low: 22000, high: 34000 },
      },
      hotels: {
        budget: 2500,
        mid: 5000,
        luxury: 12000,
      },
      daily: { low: 2500, high: 5000 },
      activities: { low: 3000, high: 8000 },
    },

    visa: {
      required: false,
      type: "Visa-free",
      cost: 0,
      duration: "14 days",
      notes: "Indian passport holders with valid US/UK/Schengen visa",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 400 },
        { data: "3GB", validity: "30 days", price: 700 },
        { data: "5GB", validity: "30 days", price: 1100, recommended: true },
        { data: "10GB", validity: "30 days", price: 1700 },
      ],
      affiliateLink: "https://www.airalo.com/taiwan-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "March - May, September - November",
      currency: "Taiwan Dollar",
      currencyCode: "TWD",
      language: "Mandarin, English",
      timezone: "UTC+8",
    },

    activities: [
      { name: "Taipei 101", price: 600, duration: "2 hours", affiliateLink: "" },
      { name: "Jiufen Old Street", price: 500, duration: "Half day", affiliateLink: "" },
      { name: "Night Markets", price: 0, duration: "Evening", affiliateLink: "" },
      { name: "Taroko Gorge", price: 3000, duration: "Full day", affiliateLink: "" },
    ],
  },

  // Vietnam - Phu Quoc
  "phu-quoc": {
    id: "phu-quoc",
    name: "Phu Quoc",
    country: "Vietnam",
    countryCode: "VN",
    flag: "🇻🇳",
    airportCode: "PQC",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&q=80",
    tagline: "Island gem of Vietnam",
    popular: true,

    costs: {
      flights: {
        BOM: { low: 14000, high: 22000 },
        DEL: { low: 15000, high: 24000 },
        BLR: { low: 15000, high: 23000 },
        MAA: { low: 13000, high: 21000 },
        HYD: { low: 14000, high: 22000 },
        CCU: { low: 12000, high: 20000 },
        COK: { low: 14000, high: 22000 },
      },
      hotels: {
        budget: 1000,
        mid: 2500,
        luxury: 6000,
      },
      daily: { low: 1500, high: 3000 },
      activities: { low: 3000, high: 7000 },
    },

    visa: {
      required: false,
      type: "Free on arrival",
      cost: 0,
      duration: "45 days",
      notes: "Indian passport holders get 45 days visa-free for Phu Quoc",
    },

    esim: {
      provider: "Airalo",
      plans: [
        { data: "1GB", validity: "7 days", price: 350 },
        { data: "3GB", validity: "30 days", price: 550 },
        { data: "5GB", validity: "30 days", price: 800, recommended: true },
        { data: "10GB", validity: "30 days", price: 1300 },
      ],
      affiliateLink: "https://www.airalo.com/vietnam-esim?ref=TRIPSEARCH",
    },

    info: {
      bestTime: "November - March",
      currency: "Vietnamese Dong",
      currencyCode: "VND",
      language: "Vietnamese",
      timezone: "UTC+7",
    },

    activities: [
      { name: "Vinpearl Safari", price: 1500, duration: "Half day", affiliateLink: "" },
      { name: "Sao Beach", price: 0, duration: "Full day", affiliateLink: "" },
      { name: "Night Squid Fishing", price: 800, duration: "Evening", affiliateLink: "" },
      { name: "Cable Car to Hon Thom", price: 1200, duration: "3 hours", affiliateLink: "" },
    ],
  },
};

// Helper to ensure destination has all required fields
const ensureFields = (dest: Partial<Destination> & { id: string }): Destination => ({
  ...dest,
  slug: dest.slug || dest.id,
  region: dest.region || "Asia",
  popular: dest.popular ?? false,
} as Destination);

export const getDestination = (id: string): Destination | undefined => {
  const dest = destinations[id];
  return dest ? ensureFields(dest) : undefined;
};

export const getAllDestinations = (): Destination[] => {
  return Object.values(destinations).map(ensureFields);
};

export const getDestinationsByBudget = (
  budget: number,
  departureCity: string,
  days: number = 7
): Destination[] => {
  return getAllDestinations().filter((dest) => {
    const flightCost = dest.costs.flights[departureCity];
    if (!flightCost) return false;

    const minTotal =
      flightCost.low +
      dest.costs.hotels.budget * days +
      dest.costs.daily.low * days +
      dest.visa.cost;

    return minTotal <= budget;
  });
};

export const searchDestinations = (query: string): Destination[] => {
  const lowerQuery = query.toLowerCase();
  return getAllDestinations().filter(
    (dest) =>
      dest.name.toLowerCase().includes(lowerQuery) ||
      dest.country.toLowerCase().includes(lowerQuery) ||
      dest.tagline.toLowerCase().includes(lowerQuery) ||
      (dest.region && dest.region.toLowerCase().includes(lowerQuery))
  );
};

export const getPopularDestinations = (limit = 6): Destination[] => {
  return getAllDestinations()
    .filter((dest) => dest.popular)
    .slice(0, limit);
};
