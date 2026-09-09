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

      {/* Radial Gradient Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-200/50 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-zinc-300/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-black/10 text-zinc-900 text-xs sm:text-sm font-semibold mb-6 shadow-xs backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
          </span>
          <span>{t.hero.statusBadge}</span>
        </div>

        {/* Identity & Headline */}
        <div className="space-y-2 mb-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 font-bold font-heading">
            {t.hero.name}
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 leading-[1.25] tracking-tight max-w-4xl">
            {t.hero.titleMain}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500">
              {t.hero.titleSub}
            </span>
          </h1>
        </div>

        {/* Professional Summary / Subtitle */}
        <p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-7 flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-2xl">
          {["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS", "REST APIs", "UI/UX & Figma"].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-lg bg-zinc-100/90 border border-black/10 text-zinc-800 text-xs font-semibold hover:border-black/30 hover:bg-white hover:text-black transition-all shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white font-heading font-extrabold text-sm border border-black shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-all transform hover:-translate-y-0.5"
          >
            {t.hero.exploreProjects}
          </button>
          <a
            href="/SALEM_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-heading font-bold text-sm border border-black/20 hover:border-black/40 shadow-xs transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>{t.hero.viewResume}</span>
            <span className="text-xs text-zinc-500">PDF ↗</span>
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-heading font-bold text-sm border border-black/10 transition-all transform hover:-translate-y-0.5"
          >
            {t.hero.getInTouch}
          </button>
        </div>

        {/* Quick Social / Contact Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-500 font-medium">
          <a
            href="https://github.com/salem8889"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors flex items-center gap-1.5"
          >
            <span>GitHub</span>
            <span className="text-[10px]">↗</span>
          </a>
          <span className="text-zinc-300">•</span>
          <a
            href="mailto:SALEM_BAABAD@outlook.sa"
            className="hover:text-black transition-colors flex items-center gap-1.5"
          >
            <span>SALEM_BAABAD@outlook.sa</span>
          </a>
          <span className="text-zinc-300">•</span>
          <a
            href="tel:+966509788768"
            className="hover:text-black transition-colors flex items-center gap-1.5"
            dir="ltr"
          >
            <span>+966 50 978 8768</span>
          </a>
        </div>
      </div>
    </section>
  );
}
