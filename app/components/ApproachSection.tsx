"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ApproachSection() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-24 relative bg-zinc-50/70 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-500 font-heading font-bold text-xs tracking-widest uppercase">
            {t.approach.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-zinc-950">
            {t.approach.heading}
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base">
            {t.approach.subtitle}
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 mx-auto rounded-full"></div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.approach.principles.map((p) => (
            <div
              key={p.number}
              className="glow-card p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-2xl text-zinc-300" dir="ltr">
                    {p.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                </div>
                <h3 className="font-heading text-xl font-bold text-zinc-950">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-zinc-500 mt-1">
                  {p.tagline}
                </p>
                <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
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
