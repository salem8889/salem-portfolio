"use client";

import HeroCanvas from "./HeroCanvas";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Canvas Particle Background */}
      <HeroCanvas />

      {/* Radial Gradient Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#1d63c9]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#4fd1ff]/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1a3d]/80 border border-[#4fd1ff]/30 text-[#4fd1ff] text-xs sm:text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(79,209,255,0.2)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4fd1ff] animate-ping"></span>
          <span>متاح حالياً للعمل الحر والمشاريع الابداعية</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-cairo text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#eaf2ff] leading-tight tracking-tight max-w-4xl">
          أبني تجارب ويب{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fd1ff] via-[#1d63c9] to-[#eaf2ff] drop-shadow-[0_0_25px_rgba(79,209,255,0.4)]">
            تفاعلية ومذهلة
          </span>{" "}
          تترك انطباعاً لا يُنسى
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#8ba0c9] max-w-2xl leading-relaxed">
          أنا <strong className="text-[#eaf2ff]">SALEM MOHAMMED BA ABBAD</strong>، مطور واجهات أمامية ومصمم UI/UX أدمج الأناقة البصرية مع حلول البرمجة المتقدمة لبناء مواجِهات حديثة وسريعة.
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl">
          {["Next.js", "React 19", "TypeScript", "UI/UX Design", "Tailwind CSS", "Canvas & Motion"].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-lg bg-[#0d1a3d]/60 border border-[#4fd1ff]/15 text-[#8ba0c9] text-xs font-medium hover:border-[#4fd1ff]/40 hover:text-[#4fd1ff] transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#1d63c9] via-[#0e3a8f] to-[#1d63c9] hover:from-[#4fd1ff] hover:to-[#1d63c9] text-[#eaf2ff] hover:text-[#050b1f] font-cairo font-extrabold text-base border border-[#4fd1ff]/40 shadow-[0_0_25px_rgba(29,99,201,0.4)] hover:shadow-[0_0_35px_rgba(79,209,255,0.7)] transition-all transform hover:-translate-y-1"
          >
            استكشف أعمالي
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0d1a3d]/80 hover:bg-[#1d63c9]/20 text-[#eaf2ff] hover:text-[#4fd1ff] font-cairo font-bold text-base border border-[#8ba0c9]/30 hover:border-[#4fd1ff]/50 backdrop-blur-md transition-all transform hover:-translate-y-1"
          >
            تواصل معي مباشرة
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <button
            onClick={() => scrollTo("about")}
            aria-label="الانتقال للأسفل"
            className="p-2 rounded-full border border-[#4fd1ff]/20 text-[#8ba0c9] hover:text-[#4fd1ff] hover:border-[#4fd1ff]/50 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
