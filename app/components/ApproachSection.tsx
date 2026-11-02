"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ApproachSection() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-24 relative bg-transparent border-y border-[#064E3B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#064E3B]/80 font-heading font-bold text-xs tracking-widest uppercase">
            {t.approach.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-[#064E3B]">
            {t.approach.heading}
          </h2>
          <p className="mt-3 text-[#064E3B]/80 text-sm sm:text-base">
            {t.approach.subtitle}
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.approach.principles.map((p) => (
            <div
              key={p.number}
              className="glow-card p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-2xl text-[#064E3B]/40" dir="ltr">
                    {p.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#064E3B]"></span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#064E3B]">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-[#064E3B]/80 mt-1">
                  {p.tagline}
                </p>
                <p className="mt-4 text-xs sm:text-sm text-[#064E3B]/80 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
