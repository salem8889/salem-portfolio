"use client";

import { useLanguage } from "../context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function ApproachSection() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-14 sm:py-24 relative bg-transparent border-y border-[#064E3B]/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[#064E3B]/80 font-heading font-bold text-xs tracking-widest uppercase">
            {t.approach.tag}
          </span>
          <h2 className="mt-1.5 sm:mt-2 font-heading text-2xl sm:text-4xl font-extrabold text-[#064E3B]">
            {t.approach.heading}
          </h2>
          <p className="mt-2 sm:mt-3 text-[#064E3B]/80 text-xs sm:text-base">
            {t.approach.subtitle}
          </p>
        </ScrollReveal>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          {t.approach.principles.map((p, idx) => (
            <ScrollReveal
              key={p.number}
              delay={(idx % 2) * 0.1}
              className="h-full"
            >
              <div
                className="glow-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span className="font-heading font-black text-lg sm:text-2xl text-[#064E3B]/40" dir="ltr">
                      {p.number}
                    </span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#064E3B]"></span>
                  </div>
                  <h3 className="font-heading text-base sm:text-xl font-bold text-[#064E3B]">
                    {p.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#064E3B]/80 mt-0.5 sm:mt-1">
                    {p.tagline}
                  </p>
                  <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm text-[#064E3B]/80 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
