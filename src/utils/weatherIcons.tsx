import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
} from "lucide-react";

// WMO Weather interpretation codes
// https://open-meteo.com/en/docs
export const getWeatherIcon = (weatherCode: number) => {
  // Clear sky
  if (weatherCode === 0) {
    return <Sun className="w-4 h-4 inline-block text-yellow-500" />;
  }

  // Mainly clear, partly cloudy, and overcast
  if (weatherCode >= 1 && weatherCode <= 3) {
    return <Cloud className="w-4 h-4 inline-block text-gray-400" />;
  }

  // Fog and depositing rime fog
  if (weatherCode >= 45 && weatherCode <= 48) {
    return <CloudFog className="w-4 h-4 inline-block text-gray-300" />;
  }

  // Drizzle: Light, moderate, and dense intensity
  if (weatherCode >= 51 && weatherCode <= 57) {
    return <CloudDrizzle className="w-4 h-4 inline-block text-blue-400" />;
  }

  // Rain: Slight, moderate and heavy intensity
  if (weatherCode >= 61 && weatherCode <= 67) {
    return <CloudRain className="w-4 h-4 inline-block text-blue-500" />;
  }

  // Snow fall: Slight, moderate, and heavy intensity
  if (weatherCode >= 71 && weatherCode <= 77) {
    return <CloudSnow className="w-4 h-4 inline-block text-cyan-300" />;
  }

  // Rain showers: Slight, moderate, and violent
  if (weatherCode >= 80 && weatherCode <= 82) {
    return <CloudRain className="w-4 h-4 inline-block text-blue-500" />;
  }

  // Snow showers slight and heavy
  if (weatherCode >= 85 && weatherCode <= 86) {
    return <CloudSnow className="w-4 h-4 inline-block text-cyan-300" />;
  }

  // Thunderstorm: Slight or moderate, with hail
  if (weatherCode >= 95 && weatherCode <= 99) {
    return <CloudLightning className="w-4 h-4 inline-block text-purple-500" />;
  }

  // Default to cloud icon
  return <Cloud className="w-4 h-4 inline-block text-gray-400" />;
};
