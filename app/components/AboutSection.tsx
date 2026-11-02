"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#064E3B]/80 font-heading font-bold text-xs tracking-widest uppercase">
            {t.about.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-[#064E3B]">
            {t.about.heading}
          </h2>
        </div>

        {/* Grid Layout: Avatar/Bio & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar Box with Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Ambient Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#F8E7C9] via-[#064E3B]/10 to-[#F8E7C9]/40 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-500 pointer-events-none" />

              {/* Avatar Container Card */}
              <div className="glow-card relative w-full rounded-[28px] overflow-hidden p-6 flex flex-col gap-5 transition-all duration-500 hover:shadow-2xl">
                {/* Photo Container */}
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#064E3B]/12 shadow-sm bg-[#FAF4EA]/50 group">
                  <Image
                    src="/salem-profile.jpg"
                    alt={t.about.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  {/* Soft gradient bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-85 pointer-events-none" />
                </div>

                {/* Name & Title */}
                <div className="text-center px-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-[#064E3B] tracking-tight">
                    {t.about.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#064E3B]/80 font-semibold mt-1.5 leading-snug">
                    {t.about.role}
                  </p>
                </div>

                {/* Bottom metadata bar */}
                <div className="w-full pt-4 border-t border-[#064E3B]/10 flex items-center justify-between text-xs text-[#064E3B]/75 px-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#064E3B]/70" />
                    <span>{t.about.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8E7C9]/60 border border-[#064E3B]/15 text-[#064E3B] font-bold text-xs shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#064E3B] animate-pulse"></span>
                    <span>{t.about.availableBadge}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text & Details */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#064E3B] leading-snug">
              {t.about.mainHeading}
            </h3>

            <p className="text-[#064E3B]/80 text-base leading-relaxed">{t.about.bioP1}</p>

            <p className="text-[#064E3B]/80 text-base leading-relaxed">{t.about.bioP2}</p>

            {/* Core Values / Focus Chips */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 hover:border-[#064E3B]/30 hover:bg-white/85 transition-all duration-300 shadow-xs flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B] mt-1.5 shrink-0 shadow-xs"></span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#064E3B]">
                    {t.about.coreValues.pixelPerfect.title}
                  </h4>
                  <p className="text-xs text-[#064E3B]/75 mt-0.5 leading-relaxed">
                    {t.about.coreValues.pixelPerfect.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 hover:border-[#064E3B]/30 hover:bg-white/85 transition-all duration-300 shadow-xs flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B] mt-1.5 shrink-0 shadow-xs"></span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#064E3B]">
                    {t.about.coreValues.performance.title}
                  </h4>
                  <p className="text-xs text-[#064E3B]/75 mt-0.5 leading-relaxed">
                    {t.about.coreValues.performance.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 hover:border-[#064E3B]/30 hover:bg-white/85 transition-all duration-300 shadow-xs flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B] mt-1.5 shrink-0 shadow-xs"></span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#064E3B]">
                    {t.about.coreValues.crossPlatform.title}
                  </h4>
                  <p className="text-xs text-[#064E3B]/75 mt-0.5 leading-relaxed">
                    {t.about.coreValues.crossPlatform.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 hover:border-[#064E3B]/30 hover:bg-white/85 transition-all duration-300 shadow-xs flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B] mt-1.5 shrink-0 shadow-xs"></span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#064E3B]">
                    {t.about.coreValues.bilingual.title}
                  </h4>
                  <p className="text-xs text-[#064E3B]/75 mt-0.5 leading-relaxed">
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
