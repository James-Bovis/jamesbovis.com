import { useContext } from "react";
import { TemperatureUnitContext } from "../contexts/TemperatureUnitContext";

export const useTemperatureUnit = () => {
  const context = useContext(TemperatureUnitContext);
  if (context === undefined) {
    throw new Error(
      "useTemperatureUnit must be used within a TemperatureUnitProvider",
    );
  }
  return context;
};
