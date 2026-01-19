export interface Aircraft {
  code: string;
  name: string;
  manufacturer: "Airbus" | "Boeing" | "Other";
  type: "Narrow-body" | "Wide-body" | "Regional";
  icon: string;
  description?: string;
}

export const aircraftDatabase: Record<string, Aircraft> = {
  "319": {
    code: "319",
    name: "Airbus A319",
    manufacturer: "Airbus",
    type: "Narrow-body",
    icon: "A",
  },
  "320": {
    code: "320",
    name: "Airbus A320",
    manufacturer: "Airbus",
    type: "Narrow-body",
    icon: "A",
  },
  "321": {
    code: "321",
    name: "Airbus A321",
    manufacturer: "Airbus",
    type: "Narrow-body",
    icon: "A",
  },
  "32N": {
    code: "32N",
    name: "Airbus A321neo",
    manufacturer: "Airbus",
    type: "Narrow-body",
    icon: "A",
  },
  "32Q": {
    code: "32Q",
    name: "Airbus A321neo",
    manufacturer: "Airbus",
    type: "Narrow-body",
    icon: "A",
  },
  "333": {
    code: "333",
    name: "Airbus A330-300",
    manufacturer: "Airbus",
    type: "Wide-body",
    icon: "A",
  },
  "359": {
    code: "359",
    name: "Airbus A350-900",
    manufacturer: "Airbus",
    type: "Wide-body",
    icon: "A",
    description: "Ultra modern, quiet cabin",
  },
  "35K": {
    code: "35K",
    name: "Airbus A350-1000",
    manufacturer: "Airbus",
    type: "Wide-body",
    icon: "A",
  },
  "388": {
    code: "388",
    name: "Airbus A380",
    manufacturer: "Airbus",
    type: "Wide-body",
    icon: "A",
    description: "World's largest passenger aircraft",
  },
  "738": {
    code: "738",
    name: "Boeing 737-800",
    manufacturer: "Boeing",
    type: "Narrow-body",
    icon: "B",
  },
  "73H": {
    code: "73H",
    name: "Boeing 737-800",
    manufacturer: "Boeing",
    type: "Narrow-body",
    icon: "B",
  },
  "7M8": {
    code: "7M8",
    name: "Boeing 737 MAX 8",
    manufacturer: "Boeing",
    type: "Narrow-body",
    icon: "B",
  },
  "7M9": {
    code: "7M9",
    name: "Boeing 737 MAX 9",
    manufacturer: "Boeing",
    type: "Narrow-body",
    icon: "B",
  },
  "787": {
    code: "787",
    name: "Boeing 787 Dreamliner",
    manufacturer: "Boeing",
    type: "Wide-body",
    icon: "B",
    description: "Bigger windows, better humidity",
  },
  "788": {
    code: "788",
    name: "Boeing 787-8",
    manufacturer: "Boeing",
    type: "Wide-body",
    icon: "B",
  },
  "789": {
    code: "789",
    name: "Boeing 787-9",
    manufacturer: "Boeing",
    type: "Wide-body",
    icon: "B",
  },
  "78X": {
    code: "78X",
    name: "Boeing 787-10",
    manufacturer: "Boeing",
    type: "Wide-body",
    icon: "B",
  },
  "772": {
    code: "772",
    name: "Boeing 777-200",
    manufacturer: "Boeing",
    type: "Wide-body",
    icon: "B",
  },
  "77W": {
    code: "77W",
    name: "Boeing 777-300ER",
    manufacturer: "Boeing",
    type: "Wide-body",
    icon: "B",
    description: "Long-haul workhorse",
  },
};

export const getAircraft = (code: string): Aircraft | null => {
  return aircraftDatabase[code] || null;
};

export const getManufacturerColor = (manufacturer: "Airbus" | "Boeing" | "Other"): string => {
  switch (manufacturer) {
    case "Airbus":
      return "#0033A0";
    case "Boeing":
      return "#0033A0";
    default:
      return "#666666";
  }
};
