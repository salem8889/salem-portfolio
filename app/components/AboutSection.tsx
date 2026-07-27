"use client";

import { useEffect, useState, useRef } from "react";

interface CounterItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: CounterItem[] = [
  { target: 1, suffix: "", label: "سنة خبرة مهنية" },
  { target: 2, suffix: "", label: "مشاريع مكتملة بنجاح" },
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
          <span className="text-[#4fd1ff] font-cairo font-bold text-sm tracking-widest uppercase">
            // من أنا
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-[#eaf2ff]">
            شغف بالتحول الرقمي وتصميم التجارب الفريدة
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#1d63c9] via-[#4fd1ff] to-[#1d63c9] mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout: Avatar/Bio & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4fd1ff] to-[#1d63c9] rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Avatar Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-[#0d1a3d] border border-[#4fd1ff]/30 overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                  <h3 className="font-cairo text-xl font-bold text-[#eaf2ff]">
                    SALEM MOHAMMED BA ABBAD
                  </h3>
                  <p className="text-sm text-[#4fd1ff] mt-1 font-semibold">
                    UI/UX Designer & Software Developer
                  </p>
                  <p className="text-xs text-[#8ba0c9] mt-3">الرياض، المملكة العربية السعودية</p>
                </div>

                {/* Bottom decorative bar */}
                <div className="w-full pt-4 border-t border-[#8ba0c9]/15 flex items-center justify-between text-xs text-[#8ba0c9]">
                  <span>تطوير تكيّفي متكامل</span>
                  <span className="flex items-center gap-1.5 text-[#4fd1ff]">
                    <span className="w-2 h-2 rounded-full bg-[#4fd1ff]"></span> متصل
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text & Details */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-cairo text-2xl sm:text-3xl font-bold text-[#eaf2ff] leading-snug">
              أحول الأفكار المعقدة إلى منصات وتطبيقـات ملموسة، أنيقة، وسريعة للغاية.
            </h3>
            
            <p className="text-[#8ba0c9] text-base leading-relaxed">
              أنا <strong className="text-[#eaf2ff]">سالم محمد باعباد (SALEM MOHAMMED BA ABBAD)</strong>، خريج تقنية المعلومات (IT) لعام 2026 من جامعة الريان، مصمم تجربة مستخدم (UI/UX) ومطور مواقع وبرامج. أمتلك شغفاً ببناء المنصات الرقمية والمتاجر الإلكترونية وتصميم واجهات تفاعلية تمنح المستخدم تجربة فريدة بالاعتماد على أحدث أطر العمل مثل React و Next.js و TypeScript.
            </p>

            <p className="text-[#8ba0c9] text-base leading-relaxed">
              أهتم بأدق التفاصيل الحركية والبصرية، لضمان أعلى معايير سهولة الاستخدام (Usability)، الأداء والسرعة، والتوافق التام مع مختلف الأجهزة والشاشات مع دعم RTL الكامل.
            </p>


          </div>

        </div>

        {/* Animated Counters Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glow-card p-6 rounded-2xl text-center border border-[#4fd1ff]/15"
            >
              <div className="font-cairo text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4fd1ff] to-[#1d63c9]">
                {counts[idx]}
                {stat.suffix}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-[#8ba0c9]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
