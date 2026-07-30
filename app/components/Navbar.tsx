"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "hero", label: "الرئيسية" },
  { id: "about", label: "عني" },
  { id: "skills", label: "مهاراتي" },
  { id: "projects", label: "أعمالي" },
  { id: "timeline", label: "المسار المهني" },
  { id: "contact", label: "تواصل معي" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Section Observer for active link glow
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

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
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
          ? "bg-[#000000]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/20 flex items-center justify-center text-white font-cairo font-black text-sm group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
            SB
          </div>
          <div className="flex flex-col text-right">
            <span className="font-cairo font-bold text-base text-white group-hover:text-zinc-300 transition-colors">
              SALEM MOHAMMED BA ABBAD
            </span>
            <span className="text-[10px] text-zinc-400 tracking-tight">
              UI/UX & Web/Software Developer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0e0e11]/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gradient-to-r from-zinc-400 via-white to-zinc-400 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black font-cairo font-extrabold text-sm border border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            تواصل معي
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="القائمة"
          className="md:hidden p-2 rounded-lg bg-[#0e0e11] border border-white/20 text-white focus:outline-none"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 origin-right ${
                mobileOpen ? "rotate-[-45deg] translate-y-0.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 origin-right ${
                mobileOpen ? "rotate-[45deg] -translate-y-0.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#000000]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-right py-2.5 px-4 rounded-xl text-base font-semibold transition-all ${
                activeSection === item.id
                  ? "bg-white/10 text-white border border-white/20"
                  : "text-zinc-400 hover:bg-[#141418] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-cairo font-extrabold text-center shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            تواصل معي
          </button>
        </div>
      </div>
    </header>
  );
}
