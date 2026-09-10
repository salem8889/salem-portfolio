"use client";

import { useState, MouseEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsSection() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "web" | "mobile" | "design">("all");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const filteredProjects =
    activeTab === "all"
      ? t.projects.items
      : t.projects.items.filter((p) => p.category === activeTab);

  const selectedProject = selectedProjectId
    ? t.projects.items.find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-zinc-700 dark:text-zinc-300 font-heading font-bold text-xs tracking-widest uppercase">
            {t.projects.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50">
            {t.projects.heading}
          </h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
            {t.projects.subtitle}
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 dark:from-zinc-700 dark:via-white dark:to-zinc-700 mx-auto rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-14 flex-wrap">
          {(
            [
              { id: "all", label: t.projects.tabs.all },
              { id: "web", label: t.projects.tabs.web },
              { id: "mobile", label: t.projects.tabs.mobile },
              { id: "design", label: t.projects.tabs.design },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-black dark:bg-white text-white dark:text-zinc-950 shadow-[0_4px_15px_rgba(0,0,0,0.15)] border border-black dark:border-white"
                  : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/10 dark:border-white/10 hover:text-black dark:hover:text-white hover:border-black/25 dark:hover:border-white/25 shadow-xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleMouseMove}
              onClick={() => setSelectedProjectId(project.id)}
              className="glow-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all shadow-sm"
            >
              <div>
                {/* Visual Header / Image Container */}
                <div className="w-full h-52 sm:h-60 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-black/10 dark:border-white/10 flex flex-col items-center justify-center mb-6 relative overflow-hidden group-hover:border-black/25 dark:group-hover:border-white/25 transition-all">
                  {project.imageUrl ? (
                    project.imageStyle === "full" ? (
                      <div className="absolute inset-0 w-full h-full bg-[#f8f8f9] dark:bg-zinc-800 flex items-center justify-center p-3">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 z-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 dark:from-zinc-900/70 via-transparent to-transparent pointer-events-none z-10"></div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 w-full h-full bg-[#f8f8f9] dark:bg-zinc-800 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-zinc-900/80 via-transparent to-transparent z-10"></div>
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-36 h-36 sm:w-40 sm:h-40 object-contain rounded-2xl border border-black/10 dark:border-white/10 shadow-md z-0 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-50 dark:from-zinc-800 dark:via-zinc-800/80 dark:to-zinc-900 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 flex items-center justify-center font-heading font-black text-xl text-zinc-900 dark:text-zinc-100 shadow-sm mb-2">
                        IT
                      </div>
                      <span className="font-heading font-bold text-sm text-zinc-800 dark:text-zinc-200">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Badge & Category */}
                  <div className="absolute top-3 end-3 flex flex-col items-end gap-1.5 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-zinc-900 dark:text-zinc-100 text-[11px] font-bold border border-black/15 dark:border-white/15 shadow-xs">
                      {project.categoryLabel}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold border border-emerald-500 shadow-xs">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Direct Link Badges at Bottom */}
                  <div className="absolute bottom-3 inset-x-3 z-20 flex flex-wrap gap-2 items-center">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-heading text-xs text-zinc-900 dark:text-zinc-100 font-bold px-3 py-1.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-xs flex items-center gap-1"
                      >
                        <span>
                          {project.category === "design"
                            ? isRtl
                              ? "نموذج Figma ↗"
                              : "Figma Prototype ↗"
                            : isRtl
                            ? "الموقع الحي ↗"
                            : "Live Website ↗"}
                        </span>
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-heading text-xs text-white font-bold px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs flex items-center gap-1"
                      >
                        <span>App Store ↗</span>
                      </a>
                    )}
                    {project.googlePlayUrl && (
                      <a
                        href={project.googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-heading text-xs text-white font-bold px-3 py-1.5 rounded-full bg-sky-600 hover:bg-sky-700 transition-all shadow-xs flex items-center gap-1"
                      >
                        <span>Google Play ↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Metrics Callout if available */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-black/5 dark:border-white/10">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <div
                          className="font-heading text-base sm:text-lg font-extrabold text-zinc-950 dark:text-zinc-50"
                          dir="ltr"
                        >
                          {m.value}
                        </div>
                        <div className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags & Action Link */}
              <div className="mt-6 pt-5 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[11px] font-semibold border border-black/5 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[11px] font-semibold">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <span className="text-xs font-heading font-bold text-zinc-950 dark:text-zinc-50 flex items-center gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  {t.projects.viewDetails}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-black/15 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProjectId(null)}
                aria-label={t.projects.closeBtn}
                className="absolute top-5 end-5 w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-black/15 dark:border-white/15 text-zinc-900 dark:text-zinc-100 flex items-center justify-center text-sm font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-xs"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-5 pe-8">
                {selectedProject.imageUrl && (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-16 h-16 rounded-2xl border border-black/15 dark:border-white/15 object-contain p-1 bg-zinc-50 dark:bg-zinc-800 shadow-xs shrink-0"
                  />
                )}
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-wider">
                      {selectedProject.categoryLabel}
                    </span>
                    {selectedProject.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                        {selectedProject.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-zinc-50">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-5">
                {selectedProject.description}
              </p>

              {/* Metrics Grid */}
              {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                <div className="mb-6 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-black/10 dark:border-white/10">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="font-heading text-xl font-black text-zinc-950 dark:text-zinc-50" dir="ltr">
                        {m.value}
                      </div>
                      <div className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Deliverables Bullet Points */}
              <div className="mb-6">
                <h4 className="font-heading text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-bold mb-3">
                  {t.projects.highlightsTitle}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                  {selectedProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 shrink-0 mt-2"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="mb-6">
                <h4 className="font-heading text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-bold mb-2.5">
                  {t.projects.techTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap justify-end gap-3 pt-5 border-t border-black/10 dark:border-white/10">
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-black/15 dark:border-white/15 text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white font-heading text-xs font-bold transition-all"
                >
                  {t.projects.closeBtn}
                </button>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-heading text-xs font-extrabold border border-black dark:border-white shadow-xs transition-all flex items-center gap-1.5"
                  >
                    <span>
                      {selectedProject.category === "design"
                        ? t.projects.openFigma
                        : t.projects.visitLive}
                    </span>
                    <span>↗</span>
                  </a>
                )}
                {selectedProject.appStoreUrl && (
                  <a
                    href={selectedProject.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>{t.projects.appStore}</span>
                    <span>↗</span>
                  </a>
                )}
                {selectedProject.googlePlayUrl && (
                  <a
                    href={selectedProject.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-heading text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>{t.projects.googlePlay}</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
