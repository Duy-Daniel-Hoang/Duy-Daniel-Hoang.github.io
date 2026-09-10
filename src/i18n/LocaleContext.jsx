import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getMessage } from "./messages.js";

export const LOCALES = [
  { code: "en", label: "EN", name: "English" },
  { code: "vi", label: "VI", name: "Tiếng Việt" },
  { code: "ja", label: "日本語", name: "日本語" },
  { code: "ko", label: "한국어", name: "한국어" },
];

const STORAGE_KEY = "portfolio-locale";
const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (LOCALES.some(({ code }) => code === saved)) setLocaleState(saved);
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((nextLocale) => {
    if (!LOCALES.some(({ code }) => code === nextLocale)) return;
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      // In-memory language switching still works without persistent storage.
    }
  }, []);

  const t = useCallback((path) => getMessage(locale, path), [locale]);
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
