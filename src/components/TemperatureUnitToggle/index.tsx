import { memo } from "react";
import { useTranslation } from "react-i18next";
import { TemperatureUnit } from "../../hooks/useWeather";

interface TemperatureUnitToggleProps {
  unit: TemperatureUnit;
  onToggle: () => void;
}

const TemperatureUnitToggle = memo(
  ({ unit, onToggle }: TemperatureUnitToggleProps) => {
    const { t } = useTranslation();

    const ariaLabel =
      unit === "celsius"
        ? t("accessibility.switchToFahrenheit")
        : t("accessibility.switchToCelsius");

    return (
      <button
        onClick={onToggle}
        className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors mb-0.5 w-8 h-8 flex items-center justify-center"
        aria-label={ariaLabel}
      >
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          °{unit === "celsius" ? "C" : "F"}
        </span>
      </button>
    );
  },
);

TemperatureUnitToggle.displayName = "TemperatureUnitToggle";

export default TemperatureUnitToggle;
