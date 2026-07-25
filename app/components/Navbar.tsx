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
          ? "bg-[#050b1f]/85 backdrop-blur-md border-b border-[#4fd1ff]/15 py-3 shadow-lg shadow-[#050b1f]/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d63c9] to-[#0e3a8f] border border-[#4fd1ff]/30 flex items-center justify-center text-[#4fd1ff] font-cairo font-black text-sm group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(79,209,255,0.4)] transition-all">
            SB
          </div>
          <div className="flex flex-col text-right">
            <span className="font-cairo font-bold text-base text-[#eaf2ff] group-hover:text-[#4fd1ff] transition-colors">
              SALEM MOHAMMED BA ABBAD
            </span>
            <span className="text-[10px] text-[#8ba0c9] tracking-tight">
              Frontend & UI/UX
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0d1a3d]/60 backdrop-blur-md border border-[#4fd1ff]/15 rounded-full px-4 py-1.5 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-[#4fd1ff] font-bold"
                    : "text-[#8ba0c9] hover:text-[#eaf2ff]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gradient-to-r from-[#1d63c9] via-[#4fd1ff] to-[#1d63c9] rounded-full shadow-[0_0_8px_#4fd1ff] transition-all"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1d63c9] to-[#0e3a8f] hover:from-[#4fd1ff] hover:to-[#1d63c9] text-[#eaf2ff] hover:text-[#050b1f] font-cairo font-bold text-sm border border-[#4fd1ff]/30 shadow-[0_0_15px_rgba(29,99,201,0.3)] hover:shadow-[0_0_20px_rgba(79,209,255,0.6)] transition-all transform hover:-translate-y-0.5"
          >
            تواصل معي
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="القائمة"
          className="md:hidden p-2 rounded-lg bg-[#0d1a3d] border border-[#4fd1ff]/20 text-[#4fd1ff] focus:outline-none"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-[#4fd1ff] rounded transition-all duration-300 origin-right ${
                mobileOpen ? "rotate-[-45deg] translate-y-0.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-[#4fd1ff] rounded transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-[#4fd1ff] rounded transition-all duration-300 origin-right ${
                mobileOpen ? "rotate-[45deg] -translate-y-0.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#050b1f]/95 backdrop-blur-xl border-b border-[#4fd1ff]/20 transition-all duration-300 overflow-hidden ${
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
                  ? "bg-[#1d63c9]/20 text-[#4fd1ff] border border-[#4fd1ff]/30"
                  : "text-[#8ba0c9] hover:bg-[#0d1a3d] hover:text-[#eaf2ff]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#1d63c9] to-[#0e3a8f] text-[#eaf2ff] font-cairo font-bold text-center border border-[#4fd1ff]/30 shadow-[0_0_15px_rgba(79,209,255,0.3)]"
          >
            تواصل معي
          </button>
        </div>
      </div>
    </header>
  );
}
