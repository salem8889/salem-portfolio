"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ImpactMetrics() {
  const { t } = useLanguage();

  const metrics = [
    {
      target: 1500,
      suffix: "+",
      label: t.metrics.items.users.label,
      source: t.metrics.items.users.source,
    },
    {
      target: 20000,
      suffix: "+",
      label: t.metrics.items.views.label,
      source: t.metrics.items.views.source,
    },
    {
      target: 200,
      suffix: "+",
      label: t.metrics.items.ios.label,
      source: t.metrics.items.ios.source,
    },
    {
      target: 200,
      suffix: "+",
      label: t.metrics.items.android.label,
      source: t.metrics.items.android.source,
    },
  ];

  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const duration = 1600;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              metrics.map((m) => Math.floor(easeProgress * m.target))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(metrics.map((m) => m.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, metrics]);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-3xl bg-[#F8E7C9]/35 border border-[#064E3B]/12 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#064E3B]/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#064E3B]/80 font-bold font-heading">
              {t.metrics.tag}
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#064E3B]">
              {t.metrics.title}
            </h3>
          </div>
          <span className="text-xs text-[#064E3B] bg-[#FFFDF9] px-3.5 py-1 rounded-full border border-[#064E3B]/15 self-start md:self-auto font-semibold">
            {t.metrics.badge}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glow-card p-5 rounded-2xl bg-[#FFFDF9] border border-[#064E3B]/12 text-center shadow-xs hover:border-[#064E3B]/35 transition-all"
            >
              <div
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#064E3B]"
                dir="ltr"
              >
                {counts[idx].toLocaleString("en-US")}
                {metric.suffix}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-bold text-[#064E3B]">
                {metric.label}
              </p>
              <span className="mt-1 block text-[11px] text-[#064E3B]/70 font-medium">
                {metric.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
