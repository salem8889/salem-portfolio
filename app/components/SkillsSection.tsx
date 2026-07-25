"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number; // percentage
  icon: string;
  category: "frontend" | "design" | "tools";
}

const skillsData: Skill[] = [
  // Frontend
  { name: "React.js / Next.js", level: 95, icon: "⚛️", category: "frontend" },
  { name: "TypeScript / JavaScript (ES6+)", level: 90, icon: "📜", category: "frontend" },
  { name: "HTML5 / CSS3 / Vanilla CSS", level: 98, icon: "🌐", category: "frontend" },
  { name: "Tailwind CSS / CSS Modules", level: 92, icon: "🎨", category: "frontend" },
  { name: "Canvas & Web Animations (GSAP/Framer)", level: 85, icon: "✨", category: "frontend" },
  // Design & UX
  { name: "UI/UX Architecture & Wireframing", level: 90, icon: "📐", category: "design" },
  { name: "Figma & Design Systems", level: 92, icon: "🎨", category: "design" },
  { name: "Responsive & Mobile-First Design", level: 96, icon: "📱", category: "design" },
  // Tools & Performance
  { name: "Git / GitHub Version Control", level: 90, icon: "🌿", category: "tools" },
  { name: "Web Performance & SEO Optimization", level: 88, icon: "⚡", category: "tools" },
  { name: "State Management (Redux/Zustand)", level: 86, icon: "🔄", category: "tools" },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "design" | "tools">("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative bg-[#050b1f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4fd1ff] font-cairo font-bold text-sm tracking-widest uppercase">
            // أدواتي وخبراتي
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-[#eaf2ff]">
            المهارات التقنية وأشرطة التميز
          </h2>
          <p className="mt-3 text-[#8ba0c9] text-base">
            مجموعة مهاراتي المتخصصة في بناء وتصميم منتجات رقمية مبهرة ومستدامة.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#1d63c9] via-[#4fd1ff] to-[#1d63c9] mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "جميع المهارات" },
            { id: "frontend", label: "تطوير الواجهات (Frontend)" },
            { id: "design", label: "التصميم والتجربة (UI/UX)" },
            { id: "tools", label: "الأدوات والأداء" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-cairo font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#1d63c9] to-[#0e3a8f] text-[#eaf2ff] border border-[#4fd1ff]/40 shadow-[0_0_15px_rgba(79,209,255,0.3)]"
                  : "bg-[#0d1a3d]/70 text-[#8ba0c9] hover:text-[#eaf2ff] hover:bg-[#0d1a3d] border border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-[#0d1a3d]/70 border border-[#4fd1ff]/15 hover:border-[#4fd1ff]/40 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2 rounded-lg bg-[#050b1f] border border-[#4fd1ff]/10">
                    {skill.icon}
                  </span>
                  <span className="font-cairo font-bold text-[#eaf2ff] text-base">
                    {skill.name}
                  </span>
                </div>
                <span className="font-cairo font-extrabold text-[#4fd1ff] text-base">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-3 rounded-full bg-[#050b1f] overflow-hidden p-0.5 border border-[#4fd1ff]/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0e3a8f] via-[#1d63c9] to-[#4fd1ff] shadow-[0_0_12px_#4fd1ff] transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
