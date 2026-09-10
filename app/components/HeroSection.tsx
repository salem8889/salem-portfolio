"use client";

import HeroCanvas from "./HeroCanvas";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Canvas Particle Background */}
      <HeroCanvas />

      {/* Subtle Ambient Glass Glow behind Hero */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] sm:w-[750px] sm:h-[450px] rounded-full pointer-events-none opacity-30 dark:opacity-15 blur-[120px] bg-gradient-to-tr from-zinc-300 via-zinc-400 to-transparent dark:from-zinc-500 dark:via-zinc-700 dark:to-transparent -z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Identity & Headline */}
        <div className="space-y-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] text-xs uppercase tracking-[0.2em] text-zinc-800 dark:text-zinc-200 font-bold font-heading shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.hero.name}
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-zinc-50 leading-[1.25] tracking-tight max-w-4xl">
            {t.hero.titleMain}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400">
              {t.hero.titleSub}
            </span>
          </h1>
        </div>

        {/* Professional Summary / Subtitle */}
        <p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* Tech Stack Chips (Glass Style) */}
        <div className="mt-7 flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-2xl">
          {["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS", "REST APIs", "UI/UX & Figma"].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl bg-white/50 dark:bg-white/[0.05] backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] text-zinc-900 dark:text-zinc-100 text-xs font-semibold hover:border-black/30 dark:hover:border-white/30 hover:bg-white/80 dark:hover:bg-white/[0.12] hover:text-black dark:hover:text-white transition-all shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons (Glassmorphic) */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-heading font-extrabold text-sm border border-black dark:border-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-all transform hover:-translate-y-0.5"
          >
            {t.hero.exploreProjects}
          </button>
          <a
            href="/SALEM_BAABBAD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/60 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] backdrop-blur-md text-zinc-950 dark:text-zinc-50 font-heading font-bold text-sm border border-black/[0.12] dark:border-white/[0.15] hover:border-black/30 dark:hover:border-white/30 shadow-xs transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>{t.hero.viewResume}</span>
            <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono font-bold">PDF ↗</span>
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] backdrop-blur-md text-zinc-900 dark:text-zinc-100 font-heading font-bold text-sm border border-black/[0.08] dark:border-white/[0.1] transition-all transform hover:-translate-y-0.5 shadow-xs"
          >
            {t.hero.getInTouch}
          </button>
        </div>

        {/* Quick Social / Contact Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
          <a
            href="https://github.com/salem8889"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
          >
            <span>GitHub</span>
            <span className="text-[10px]">↗</span>
          </a>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <a
            href="mailto:SALEM_BAABAD@outlook.sa"
            className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
          >
            <span>SALEM_BAABAD@outlook.sa</span>
          </a>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <a
            href="tel:+966509788768"
            className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
            dir="ltr"
          >
            <span>+966 50 978 8768</span>
          </a>
        </div>
      </div>
    </section>
  );
}
