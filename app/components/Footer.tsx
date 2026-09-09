"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-zinc-800/80 py-12 relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright & Identity */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-start">
          <span className="font-heading font-bold text-sm text-white">
            {t.footer.name}
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <p className="text-xs text-zinc-400">
            {t.footer.role} © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/20 text-white text-xs font-heading font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          <span>{t.footer.backToTop}</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
