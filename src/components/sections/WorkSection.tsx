"use client";

import React, { useState } from "react";
import { siteConfig, Project } from "@/config/siteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, Sparkles, X } from "lucide-react";

export const WorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Data Engineering", "AI & ML", "Web Apps", "DSA & Systems"];

  const filteredProjects = selectedCategory === "All"
    ? siteConfig.projects
    : siteConfig.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 px-6 md:px-12 bg-theme-bg relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-theme-line pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-theme-subtext mb-2">
              <Layers className="w-4 h-4 text-theme-line" />
              <span>Portfolio & Showcase</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-theme-text">
              Selected Work
            </h2>
          </div>
          <p className="text-sm text-theme-subtext max-w-md">
            A curated selection of interactive web tools, creative coding experiments, and component systems built for client and open-source projects.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border-2 border-theme-line shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
                selectedCategory === cat
                  ? "bg-theme-fill text-theme-text"
                  : "bg-theme-card text-theme-subtext hover:text-theme-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer bg-theme-card border-2 border-theme-line rounded-2xl p-6 sm:p-8 shadow-neo-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-theme-fill border border-theme-line text-[11px] font-mono font-bold text-theme-text">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-theme-subtext">{project.year}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif font-extrabold text-2xl text-theme-text group-hover:text-theme-line transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-theme-subtext mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-theme-subtext leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer Tag Pills & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-theme-bg border border-theme-line/30 text-[10px] font-mono font-semibold text-theme-subtext"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-theme-line/20 flex items-center justify-between text-xs font-bold text-theme-text">
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5 text-theme-line">
                      <span>View Details & Demo</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-theme-bg border border-theme-line hover:bg-theme-fill transition-colors"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4 text-theme-text" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-theme-fill border border-theme-line hover:bg-theme-accent hover:text-white transition-colors"
                          title="Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Detail View */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-theme-card border-2 border-theme-line rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-neo-lg space-y-6 relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-lg bg-theme-bg border-2 border-theme-line text-theme-text font-bold shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-theme-subtext">
                    <span className="px-2.5 py-0.5 rounded bg-theme-fill border border-theme-line text-theme-text">
                      {activeModalProject.category}
                    </span>
                    <span>• {activeModalProject.year}</span>
                    <span>• Role: {activeModalProject.role}</span>
                  </div>
                  <h3 className="font-serif font-black text-3xl text-theme-text">
                    {activeModalProject.title}
                  </h3>
                  <p className="font-mono text-xs font-bold text-theme-subtext">
                    {activeModalProject.subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-theme-fill/30 border border-theme-line/30 text-sm text-theme-text leading-relaxed">
                  {activeModalProject.description}
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-theme-subtext mb-3">
                    Technologies & Concepts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-theme-bg border border-theme-line/40 text-xs font-mono font-bold text-theme-text"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-theme-line/20 flex flex-wrap gap-4 justify-end">
                  {activeModalProject.github && (
                    <a
                      href={activeModalProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-theme-bg text-theme-text font-bold text-xs border-2 border-theme-line shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {activeModalProject.link && (
                    <a
                      href={activeModalProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-theme-accent text-white font-bold text-xs border-2 border-theme-line shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Project</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
