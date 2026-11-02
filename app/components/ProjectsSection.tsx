"use client";

import { useState, MouseEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function ProjectsSection() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "web" | "mobile" | "design">("all");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

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

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const remainingCount = filteredProjects.length - 3;

  const selectedProject = selectedProjectId
    ? t.projects.items.find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <section id="projects" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#064E3B]/80 font-heading font-bold text-xs tracking-widest uppercase">
            {t.projects.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-[#064E3B]">
            {t.projects.heading}
          </h2>
          <p className="mt-3 text-[#064E3B]/80 text-sm sm:text-base">
            {t.projects.subtitle}
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1} className="flex justify-center items-center gap-2 sm:gap-3 mb-14 flex-wrap">
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
              onClick={() => {
                setActiveTab(tab.id);
                setShowAll(false);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#064E3B] text-[#F8E7C9] shadow-[0_4px_15px_rgba(6,78,59,0.25)] border border-[#064E3B]"
                  : "bg-white text-[#064E3B] border border-[#064E3B]/15 hover:bg-[#F8E7C9] shadow-xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Projects Grid: 2 columns on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {visibleProjects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              delay={(idx % 2) * 0.08}
              className="h-full"
            >
              <div
                onMouseMove={handleMouseMove}
                onClick={() => setSelectedProjectId(project.id)}
                className="glow-card rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 flex flex-col justify-between cursor-pointer group transition-all h-full"
              >
              <div>
                {/* Category & Action Header (Cleanly separated from the image) */}
                <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-3">
                  <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#F8E7C9]/80 text-[#064E3B] text-[9px] sm:text-[11px] font-bold border border-[#064E3B]/15">
                    {project.categoryLabel}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[9px] sm:text-xs text-[#064E3B] font-bold hover:underline flex items-center gap-0.5"
                    >
                      <span>
                        {project.category === "design"
                          ? "Figma ↗"
                          : isRtl
                          ? "موقع ↗"
                          : "Live ↗"}
                      </span>
                    </a>
                  )}
                </div>

                {/* Visual Header / Image Container - 100% Clean & Unobstructed */}
                <div className="w-full h-28 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 flex items-center justify-center mb-2.5 sm:mb-4 overflow-hidden group-hover:border-[#064E3B]/30 transition-all p-1 sm:p-2">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg sm:rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#F8E7C9] border border-[#064E3B]/15 flex items-center justify-center font-heading font-black text-sm sm:text-xl text-[#064E3B] shadow-sm mb-1.5 sm:mb-2">
                        IT
                      </div>
                      <span className="font-heading font-bold text-xs sm:text-sm text-[#064E3B] line-clamp-2">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title & Summary */}
                <h3 className="font-heading text-xs sm:text-xl md:text-2xl font-bold text-[#064E3B] group-hover:text-[#043629] transition-colors leading-snug line-clamp-2">
                  {project.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-[#064E3B]/80 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {project.summary}
                </p>

                {/* Key Metrics Callout if available */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-2.5 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2.5 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#F8E7C9]/35 border border-[#064E3B]/10">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="min-w-0">
                        <div
                          className="font-heading text-xs sm:text-base md:text-lg font-extrabold text-[#064E3B] truncate"
                          dir="ltr"
                        >
                          {m.value}
                        </div>
                        <div className="text-[9px] sm:text-[11px] text-[#064E3B]/70 font-medium leading-tight truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags & Action Link */}
              <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-5 border-t border-[#064E3B]/10 flex flex-wrap items-center justify-between gap-1.5 sm:gap-3">
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-[#F8E7C9]/50 text-[#064E3B] text-[9px] sm:text-[11px] font-semibold border border-[#064E3B]/10 truncate max-w-[80px] sm:max-w-none"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-1 sm:px-2 py-0.5 rounded-md bg-[#F8E7C9]/40 text-[#064E3B]/70 text-[9px] sm:text-[11px] font-semibold">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                <span className="text-[10px] sm:text-xs font-heading font-bold text-[#064E3B] flex items-center gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  {t.projects.viewDetails}
                </span>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button (Matching Education/Certifications) */}
        {filteredProjects.length > 3 && (
          <ScrollReveal delay={0.1} className="flex justify-center mt-10 sm:mt-12">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-7 py-3 rounded-full bg-white/70 backdrop-blur-xl hover:bg-[#F8E7C9] text-[#064E3B] font-heading font-bold text-xs sm:text-sm border border-white/60 shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>
                {showAll
                  ? t.projects.showLess
                  : `${t.projects.showMore} (+${remainingCount})`}
              </span>
              <span
                className={`transition-transform duration-200 inline-block ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>
          </ScrollReveal>
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#043629]/75 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-2xl border border-white/70 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProjectId(null)}
                aria-label={t.projects.closeBtn}
                className="absolute top-5 end-5 w-9 h-9 rounded-full bg-[#F8E7C9]/60 border border-[#064E3B]/15 text-[#064E3B] flex items-center justify-center text-sm font-bold hover:bg-[#064E3B] hover:text-[#F8E7C9] transition-all shadow-xs cursor-pointer"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-5 pe-8">
                {selectedProject.imageUrl && (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-16 h-16 rounded-2xl border border-[#064E3B]/15 object-contain p-1 bg-white shadow-xs shrink-0"
                  />
                )}
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs text-[#064E3B]/70 font-bold uppercase tracking-wider">
                      {selectedProject.categoryLabel}
                    </span>
                    {selectedProject.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-[#064E3B] text-[#F8E7C9] text-[10px] font-bold">
                        {selectedProject.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#064E3B]">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-[#064E3B]/80 text-sm leading-relaxed mb-5">
                {selectedProject.description}
              </p>

              {/* Metrics Grid */}
              {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                <div className="mb-6 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#F8E7C9]/35 border border-[#064E3B]/10">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="font-heading text-xl font-black text-[#064E3B]" dir="ltr">
                        {m.value}
                      </div>
                      <div className="text-xs text-[#064E3B]/70 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Deliverables Bullet Points */}
              <div className="mb-6">
                <h4 className="font-heading text-xs uppercase tracking-wider text-[#064E3B] font-bold mb-3">
                  {t.projects.highlightsTitle}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#064E3B]/90">
                  {selectedProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] shrink-0 mt-2"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="mb-6">
                <h4 className="font-heading text-xs uppercase tracking-wider text-[#064E3B] font-bold mb-2.5">
                  {t.projects.techTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#F8E7C9]/50 border border-[#064E3B]/12 text-[#064E3B] text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap justify-end gap-3 pt-5 border-t border-[#064E3B]/10">
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="px-5 py-2.5 rounded-full bg-[#F8E7C9]/50 border border-[#064E3B]/15 text-[#064E3B] hover:bg-[#F8E7C9] font-heading text-xs font-bold transition-all cursor-pointer"
                >
                  {t.projects.closeBtn}
                </button>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#064E3B] hover:bg-[#043629] text-[#F8E7C9] font-heading text-xs font-extrabold border border-[#064E3B] shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
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
                    className="px-5 py-2.5 rounded-full bg-[#064E3B] hover:bg-[#043629] text-[#F8E7C9] font-heading text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
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
                    className="px-5 py-2.5 rounded-full bg-[#F8E7C9] text-[#064E3B] hover:bg-[#064E3B] hover:text-[#F8E7C9] font-heading text-xs font-bold transition-all flex items-center gap-1.5 border border-[#064E3B]/20 cursor-pointer"
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
