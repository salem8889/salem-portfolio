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
    period: "2023 - الحالي",
    role: "مطور واجهات أمامية أول (Senior Frontend Developer)",
    company: "شركة التكنولوجيا المتقدمة",
    description:
      "قائدي ومطور أساسي لمنصات الويب الضخمة باستخدام Next.js و React 19. تحسين أداء التطبيقات بنسبة 45% وتطوير نظام تصميم موحد (Design System).",
    achievements: [
      "إعادة بناء الهيكلية البرمجية بـ TypeScript",
      "تخفيض زمن تحميل الصفحات الأولى إلى أقل من 1.2 ثانية",
      "قيادة فريق مكون من 5 مطورين",
    ],
    icon: "💼",
  },
  {
    id: 2,
    period: "2021 - 2023",
    role: "مصمم ومطور UI/UX حر (Freelance Developer)",
    company: "مشاريع مستقلة واستشارات رقمية",
    description:
      "تصميم وتطوير مواقع ومحفظة أعمال وتطبيقات ويب متكاملة لأكثر من 20 عميلاً في الخليج العربي والشرق الأوسط مع تحقيق أعلى معدلات الرضا.",
    achievements: [
      "تطوير 30+ واجهة تفاعلية مخصصة",
      "دمج تجارب الدفع الإلكتروني والخرائط التفاعلية",
      "تقديم استشارات تحسين تجربة المستخدم",
    ],
    icon: "🌟",
  },
  {
    id: 3,
    period: "2019 - 2021",
    role: "مطور ويب (Frontend Web Developer)",
    company: "استوديو الإبداع الرقمي",
    description:
      "تطوير القوالب والمكونات التفاعلية باستخدام React و JavaScript وتحويل تصميمات Figma إلى شفرات برمجية دقيقة ومتجاوبة.",
    achievements: [
      "تحويل 50+ تصميم Figma إلى واجهات حية",
      "تطبيق أفضل معايير إمكانية الوصول Accessibility",
    ],
    icon: "⚡",
  },
  {
    id: 4,
    period: "2015 - 2019",
    role: "بكالوريوس علوم الحاسب والمعلومات",
    company: "جامعة الملك سعود - الرياض",
    description:
      "دراسة أكاديمية متعمقة في خوارزميات البرمجة، تراكيب البيانات، هندسة البرمجيات، وتفاعل الإنسان مع الحاسب (HCI).",
    achievements: [
      "مشروع التخرج: تطبيق تفاعلي مع مرتبة الشرف",
      "التركيز على تقنيات الويب والذكاء الاصطناعي",
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
