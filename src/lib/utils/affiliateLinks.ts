const AFFILIATE_IDS = {
  skyscanner: "TRIPSEARCH_SKY",
  kiwi: "TRIPSEARCH_KIWI",
  booking: "TRIPSEARCH_BOOK",
  airalo: "TRIPSEARCH",
  klook: "TRIPSEARCH_KLOOK",
};

export const buildSkyscannerLink = (
  from: string,
  to: string,
  departDate: string,
  returnDate?: string
): string => {
  const base = `https://www.skyscanner.net/transport/flights/${from.toLowerCase()}/${to.toLowerCase()}/${departDate}`;
  const withReturn = returnDate ? `${base}/${returnDate}` : base;
  return `${withReturn}/?adultsv2=1&associateId=${AFFILIATE_IDS.skyscanner}`;
};

export const buildKiwiLink = (
  from: string,
  to: string,
  departDate: string,
  returnDate?: string
): string => {
  return `https://www.kiwi.com/en/search/results/${from}/${to}/${departDate}${
    returnDate ? `/${returnDate}` : ""
  }?affilid=${AFFILIATE_IDS.kiwi}`;
};

export const buildBookingLink = (
  city: string,
  checkin: string,
  checkout: string
): string => {
  return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(
    city
  )}&checkin=${checkin}&checkout=${checkout}&aid=${AFFILIATE_IDS.booking}`;
};

export const buildAiraloLink = (country: string): string => {
  const slug = country.toLowerCase().replace(/\s+/g, "-");
  return `https://www.airalo.com/${slug}-esim?ref=${AFFILIATE_IDS.airalo}`;
};

export const buildKlookLink = (city: string): string => {
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  return `https://www.klook.com/en-IN/city/${slug}/?aid=${AFFILIATE_IDS.klook}`;
};
