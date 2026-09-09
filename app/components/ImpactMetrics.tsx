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

          metrics.forEach((metric, index) => {
            let start = 0;
            const duration = 1600;
            const stepTime = 25;
            const totalSteps = duration / stepTime;
            const increment = metric.target / totalSteps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= metric.target) {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = metric.target;
                  return updated;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.floor(start);
                  return updated;
                });
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-3xl bg-zinc-50/80 border border-black/10 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-heading">
              {t.metrics.tag}
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-extrabold text-zinc-950">
              {t.metrics.title}
            </h3>
          </div>
          <span className="text-xs text-zinc-500 bg-white px-3 py-1 rounded-full border border-black/10 self-start md:self-auto font-medium">
            {t.metrics.badge}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glow-card p-5 rounded-2xl bg-white border border-black/10 text-center"
            >
              <div
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-600"
                dir="ltr"
              >
                {counts[idx].toLocaleString()}
                {metric.suffix}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-bold text-zinc-900">
                {metric.label}
              </p>
              <span className="mt-1 block text-[11px] text-zinc-500 font-medium">
                {metric.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
