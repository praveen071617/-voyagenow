// Currency utility - INR only for Indian travelers

/**
 * Format amount in INR (₹1,00,000 format)
 */
export const formatCurrency = (amount: number): string => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
};

/**
 * Format a range in INR (₹10,000 - ₹20,000)
 */
export const formatCurrencyRange = (low: number, high: number): string => {
  return `${formatCurrency(low)} - ${formatCurrency(high)}`;
};

/**
 * Format a number in Indian currency format (₹1,00,000)
 */
export const formatINR = (amount: number): string => {
  return formatCurrency(amount);
};

/**
 * Format a range in Indian currency format (₹10,000 - ₹20,000)
 */
export const formatINRRange = (low: number, high: number): string => {
  return formatCurrencyRange(low, high);
};

/**
 * Format a number with Indian comma separators (1,00,000)
 */
export const formatIndianNumber = (num: number): string => {
  const formatter = new Intl.NumberFormat("en-IN");
  return formatter.format(num);
};

/**
 * Parse INR string back to number
 */
export const parseINR = (str: string): number => {
  return parseInt(str.replace(/[₹,\s]/g, ""), 10) || 0;
};

// Legacy exports for backwards compatibility
export type CurrencyCode = "INR";
export const detectCurrency = (): CurrencyCode => "INR";
export const convertFromINR = (amount: number): number => amount;
