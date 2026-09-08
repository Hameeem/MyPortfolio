"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Mail, MessageSquare, Send, Sparkles, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "Freelance Project", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-theme-bg relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-theme-line pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-theme-subtext mb-2">
              <MessageSquare className="w-4 h-4 text-theme-line" />
              <span>Get In Touch</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-theme-text">
              Hire Me / Say Hi
            </h2>
          </div>
          <p className="text-sm text-theme-subtext max-w-md">
            Have an ambitious project, creative engineering query, or just want to chat vector graphics? Send a message below.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Card (5 Cols) */}
          <div className="lg:col-span-5 bg-theme-card border-2 border-theme-line rounded-2xl p-8 shadow-neo-lg space-y-6">
            <div className="w-12 h-12 rounded-xl bg-theme-fill border-2 border-theme-line flex items-center justify-center text-theme-line">
              <Mail className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-extrabold text-2xl text-theme-text">Let&apos;s build together</h3>
              <p className="text-sm text-theme-subtext leading-relaxed">
                Currently open for select freelance contracts, creative frontend consulting, and technical design system work.
              </p>
            </div>

            <div className="pt-4 border-t border-theme-line/20 space-y-4">
              <div>
                <div className="text-xs font-mono uppercase text-theme-subtext">Direct Email</div>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-serif font-extrabold text-lg text-theme-text hover:text-theme-line transition-colors underline decoration-theme-line"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-theme-subtext">Location</div>
                <div className="text-sm font-semibold text-theme-text">{siteConfig.location}</div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-4 border-t border-theme-line/20">
              <div className="text-xs font-mono uppercase text-theme-subtext mb-3">Find me online</div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-theme-bg border border-theme-line/40 text-xs font-bold text-theme-text hover:bg-theme-fill transition-all shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-theme-card border-2 border-theme-line rounded-2xl p-8 shadow-neo-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-black text-3xl text-theme-text">Message Received! 🤘</h3>
                <p className="text-sm text-theme-subtext max-w-sm mx-auto">
                  Thanks for reaching out! I will review your message and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-theme-fill border-2 border-theme-line font-bold text-xs text-theme-text shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-theme-text">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-theme-bg border-2 border-theme-line text-sm text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-line transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-theme-text">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-theme-bg border-2 border-theme-line text-sm text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-line transition-all"
                    />
                  </div>
                </div>

                {/* Project Type Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase text-theme-text">What can I help with?</label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-theme-bg border-2 border-theme-line text-sm text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-line transition-all"
                  >
                    <option value="Freelance Project">Freelance Project & Website</option>
                    <option value="Interactive Tech">Interactive SVG / WebGL Animation</option>
                    <option value="Consulting">Front-End Consulting & Audit</option>
                    <option value="Just Saying Hi">Just Saying Hi 👋</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase text-theme-text">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project goals, timeline, or idea..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-theme-bg border-2 border-theme-line text-sm text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-line transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-theme-accent text-white font-extrabold text-sm border-2 border-theme-line shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
