"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-theme-card border-t-2 border-theme-line pt-16 pb-12 px-6 md:px-12 mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Left Column: Brand & Tagline */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center bg-theme-fill border-2 border-theme-line rounded-lg shadow-neo-sm">
              <Sparkles className="w-5 h-5 text-theme-line" />
            </div>
            <span className="font-serif font-extrabold text-2xl text-theme-text">
              {siteConfig.name}
            </span>
          </Link>
          <p className="text-sm text-theme-subtext leading-relaxed">
            {siteConfig.tagline}
          </p>
          <div className="text-xs font-mono text-theme-subtext">
            Based in {siteConfig.location} 🏴󠁧󠁢󠁷󠁬󠁳󠁿
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-base text-theme-text">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="text-theme-subtext hover:text-theme-line transition-colors">
                Home / Overview
              </a>
            </li>
            <li>
              <a href="#work" className="text-theme-subtext hover:text-theme-line transition-colors">
                Selected Work
              </a>
            </li>
            <li>
              <a href="#about" className="text-theme-subtext hover:text-theme-line transition-colors">
                About & Experience
              </a>
            </li>
            <li>
              <a href="#playground" className="text-theme-subtext hover:text-theme-line transition-colors">
                Canvas Playground
              </a>
            </li>
            <li>
              <a href="#contact" className="text-theme-subtext hover:text-theme-line transition-colors">
                Contact & Hire Me
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Social Links & Back to Top */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-base text-theme-text">Stay Connected</h4>
          <div className="flex flex-wrap gap-2">
            {siteConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-theme-fill text-theme-text border border-theme-line/40 text-xs font-bold shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                {social.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-theme-bg border-2 border-theme-line font-bold text-xs text-theme-text shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-6xl mx-auto border-t border-theme-line/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-theme-subtext">
        <div className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          <span>using Next.js & SVG Vector Magic</span>
        </div>
        <div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
      </div>
    </footer>
  );
};
