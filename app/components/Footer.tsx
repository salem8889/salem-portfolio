"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#064E3B] border-t border-[#F8E7C9]/20 py-12 relative text-[#F8E7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright & Identity */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-start text-sm text-[#F8E7C9]/80">
          <span className="font-heading font-bold text-[#F8E7C9]">
            {t.footer.name}
          </span>
          <span className="hidden sm:inline text-[#F8E7C9]/40">•</span>
          <p className="text-[#F8E7C9]/80">
            {t.footer.role} © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#043629] border border-[#F8E7C9]/30 text-[#F8E7C9] text-xs font-heading font-bold hover:bg-[#F8E7C9] hover:text-[#064E3B] transition-all shadow-[0_4px_15px_rgba(0,0,0,0.2)] cursor-pointer"
        >
          <span>{t.footer.backToTop}</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
