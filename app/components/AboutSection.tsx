"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-14 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[#064E3B]/80 font-heading font-bold text-xs tracking-widest uppercase">
            {t.about.tag}
          </span>
          <h2 className="mt-1.5 sm:mt-2 font-heading text-2xl sm:text-4xl font-extrabold text-[#064E3B]">
            {t.about.heading}
          </h2>
        </ScrollReveal>

        {/* Grid Layout: Avatar/Bio & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Avatar Box with Profile Image */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 flex flex-col">
            <div className="relative group w-full h-full flex flex-col">
              {/* Outer Ambient Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#F8E7C9] via-[#064E3B]/10 to-[#F8E7C9]/40 rounded-[28px] sm:rounded-[32px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-500 pointer-events-none" />

              {/* Avatar Container Card */}
              <div className="glow-card relative w-full h-full rounded-2xl sm:rounded-[28px] overflow-hidden p-4 sm:p-6 md:p-7 flex flex-col justify-between items-center sm:items-stretch gap-3 sm:gap-5 transition-all duration-500 hover:shadow-2xl">
                {/* Photo Container - Compact on mobile, restored full-width tall layout on desktop */}
                <div className="relative w-44 h-44 sm:w-full sm:h-72 lg:h-80 mx-auto sm:mx-0 rounded-2xl overflow-hidden border border-[#064E3B]/12 shadow-sm bg-[#FAF4EA]/50 group shrink-0">
                  <Image
                    src="/salem-profile.jpg"
                    alt={t.about.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 180px, 450px"
                    priority
                  />
                  {/* Soft gradient bottom fade on desktop */}
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-85 pointer-events-none" />
                </div>

                {/* Name & Title */}
                <div className="text-center px-1 sm:px-2 py-0.5 sm:py-1 w-full">
                  <h3 className="font-heading text-lg sm:text-2xl font-black text-[#064E3B] tracking-tight">
                    {t.about.name}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#064E3B]/80 font-semibold mt-1 leading-snug">
                    {t.about.role}
                  </p>
                </div>

                {/* Bottom metadata bar */}
                <div className="w-full pt-3 sm:pt-4 border-t border-[#064E3B]/10 flex items-center justify-center text-[11px] sm:text-xs text-[#064E3B]/75">
                  <span className="flex items-center gap-1 sm:gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#064E3B]/70" />
                    <span>{t.about.location}</span>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio Text & Details Enclosed in Frosted Glass Card */}
          <ScrollReveal delay={0.2} className="lg:col-span-7 flex flex-col">
            <div className="glow-card relative w-full h-full rounded-2xl sm:rounded-[28px] p-4 sm:p-7 md:p-8 shadow-sm flex flex-col justify-between gap-4 sm:gap-6">
              {/* Main Heading with Accent */}
              <div>
                <h3 className="font-heading text-base sm:text-2xl md:text-3xl font-bold text-[#064E3B] leading-snug">
                  {t.about.mainHeading}
                </h3>
                <div className="w-8 sm:w-12 h-1 bg-[#064E3B] rounded-full mt-1.5 sm:mt-3" />
              </div>

              {/* Bio Narrative Paragraphs */}
              <div className="space-y-2 sm:space-y-3.5">
                <p className="text-[11px] sm:text-sm md:text-base text-[#064E3B]/90 font-medium leading-relaxed">
                  {t.about.bioP1}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#064E3B]/80 leading-relaxed">
                  {t.about.bioP2}
                </p>
              </div>

              {/* Core Values / Focus Chips */}
              <div className="pt-1 sm:pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5">
                <div className="p-2.5 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white/60 hover:bg-white/85 backdrop-blur-md border border-white/70 hover:border-[#064E3B]/30 transition-all duration-300 shadow-2xs flex items-start gap-2 sm:gap-3 group/chip">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#064E3B] mt-1 shrink-0 shadow-xs group-hover/chip:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-heading text-[11px] sm:text-sm font-bold text-[#064E3B]">
                      {t.about.coreValues.pixelPerfect.title}
                    </h4>
                    <p className="text-[9.5px] sm:text-xs text-[#064E3B]/75 mt-0.5 leading-relaxed">
                      {t.about.coreValues.pixelPerfect.desc}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white/60 hover:bg-white/85 backdrop-blur-md border border-white/70 hover:border-[#064E3B]/30 transition-all duration-300 shadow-2xs flex items-start gap-2 sm:gap-3 group/chip">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#064E3B] mt-1 shrink-0 shadow-xs group-hover/chip:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-heading text-[11px] sm:text-sm font-bold text-[#064E3B]">
                      {t.about.coreValues.performance.title}
                    </h4>
                    <p className="text-[9.5px] sm:text-xs text-[#064E3B]/75 mt-0.5 leading-relaxed">
                      {t.about.coreValues.performance.desc}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white/60 hover:bg-white/85 backdrop-blur-md border border-white/70 hover:border-[#064E3B]/30 transition-all duration-300 shadow-2xs flex items-start gap-2 sm:gap-3 group/chip">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#064E3B] mt-1 shrink-0 shadow-xs group-hover/chip:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-heading text-[11px] sm:text-sm font-bold text-[#064E3B]">
                      {t.about.coreValues.crossPlatform.title}
                    </h4>
                    <p className="text-[9.5px] sm:text-xs text-[#064E3B]/75 mt-0.5 leading-relaxed">
                      {t.about.coreValues.crossPlatform.desc}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white/60 hover:bg-white/85 backdrop-blur-md border border-white/70 hover:border-[#064E3B]/30 transition-all duration-300 shadow-2xs flex items-start gap-2 sm:gap-3 group/chip">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#064E3B] mt-1 shrink-0 shadow-xs group-hover/chip:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-heading text-[11px] sm:text-sm font-bold text-[#064E3B]">
                      {t.about.coreValues.bilingual.title}
                    </h4>
                    <p className="text-[9.5px] sm:text-xs text-[#064E3B]/75 mt-0.5 leading-relaxed">
                      {t.about.coreValues.bilingual.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
