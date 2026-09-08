"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { InteractiveAvatar } from "../avatar/InteractiveAvatar";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles, Terminal } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Intro Statement (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left z-10"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-fill border-2 border-theme-line text-xs font-mono font-bold text-theme-text shadow-neo-sm">
            <Sparkles className="w-4 h-4 text-theme-line" />
            <span>Data Engineering • Python • AI Developer</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-theme-text tracking-tight">
            Hi, I&apos;m <span className="underline decoration-theme-line decoration-wavy decoration-2">{siteConfig.name.split(" ")[0]}</span>.
            <br />
            <span className="text-theme-subtext font-normal text-3xl sm:text-5xl lg:text-6xl block mt-2">
              Data & AI Engineer.
            </span>
          </h1>

          {/* Subheading / Description */}
          <p className="text-base sm:text-lg text-theme-subtext max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
            {siteConfig.name} is a Computer Science student passionate about building scalable data pipelines, AI models, and solving real-world algorithms.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#work"
              className="px-6 py-3.5 rounded-xl bg-theme-text text-theme-bg font-extrabold text-sm border-2 border-theme-line shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
            >
              <span>Explore Data & AI Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#playground"
              className="px-6 py-3.5 rounded-xl bg-theme-card text-theme-text font-bold text-sm border-2 border-theme-line shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-theme-line" />
              <span>Canvas Playground</span>
            </a>

            <a
              href={siteConfig.socials.find(s => s.name === "GitHub")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-theme-fill text-theme-text border-2 border-theme-line shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              title="GitHub Profile"
            >
              <Code2 className="w-5 h-5 text-theme-line" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 border-t border-theme-line/20 grid grid-cols-3 gap-4 text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <div>
              <div className="font-serif font-extrabold text-2xl text-theme-text">25+</div>
              <div className="text-xs text-theme-subtext font-mono">GitHub Repos</div>
            </div>
            <div>
              <div className="font-serif font-extrabold text-2xl text-theme-text">LeetCode</div>
              <div className="text-xs text-theme-subtext font-mono">Problem Solver</div>
            </div>
            <div>
              <div className="font-serif font-extrabold text-2xl text-theme-text">AI / Data</div>
              <div className="text-xs text-theme-subtext font-mono">Pipelines</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Vector Avatar (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end z-10"
        >
          <InteractiveAvatar />
        </motion.div>
      </div>
    </section>
  );
};
