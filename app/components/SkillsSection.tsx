"use client";

import { useState } from "react";

interface Skill {
  name: string;
  category: "frontend" | "design" | "tools";
  badge: string;
}

const skillsData: Skill[] = [
  // Frontend
  { name: "React • Next.js", category: "frontend", badge: "مستوى متقدم" },
  { name: "TypeScript • JavaScript (ES6+)", category: "frontend", badge: "إتقان عالمي" },
  { name: "HTML5 • CSS3", category: "frontend", badge: "بناء هيكلي" },
  { name: "Tailwind CSS", category: "frontend", badge: "تصميم متجاوب" },
  { name: "Node.js", category: "frontend", badge: "تفاعلات حية" },
  // Design & UX
  { name: "REST APIs", category: "design", badge: "تخطيط الواجهات" },
  { name: "Supabase", category: "design", badge: "أنظمة التصميم" },
  { name: "Expo • React Native", category: "design", badge: "تجاوب كامل" },
  // Tools & Performance
  { name: "Figma • Design Systems", category: "tools", badge: "تطوير تطبيقات الجوال" },
  { name: "Git • GitHub", category: "tools", badge: "إدارة الإصدارات" },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "design" | "tools">("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-zinc-400 font-cairo font-bold text-sm tracking-widest uppercase">
            // أدواتي وخبراتي
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-white">
            المهارات التقنية وأدوات التطوير
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            مجموعة مهاراتي المتخصصة في بناء وتصميم منتجات رقمية مبهرة ومستدامة.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 mx-auto rounded-full"></div>
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
                  ? "bg-white text-black font-extrabold border border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "bg-[#121214]/80 text-zinc-400 hover:text-white hover:bg-[#1c1c20] border border-transparent"
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
              className="p-5 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)] flex items-center gap-3.5 group"
            >

              <span className="font-cairo font-bold text-white text-sm sm:text-base group-hover:text-zinc-200 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
