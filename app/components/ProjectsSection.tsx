"use client";

import { useState, useRef, MouseEvent } from "react";

interface Project {
  id: number;
  title: string;
  category: "web" | "app" | "uiux";
  categoryLabel: string;
  description: string;
  tags: string[];
  imageGradient: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "منصة السفر وحجوزات رحلات الطيران الذكية",
    category: "web",
    categoryLabel: "منصة ويب متكاملة",
    description:
      "منصة ويب تفاعلية توفر حجوزات سفر سلسة مع خرائط تفاعلية وتوصيات ذكية تعتمد على التفضيلات الشخصية وتجربة مستخدم متميزة.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma UI/UX"],
    imageGradient: "from-[#1d63c9] via-[#0e3a8f] to-[#050b1f]",
    icon: "✈️",
  },
  {
    id: 2,
    title: "لوحة تحكم وتتبع الإنتاجية للمؤسسات (TaskFlow Pro)",
    category: "app",
    categoryLabel: "تطبيق ويب وتراسل",
    description:
      "لوحة قيادة تفاعلية مخصصة لإدارة مشاريع الفرق الكبيرة، تحتوي على رسوم بيانية لحظية، تتبع مهام Kanban، ونظام إشعارات فورية.",
    tags: ["React 19", "Redux Toolkit", "Recharts", "WebSockets"],
    imageGradient: "from-[#0e3a8f] via-[#4fd1ff]/30 to-[#0d1a3d]",
    icon: "📊",
  },
  {
    id: 3,
    title: "متجر الساعات الفاخرة التجاري (LuxeTime)",
    category: "web",
    categoryLabel: "تجارة إلكترونية",
    description:
      "متجر إلكتروني فاخر مع تجربة تسوق ثلاثية الأبعاد وتحريك سلس للمنتجات عند التصفح، تدعم بوابة دفع آمنة وتجاوب تام.",
    tags: ["Next.js", "Stripe API", "Framer Motion", "RTL Styling"],
    imageGradient: "from-[#1d63c9]/80 via-[#4fd1ff]/20 to-[#0e3a8f]",
    icon: "💎",
  },
  {
    id: 4,
    title: "منصة التحليلات المالية وسوق الأسهم (FinPulse)",
    category: "uiux",
    categoryLabel: "تصميم UI/UX وواجهات",
    description:
      "تصميم واجهات مستخدم معقدة لتحليل البيانات المالية والمستندات بأسلوب مظلم راقٍ يسهل قراءة المؤشرات والمخططات الفنية.",
    tags: ["Figma", "Design System", "UI/UX Architecture", "Prototyping"],
    imageGradient: "from-[#050b1f] via-[#1d63c9] to-[#4fd1ff]/40",
    icon: "📈",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "web" | "app" | "uiux">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#4fd1ff] font-cairo font-bold text-sm tracking-widest uppercase">
            // محفظة الأعمال
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-[#eaf2ff]">
            أحدث المشاريع والابتكارات
          </h2>
          <p className="mt-3 text-[#8ba0c9] text-base">
            نماذج حية لمشاريع قمت بتصميمها وتطويرها وفق أحدث المعايير البرمجية.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#1d63c9] via-[#4fd1ff] to-[#1d63c9] mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "الكل" },
            { id: "web", label: "واجهات ويب" },
            { id: "app", label: "تطبيقات ويب" },
            { id: "uiux", label: "تصميم UI/UX" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-cairo font-bold transition-all ${
                filter === item.id
                  ? "bg-gradient-to-r from-[#1d63c9] to-[#0e3a8f] text-[#eaf2ff] border border-[#4fd1ff]/40 shadow-[0_0_15px_rgba(79,209,255,0.3)]"
                  : "bg-[#0d1a3d]/70 text-[#8ba0c9] hover:text-[#eaf2ff] hover:bg-[#0d1a3d] border border-transparent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Glow Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleMouseMove}
              className="glow-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Top Banner & Icon */}
              <div>
                <div
                  className={`w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br ${project.imageGradient} border border-[#4fd1ff]/20 flex flex-col items-center justify-center p-6 mb-6 relative overflow-hidden group-hover:border-[#4fd1ff]/50 transition-all`}
                >
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#050b1f]/80 backdrop-blur-md text-[#4fd1ff] text-xs font-bold border border-[#4fd1ff]/20">
                    {project.categoryLabel}
                  </div>
                  <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </span>
                  <span className="mt-4 font-cairo text-sm text-[#eaf2ff]/80 font-semibold tracking-wider">
                    معاينة تفاعلية ↗
                  </span>
                </div>

                {/* Project Title & Description */}
                <h3 className="font-cairo text-xl sm:text-2xl font-bold text-[#eaf2ff] group-hover:text-[#4fd1ff] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-[#8ba0c9] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Footer */}
              <div className="mt-6 pt-6 border-t border-[#8ba0c9]/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#050b1f]/80 text-[#8ba0c9] text-xs font-medium border border-[#4fd1ff]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-cairo font-bold text-[#4fd1ff] flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
                  عرض التفاصيل ←
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050b1f]/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#0d1a3d] border border-[#4fd1ff]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="إغلاق"
                className="absolute top-5 left-5 w-9 h-9 rounded-full bg-[#050b1f] border border-[#4fd1ff]/30 text-[#4fd1ff] flex items-center justify-center text-lg hover:bg-[#4fd1ff] hover:text-[#050b1f] transition-all"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedProject.icon}</span>
                <div>
                  <span className="text-xs text-[#4fd1ff] font-bold">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="font-cairo text-2xl font-extrabold text-[#eaf2ff]">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#8ba0c9] text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-cairo text-sm font-bold text-[#eaf2ff] mb-2">
                  التقنيات المستخدمة:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[#050b1f] border border-[#4fd1ff]/20 text-[#4fd1ff] text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#8ba0c9]/15">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#050b1f] border border-[#8ba0c9]/30 text-[#8ba0c9] hover:text-[#eaf2ff] font-cairo text-sm font-bold transition-all"
                >
                  إغلاق
                </button>
                <button
                  onClick={() => {
                    alert(`جاري الانتقال إلى معاينة: ${selectedProject.title}`);
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1d63c9] to-[#0e3a8f] hover:from-[#4fd1ff] hover:to-[#1d63c9] text-[#eaf2ff] hover:text-[#050b1f] font-cairo text-sm font-bold border border-[#4fd1ff]/40 shadow-[0_0_15px_rgba(79,209,255,0.4)] transition-all"
                >
                  معاينة المشروع التفاعلية ↗
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
