import { memo } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export const ThemeToggle = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors mb-0.5 w-8 h-8 flex items-center justify-center"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      ) : (
        <Sun className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      )}
    </button>
  );
});
