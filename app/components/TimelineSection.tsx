"use client";

interface TimelineItem {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    period: "2026",
    role: "مطور تطبيقات باستخدام Expo و Android Studio",
    company: "تطوير تطبيقات الجوال (Android Studio & Expo)",
    description:
      "تطوير تطبيقات جوال متكاملة وعالية الأداء للهواتف الذكية باستخدام برنامج Android Studio وبيئة Expo مع تصميم واجهات تفاعلية وسلسة.",
    achievements: [
      "بناء وتطوير تطبيقات جوال احترافية وتفاعلية عبر Android Studio و Expo",
    ],
    icon: "📱",
  },
  {
    id: 2,
    period: "2026",
    role: "مصمم واجهات وتجربة مستخدم (UI/UX Designer)",
    company: "تصميم الواجهات وتجربة المستخدم (Figma)",
    description:
      "تصميم واجهات وتجربة مستخدم متكاملة وتفاعلية للمواقع والتطبيقات مع إعداد النماذج الأولية Prototyping وتخطيط هيكلية الواجهات.",
    achievements: [
      "ابتكار وتصميم تجارب مستخدم فريدة وسلسة الاستخدام عبر Figma",
    ],
    icon: "🎨",
  },
  {
    id: 3,
    period: "2026",
    role: "مطور مواقع إلكترونية (Web Developer)",
    company: "تطوير المنصات ومواقع الويب (React & Next.js)",
    description:
      "بناء وتطوير مواقع إلكترونية ومتاجر رقمية متكاملة وسريعة باستخدام أحدث أطر العمل مثل Next.js و React و Tailwind CSS.",
    achievements: [
      "تطوير مواقع ويب متجاوبة وعالية الأداء مع دعم RTL الكامل",
    ],
    icon: "💻",
  },
  {
    id: 4,
    period: "2026",
    role: "بكالوريوس تقنية المعلومات (IT)",
    company: "جامعة الريان",
    description:
      "دراسة متخصصة في تقنية المعلومات، شبكات الحاسب، وتطوير الأنظمة والتطبيقات البرمجية الحديثة.",
    achievements: [
      "خريج دفعة عام 2026",
      "مشروع تخرج متميز في تطوير واجهات الويب والتطبيقات",
    ],
    icon: "🎓",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 relative bg-[#050b1f]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4fd1ff] font-cairo font-bold text-sm tracking-widest uppercase">
            // رحلتي المهنية
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-[#eaf2ff]">
            المسار المهني والتطوير الذاتي
          </h2>
          <p className="mt-3 text-[#8ba0c9] text-base">
            تطور خطوة بخطوة نحو التميز في بناء تجارب المستخدم وهندسة الويب.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#1d63c9] via-[#4fd1ff] to-[#1d63c9] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pr-6 md:pr-0">
          
          {/* Vertical Glowing Line */}
          <div className="absolute right-4 md:right-1/2 top-0 bottom-0 w-1 timeline-line transform md:translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Glowing Node Dot */}
                  <div className="absolute right-4 md:right-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-[#050b1f] border-2 border-[#4fd1ff] flex items-center justify-center text-sm z-10 pulse-node shadow-[0_0_15px_#4fd1ff]">
                    <span>{item.icon}</span>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] pr-12 md:pr-0 ${
                      isEven ? "md:pl-8 md:text-right" : "md:pr-8 md:text-right"
                    }`}
                  >
                    <div className="glow-card p-6 sm:p-8 rounded-3xl border border-[#4fd1ff]/20 hover:border-[#4fd1ff]/50 transition-all">
                      
                      {/* Period Badge */}
                      <span className="inline-block px-3 py-1 rounded-full bg-[#1d63c9]/30 text-[#4fd1ff] text-xs font-bold border border-[#4fd1ff]/30 mb-3">
                        {item.period}
                      </span>

                      <h3 className="font-cairo text-xl font-bold text-[#eaf2ff]">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#1d63c9] mt-1">
                        {item.company}
                      </p>
                      
                      <p className="mt-3 text-sm text-[#8ba0c9] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements Bullet List */}
                      <ul className="mt-4 space-y-2 text-xs text-[#eaf2ff]/90">
                        {item.achievements.map((ach) => (
                          <li key={ach} className="flex items-center gap-2">
                            <span className="text-[#4fd1ff]">✦</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
