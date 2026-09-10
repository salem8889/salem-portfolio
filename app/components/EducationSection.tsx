"use client";

import { useLanguage } from "../context/LanguageContext";

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-700 dark:text-zinc-300 font-heading font-bold text-xs tracking-widest uppercase">
            {t.education.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50">
            {t.education.heading}
          </h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
            {t.education.subtitle}
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 dark:from-zinc-700 dark:via-white dark:to-zinc-700 mx-auto rounded-full"></div>
        </div>

        {/* Education & Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Degree Card */}
          <div className="glow-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {t.education.degree.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 text-xs font-bold border border-black/10 dark:border-white/10">
                  {t.education.degree.period}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-zinc-950 dark:text-zinc-50">
                {t.education.degree.title}
              </h3>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                {t.education.degree.university}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {t.education.degree.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{t.education.degree.conferred}</span>
            </div>
          </div>

          {/* Certification Card */}
          <div className="glow-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {t.education.certification.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 text-xs font-bold border border-black/10 dark:border-white/10">
                  {t.education.certification.period}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-zinc-950 dark:text-zinc-50">
                {t.education.certification.title}
              </h3>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                {t.education.certification.issuer}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {t.education.certification.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
                <span>{t.education.certification.verified}</span>
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-medium">Satr Platform</span>
            </div>
          </div>
        </div>

        {/* Languages Banner */}
        <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading text-sm font-bold text-zinc-950 dark:text-zinc-50">
              {t.education.languages.title}
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
              {t.education.languages.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-xs text-center">
              <span className="block font-heading text-sm font-bold text-zinc-950 dark:text-zinc-50">
                {t.education.languages.arabic}
              </span>
            </div>
            <div className="px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-xs text-center">
              <span className="block font-heading text-sm font-bold text-zinc-950 dark:text-zinc-50">
                {t.education.languages.english}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
