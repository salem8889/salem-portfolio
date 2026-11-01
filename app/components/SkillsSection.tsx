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

// Tech Icon Renderer (Brand colors & iconic shapes in square tiles)
function TechIcon({ name, className = "w-7 h-7" }: { name: string; className?: string }) {
  switch (name) {
    case "React":
    case "React Native":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.8" className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#00D8FF" />
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#064E3B]`}>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.87 14.394l-5.696-7.39V16.5H8.75V7.5h1.616l5.72 7.42V7.5h1.424v9.006h-1.64z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#3178C6" />
          <path d="M6.5 9.5h5v2H9.8v5.5H7.7v-5.5H6.5v-2zm7 4c0-.7.6-1.3 1.3-1.3h2.2c.7 0 1.3.6 1.3 1.3v.4h-1.8v-.4c0-.2-.2-.3-.4-.3h-.8c-.2 0-.4.1-.4.3v.5c0 .3.2.5.5.6l1.5.6c.8.3 1.3.9 1.3 1.7v.4c0 .7-.6 1.3-1.3 1.3h-2.2c-.7 0-1.3-.6-1.3-1.3v-.4h1.8v.4c0 .2.2.3.4.3h.8c.2 0 .4-.1.4-.3v-.5c0-.3-.2-.5-.5-.6l-1.5-.6c-.8-.3-1.3-.9-1.3-1.7v-.4z" fill="#FFF" />
        </svg>
      );
    case "JavaScript (ES6+)":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#F7DF1E" />
          <path d="M7.5 16.5c.4.6 1 1 1.8 1 1 0 1.6-.6 1.6-1.6V10h-1.7v5.9c0 .3-.2.5-.5.5-.3 0-.5-.2-.7-.5l-.5.6zm6.2-1c.5.8 1.3 1.4 2.4 1.4 1 0 1.7-.5 1.7-1.3 0-.8-.7-1.2-1.8-1.6l-.6-.2c-1.6-.7-2.6-1.5-2.6-3.2 0-1.7 1.4-2.8 3.3-2.8 1.4 0 2.5.6 3.3 1.8l-1.3.9c-.4-.7-1-.1-1.9-.1-.9 0-1.5.5-1.5 1.1 0 .7.6 1.1 1.7 1.5l.6.2c1.8.7 2.8 1.6 2.8 3.3 0 1.9-1.5 3-3.6 3-2 0-3.3-1-4-2.2l1.6-.9z" fill="#000" />
        </svg>
      );
    case "HTML5":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 3l1.5 16.5 6.5 1.8 6.5-1.8L20 3H4zm13.3 5.8h-7.8l.2 2h7.4l-.5 6-4.6 1.3-4.6-1.3-.3-3.2h2l.2 1.6 2.6.7 2.6-.7.3-2.8H6.6L5.9 5h11.6l-.2 3.8z" fill="#E34F26" />
        </svg>
      );
    case "CSS3":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 3l1.5 16.5 6.5 1.8 6.5-1.8L20 3H4zm13.3 5.8h-7.8l.2 2h7.4l-.5 6-4.6 1.3-4.6-1.3-.3-3.2h2l.2 1.6 2.6.7 2.6-.7.3-2.8H6.6L5.9 5h11.6l-.2 3.8z" fill="#1572B6" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 6c-3 0-4.8 1.5-5.5 4.5 1.1-1.5 2.4-2.1 3.9-1.7.8.2 1.4.8 2.1 1.5C13.5 11.4 14.8 12.7 17.5 12.7c3 0 4.8-1.5 5.5-4.5-1.1 1.5-2.4 2.1-3.9 1.7-.8-.2-1.4-.8-2.1-1.5C16 7.4 14.7 6 12 6zm-5.5 6.7c-3 0-4.8 1.5-5.5 4.5 1.1-1.5 2.4-2.1 3.9-1.7.8.2 1.4.8 2.1 1.5C8 18.1 9.3 19.4 12 19.4c3 0 4.8-1.5 5.5-4.5-1.1 1.5-2.4 2.1-3.9 1.7-.8-.2-1.4-.8-2.1-1.5C10.5 14.1 9.2 12.7 6.5 12.7z" fill="#06B6D4" />
        </svg>
      );
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
          <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
          <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
          <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
          <path d="M8 12h4v4.5A2.5 2.5 0 0 1 8 19a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 8 12z" fill="#0ACF83" />
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M21.6 10.9L13.1 2.4a1.8 1.8 0 0 0-2.5 0L8.8 4.2l3.2 3.2a2.1 2.1 0 0 1 2.6 2.7l3.1 3.1a2.1 2.1 0 1 1-1.3 1.2l-2.8-2.8v4.9a2.1 2.1 0 1 1-1.8 0V11.2a2.1 2.1 0 0 1-1.1-2.7L7.5 5.3 2.4 10.4a1.8 1.8 0 0 0 0 2.5l8.5 8.5a1.8 1.8 0 0 0 2.5 0l8.2-8.2a1.8 1.8 0 0 0 0-2.3z" fill="#F05032" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#064E3B]`}>
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "Vercel":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#064E3B]`}>
          <path d="M12 2L24 22H0L12 2z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" fill="#339933" />
        </svg>
      );
    case "Supabase":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12.923 2.128a1 1 0 0 0-1.637-.024l-8.5 11.5a1 1 0 0 0 .848 1.583h7.289l-1.846 6.683a1 1 0 0 0 1.637.024l8.5-11.5a1 1 0 0 0-.848-1.583h-7.289l1.846-6.683z" fill="#3ECF8E" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.6 2 6.8 5 8.5v-3.2c-1-.5-1.8-1.4-2.2-2.5.8.3 1.6.4 2.4.4.2 0 .4 0 .6-.1-.1-.7-.1-1.4 0-2.1-.6-.2-1.2-.5-1.7-.9.4-.5.9-.8 1.5-1 .3-1.4 1.1-2.6 2.3-3.4-.2-.5-.3-1.1-.3-1.7 0-1.7 1.1-3 2.6-3.4 1.5.4 2.6 1.7 2.6 3.4 0 .6-.1 1.2-.3 1.7 1.2.8 2 2 2.3 3.4.6.2 1.1.5 1.5 1-.5.4-1.1.7-1.7.9.1.7.1 1.4 0 2.1.2 0 .4.1.6.1.8 0 1.6-.1 2.4-.4-.4 1.1-1.2 2-2.2 2.5v3.2c3-1.7 5-4.9 5-8.5 0-5.5-4.5-10-10-10z" fill="#336791" />
        </svg>
      );
    case "LLM Integration (OpenAI API)":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" fill="#10A37F" />
        </svg>
      );
    case "Expo":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#064E3B]`}>
          <path d="M12 2L1 21h22L12 2zm0 4.8l7.2 12.4H4.8L12 6.8z" />
        </svg>
      );
    case "GitHub Actions":
      return <PlayCircle className={`${className} text-[#2088FF]`} />;
    case "REST APIs":
      return <Network className={`${className} text-[#064E3B]`} />;
    case "Real-time Feeds":
      return <Radio className={`${className} text-[#E11D48]`} />;
    case "State Management (Context API / Redux)":
      return <Workflow className={`${className} text-[#764ABC]`} />;
    case "Push Notifications":
      return <Bell className={`${className} text-[#F59E0B]`} />;
    case "Cross-Platform Deployment":
      return <Share2 className={`${className} text-[#064E3B]`} />;
    case "Microsoft Excel":
      return <Table className={`${className} text-[#107C41]`} />;
    case "Google Analytics":
      return <BarChart3 className={`${className} text-[#E37400]`} />;
    default:
      return <Code2 className={`${className} text-[#064E3B]`} />;
  }
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
    <section id="skills" className="py-24 relative bg-[#FAF4EA] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full pointer-events-none opacity-40 blur-[130px] bg-gradient-to-tr from-[#F8E7C9] via-[#FAF4EA] to-transparent -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8E7C9]/60 border border-[#064E3B]/15 text-[#064E3B] text-xs font-heading font-bold mb-3 shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-[#064E3B]" />
            <span>{t.skills.tag}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#064E3B] tracking-tight">
            {t.skills.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#064E3B]/80 font-normal">
            {t.skills.subtitle}
          </p>
        </div>
      </div>

      {/* Moving Square Tiles Ribbons (Transparent Boxes Marquee) */}
      <div className="relative w-full overflow-hidden space-y-4 py-2" dir="ltr">
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#FAF4EA] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#FAF4EA] to-transparent z-20" />

        {/* Row 1 - Moving Left */}
        <div className="overflow-hidden py-1">
          <div
            className="animate-skill-marquee-left flex items-center gap-3.5 sm:gap-4 hover:[animation-play-state:paused]"
            style={{ animationDuration: "30s" }}
          >
            {loop1.map((item, idx) => (
              <div
                key={`r1-${item.name}-${idx}`}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFFDF9]/40 hover:bg-[#FFFDF9]/85 backdrop-blur-md border border-[#064E3B]/15 hover:border-[#064E3B]/40 flex items-center justify-center p-2.5 shadow-[0_2px_8px_rgba(6,78,59,0.03)] hover:shadow-[0_8px_20px_rgba(6,78,59,0.12)] hover:scale-110 transition-all duration-300 cursor-pointer group relative shrink-0"
              >
                <TechIcon name={item.name} className="w-7 h-7 sm:w-8 sm:h-8" />
                {/* Floating tooltip */}
                <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#064E3B] text-[#F8E7C9] text-[10px] font-heading font-bold whitespace-nowrap shadow-md transition-opacity duration-200 z-30">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right (opposite direction for dynamic flow) */}
        <div className="overflow-hidden py-1">
          <div
            className="animate-skill-marquee-right flex items-center gap-3.5 sm:gap-4 hover:[animation-play-state:paused]"
            style={{ animationDuration: "34s" }}
          >
            {loop2.map((item, idx) => (
              <div
                key={`r2-${item.name}-${idx}`}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFFDF9]/40 hover:bg-[#FFFDF9]/85 backdrop-blur-md border border-[#064E3B]/15 hover:border-[#064E3B]/40 flex items-center justify-center p-2.5 shadow-[0_2px_8px_rgba(6,78,59,0.03)] hover:shadow-[0_8px_20px_rgba(6,78,59,0.12)] hover:scale-110 transition-all duration-300 cursor-pointer group relative shrink-0"
              >
                <TechIcon name={item.name} className="w-7 h-7 sm:w-8 sm:h-8" />
                {/* Floating tooltip */}
                <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#064E3B] text-[#F8E7C9] text-[10px] font-heading font-bold whitespace-nowrap shadow-md transition-opacity duration-200 z-30">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Breakdown Cards (Matching the reference layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.code}
                className="glow-card p-6 sm:p-7 rounded-3xl bg-[#FFFDF9]/60 hover:bg-[#FFFDF9]/90 backdrop-blur-md border border-[#064E3B]/15 hover:border-[#064E3B]/35 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top code pill + icon */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-3 border-b border-[#064E3B]/10">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-[#064E3B] px-2.5 py-1 rounded-md bg-[#F8E7C9]/60 border border-[#064E3B]/12">
                      {cat.code}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#F8E7C9]/40 border border-[#064E3B]/10 flex items-center justify-center text-[#064E3B] group-hover:scale-110 transition-transform">
                      <CatIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#064E3B] leading-snug mb-5">
                    {cat.title}
                  </h3>

                  {/* Arrow-prefixed skills list */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#064E3B]/85 font-medium">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2.5 group/item transition-colors"
                      >
                        <span className="text-[#064E3B] font-mono font-bold text-xs select-none group-hover/item:translate-x-1 rtl:group-hover/item:-translate-x-1 transition-transform shrink-0 mt-0.5">
                          &gt;
                        </span>
                        <span className="group-hover/item:text-[#064E3B] group-hover/item:font-bold transition-all">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
