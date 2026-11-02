"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 flex flex-col items-center px-3 sm:px-6 pointer-events-none">
      {/* Unified Floating Frosted Glass Capsule */}
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border border-white/70 shadow-[0_12px_40px_rgba(6,78,59,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)]"
            : "bg-white/65 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(6,78,59,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)]"
        }`}
      >
        {/* Left Side: Identity / Profile */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none text-start flex-shrink-0"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#064E3B]/25 group-hover:border-[#064E3B] group-hover:scale-105 transition-all duration-200 bg-[#F8E7C9]/40 flex-shrink-0 shadow-xs">
            <Image
              src="/salem-profile.jpg"
              alt={t.navbar.name}
              width={36}
              height={36}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col text-start leading-tight">
            <span className="font-heading font-black text-xs sm:text-sm text-[#064E3B] group-hover:text-[#043629] transition-colors tracking-tight">
              {t.navbar.name}
            </span>
            <span className="hidden xl:inline text-[10px] text-[#064E3B]/70 font-semibold tracking-tight">
              {t.navbar.role}
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-1.5 text-xs font-semibold transition-colors duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? "text-[#F8E7C9] font-bold"
                    : "text-[#064E3B]/75 hover:text-[#064E3B] hover:bg-[#064E3B]/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-[#064E3B] rounded-full shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side: Language Switcher (Desktop) */}
        <div className="hidden sm:flex items-center gap-2">
          <div
            className="flex items-center h-8 bg-[#064E3B]/5 border border-[#064E3B]/10 rounded-full p-0.5 shadow-xs"
            dir="ltr"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`h-7 px-2.5 rounded-full text-xs font-heading font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                language === "en"
                  ? "bg-[#064E3B] text-[#F8E7C9] shadow-xs"
                  : "text-[#064E3B]/70 hover:text-[#064E3B]"
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
                  ? "bg-[#064E3B] text-[#F8E7C9] shadow-xs"
                  : "text-[#064E3B]/70 hover:text-[#064E3B]"
              }`}
            >
              العربية
            </button>
          </div>
        </div>

        {/* Mobile View: Lang Switcher + Hamburger */}
        <div className="flex items-center gap-1.5 lg:hidden">
          {/* Mobile Language Switcher */}
          <div
            className="flex items-center h-7 bg-[#064E3B]/5 border border-[#064E3B]/10 rounded-full p-0.5 shadow-xs"
            dir="ltr"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`h-6 px-2 rounded-full text-[11px] font-heading font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                language === "en"
                  ? "bg-[#064E3B] text-[#F8E7C9] shadow-xs"
                  : "text-[#064E3B]/70 hover:text-[#064E3B]"
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
                  ? "bg-[#064E3B] text-[#F8E7C9] shadow-xs"
                  : "text-[#064E3B]/70 hover:text-[#064E3B]"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#064E3B]/5 border border-[#064E3B]/10 text-[#064E3B] focus:outline-none transition-all duration-200 shadow-xs cursor-pointer"
          >
            <div className="w-4 h-3.5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 origin-start ${
                  mobileOpen ? "rotate-[45deg] translate-y-0.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 origin-start ${
                  mobileOpen ? "rotate-[-45deg] -translate-y-0.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Floating Glass Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-auto w-full max-w-sm mt-2 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/70 shadow-[0_16px_50px_rgba(6,78,59,0.14)] p-3 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-start py-2.5 px-4 rounded-2xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-[#064E3B] text-[#F8E7C9] font-bold shadow-xs"
                        : "text-[#064E3B]/80 hover:bg-[#064E3B]/5 hover:text-[#064E3B]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
