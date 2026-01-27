import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = memo(() => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const ariaLabel =
    theme === "light"
      ? t("accessibility.switchToDarkMode")
      : t("accessibility.switchToLightMode");

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors mb-0.5 w-8 h-8 flex items-center justify-center"
      aria-label={ariaLabel}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      ) : (
        <Sun className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      )}
    </button>
  );
});

export default ThemeToggle;
