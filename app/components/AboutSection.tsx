"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface CounterItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: CounterItem[] = [
  { target: 1, suffix: "", label: "سنة خبرة مهنية" },
  { target: 3, suffix: "", label: "مشاريع مكتملة بنجاح" },
  { target: 1, suffix: "", label: "مشروع تخرج متميز" },
];

export default function AboutSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let start = 0;
            const duration = 1800; // ms
            const stepTime = 30;
            const totalSteps = duration / stepTime;
            const increment = stat.target / totalSteps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= stat.target) {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = stat.target;
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-400 font-cairo font-bold text-sm tracking-widest uppercase">
            // من أنا
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-white">
            شغف بالتحول الرقمي وتصميم التجارب الفريدة
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout: Avatar/Bio & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar Box with Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500 via-white to-zinc-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Avatar Container */}
              <div className="relative w-full rounded-3xl bg-[#0c0c0e] border border-white/20 overflow-hidden p-5 shadow-2xl flex flex-col gap-4">
                {/* Photo Container */}
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                  <Image
                    src="/salem-profile.jpg"
                    alt="سالم محمد باعباد - SALEM MOHAMMED BA ABBAD"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80" />
                </div>

                {/* Name & Title */}
                <div className="text-center px-2">
                  <h3 className="font-cairo text-lg sm:text-xl font-bold text-white tracking-wide">
                    SALEM MOHAMMED BA ABBAD
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-semibold mt-1">
                    Frontend | Mobile Developer | UI/UX Designer
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 px-1">
                  <span>الرياض، السعودية</span>
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span> متصل
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text & Details */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-cairo text-2xl sm:text-3xl font-bold text-white leading-snug">
              أحول الأفكار المعقدة إلى منصات وتطبيقـات ملموسة، أنيقة، وسريعة للغاية.
            </h3>
            
            <p className="text-zinc-400 text-base leading-relaxed">
              أنا <strong className="text-white">سالم محمد باعباد (SALEM MOHAMMED BA ABBAD)</strong>، خريج تقنية المعلومات (IT) لعام 2026 من جامعة الريان، مصمم تجربة مستخدم (UI/UX) ومطور مواقع وبرامج. أمتلك شغفاً ببناء المنصات الرقمية والمتاجر الإلكترونية وتصميم واجهات تفاعلية تمنح المستخدم تجربة فريدة بالاعتماد على أحدث أطر العمل مثل React و Next.js و TypeScript.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed">
              أهتم بأدق التفاصيل الحركية والبصرية، لضمان أعلى معايير سهولة الاستخدام (Usability)، الأداء والسرعة، والتوافق التام مع مختلف الأجهزة والشاشات مع دعم RTL الكامل.
            </p>


          </div>

        </div>

        {/* Animated Counters Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glow-card p-6 rounded-2xl text-center border border-white/10"
            >
              <div className="font-cairo text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                {counts[idx]}
                {stat.suffix}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
