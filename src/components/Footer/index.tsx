import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Heart } from "lucide-react";
import TemperatureUnitToggle from "../TemperatureUnitToggle";
import ThemeToggle from "../ThemeToggle";
import { useTemperatureUnit } from "../../hooks/useTemperatureUnit";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const { temperatureUnit, toggleTemperatureUnit } = useTemperatureUnit();

  return (
    <footer className="mt-32 pt-8 border-t border-neutral-200 dark:border-neutral-700 flex justify-between flex-col md:flex-row items-center">
      <p className="text-sm text-neutral-400 dark:text-neutral-600">
        {t("footer.copyright", { year: currentYear })}
      </p>
      <div className="flex items-center gap-1">
        <p className="text-sm text-neutral-400 dark:text-neutral-600">
          {`${t("footer.builtWith")} `}
          <Heart className="w-4 h-4 inline-block text-red-500 mb-1" />
          {` ${t("footer.and")} `}
          <a
            href="https://bolt.new/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-500 dark:hover:text-neutral-500 transition-colors underline"
          >
            Bolt
          </a>
        </p>
        <TemperatureUnitToggle
          unit={temperatureUnit}
          onToggle={toggleTemperatureUnit}
        />
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
