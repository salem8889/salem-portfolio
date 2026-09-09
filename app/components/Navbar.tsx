"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, setLanguage, t, isRtl } = useLanguage();
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
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

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
      window.removeEventListener("scroll", handleScroll);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#ffffff]/90 backdrop-blur-md border-b border-black/10 py-3 shadow-sm shadow-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Identity */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 group cursor-pointer focus:outline-none text-start"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-black/20 group-hover:border-black group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.15)] transition-all bg-zinc-100 flex-shrink-0">
            <Image
              src="/salem-profile.jpg"
              alt="SALEM BA ABBAD"
              width={40}
              height={40}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col text-start">
            <span className="font-heading font-extrabold text-base text-zinc-950 group-hover:text-zinc-700 transition-colors tracking-tight">
              {t.navbar.name}
            </span>
            <span className="text-[11px] text-zinc-500 font-medium tracking-tight">
              {t.navbar.role}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#f4f4f5]/90 backdrop-blur-md border border-black/10 rounded-full px-4 py-1.5 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full ${
                  isActive ? "text-black font-bold" : "text-zinc-600 hover:text-black"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-2.5 h-[2px] bg-black rounded-full shadow-xs transition-all"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Segmented Language Switcher */}
          <div
            className="flex items-center bg-zinc-100/90 p-1 rounded-full border border-black/15 shadow-xs"
            dir="ltr"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`px-3 py-1 rounded-full text-xs font-heading font-bold transition-all ${
                language === "en"
                  ? "bg-black text-white shadow-xs"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              aria-label="التبديل إلى العربية"
              className={`px-3 py-1 rounded-full text-xs font-heading font-bold transition-all ${
                language === "ar"
                  ? "bg-black text-white shadow-xs"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              العربية
            </button>
          </div>

          <a
            href="/SALEM_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs border border-black/20 shadow-xs transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
          >
            <span>{t.navbar.resume}</span>
            <span className="text-[10px] text-zinc-500">{t.navbar.resumePdf}</span>
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-full bg-black hover:bg-zinc-800 text-white font-extrabold text-xs border border-black shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all transform hover:-translate-y-0.5"
          >
            {t.navbar.getInTouch}
          </button>
        </div>

        {/* Mobile View: Lang Switcher + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Segmented Switcher */}
          <div
            className="flex items-center bg-zinc-100 p-0.5 rounded-full border border-black/15"
            dir="ltr"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`px-2.5 py-1 rounded-full text-[11px] font-heading font-bold transition-all ${
                language === "en"
                  ? "bg-black text-white shadow-xs"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              aria-label="التبديل إلى العربية"
              className={`px-2.5 py-1 rounded-full text-[11px] font-heading font-bold transition-all ${
                language === "ar"
                  ? "bg-black text-white shadow-xs"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              العربية
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-[#f4f4f5] border border-black/15 text-black focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-black rounded transition-all duration-300 origin-start ${
                  mobileOpen ? "rotate-[45deg] translate-y-0.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-black rounded transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-black rounded transition-all duration-300 origin-start ${
                  mobileOpen ? "rotate-[-45deg] -translate-y-0.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-[#ffffff]/98 backdrop-blur-xl border-b border-black/10 shadow-lg transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[520px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-start py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                activeSection === item.id
                  ? "bg-black/5 text-black border border-black/15 font-bold"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="/SALEM_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs text-center border border-black/10"
            >
              {t.navbar.downloadResume}
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="w-full py-2.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-xs text-center shadow-md"
            >
              {t.navbar.getInTouch}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
