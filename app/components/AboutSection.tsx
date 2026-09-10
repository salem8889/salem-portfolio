"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-700 dark:text-zinc-300 font-heading font-bold text-xs tracking-widest uppercase">
            {t.about.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50">
            {t.about.heading}
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 dark:from-zinc-700 dark:via-white dark:to-zinc-700 mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout: Avatar/Bio & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar Box with Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              {/* Avatar Container */}
              <div className="relative w-full rounded-3xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 overflow-hidden p-5 shadow-xl flex flex-col gap-4">
                {/* Photo Container */}
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-inner group">
                  <Image
                    src="/salem-profile.jpg"
                    alt={t.about.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 dark:from-zinc-900/70 via-transparent to-transparent opacity-80" />
                </div>

                {/* Name & Title */}
                <div className="text-center px-2">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                    {t.about.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-semibold mt-1">
                    {t.about.role}
                  </p>
                </div>

                {/* Bottom metadata bar */}
                <div className="w-full pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 px-1">
                  <span>{t.about.location}</span>
                  <span className="flex items-center gap-1.5 text-zinc-950 dark:text-zinc-50 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{t.about.availableBadge}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text & Details */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-zinc-50 leading-snug">
              {t.about.mainHeading}
            </h3>

            <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">{t.about.bioP1}</p>

            <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">{t.about.bioP2}</p>

            {/* Core Values / Focus Chips */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white mt-1.5 shrink-0"></span>
                <div>
                  <h4 className="font-heading text-xs font-bold text-zinc-950 dark:text-zinc-50">
                    {t.about.coreValues.pixelPerfect.title}
                  </h4>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {t.about.coreValues.pixelPerfect.desc}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white mt-1.5 shrink-0"></span>
                <div>
                  <h4 className="font-heading text-xs font-bold text-zinc-950 dark:text-zinc-50">
                    {t.about.coreValues.performance.title}
                  </h4>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {t.about.coreValues.performance.desc}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white mt-1.5 shrink-0"></span>
                <div>
                  <h4 className="font-heading text-xs font-bold text-zinc-950 dark:text-zinc-50">
                    {t.about.coreValues.crossPlatform.title}
                  </h4>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {t.about.coreValues.crossPlatform.desc}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white mt-1.5 shrink-0"></span>
                <div>
                  <h4 className="font-heading text-xs font-bold text-zinc-950 dark:text-zinc-50">
                    {t.about.coreValues.bilingual.title}
                  </h4>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {t.about.coreValues.bilingual.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
