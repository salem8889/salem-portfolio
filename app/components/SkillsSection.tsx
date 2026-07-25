"use client";

import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "design" | "tools";
  badge: string;
}

const skillsData: Skill[] = [
  // Frontend
  { name: "React.js / Next.js", icon: "⚛️", category: "frontend", badge: "مستوى متقدم" },
  { name: "TypeScript / JavaScript (ES6+)", icon: "📜", category: "frontend", badge: "إتقان عالمي" },
  { name: "HTML5 / CSS3 / Vanilla CSS", icon: "🌐", category: "frontend", badge: "بناء هيكلي" },
  { name: "Tailwind CSS / CSS Modules", icon: "🎨", category: "frontend", badge: "تصميم متجاوب" },
  { name: "Canvas & Web Animations", icon: "✨", category: "frontend", badge: "تفاعلات حية" },
  // Design & UX
  { name: "UI/UX Architecture & Wireframing", icon: "📐", category: "design", badge: "تخطيط الواجهات" },
  { name: "Figma & Design Systems", icon: "🎨", category: "design", badge: "أنظمة التصميم" },
  { name: "Responsive & Mobile-First Design", icon: "📱", category: "design", badge: "تجاوب كامل" },
  // Tools & Performance
  { name: "Android Studio & Expo Mobile App", icon: "🤖", category: "tools", badge: "تطوير تطبيقات الجوال" },
  { name: "Git / GitHub Version Control", icon: "🌿", category: "tools", badge: "إدارة الإصدارات" },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "design" | "tools">("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#050b1f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4fd1ff] font-cairo font-bold text-sm tracking-widest uppercase">
            // أدواتي وخبراتي
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-[#eaf2ff]">
            المهارات التقنية وأدوات التطوير
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-[#0d1a3d]/70 border border-[#4fd1ff]/15 hover:border-[#4fd1ff]/50 transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(79,209,255,0.15)] flex items-center gap-3.5 group"
            >
              <span className="text-2xl p-2.5 rounded-xl bg-[#050b1f] border border-[#4fd1ff]/10 group-hover:border-[#4fd1ff]/40 transition-colors">
                {skill.icon}
              </span>
              <span className="font-cairo font-bold text-[#eaf2ff] text-sm sm:text-base group-hover:text-[#4fd1ff] transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
