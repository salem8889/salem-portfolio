"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative bg-transparent border-y border-[#064E3B]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#064E3B]/80 font-heading font-bold text-xs tracking-widest uppercase">
            {t.experience.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-[#064E3B]">
            {t.experience.heading}
          </h2>
          <p className="mt-3 text-[#064E3B]/80 text-sm sm:text-base">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Experience Card */}
        <div className="space-y-6">
          <div className="glow-card p-6 sm:p-8 rounded-3xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#064E3B]/10">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-heading text-xl font-bold text-[#064E3B]">
                    {t.experience.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F8E7C9]/60 text-[#064E3B] text-[11px] font-bold border border-[#064E3B]/15">
                    {t.experience.type}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#064E3B] mt-1">
                  {t.experience.company} •{" "}
                  <span className="text-[#064E3B]/70 font-normal">{t.experience.location}</span>
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8E7C9]/60 border border-[#064E3B]/15 text-[#064E3B] text-xs font-bold self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-[#064E3B]"></span>
                <span>{t.experience.period}</span>
              </div>
            </div>

            <p className="mt-5 text-sm text-[#064E3B]/80 leading-relaxed">
              {t.experience.description}
            </p>

            <div className="mt-5">
              <h4 className="text-xs uppercase tracking-wider text-[#064E3B] font-bold font-heading mb-3">
                {t.experience.responsibilitiesTitle}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#064E3B]/90">
                {t.experience.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] shrink-0 mt-2"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-[#064E3B]/10 flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#064E3B] font-bold mr-1">
                {t.experience.toolsTitle}
              </span>
              {t.experience.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-[#F8E7C9]/50 text-[#064E3B] text-xs font-semibold border border-[#064E3B]/12"
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
