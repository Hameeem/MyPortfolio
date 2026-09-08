"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

type ThemeId = "dark-matrix" | "cyberpunk" | "blorenge" | "sunset";

interface ThemeContextType {
  currentTheme: ThemeId;
  setTheme: (id: ThemeId) => void;
  activeColors: typeof siteConfig.themes[0]["colors"];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("dark-matrix");

  const selectedTheme = siteConfig.themes.find((t) => t.id === currentTheme) || siteConfig.themes[0];

  useEffect(() => {
    const root = document.documentElement;
    const colors = selectedTheme.colors;

    root.style.setProperty("--theme-bg", colors.bg);
    root.style.setProperty("--theme-text", colors.text);
    root.style.setProperty("--theme-subtext", colors.subtext);
    root.style.setProperty("--theme-line", colors.line);
    root.style.setProperty("--theme-fill", colors.fill);
    root.style.setProperty("--theme-accent", colors.accent);
    root.style.setProperty("--theme-duo", colors.duo);
    root.style.setProperty("--theme-card", colors.card);
  }, [currentTheme, selectedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme: setCurrentTheme,
        activeColors: selectedTheme.colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
