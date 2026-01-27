import { useState, ReactNode } from "react";
import { TemperatureUnit } from "../hooks/useWeather";
import { getDefaultTemperatureUnit } from "../utils/temperatureUnit";
import { TemperatureUnitContext } from "./TemperatureUnitContext";

export const TemperatureUnitProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(
    getDefaultTemperatureUnit(),
  );

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prev) =>
      prev === "celsius" ? "fahrenheit" : "celsius",
    );
  };

  return (
    <TemperatureUnitContext.Provider
      value={{ temperatureUnit, toggleTemperatureUnit }}
    >
      {children}
    </TemperatureUnitContext.Provider>
  );
};
