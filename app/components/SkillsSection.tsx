"use client";

import { useState } from "react";
import {
  Code2,
  Globe,
  FileCode,
  Braces,
  Code,
  Palette,
  Wind,
  Workflow,
  Smartphone,
  Zap,
  Bell,
  Share2,
  Server,
  Network,
  Database,
  HardDrive,
  Radio,
  Bot,
  GitBranch,
  GitPullRequest,
  PlayCircle,
  Layout,
  Triangle,
  Table,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface SkillItem {
  name: string;
  category: "frontend" | "mobile" | "backend" | "tools";
  categoryKey: "frontend" | "mobile" | "backend" | "apis" | "tools" | "design";
  icon: LucideIcon;
}

// Exactly the 25 skills from SALEM BAABBAD CV - strictly maintained without adding or removing any skill
export const allSkills: SkillItem[] = [
  // Frontend Development (8)
  { name: "React", category: "frontend", categoryKey: "frontend", icon: Code2 },
  { name: "Next.js", category: "frontend", categoryKey: "frontend", icon: Globe },
  { name: "TypeScript", category: "frontend", categoryKey: "frontend", icon: FileCode },
  { name: "JavaScript (ES6+)", category: "frontend", categoryKey: "frontend", icon: Braces },
  { name: "HTML5", category: "frontend", categoryKey: "frontend", icon: Code },
  { name: "CSS3", category: "frontend", categoryKey: "frontend", icon: Palette },
  { name: "Tailwind CSS", category: "frontend", categoryKey: "frontend", icon: Wind },
  { name: "State Management (Context API / Redux)", category: "frontend", categoryKey: "frontend", icon: Workflow },

  // Mobile Development (4)
  { name: "React Native", category: "mobile", categoryKey: "mobile", icon: Smartphone },
  { name: "Expo", category: "mobile", categoryKey: "mobile", icon: Zap },
  { name: "Push Notifications", category: "mobile", categoryKey: "mobile", icon: Bell },
  { name: "Cross-Platform Deployment", category: "mobile", categoryKey: "mobile", icon: Share2 },

  // Backend & APIs (6)
  { name: "Node.js", category: "backend", categoryKey: "backend", icon: Server },
  { name: "REST APIs", category: "backend", categoryKey: "apis", icon: Network },
  { name: "Supabase", category: "backend", categoryKey: "backend", icon: Database },
  { name: "PostgreSQL", category: "backend", categoryKey: "backend", icon: HardDrive },
  { name: "Real-time Feeds", category: "backend", categoryKey: "apis", icon: Radio },
  { name: "LLM Integration (OpenAI API)", category: "backend", categoryKey: "apis", icon: Bot },

  // Tools & Design (7)
  { name: "Git", category: "tools", categoryKey: "tools", icon: GitBranch },
  { name: "GitHub", category: "tools", categoryKey: "tools", icon: GitPullRequest },
  { name: "GitHub Actions", category: "tools", categoryKey: "tools", icon: PlayCircle },
  { name: "Figma", category: "tools", categoryKey: "design", icon: Layout },
  { name: "Vercel", category: "tools", categoryKey: "tools", icon: Triangle },
  { name: "Microsoft Excel", category: "tools", categoryKey: "tools", icon: Table },
  { name: "Google Analytics", category: "tools", categoryKey: "tools", icon: BarChart3 },
];

// Helper to duplicate items for an endless -50% CSS marquee loop
function makeLoopItems(items: SkillItem[], repeatsPerHalf = 3): SkillItem[] {
  let half: SkillItem[] = [];
  for (let i = 0; i < repeatsPerHalf; i++) {
    half = half.concat(items);
  }
  // If still fewer than 16 items, keep duplicating to ensure continuous width across wide screens
  while (half.length < 16) {
    half = half.concat(items);
  }
  return [...half, ...half];
}

export default function SkillsSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "mobile" | "backend" | "tools">("all");

  // Track 1: Modern Web & UI
  const track1Skills: SkillItem[] = [
    allSkills[0], // React
    allSkills[1], // Next.js
    allSkills[2], // TypeScript
    allSkills[3], // JavaScript (ES6+)
    allSkills[6], // Tailwind CSS
    allSkills[4], // HTML5
    allSkills[5], // CSS3
    allSkills[7], // State Management
    allSkills[21], // Figma
  ];

  // Track 2: Mobile, AI & Real-time Systems
  const track2Skills: SkillItem[] = [
    allSkills[8], // React Native
    allSkills[9], // Expo
    allSkills[10], // Push Notifications
    allSkills[11], // Cross-Platform Deployment
    allSkills[17], // LLM Integration (OpenAI API)
    allSkills[16], // Real-time Feeds
    allSkills[14], // Supabase
    allSkills[15], // PostgreSQL
  ];

  // Track 3: Backend, DevOps, Deployment & Analytics
  const track3Skills: SkillItem[] = [
    allSkills[12], // Node.js
    allSkills[13], // REST APIs
    allSkills[18], // Git
    allSkills[19], // GitHub
    allSkills[20], // GitHub Actions
    allSkills[22], // Vercel
    allSkills[23], // Microsoft Excel
    allSkills[24], // Google Analytics
  ];

  const filteredSkills =
    activeTab === "all" ? null : allSkills.filter((s) => s.category === activeTab);

  const loopTrack1 = makeLoopItems(track1Skills, 3);
  const loopTrack2 = makeLoopItems(track2Skills, 3);
  const loopTrack3 = makeLoopItems(track3Skills, 3);

  const renderSkillChip = (skill: SkillItem, key: string) => {
    const Icon = skill.icon;
    const catLabel = t.skills.categoryLabels[skill.categoryKey] || skill.category;

    return (
      <div
        key={key}
        className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:border-black/35 dark:hover:border-white/35 transition-all duration-300 shrink-0 select-none group/chip cursor-pointer hover:scale-105"
      >
        <div className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-black/5 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-zinc-100 group-hover/chip:scale-110 group-hover/chip:bg-black group-hover/chip:text-white dark:group-hover/chip:bg-white dark:group-hover/chip:text-black transition-all shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-start">
          <span className="font-heading font-bold text-xs sm:text-sm text-zinc-950 dark:text-zinc-50 whitespace-nowrap">
            {skill.name}
          </span>
          <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium whitespace-nowrap">
            {catLabel}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 relative bg-zinc-50/70 dark:bg-zinc-900/30 border-y border-black/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
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

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
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
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-black dark:bg-white text-white dark:text-zinc-950 font-extrabold border border-black dark:border-white shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                  : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-black/10 dark:border-white/10 shadow-xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Free-flowing full-screen marquee - completely unbounded without boxes */}
      <div className="relative w-full overflow-hidden" dir="ltr">
        {/* Soft edge gradient masks so skills smoothly enter from the right and exit on the left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-48 bg-gradient-to-r from-zinc-50 dark:from-[#09090b] via-zinc-50/70 dark:via-[#09090b]/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-48 bg-gradient-to-l from-zinc-50 dark:from-[#09090b] via-zinc-50/70 dark:via-[#09090b]/70 to-transparent z-10" />

        {activeTab === "all" ? (
          <div className="space-y-4 sm:space-y-5 py-2">
            {/* Track 1 - Moving from Right to Left (speed: ~29s) */}
            <div className="overflow-hidden py-1">
              <div
                className="animate-skill-marquee-left flex items-center gap-3 sm:gap-4 hover:[animation-play-state:paused]"
                style={{ animationDuration: "29s" }}
              >
                {loopTrack1.map((skill, idx) =>
                  renderSkillChip(skill, `t1-${skill.name}-${idx}`)
                )}
              </div>
            </div>

            {/* Track 2 - Moving from Right to Left with subtle parallax offset (speed: ~37s) */}
            <div className="overflow-hidden py-1">
              <div
                className="animate-skill-marquee-left flex items-center gap-3 sm:gap-4 hover:[animation-play-state:paused]"
                style={{ animationDuration: "37s" }}
              >
                {loopTrack2.map((skill, idx) =>
                  renderSkillChip(skill, `t2-${skill.name}-${idx}`)
                )}
              </div>
            </div>

            {/* Track 3 - Moving from Right to Left (speed: ~32s) */}
            <div className="overflow-hidden py-1">
              <div
                className="animate-skill-marquee-left flex items-center gap-3 sm:gap-4 hover:[animation-play-state:paused]"
                style={{ animationDuration: "32s" }}
              >
                {loopTrack3.map((skill, idx) =>
                  renderSkillChip(skill, `t3-${skill.name}-${idx}`)
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4">
            {filteredSkills && (
              <div className="overflow-hidden py-1">
                <div
                  className="animate-skill-marquee-left flex items-center gap-3 sm:gap-4 hover:[animation-play-state:paused]"
                  style={{ animationDuration: "25s" }}
                >
                  {makeLoopItems(filteredSkills, 5).map((skill, idx) =>
                    renderSkillChip(skill, `filtered-${skill.name}-${idx}`)
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Subtle interaction tip */}
      <div className="mt-8 text-center px-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-800/80 border border-black/5 dark:border-white/5 text-[11px] text-zinc-600 dark:text-zinc-400 font-medium shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>
            {language === "ar"
              ? "حركة انسيابية مستمرة • مرر مؤشر الماوس للإيقاف"
              : "Continuous stream • Hover over any technology to pause"}
          </span>
        </span>
      </div>
    </section>
  );
}
