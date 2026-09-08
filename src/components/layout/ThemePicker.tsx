"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { siteConfig } from "@/config/siteConfig";
import { Palette, Check } from "lucide-react";

export const ThemePicker: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-lg bg-theme-fill text-theme-text border-2 border-theme-line shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center"
        title="Switch Color Theme"
        aria-label="Switch Theme"
      >
        <Palette className="w-4 h-4 text-theme-line" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-56 bg-theme-card border-2 border-theme-line rounded-xl p-2 shadow-neo-lg z-50 animate-in fade-in slide-in-from-top-2">
          <div className="px-3 py-1.5 font-serif font-bold text-xs uppercase tracking-wider text-theme-subtext border-b border-theme-line/20 mb-1">
            Select Color Palette
          </div>
          <div className="space-y-1">
            {siteConfig.themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id as any);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  currentTheme === theme.id
                    ? "bg-theme-fill text-theme-text border border-theme-line"
                    : "text-theme-subtext hover:bg-theme-bg hover:text-theme-text"
                }`}
              >
                <div className="flex items-center gap-2">
                  {/* Theme swatch previews */}
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-theme-line inline-block"
                    style={{ backgroundColor: theme.colors.fill }}
                  />
                  <span>{theme.name}</span>
                </div>
                {currentTheme === theme.id && <Check className="w-3.5 h-3.5 text-theme-line" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
