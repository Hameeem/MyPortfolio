"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { MenuFlyout } from "./MenuFlyout";
import { ThemePicker } from "./ThemePicker";
import { Mail, Sparkles } from "lucide-react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-8 bg-theme-bg/80 backdrop-blur-md border-b border-theme-line/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with interactive vector mountain mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-theme-fill border-2 border-theme-line rounded-lg shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-theme-line stroke-[8]">
                <polygon points="50,15 15,85 85,85" />
                <polygon points="50,40 30,85 70,85" fill="var(--theme-line)" opacity="0.3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight text-theme-text group-hover:text-theme-line transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-xs font-mono text-theme-subtext hidden sm:inline">
                {siteConfig.role}
              </span>
            </div>
          </Link>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Status Pill Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-theme-card border border-theme-line/40 text-xs font-medium text-theme-text shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>

            {/* Theme Picker Dropdown / Button */}
            <ThemePicker />

            {/* Direct Contact Button */}
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=🤘 Hi Robb, I'd like to hire you`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-theme-accent text-white font-bold text-sm border-2 border-theme-line shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Hire me</span>
            </a>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative px-4 py-2 rounded-lg bg-theme-fill text-theme-text font-bold text-sm border-2 border-theme-line shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <Sparkles className="w-4 h-4 text-theme-line" />
              <span>{isMenuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Flyout Overlay */}
      <MenuFlyout isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
