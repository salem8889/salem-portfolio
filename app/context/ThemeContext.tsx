"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";

export type Theme = "light";

interface ThemeContextType {
  theme: "light";
  isDark: false;
  toggleTheme: () => void;
  setTheme: (theme: "light") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("dark");
    root.style.colorScheme = "light";
    try {
      localStorage.removeItem("portfolio_theme");
    } catch {}
  }, []);

  const value = useMemo(
    () => ({
      theme: "light" as const,
      isDark: false as const,
      toggleTheme: () => {},
      setTheme: () => {},
    }),
    []
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
