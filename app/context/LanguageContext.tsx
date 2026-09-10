"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { Language, TranslationDictionary, translations } from "../data/translations";

interface LanguageContextType {
  language: Language;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang") as Language | null;
      if (saved === "ar" || saved === "en") {
        return saved;
      }
    }
    return "en";
  });

  const applyLanguage = useCallback((lang: Language) => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    applyLanguage(language);
  }, [applyLanguage, language]);

  const setLanguage = useCallback(
    (newLang: Language) => {
      setLanguageState(newLang);
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio_lang", newLang);
      }
      applyLanguage(newLang);
    },
    [applyLanguage]
  );

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === "en" ? "ar" : "en";
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio_lang", next);
      }
      applyLanguage(next);
      return next;
    });
  }, [applyLanguage]);

  const dir: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";
  const isRtl = language === "ar";
  const t = useMemo(() => translations[language], [language]);

  const value = useMemo(
    () => ({
      language,
      dir,
      isRtl,
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, dir, isRtl, setLanguage, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
