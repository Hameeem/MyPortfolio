"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Cloud, Rss, Mail } from "lucide-react";

interface MenuFlyoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuFlyout: React.FC<MenuFlyoutProps> = ({ isOpen, onClose }) => {
  const navLinks = [
    { label: "Home", href: "#hero", description: "Back to the top overview" },
    { label: "Selected Work", href: "#work", description: "My approach & featured projects" },
    { label: "About & Experience", href: "#about", description: "Background, skills & timeline" },
    { label: "Canvas Playground", href: "#playground", description: "Interactive vector experiments" },
    { label: "Writing", href: "#writing", description: "Thoughts on creative tech & CSS" },
    { label: "Contact", href: "#contact", description: "Let's build something together" },
  ];

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "cloud":
        return <Cloud className="w-5 h-5" />;
      case "rss":
        return <Rss className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-theme-bg/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-16 overflow-y-auto"
        >
          {/* Header Close Strip */}
          <div className="flex justify-between items-center max-w-6xl mx-auto w-full mb-8">
            <span className="font-serif font-bold text-xl text-theme-text">Navigation</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-theme-card border-2 border-theme-line font-bold text-sm text-theme-text shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              Close ✕
            </button>
          </div>

          {/* Main Links Container */}
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
            {/* Nav Links */}
            <ul className="space-y-6">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-theme-line/20 pb-4 hover:border-theme-line transition-colors"
                  >
                    <span className="font-serif font-extrabold text-3xl md:text-5xl text-theme-text group-hover:text-theme-line transition-colors flex items-center gap-3">
                      {link.label}
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-sm font-sans text-theme-subtext mt-1 sm:mt-0">
                      {link.description}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Side Info & Social Grid */}
            <div className="bg-theme-card border-2 border-theme-line rounded-2xl p-8 shadow-neo-lg space-y-8">
              <div>
                <h3 className="font-serif font-bold text-xl text-theme-text mb-2">Robb Owen Digital</h3>
                <p className="text-sm text-theme-subtext leading-relaxed">
                  Independent creative developer crafting interactive web applications, generative SVG filters, and high-performance user interfaces.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-theme-subtext mb-4">
                  Connect & Follow
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {siteConfig.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-theme-bg border border-theme-line/30 hover:border-theme-line text-theme-text hover:text-theme-line font-medium text-sm transition-all shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                    >
                      {getSocialIcon(social.icon)}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-theme-line/20 text-xs font-mono text-theme-subtext flex justify-between">
                <span>{siteConfig.location}</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="max-w-6xl mx-auto w-full text-center text-xs font-mono text-theme-subtext pt-8">
            Press ESC or click anywhere to close menu
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
