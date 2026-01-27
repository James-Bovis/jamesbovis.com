import { useState, ReactNode, useEffect } from "react";
import i18n from "../i18n";
import { Locale, LocaleContext } from "./LocaleContext";

const STORAGE_KEY = "locale";

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
    return savedLocale || "en";
  });

  useEffect(() => {
    i18n.changeLanguage(locale);
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
