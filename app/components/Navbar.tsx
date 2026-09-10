"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "about", label: t.navbar.nav.about },
    { id: "experience", label: t.navbar.nav.experience },
    { id: "projects", label: t.navbar.nav.projects },
    { id: "skills", label: t.navbar.nav.skills },
    { id: "education", label: t.navbar.nav.education },
    { id: "approach", label: t.navbar.nav.approach },
    { id: "contact", label: t.navbar.nav.contact },
  ];

  useEffect(() => {
    // Section Observer for active link highlight
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    ["hero", "about", "experience", "projects", "skills", "education", "approach", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 dark:bg-[#09090b]/80 backdrop-blur-2xl border-b border-black/[0.08] dark:border-white/[0.1] shadow-[0_4px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2.5 sm:py-3"
          : "bg-white/60 dark:bg-[#09090b]/65 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-[0_2px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)] py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Identity */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer focus:outline-none text-start"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-black/15 dark:border-white/20 group-hover:border-black dark:group-hover:border-white group-hover:scale-105 transition-all duration-200 bg-white/40 dark:bg-white/[0.06] backdrop-blur-md flex-shrink-0 shadow-xs">
            <Image
              src="/salem-profile.jpg"
              alt={t.navbar.name}
              width={40}
              height={40}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col text-start">
            <span className="font-heading font-black text-xs sm:text-sm text-zinc-950 dark:text-zinc-50 group-hover:text-black dark:group-hover:text-white transition-colors tracking-tight leading-snug">
              {t.navbar.name}
            </span>
            <span className="text-[10px] sm:text-[11px] text-zinc-700 dark:text-zinc-300 font-semibold tracking-tight leading-snug">
              {t.navbar.role}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center h-9 bg-black/[0.03] dark:bg-white/[0.06] backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] rounded-full p-1 gap-0.5 shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`h-7 px-3 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full flex items-center justify-center ${
                  isActive
                    ? "bg-white dark:bg-white/20 text-zinc-950 dark:text-zinc-50 font-bold border border-black/10 dark:border-white/20 shadow-xs backdrop-blur-sm"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Switchers (Desktop) */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Unified Language Switcher */}
          <div
            className="flex items-center h-9 bg-black/[0.03] dark:bg-white/[0.06] backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] rounded-full p-1 gap-0.5 shadow-xs"
            dir="ltr"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`h-7 px-2.5 rounded-full text-xs font-heading font-bold transition-all duration-200 flex items-center justify-center ${
                language === "en"
                  ? "bg-white dark:bg-white/20 text-zinc-950 dark:text-zinc-50 border border-black/10 dark:border-white/20 shadow-xs backdrop-blur-sm"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              aria-label="التبديل إلى العربية"
              className={`h-7 px-2.5 rounded-full text-xs font-heading font-bold transition-all duration-200 flex items-center justify-center ${
                language === "ar"
                  ? "bg-white dark:bg-white/20 text-zinc-950 dark:text-zinc-50 border border-black/10 dark:border-white/20 shadow-xs backdrop-blur-sm"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Unified Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "التبديل للوضع النهاري" : "التبديل للوضع الليلي"}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.06] backdrop-blur-md text-zinc-900 dark:text-zinc-100 border border-black/[0.08] dark:border-white/[0.1] hover:border-black/25 dark:hover:border-white/25 hover:bg-black/[0.06] dark:hover:bg-white/[0.12] transition-all duration-200 shadow-xs"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 stroke-[2]" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-900 dark:text-zinc-100 stroke-[2]" />
            )}
          </button>

          {/* Unified Resume Button */}
          <a
            href="/SALEM_BAABBAD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-3.5 rounded-full bg-black/[0.03] dark:bg-white/[0.06] backdrop-blur-md hover:bg-black/[0.06] dark:hover:bg-white/[0.12] text-zinc-950 dark:text-zinc-50 font-heading font-bold text-xs border border-black/[0.08] dark:border-white/[0.1] hover:border-black/25 dark:hover:border-white/25 transition-all duration-200 flex items-center gap-1.5 shadow-xs"
          >
            <span>{t.navbar.resume}</span>
            <span className="text-[10px] text-zinc-700 dark:text-zinc-300 font-mono font-bold">PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 stroke-[2]" />
          </a>

          {/* Unified Get In Touch Primary Button */}
          <button
            onClick={() => scrollTo("contact")}
            className="h-9 px-4 rounded-full bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-heading font-bold text-xs border border-zinc-950 dark:border-white transition-all duration-200 flex items-center justify-center shadow-xs"
          >
            {t.navbar.getInTouch}
          </button>
        </div>

        {/* Mobile View: Lang Switcher + Theme Toggle + Hamburger */}
        <div className="flex items-center gap-1.5 lg:hidden">
          {/* Mobile Language Switcher */}
          <div
            className="flex items-center h-8 bg-black/[0.03] dark:bg-white/[0.06] backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] rounded-full p-0.5 shadow-xs"
            dir="ltr"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`h-6 px-2 rounded-full text-[11px] font-heading font-bold transition-all duration-200 flex items-center justify-center ${
                language === "en"
                  ? "bg-white dark:bg-white/20 text-zinc-950 dark:text-zinc-50 border border-black/10 dark:border-white/20 shadow-xs backdrop-blur-sm"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              aria-label="التبديل إلى العربية"
              className={`h-6 px-2 rounded-full text-[11px] font-heading font-bold transition-all duration-200 flex items-center justify-center ${
                language === "ar"
                  ? "bg-white dark:bg-white/20 text-zinc-950 dark:text-zinc-50 border border-black/10 dark:border-white/20 shadow-xs backdrop-blur-sm"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Mobile Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "التبديل للوضع النهاري" : "التبديل للوضع الليلي"}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.06] backdrop-blur-md text-zinc-900 dark:text-zinc-100 border border-black/[0.08] dark:border-white/[0.1] hover:bg-black/[0.06] dark:hover:bg-white/[0.12] transition-all duration-200 shadow-xs"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-400 stroke-[2]" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100 stroke-[2]" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.06] backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] hover:bg-black/[0.06] dark:hover:bg-white/[0.12] text-zinc-950 dark:text-zinc-50 focus:outline-none transition-all duration-200 shadow-xs"
          >
            <div className="w-4 h-3.5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 origin-start ${
                  mobileOpen ? "rotate-[45deg] translate-y-0.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 origin-start ${
                  mobileOpen ? "rotate-[-45deg] -translate-y-0.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[57px] bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-2xl border-b border-black/[0.08] dark:border-white/[0.1] shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[520px] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1.5 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-start py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-black/10 dark:bg-white/15 text-zinc-950 dark:text-zinc-50 border border-black/10 dark:border-white/20 font-bold backdrop-blur-sm"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-zinc-50"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="/SALEM_BAABBAD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-9 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] backdrop-blur-md hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-zinc-950 dark:text-zinc-50 font-heading font-bold text-xs flex items-center justify-center gap-1.5 border border-black/10 dark:border-white/10 transition-all duration-200"
            >
              <span>{t.navbar.downloadResume}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 stroke-[2]" />
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="w-full h-9 rounded-xl bg-zinc-950 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-heading font-bold text-xs flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              {t.navbar.getInTouch}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
