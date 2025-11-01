import { TemperatureUnit } from "../hooks/useWeather";

// Countries that use Fahrenheit
const FAHRENHEIT_COUNTRIES = ["US", "BS", "BZ", "KY", "PW"];

/**
 * Detects the user's default temperature unit based on their locale
 * Returns Fahrenheit for US and a few other countries, Celsius for everyone else
 */
export const getDefaultTemperatureUnit = (): TemperatureUnit => {
  try {
    // Try to get the country code from the user's locale
    const locale = navigator.language || "en-GB";

    console.log(locale);

    // Extract country code (e.g., "en-US" -> "US", "en-GB" -> "GB")
    const countryCode = locale.split("-")[1]?.toUpperCase();

    if (countryCode && FAHRENHEIT_COUNTRIES.includes(countryCode)) {
      return "fahrenheit";
    }

    return "celsius";
  } catch {
    // Default to Celsius if we can't detect
    return "celsius";
  }
};
