"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative bg-zinc-50/70 dark:bg-zinc-900/30 border-y border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-700 dark:text-zinc-300 font-heading font-bold text-xs tracking-widest uppercase">
            {t.experience.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50">
            {t.experience.heading}
          </h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
            {t.experience.subtitle}
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 dark:from-zinc-700 dark:via-white dark:to-zinc-700 mx-auto rounded-full"></div>
        </div>

        {/* Experience Card */}
        <div className="space-y-6">
          <div className="glow-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/10 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-heading text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {t.experience.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-zinc-100 text-[11px] font-bold border border-black/10 dark:border-white/10">
                    {t.experience.type}
                  </span>
                </div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                  {t.experience.company} •{" "}
                  <span className="text-zinc-600 dark:text-zinc-400 font-normal">{t.experience.location}</span>
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-zinc-950 dark:text-zinc-50 text-xs font-bold self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{t.experience.period}</span>
              </div>
            </div>

            <p className="mt-5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {t.experience.description}
            </p>

            <div className="mt-5">
              <h4 className="text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-bold font-heading mb-3">
                {t.experience.responsibilitiesTitle}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                {t.experience.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 shrink-0 mt-2"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-700 dark:text-zinc-300 font-bold mr-1">
                {t.experience.toolsTitle}
              </span>
              {t.experience.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-medium border border-black/5 dark:border-white/10"
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
