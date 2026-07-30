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
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-zinc-700/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0e0e11]/90 border border-white/20 text-white text-xs sm:text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
          <span>متاح حالياً للعمل الحر والمشاريع الابداعية</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-cairo text-3xl sm:text-5xl lg:text-[56px] font-black text-white leading-tight tracking-tight max-w-4xl">
          أبني تجارب ويب{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
            تفاعلية ومذهلة
          </span>{" "}
          تترك انطباعاً لا يُنسى
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          أنا <strong className="text-white">SALEM MOHAMMED BA ABBAD</strong>، مصمم UI/UX ومطور مواقع وبرامج شغوف بابتكار منصات ويب وتطبيقات ذكية تجمع بين الجاذبية البصرية، الأداء الفائق، وسهولة الاستخدام.
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl">
          {["Next.js", "React 19", "Expo", "Android Studio", "TypeScript", "UI/UX Design", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-lg bg-[#121214]/80 border border-white/10 text-zinc-300 text-xs font-medium hover:border-white/30 hover:text-white transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-cairo font-extrabold text-base border border-white shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1"
          >
            استكشف أعمالي
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#121214]/80 hover:bg-white/10 text-white hover:text-white font-cairo font-bold text-base border border-white/20 hover:border-white/40 backdrop-blur-md transition-all transform hover:-translate-y-1"
          >
            تواصل معي مباشرة
          </button>
        </div>


      </div>
    </section>
  );
}
