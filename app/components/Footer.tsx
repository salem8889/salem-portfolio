"use client";

import { useLanguage } from "../context/LanguageContext";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function Footer() {
  const { t, isRtl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#064E3B] border-t border-[#F8E7C9]/20 py-10 sm:py-12 relative text-[#F8E7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright & Identity */}
        <div className="text-center sm:text-start text-xs sm:text-sm text-[#F8E7C9]/90">
          <p className="font-heading font-semibold" dir={isRtl ? "rtl" : "ltr"}>
            {isRtl
              ? `${t.footer.name} ${t.footer.rights} ${new Date().getFullYear()} ©`
              : `${t.footer.name} ${t.footer.rights} ${new Date().getFullYear()} ©`}
          </p>
        </div>

        {/* Social Links (LinkedIn & GitHub with Icons) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="https://www.linkedin.com/in/salem-baabbad-626592359/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Salem Ba Abbad on LinkedIn"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#043629] border border-[#F8E7C9]/25 hover:border-[#F8E7C9] text-[#F8E7C9] text-xs font-heading font-bold hover:bg-[#F8E7C9] hover:text-[#064E3B] transition-all duration-200 shadow-xs cursor-pointer"
          >
            <LinkedInIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>LinkedIn</span>
            <span className="text-[10px]">↗</span>
          </a>
          <a
            href="https://github.com/salem8889"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Salem Ba Abbad on GitHub"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#043629] border border-[#F8E7C9]/25 hover:border-[#F8E7C9] text-[#F8E7C9] text-xs font-heading font-bold hover:bg-[#F8E7C9] hover:text-[#064E3B] transition-all duration-200 shadow-xs cursor-pointer"
          >
            <GitHubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>GitHub</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#043629] border border-[#F8E7C9]/30 text-[#F8E7C9] text-xs font-heading font-bold hover:bg-[#F8E7C9] hover:text-[#064E3B] transition-all shadow-[0_4px_15px_rgba(0,0,0,0.2)] cursor-pointer"
        >
          <span>{t.footer.backToTop}</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
