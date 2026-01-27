import { createContext } from "react";
import { TemperatureUnit } from "../hooks/useWeather";

export interface TemperatureUnitContextType {
  temperatureUnit: TemperatureUnit;
  toggleTemperatureUnit: () => void;
}

export const TemperatureUnitContext = createContext<
  TemperatureUnitContextType | undefined
>(undefined);
