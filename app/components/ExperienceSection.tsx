"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative bg-zinc-50/70 border-y border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-500 font-heading font-bold text-xs tracking-widest uppercase">
            {t.experience.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-zinc-950">
            {t.experience.heading}
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base">
            {t.experience.subtitle}
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 mx-auto rounded-full"></div>
        </div>

        {/* Experience Card */}
        <div className="space-y-6">
          <div className="glow-card p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/10">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-heading text-xl font-bold text-zinc-950">
                    {t.experience.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/5 text-zinc-800 text-[11px] font-bold border border-black/10">
                    {t.experience.type}
                  </span>
                </div>
                <p className="text-sm font-semibold text-zinc-700 mt-1">
                  {t.experience.company} •{" "}
                  <span className="text-zinc-500 font-normal">{t.experience.location}</span>
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-900 text-xs font-bold self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{t.experience.period}</span>
              </div>
            </div>

            <p className="mt-5 text-sm text-zinc-600 leading-relaxed">
              {t.experience.description}
            </p>

            <div className="mt-5">
              <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-bold font-heading mb-3">
                {t.experience.responsibilitiesTitle}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
                {t.experience.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-black font-bold shrink-0 mt-0.5">✦</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-black/10 flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-500 font-medium mr-1">
                {t.experience.toolsTitle}
              </span>
              {t.experience.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-800 text-xs font-medium border border-black/5"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
