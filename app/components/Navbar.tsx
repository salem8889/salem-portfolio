"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
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
          ? "bg-[#FAF4EA]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(6,78,59,0.06)] py-2.5 sm:py-3"
          : "bg-[#FAF4EA]/75 backdrop-blur-xl shadow-[0_2px_15px_rgba(6,78,59,0.03)] py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Identity */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer focus:outline-none text-start"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[#064E3B]/20 group-hover:border-[#064E3B] group-hover:scale-105 transition-all duration-200 bg-[#F8E7C9]/40 backdrop-blur-md flex-shrink-0 shadow-xs">
            <Image
              src="/salem-profile.jpg"
              alt={t.navbar.name}
              width={40}
              height={40}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col text-start">
            <span className="font-heading font-black text-xs sm:text-sm text-[#064E3B] group-hover:text-[#043629] transition-colors tracking-tight leading-snug">
              {t.navbar.name}
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#064E3B]/80 font-semibold tracking-tight leading-snug">
              {t.navbar.role}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center h-9 bg-[#F8E7C9]/50 backdrop-blur-md border border-[#064E3B]/12 rounded-full p-1 gap-0.5 shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`h-7 px-3 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full flex items-center justify-center cursor-pointer ${
                  isActive
                    ? "bg-[#064E3B] text-[#F8E7C9] font-bold border border-[#064E3B] shadow-xs"
                    : "text-[#064E3B]/80 hover:text-[#064E3B] hover:bg-[#F8E7C9]/80"
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
            className="flex items-center h-9 bg-[#F8E7C9]/50 backdrop-blur-md border border-[#064E3B]/12 rounded-full p-1 gap-0.5 shadow-xs"
            dir="ltr"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`h-7 px-2.5 rounded-full text-xs font-heading font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                language === "en"
                  ? "bg-[#064E3B] text-[#F8E7C9] border border-[#064E3B] shadow-xs"
                  : "text-[#064E3B]/80 hover:text-[#064E3B]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              aria-label="التبديل إلى العربية"
              className={`h-7 px-2.5 rounded-full text-xs font-heading font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                language === "ar"
                  ? "bg-[#064E3B] text-[#F8E7C9] border border-[#064E3B] shadow-xs"
                  : "text-[#064E3B]/80 hover:text-[#064E3B]"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Unified Get In Touch Primary Button */}
          <button
            onClick={() => scrollTo("contact")}
            className="h-9 px-4 rounded-full bg-[#064E3B] hover:bg-[#043629] text-[#F8E7C9] font-heading font-bold text-xs border border-[#064E3B] transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer hover:shadow-md"
          >
            {t.navbar.getInTouch}
          </button>
        </div>

        {/* Mobile View: Lang Switcher + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Switcher */}
          <div
            className="flex items-center h-8 bg-[#F8E7C9]/50 backdrop-blur-md border border-[#064E3B]/12 rounded-full p-0.5 shadow-xs"
            dir="ltr"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`h-6 px-2 rounded-full text-[11px] font-heading font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                language === "en"
                  ? "bg-[#064E3B] text-[#F8E7C9] border border-[#064E3B] shadow-xs"
                  : "text-[#064E3B]/80 hover:text-[#064E3B]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              aria-label="التبديل إلى العربية"
              className={`h-6 px-2 rounded-full text-[11px] font-heading font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                language === "ar"
                  ? "bg-[#064E3B] text-[#F8E7C9] border border-[#064E3B] shadow-xs"
                  : "text-[#064E3B]/80 hover:text-[#064E3B]"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F8E7C9]/50 backdrop-blur-md border border-[#064E3B]/12 text-[#064E3B] focus:outline-none transition-all duration-200 shadow-xs cursor-pointer"
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
        className={`lg:hidden fixed inset-x-0 top-[57px] bg-[#FAF4EA]/95 backdrop-blur-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[520px] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1.5 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-start py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? "bg-[#064E3B] text-[#F8E7C9] border border-[#064E3B] font-bold"
                  : "text-[#064E3B]/80 hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full h-9 rounded-xl bg-[#064E3B] hover:bg-[#043629] text-[#F8E7C9] font-heading font-bold text-xs flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
            >
              {t.navbar.getInTouch}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
