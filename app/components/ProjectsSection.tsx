"use client";

import { useState, MouseEvent } from "react";

interface Project {
  id: number;
  title: string;
  category: "web" | "mobile";
  categoryLabel: string;
  description: string;
  tags: string[];
  imageGradient?: string;
  imageUrl?: string;
  imageStyle?: "logo" | "full";
  liveUrl?: string;
  appStoreUrl?: string;
  badge?: string;
  isDisplayOnly?: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "موقع شركة الجنية العربي للمعادن الثمينة",
    category: "web",
    categoryLabel: "موقع إلكتروني حي",
    description:
      "المنصة والموقع الرسمي الفاخر لشركة الجنية العربي للمعادن الثمينة بالمملكة العربية السعودية. يشتمل الموقع على شريط أسعار الذهب والفضة اللحظية المباشرة (Live Ticker)، واستعراض السبائك والمنتجات مع استكشاف الفروع المعتمدة وتجربة مستخدم راقية.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Live Ticker API", "UI/UX Design", "RTL"],
    imageGradient: "from-[#d4af37]/35 via-zinc-800 to-black",
    imageUrl: "/arabic-coin-logo.jpg",
    imageStyle: "logo",
    liveUrl: "https://arabiccoincompany.com",
  },
  {
    id: 2,
    title: "بوابة تقنية المعلومات ونظام إدارة الخدمات (Rayyan IT Portal)",
    category: "web",
    categoryLabel: "مشروع تخرج 2026",
    description:
      "منصة ويب متكاملة لتسهيل إدارة الخدمات البرمجية والمشاريع التقنية، تم تطويرها كـ مشروع تخرج متميز لجامعة الريان لعام 2026 بمواصفات تقنية عالية ودعم متكامل للواجهات.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Portal", "UI/UX Architecture"],
    imageGradient: "from-zinc-800 via-zinc-900 to-black",
    isDisplayOnly: true,
  },
  {
    id: 3,
    title: "تطبيق الجنية العربي للمعادن الثمينة (Arabic Coin)",
    category: "mobile",
    categoryLabel: "تطبيق جوال منشور",
    badge: "Published on App Store",
    description:
      "تطبيق الجوال الرسمي لشركة الجنية العربي المتاح على متجر أبل (App Store) لمتابعة أسعار الذهب والفضة والسبائك بشكل لحظي، وحساب قيمة المقتنيات، واستقبال إشعارات الأسعار الذكية للمستثمرين.",
    tags: ["React Native", "Expo", "TypeScript", "REST APIs", "Push Notifications", "Mobile UI/UX"],
    imageGradient: "from-[#d4af37]/40 via-zinc-900 to-black",
    imageUrl: "/arabic-coin-app-icon.png",
    imageStyle: "full",
    appStoreUrl: "https://apps.apple.com/sa/app/arabic-coin-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/id6792820414",
  },
  {
    id: 4,
    title: "تصميم واجهات وتجربة تطبيق إعمار (Emaar App UI/UX)",
    category: "mobile",
    categoryLabel: "نموذج Figma تفاعلي",
    description:
      "تصميم واجهات وتجربة مستخدم متكاملة وتفاعلية لتطبيق إعمار (Emaar App) على منصة Figma، تشمل النمذجة التفاعلية (Prototyping)، وتخطيط هيكلية التطبيق بأسلوب عصري جذاب.",
    tags: ["Figma", "UI/UX Design", "Mobile App Prototype", "Wireframing", "Prototyping"],
    imageGradient: "from-zinc-700 via-zinc-800 to-black",
    imageUrl: "/emaar-logo-center.png",
    imageStyle: "logo",
    liveUrl: "https://www.figma.com/design/pIJjE8wN3wRGT71f0rWSuz/Emaar-App?node-id=0-1&t=zxxVwlgOVdcmavZk-1",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "mobile">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const webProjects = projectsData.filter((p) => p.category === "web");
  const mobileProjects = projectsData.filter((p) => p.category === "mobile");

  const renderProjectCard = (project: Project) => (
    <div
      key={project.id}
      onMouseMove={handleMouseMove}
      className={`glow-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group ${
        project.isDisplayOnly ? "cursor-default" : "cursor-pointer"
      }`}
      onClick={() => {
        if (!project.isDisplayOnly) {
          setSelectedProject(project);
        }
      }}
    >
      {/* Top Banner & Image/Icon */}
      <div>
        <div
          className={`w-full h-52 sm:h-56 rounded-2xl bg-black border border-white/15 flex flex-col items-center justify-center mb-6 relative overflow-hidden group-hover:border-white/40 transition-all shadow-inner`}
        >
          {project.imageUrl ? (
            project.imageStyle === "full" ? (
              <div className="absolute inset-0 w-full h-full bg-[#070709] flex items-center justify-center p-2">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-black/50 pointer-events-none z-10"></div>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full bg-[#050506] flex items-center justify-center p-3">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-black/70 z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-2xl border-2 border-[#d4af37]/70 shadow-[0_0_35px_rgba(212,175,55,0.4)] z-0 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )
          ) : (
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-br ${
                project.imageGradient || "from-zinc-800 to-black"
              } flex flex-col items-center justify-center`}
            >
            </div>
          )}

          {/* Category Label / App Badge */}
          <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-20">
            <div className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-sm">
              {project.categoryLabel}
            </div>
            {project.badge && (
              <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold border border-emerald-400/50 shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                {project.badge}
              </div>
            )}
          </div>

          {/* Live / App Store Link Button */}
          {(project.appStoreUrl || project.liveUrl) && (
            <div className="absolute bottom-3 left-3 z-20">
              {project.appStoreUrl ? (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-cairo text-xs text-white font-bold px-3.5 py-1.5 rounded-full bg-emerald-600/95 hover:bg-emerald-500 backdrop-blur-md border border-emerald-400/50 transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-1"
                >
                  View on App Store ↗
                </a>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-cairo text-xs text-white font-bold px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-white/30 hover:bg-white hover:text-black transition-all shadow-md"
                >
                  {project.liveUrl?.includes("figma") ? "معاينة Figma ↗" : "زيارة الموقع ↗"}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Project Title & Description */}
        <h3 className="font-cairo text-lg sm:text-xl font-bold text-white group-hover:text-zinc-200 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tags & Action Footer */}
      {project.tags.length > 0 && (
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-black/80 text-zinc-300 text-[11px] font-medium border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {!project.isDisplayOnly && (
            <span className="text-xs font-cairo font-bold text-white flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
              التفاصيل ←
            </span>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-zinc-400 font-cairo font-bold text-sm tracking-widest uppercase">
            // محفظة الأعمال والمشاريع
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-white">
            المشاريع الحقيقية والتطبيقات
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            استعرض مشاريع المواقع والتطبيقات المنشورة على المتاجر والتصاميم التفاعلية.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Filters / Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-14 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-cairo font-bold transition-all ${
              activeTab === "all"
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white"
                : "bg-[#121214]/80 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            الكل (All)
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-cairo font-bold transition-all ${
              activeTab === "web"
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white"
                : "bg-[#121214]/80 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            مشاريع المواقع (Web Projects)
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-cairo font-bold transition-all ${
              activeTab === "mobile"
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white"
                : "bg-[#121214]/80 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            تطبيقات الجوال (Mobile Apps)
          </button>
        </div>

        {/* Web Projects Subsection */}
        {(activeTab === "all" || activeTab === "web") && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
              <div>
                <h3 className="font-cairo text-xl sm:text-2xl font-bold text-white">
                  Web Projects — مشاريع المواقع
                </h3>
                <p className="text-xs text-zinc-400">مواقع ومنصات إلكترونية تفاعلية</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* Mobile Apps Subsection */}
        {(activeTab === "all" || activeTab === "mobile") && (
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
              <div>
                <h3 className="font-cairo text-xl sm:text-2xl font-bold text-white">
                  Mobile Apps — تطبيقات الجوال
                </h3>
                <p className="text-xs text-zinc-400">تطبيقات الهواتف الذكية المنشورة والتصاميم التفاعلية</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#0c0c0e] border border-white/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="إغلاق"
                className="absolute top-5 left-5 w-9 h-9 rounded-full bg-black border border-white/30 text-white flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-4">
                {selectedProject.imageUrl ? (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-16 h-16 rounded-xl border border-white/30 object-cover shadow-lg"
                  />
                ) : null}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-300 font-bold">
                      {selectedProject.categoryLabel}
                    </span>
                    {selectedProject.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold">
                        {selectedProject.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-cairo text-xl sm:text-2xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.tags.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-cairo text-sm font-bold text-white mb-2">
                    التقنيات المستخدمة:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-black border border-white/20 text-white text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-black border border-white/20 text-zinc-400 hover:text-white font-cairo text-sm font-bold transition-all"
                >
                  إغلاق
                </button>
                {selectedProject.appStoreUrl ? (
                  <a
                    href={selectedProject.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-cairo text-sm font-extrabold border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all flex items-center gap-1.5"
                  >
                    View on App Store ↗
                  </a>
                ) : (
                  selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black font-cairo text-sm font-extrabold border border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all flex items-center gap-1"
                    >
                      {selectedProject.liveUrl.includes("figma") ? "فتح تصميم Figma ↗" : "زيارة الموقع ↗"}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
