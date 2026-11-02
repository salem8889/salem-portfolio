"use client";

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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Subtle Ambient Champagne Glow behind Hero */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] sm:w-[750px] sm:h-[450px] rounded-full pointer-events-none opacity-45 blur-[120px] bg-gradient-to-tr from-[#F8E7C9] via-[#FAF4EA] to-transparent -z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Identity & Headline */}
        <div className="mb-4">
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-[#064E3B] leading-[1.25] tracking-tight max-w-4xl">
            {t.hero.titleMain}{" "}
            <span className="text-[#064E3B]">
              {t.hero.titleSub}
            </span>
          </h1>
        </div>

        {/* Professional Summary / Subtitle */}
        <p className="mt-3 text-base sm:text-lg md:text-xl text-[#064E3B]/80 max-w-3xl leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#064E3B] hover:bg-[#043629] text-[#F8E7C9] font-heading font-extrabold text-sm border border-[#064E3B] shadow-[0_4px_20px_rgba(6,78,59,0.25)] hover:shadow-[0_8px_25px_rgba(6,78,59,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            {t.hero.exploreProjects}
          </button>
          <a
            href="/SALEM_BAABBAD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F8E7C9]/70 hover:bg-[#F8E7C9] backdrop-blur-md text-[#064E3B] font-heading font-bold text-sm border border-[#064E3B]/20 hover:border-[#064E3B]/40 shadow-xs transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.hero.viewResume}</span>
            <span className="text-xs text-[#064E3B]/70 font-mono font-bold">PDF ↗</span>
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FFFDF9] hover:bg-[#F8E7C9]/50 backdrop-blur-md text-[#064E3B] font-heading font-bold text-sm border border-[#064E3B]/15 hover:border-[#064E3B]/35 transition-all transform hover:-translate-y-0.5 shadow-xs cursor-pointer"
          >
            {t.hero.getInTouch}
          </button>
        </div>

        {/* Quick Social / Contact Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#064E3B]/70 font-medium">
          <a
            href="https://www.linkedin.com/in/salem-baabbad-626592359/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#064E3B] transition-colors flex items-center gap-1.5 font-semibold"
          >
            <span>LinkedIn</span>
            <span className="text-[10px]">↗</span>
          </a>
          <span className="text-[#064E3B]/30">•</span>
          <a
            href="https://github.com/salem8889"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#064E3B] transition-colors flex items-center gap-1.5 font-semibold"
          >
            <span>GitHub</span>
            <span className="text-[10px]">↗</span>
          </a>
          <span className="text-[#064E3B]/30">•</span>
          <a
            href="mailto:SALEM_BAABAD@outlook.sa"
            className="hover:text-[#064E3B] transition-colors flex items-center gap-1.5 font-semibold"
          >
            <span>SALEM_BAABAD@outlook.sa</span>
          </a>
          <span className="text-[#064E3B]/30">•</span>
          <a
            href="tel:+966509788768"
            className="hover:text-[#064E3B] transition-colors flex items-center gap-1.5 font-semibold"
            dir="ltr"
          >
            <span>+966 50 978 8768</span>
          </a>
        </div>
      </div>
    </section>
  );
}
