"use client";

import React from "react";
import {
  Code2,
  Smartphone,
  Server,
  Wrench,
  Globe,
  FileCode,
  Braces,
  Code,
  Palette,
  Wind,
  Workflow,
  Zap,
  Bell,
  Share2,
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
import ScrollReveal from "./ScrollReveal";

export interface SkillItem {
  name: string;
  category: "frontend" | "mobile" | "backend" | "tools";
  categoryKey: "frontend" | "mobile" | "backend" | "apis" | "tools" | "design";
  badge: string;
  icon: LucideIcon;
}

// 25 Skills strictly from SALEM BAABBAD CV
export const allSkills: SkillItem[] = [
  // Frontend (8)
  { name: "React", category: "frontend", categoryKey: "frontend", badge: "UI", icon: Code2 },
  { name: "Next.js", category: "frontend", categoryKey: "frontend", badge: "SSR", icon: Globe },
  { name: "TypeScript", category: "frontend", categoryKey: "frontend", badge: "TS", icon: FileCode },
  { name: "JavaScript (ES6+)", category: "frontend", categoryKey: "frontend", badge: "JS", icon: Braces },
  { name: "HTML5", category: "frontend", categoryKey: "frontend", badge: "WEB", icon: Code },
  { name: "CSS3", category: "frontend", categoryKey: "frontend", badge: "CSS", icon: Palette },
  { name: "Tailwind CSS", category: "frontend", categoryKey: "frontend", badge: "UI", icon: Wind },
  { name: "State Management (Context API / Redux)", category: "frontend", categoryKey: "frontend", badge: "STATE", icon: Workflow },

  // Mobile (4)
  { name: "React Native", category: "mobile", categoryKey: "mobile", badge: "APP", icon: Smartphone },
  { name: "Expo", category: "mobile", categoryKey: "mobile", badge: "DX", icon: Zap },
  { name: "Push Notifications", category: "mobile", categoryKey: "mobile", badge: "PUSH", icon: Bell },
  { name: "Cross-Platform Deployment", category: "mobile", categoryKey: "mobile", badge: "DEPLOY", icon: Share2 },

  // Backend & APIs (6)
  { name: "Node.js", category: "backend", categoryKey: "backend", badge: "RUNTIME", icon: Server },
  { name: "REST APIs", category: "backend", categoryKey: "apis", badge: "API", icon: Network },
  { name: "Supabase", category: "backend", categoryKey: "backend", badge: "BaaS", icon: Database },
  { name: "PostgreSQL", category: "backend", categoryKey: "backend", badge: "SQL", icon: HardDrive },
  { name: "Real-time Feeds", category: "backend", categoryKey: "apis", badge: "LIVE", icon: Radio },
  { name: "LLM Integration (OpenAI API)", category: "backend", categoryKey: "apis", badge: "AI", icon: Bot },

  // Tools & Design (7)
  { name: "Git", category: "tools", categoryKey: "tools", badge: "VCS", icon: GitBranch },
  { name: "GitHub", category: "tools", categoryKey: "tools", badge: "GIT", icon: GitPullRequest },
  { name: "GitHub Actions", category: "tools", categoryKey: "tools", badge: "CI/CD", icon: PlayCircle },
  { name: "Figma", category: "tools", categoryKey: "design", badge: "UI/UX", icon: Layout },
  { name: "Vercel", category: "tools", categoryKey: "tools", badge: "CLOUD", icon: Triangle },
  { name: "Microsoft Excel", category: "tools", categoryKey: "tools", badge: "DATA", icon: Table },
  { name: "Google Analytics", category: "tools", categoryKey: "tools", badge: "ANALYTICS", icon: BarChart3 },
];

// Official Real Tech Icons mapped from Devicon & Official Brand Logos CDN
const TECH_ICON_URLS: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "State Management (Context API / Redux)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Expo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
  "Push Notifications": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "Cross-Platform Deployment": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Real-time Feeds": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  "LLM Integration (OpenAI API)": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/openai.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  "Microsoft Excel": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/microsoft-excel.svg",
  "Google Analytics": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/google-analytics.svg",
};

function TechIcon({ name, className = "w-9 h-9 sm:w-11 sm:h-11" }: { name: string; className?: string }) {
  const iconUrl = TECH_ICON_URLS[name];
  if (!iconUrl) {
    return <Code2 className={`${className} text-[#064E3B]`} />;
  }
  return (
    <img
      src={iconUrl}
      alt={name}
      loading="lazy"
      draggable={false}
      className={`${className} object-contain select-none`}
    />
  );
}

// Helpers for repeating row items seamlessly in marquee
function makeLoopRow(items: SkillItem[], repeats = 4): SkillItem[] {
  let list: SkillItem[] = [];
  for (let i = 0; i < repeats; i++) {
    list = list.concat(items);
  }
  return [...list, ...list];
}

export default function SkillsSection() {
  const { t } = useLanguage();

  // Split all 25 skills into 2 vibrant rows of transparent square tiles
  const row1Skills = [
    allSkills[0], // React
    allSkills[1], // Next.js
    allSkills[2], // TypeScript
    allSkills[3], // JavaScript
    allSkills[4], // HTML5
    allSkills[5], // CSS3
    allSkills[6], // Tailwind CSS
    allSkills[8], // React Native
    allSkills[9], // Expo
    allSkills[21], // Figma
    allSkills[18], // Git
    allSkills[19], // GitHub
    allSkills[22], // Vercel
  ];

  const row2Skills = [
    allSkills[12], // Node.js
    allSkills[13], // REST APIs
    allSkills[14], // Supabase
    allSkills[15], // PostgreSQL
    allSkills[17], // LLM Integration (OpenAI API)
    allSkills[16], // Real-time Feeds
    allSkills[7],  // State Management
    allSkills[10], // Push Notifications
    allSkills[11], // Cross-Platform Deployment
    allSkills[20], // GitHub Actions
    allSkills[23], // Microsoft Excel
    allSkills[24], // Google Analytics
  ];

  const loop1 = makeLoopRow(row1Skills, 4);
  const loop2 = makeLoopRow(row2Skills, 4);

  // Category data for the bottom cards
  const categoryCards = [
    {
      code: "01 FRONT",
      title: t.skills.categoryDetails.frontend.title,
      icon: Code2,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "State Management (Context API / Redux)",
      ],
    },
    {
      code: "02 MOBI",
      title: t.skills.categoryDetails.mobile.title,
      icon: Smartphone,
      skills: [
        "React Native",
        "Expo",
        "Push Notifications",
        "Cross-Platform Deployment",
      ],
    },
    {
      code: "03 BACK",
      title: t.skills.categoryDetails.backend.title,
      icon: Server,
      skills: [
        "Node.js",
        "REST APIs",
        "Supabase",
        "PostgreSQL",
        "Real-time Feeds",
        "LLM Integration (OpenAI API)",
      ],
    },
    {
      code: "04 TOOL",
      title: t.skills.categoryDetails.tools.title,
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "Figma",
        "Vercel",
        "Microsoft Excel",
        "Google Analytics",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-transparent overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full pointer-events-none opacity-40 blur-[130px] bg-gradient-to-tr from-[#F8E7C9] via-[#FAF4EA] to-transparent -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Centered like the other sections */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8E7C9]/60 border border-[#064E3B]/15 text-[#064E3B] text-xs font-heading font-bold mb-2.5 sm:mb-3 shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-[#064E3B]" />
            <span>{t.skills.tag}</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-[#064E3B] tracking-tight">
            {t.skills.heading}
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#064E3B]/80 font-normal max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </ScrollReveal>
      </div>

      {/* Moving Tech Icons Ribbons (Frameless Marquee) */}
      <ScrollReveal delay={0.1} className="relative w-full overflow-hidden space-y-6 py-4" dir="ltr">
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#FAF4EA] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#FAF4EA] to-transparent z-20" />

        {/* Row 1 - Moving Left */}
        <div className="overflow-hidden py-3">
          <div
            className="animate-skill-marquee-left flex items-center gap-8 sm:gap-12 hover:[animation-play-state:paused]"
            style={{ animationDuration: "30s" }}
          >
            {loop1.map((item, idx) => (
              <div
                key={`r1-${item.name}-${idx}`}
                className="flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer group relative shrink-0"
              >
                <TechIcon name={item.name} className="w-9 h-9 sm:w-11 sm:h-11" />
                {/* Floating tooltip */}
                <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#064E3B] text-[#F8E7C9] text-[10px] font-heading font-bold whitespace-nowrap shadow-md transition-opacity duration-200 z-30">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right (opposite direction for dynamic flow) */}
        <div className="overflow-hidden py-3">
          <div
            className="animate-skill-marquee-right flex items-center gap-8 sm:gap-12 hover:[animation-play-state:paused]"
            style={{ animationDuration: "34s" }}
          >
            {loop2.map((item, idx) => (
              <div
                key={`r2-${item.name}-${idx}`}
                className="flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer group relative shrink-0"
              >
                <TechIcon name={item.name} className="w-9 h-9 sm:w-11 sm:h-11" />
                {/* Floating tooltip */}
                <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#064E3B] text-[#F8E7C9] text-[10px] font-heading font-bold whitespace-nowrap shadow-md transition-opacity duration-200 z-30">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Category Breakdown Cards (Matching the reference layout) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-10 sm:mt-14 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {categoryCards.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <ScrollReveal
                key={cat.code}
                delay={idx * 0.08}
                className="h-full"
              >
                <div
                  className="glow-card p-3 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl shadow-xs transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Top code pill + icon */}
                    <div className="flex items-center justify-between gap-1 sm:gap-2 pb-2.5 sm:pb-4 mb-2 sm:mb-3 border-b border-[#064E3B]/10">
                      <span className="font-mono text-[9px] sm:text-[11px] font-bold tracking-wider text-[#064E3B] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#F8E7C9]/60 border border-[#064E3B]/12">
                        {cat.code}
                      </span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#F8E7C9]/40 border border-[#064E3B]/10 flex items-center justify-center text-[#064E3B] group-hover:scale-110 transition-transform">
                        <CatIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    {/* Category Title */}
                    <h3 className="font-heading text-xs sm:text-lg md:text-xl font-extrabold text-[#064E3B] leading-snug mb-2.5 sm:mb-5">
                      {cat.title}
                    </h3>

                    {/* Arrow-prefixed skills list */}
                    <ul className="space-y-1.5 sm:space-y-2.5 text-[10px] sm:text-xs md:text-sm text-[#064E3B]/85 font-medium">
                      {cat.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-start gap-1.5 sm:gap-2.5 group/item transition-colors"
                        >
                          <span className="text-[#064E3B] font-mono font-bold text-[10px] sm:text-xs select-none group-hover/item:translate-x-1 rtl:group-hover/item:-translate-x-1 transition-transform shrink-0 mt-0.5">
                            &gt;
                          </span>
                          <span className="group-hover/item:text-[#064E3B] group-hover/item:font-bold transition-all leading-tight">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
