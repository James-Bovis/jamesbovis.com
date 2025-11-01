import { useState, useEffect } from "react";

export type TemperatureUnit = "celsius" | "fahrenheit";

interface WeatherData {
  temperature: number;
  weatherCode: number;
  loading: boolean;
  error: string | null;
}

// Coordinates for Aylesford, Kent
const AYLESFORD_LAT = 51.29587893806539;
const AYLESFORD_LON = 0.4750417851685306;

export const useWeather = (unit: TemperatureUnit): WeatherData => {
  const [temperature, setTemperature] = useState<number>(0);
  const [weatherCode, setWeatherCode] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        // Using Open-Meteo API (free, no API key required)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${AYLESFORD_LAT}&longitude=${AYLESFORD_LON}&current_weather=true&temperature_unit=${unit}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setTemperature(Math.round(data.current_weather.temperature));
        setWeatherCode(data.current_weather.weathercode);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        // Set a default temperature on error so the UI doesn't break
        setTemperature(unit === "celsius" ? 15 : 59);
        setWeatherCode(0);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [unit]);

  return { temperature, weatherCode, loading, error };
};
