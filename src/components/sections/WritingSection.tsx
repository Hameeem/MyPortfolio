"use client";

import React, { useState } from "react";
import { siteConfig, Article } from "@/config/siteConfig";
import { ArrowUpRight, BookOpen, Clock, Tag, X } from "lucide-react";

export const WritingSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="writing" className="py-20 px-6 md:px-12 bg-theme-fill/20 border-t-2 border-theme-line relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-theme-line pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-theme-subtext mb-2">
              <BookOpen className="w-4 h-4 text-theme-line" />
              <span>Articles & Insights</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-theme-text">
              Writing & Notes
            </h2>
          </div>
          <p className="text-sm text-theme-subtext max-w-md">
            Articles on creative development, vector math for UI interactions, CSS duotone filters, and web accessibility.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {siteConfig.articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer bg-theme-card border-2 border-theme-line rounded-2xl p-6 sm:p-8 shadow-neo hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-mono text-theme-subtext">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-serif font-extrabold text-2xl text-theme-text group-hover:text-theme-line transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-theme-subtext leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-theme-bg border border-theme-line/30 text-[10px] font-mono font-semibold text-theme-subtext"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2 font-bold text-xs text-theme-line group-hover:translate-x-1 transition-transform">
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-theme-card border-2 border-theme-line rounded-2xl p-6 sm:p-10 max-w-3xl w-full shadow-neo-lg space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-theme-bg border-2 border-theme-line text-theme-text font-bold shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-theme-subtext">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="font-serif font-black text-3xl sm:text-4xl text-theme-text leading-tight">
                  {activeArticle.title}
                </h3>
              </div>

              <div className="prose prose-theme max-w-none text-theme-text space-y-4 text-base leading-relaxed border-t border-b border-theme-line/20 py-6">
                <p className="font-medium text-lg text-theme-subtext leading-relaxed">
                  {activeArticle.excerpt}
                </p>
                <p>
                  Vector avatars and interactive web elements often feel flat when they only respond to rigid click events. By applying linear interpolation (lerp) to mouse velocity, we can give graphics natural momentum and inertia that mimics physical weight.
                </p>
                <p>
                  In this writeup, we explore how SVG clipping paths, trigonometry-driven head tilt math, and duotone matrix shaders come together to create delightful digital craftsmanship.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="flex gap-2">
                  {activeArticle.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded bg-theme-fill border border-theme-line text-xs font-mono font-bold text-theme-text"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-lg bg-theme-text text-theme-bg font-bold text-xs"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
