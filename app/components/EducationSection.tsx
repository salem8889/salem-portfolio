"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function EducationSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [previewCert, setPreviewCert] = useState<{
    title: string;
    issuer: string;
    period: string;
    imageUrl: string;
    credentialUrl: string;
  } | null>(null);

  const visibleCerts = showAll
    ? t.education.certificationsList
    : t.education.certificationsList.slice(0, 3);

  const remainingCount = t.education.certificationsList.length - 3;

  return (
    <section id="education" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#064E3B]/80 font-heading font-bold text-xs tracking-widest uppercase">
            {t.education.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-[#064E3B]">
            {t.education.heading}
          </h2>
          <p className="mt-3 text-[#064E3B]/80 text-sm sm:text-base">
            {t.education.subtitle}
          </p>
        </div>

        {/* Degree Card */}
        <div className="mb-10">
          <div className="glow-card p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#064E3B]/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B]/80">
                  {t.education.degree.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F8E7C9]/60 text-[#064E3B] text-xs font-bold border border-[#064E3B]/15">
                  {t.education.degree.period}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#064E3B]">
                {t.education.degree.title}
              </h3>
              <p className="text-sm font-semibold text-[#064E3B] mt-1">
                {t.education.degree.university}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-[#064E3B]/80 leading-relaxed">
                {t.education.degree.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#064E3B]/10 flex items-center gap-2 text-xs font-semibold text-[#064E3B]">
              <span className="w-2 h-2 rounded-full bg-[#064E3B]"></span>
              <span>{t.education.degree.conferred}</span>
            </div>
          </div>
        </div>

        {/* Certifications Grid: 2 columns on mobile, 3 columns on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-8">
          {visibleCerts.map((cert) => (
            <div
              key={cert.id}
              className="glow-card p-3 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FFFDF9] border border-[#064E3B]/15 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2 sm:mb-4">
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#064E3B]/80 truncate">
                    {cert.type}
                  </span>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F8E7C9]/60 text-[#064E3B] text-[9px] sm:text-xs font-bold border border-[#064E3B]/15 self-start sm:self-auto">
                    {cert.period}
                  </span>
                </div>

                {/* Certificate Image */}
                <div
                  onClick={() => setPreviewCert(cert)}
                  className="w-full h-24 sm:h-44 md:h-48 mb-2.5 sm:mb-5 rounded-xl sm:rounded-2xl bg-[#FAF4EA] border border-[#064E3B]/12 overflow-hidden cursor-pointer flex items-center justify-center p-1 sm:p-2 group hover:border-[#064E3B]/35 transition-all"
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-lg sm:rounded-xl group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>

                <h3 className="font-heading text-xs sm:text-base md:text-lg font-bold text-[#064E3B] leading-snug line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-[10px] sm:text-sm font-semibold text-[#064E3B] mt-0.5 sm:mt-1 truncate">
                  {cert.issuer}
                </p>
                <p className="mt-1.5 sm:mt-3 text-[10px] sm:text-xs md:text-sm text-[#064E3B]/80 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {cert.description}
                </p>
              </div>

              <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-[#064E3B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 text-xs">
                <span className="font-semibold text-[#064E3B] flex items-center gap-1 text-[9px] sm:text-xs">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#064E3B]"></span>
                  <span className="truncate">{cert.verified}</span>
                </span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#064E3B] hover:bg-[#043629] text-[#F8E7C9] font-heading font-bold text-[9px] sm:text-xs transition-all shadow-xs cursor-pointer w-full sm:w-auto text-center"
                >
                  {t.education.verifyBtn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {t.education.certificationsList.length > 3 && (
          <div className="flex justify-center mb-12">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-7 py-3 rounded-full bg-[#FFFDF9] hover:bg-[#F8E7C9] text-[#064E3B] font-heading font-bold text-xs sm:text-sm border border-[#064E3B]/20 shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>
                {showAll
                  ? t.education.showLess
                  : `${t.education.showMore} (+${remainingCount})`}
              </span>
              <span
                className={`transition-transform duration-200 inline-block ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>
          </div>
        )}

        {/* Languages Banner */}
        <div className="rounded-2xl bg-[#F8E7C9]/40 border border-[#064E3B]/15 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading text-sm font-bold text-[#064E3B]">
              {t.education.languages.title}
            </h4>
            <p className="text-xs text-[#064E3B]/70 mt-0.5">
              {t.education.languages.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-5 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#064E3B]/15 shadow-xs text-center">
              <span className="block font-heading text-sm font-bold text-[#064E3B]">
                {t.education.languages.arabic}
              </span>
            </div>
            <div className="px-5 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#064E3B]/15 shadow-xs text-center">
              <span className="block font-heading text-sm font-bold text-[#064E3B]">
                {t.education.languages.english}
              </span>
            </div>
          </div>
        </div>

        {/* Certificate Lightbox Modal */}
        {previewCert && (
          <div
            onClick={() => setPreviewCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#043629]/75 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#FFFDF9] border border-[#064E3B]/20 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#064E3B]/10">
                <div>
                  <h4 className="font-heading text-base sm:text-lg font-extrabold text-[#064E3B]">
                    {previewCert.title}
                  </h4>
                  <p className="text-xs text-[#064E3B]/70 font-semibold">
                    {previewCert.issuer} • {previewCert.period}
                  </p>
                </div>
                <button
                  onClick={() => setPreviewCert(null)}
                  aria-label={t.education.closePreview}
                  className="w-9 h-9 rounded-full bg-[#F8E7C9]/60 hover:bg-[#064E3B] hover:text-[#F8E7C9] text-[#064E3B] flex items-center justify-center text-sm font-bold transition-all cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="w-full max-h-[70vh] bg-[#FAF4EA] rounded-2xl p-2 sm:p-4 flex items-center justify-center overflow-auto border border-[#064E3B]/12">
                <img
                  src={previewCert.imageUrl}
                  alt={previewCert.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-lg"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-[#064E3B]/10 flex flex-wrap items-center justify-end gap-3">
                <button
                  onClick={() => setPreviewCert(null)}
                  className="px-5 py-2.5 rounded-full bg-[#F8E7C9]/50 hover:bg-[#F8E7C9] text-[#064E3B] font-heading text-xs font-bold transition-all cursor-pointer"
                >
                  {t.education.closePreview}
                </button>
                <a
                  href={previewCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#064E3B] hover:bg-[#043629] text-[#F8E7C9] font-heading text-xs font-extrabold transition-all cursor-pointer shadow-xs"
                >
                  {t.education.verifyBtn}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
