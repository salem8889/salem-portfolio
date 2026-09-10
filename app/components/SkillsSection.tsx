"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface SkillItem {
  name: string;
  category: "frontend" | "mobile" | "backend" | "tools";
  categoryKey: "frontend" | "mobile" | "backend" | "apis" | "tools" | "design";
}

const skillsList: SkillItem[] = [
  // Frontend
  { name: "React", category: "frontend", categoryKey: "frontend" },
  { name: "Next.js", category: "frontend", categoryKey: "frontend" },
  { name: "TypeScript", category: "frontend", categoryKey: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend", categoryKey: "frontend" },
  { name: "Tailwind CSS", category: "frontend", categoryKey: "frontend" },
  { name: "HTML5", category: "frontend", categoryKey: "frontend" },
  { name: "CSS3", category: "frontend", categoryKey: "frontend" },

  // Mobile
  { name: "React Native", category: "mobile", categoryKey: "mobile" },
  { name: "Expo", category: "mobile", categoryKey: "mobile" },

  // Backend & APIs
  { name: "Node.js", category: "backend", categoryKey: "backend" },
  { name: "REST APIs", category: "backend", categoryKey: "apis" },
  { name: "Supabase", category: "backend", categoryKey: "backend" },

  // Tools & Design
  { name: "Git", category: "tools", categoryKey: "tools" },
  { name: "GitHub", category: "tools", categoryKey: "tools" },
  { name: "Figma", category: "tools", categoryKey: "design" },
  { name: "Microsoft Excel", category: "tools", categoryKey: "tools" },
  { name: "Google Analytics", category: "tools", categoryKey: "tools" },
];

export default function SkillsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "mobile" | "backend" | "tools">("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsList
      : skillsList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-zinc-50/70 dark:bg-zinc-900/30 border-y border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-zinc-700 dark:text-zinc-300 font-heading font-bold text-xs tracking-widest uppercase">
            {t.skills.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50">
            {t.skills.heading}
          </h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
            {t.skills.subtitle}
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 dark:from-zinc-700 dark:via-white dark:to-zinc-700 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {(
            [
              { id: "all", label: t.skills.tabs.all },
              { id: "frontend", label: t.skills.tabs.frontend },
              { id: "mobile", label: t.skills.tabs.mobile },
              { id: "backend", label: t.skills.tabs.backend },
              { id: "tools", label: t.skills.tabs.tools },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-black dark:bg-white text-white dark:text-zinc-950 font-extrabold border border-black dark:border-white shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                  : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-black/10 dark:border-white/10 shadow-xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 shadow-xs hover:-translate-y-0.5 hover:shadow-md flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white group-hover:scale-125 transition-transform"></span>
                <span className="font-heading font-bold text-zinc-950 dark:text-zinc-50 text-sm sm:text-base">
                  {skill.name}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800 px-2.5 py-1 rounded-md border border-black/5 dark:border-white/10">
                {t.skills.categoryLabels[skill.categoryKey]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
