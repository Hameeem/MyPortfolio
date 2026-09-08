"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Briefcase, CheckCircle2, HeartHandshake, User } from "lucide-react";

export const AboutSection: React.FC = () => {
  const skillCategories = [
    { title: "Core Languages", items: ["Python 🐍", "Java ☕", "C++", "C", "SQL / MySQL 🐬", "JavaScript"] },
    { title: "Data & Machine Learning", items: ["Pandas & NumPy", "PySpark & ETL", "Hadoop & Hive", "Cassandra & HBase", "Power BI / Tableau"] },
    { title: "Frameworks & Developer Tools", items: ["Streamlit & Plotly", "Docker & Linux 🐧", "Git & GitHub 🐙", "LeetCode (hameem8)", "VS Code"] },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-theme-fill/20 border-y-2 border-theme-line relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-theme-line pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-theme-subtext mb-2">
              <User className="w-4 h-4 text-theme-line" />
              <span>Background & Skills</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-theme-text">
              About & Technical Ethos
            </h2>
          </div>
          <p className="text-sm text-theme-subtext max-w-md">
            Computer Science student passionate about Data Engineering, Distributed Systems, AI, and solving LeetCode problems.
          </p>
        </div>

        {/* Top Grid: Bio Cards & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: The Bio */}
          <div className="bg-theme-card border-2 border-theme-line rounded-2xl p-6 sm:p-8 shadow-neo space-y-4">
            <div className="w-10 h-10 rounded-xl bg-theme-fill border border-theme-line flex items-center justify-center text-theme-line">
              <User className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-extrabold text-xl text-theme-text">The Story</h3>
            <p className="text-sm text-theme-subtext leading-relaxed">
              Hameem is a Computer Science student and developer driven by data engineering, machine learning pipelines, and algorithm optimization.
            </p>
          </div>

          {/* Card 2: Philosophy */}
          <div className="bg-theme-card border-2 border-theme-line rounded-2xl p-6 sm:p-8 shadow-neo space-y-4">
            <div className="w-10 h-10 rounded-xl bg-theme-fill border border-theme-line flex items-center justify-center text-theme-line">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-extrabold text-xl text-theme-text">Mission</h3>
            <p className="text-sm text-theme-subtext leading-relaxed">
              Turning raw data into actionable insights and turning complex technical problems into elegant, real-world applications.
            </p>
          </div>

          {/* Card 3: Personality Quirks */}
          <div className="bg-theme-card border-2 border-theme-line rounded-2xl p-6 sm:p-8 shadow-neo space-y-4">
            <div className="w-10 h-10 rounded-xl bg-theme-fill border border-theme-line flex items-center justify-center text-theme-line">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-extrabold text-xl text-theme-text">Highlights</h3>
            <ul className="text-xs font-mono space-y-2.5 text-theme-subtext">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Active LeetCode Problem Solver (hameem8)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>NCSC State Level Participant 🏅</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Built DataFlowX & Detective Dank AI</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Always learning something new 🚀</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <h3 className="font-serif font-extrabold text-2xl text-theme-text">Experience Timeline</h3>
          <div className="space-y-6">
            {siteConfig.experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-theme-card border-2 border-theme-line rounded-2xl p-6 sm:p-8 shadow-neo flex flex-col md:flex-row md:items-center justify-between gap-6 hover:translate-x-1 transition-transform"
              >
                <div className="space-y-2 md:w-1/3">
                  <span className="px-3 py-1 rounded-full bg-theme-fill border border-theme-line text-xs font-mono font-bold text-theme-text">
                    {exp.year}
                  </span>
                  <h4 className="font-serif font-bold text-xl text-theme-text">{exp.role}</h4>
                  <div className="text-xs font-mono text-theme-subtext">
                    {exp.company} • {exp.location}
                  </div>
                </div>

                <div className="space-y-3 md:w-2/3">
                  <p className="text-sm text-theme-subtext leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-0.5 rounded bg-theme-bg border border-theme-line/30 text-[11px] font-mono font-semibold text-theme-subtext"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="bg-theme-card border-2 border-theme-line rounded-2xl p-8 shadow-neo-lg space-y-6">
          <h3 className="font-serif font-extrabold text-2xl text-theme-text">Skills & Tooling Matrix</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-theme-line font-bold">
                  {cat.title}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-theme-text font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-theme-line" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
