export type Language = "en" | "ar";

export interface TranslationDictionary {
  navbar: {
    name: string;
    role: string;
    nav: {
      about: string;
      experience: string;
      projects: string;
      skills: string;
      education: string;
      approach: string;
      contact: string;
    };
    resume: string;
    resumePdf: string;
    getInTouch: string;
    downloadResume: string;
    switchLangAria: string;
  };
  hero: {
    statusBadge: string;
    name: string;
    titleMain: string;
    titleSub: string;
    subtitle: string;
    exploreProjects: string;
    viewResume: string;
    getInTouch: string;
  };
  metrics: {
    tag: string;
    title: string;
    badge: string;
    items: {
      users: { label: string; source: string };
      views: { label: string; source: string };
      ios: { label: string; source: string };
      android: { label: string; source: string };
    };
  };
  about: {
    tag: string;
    heading: string;
    name: string;
    role: string;
    location: string;
    availableBadge: string;
    mainHeading: string;
    bioP1: string;
    bioP2: string;
    coreValues: {
      pixelPerfect: { title: string; desc: string };
      performance: { title: string; desc: string };
      crossPlatform: { title: string; desc: string };
      bilingual: { title: string; desc: string };
    };
  };
  experience: {
    tag: string;
    heading: string;
    subtitle: string;
    role: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    responsibilitiesTitle: string;
    responsibilities: string[];
    toolsTitle: string;
    tools: string[];
  };
  projects: {
    tag: string;
    heading: string;
    subtitle: string;
    tabs: {
      all: string;
      web: string;
      mobile: string;
      design: string;
    };
    viewDetails: string;
    highlightsTitle: string;
    techTitle: string;
    closeBtn: string;
    openFigma: string;
    visitLive: string;
    appStore: string;
    googlePlay: string;
    items: {
      id: number;
      title: string;
      category: "web" | "mobile" | "design";
      categoryLabel: string;
      badge?: string;
      summary: string;
      description: string;
      bullets: string[];
      metrics?: { value: string; label: string }[];
      tags: string[];
      imageUrl?: string;
      imageStyle?: "logo" | "full" | "portal";
      liveUrl?: string;
      appStoreUrl?: string;
      googlePlayUrl?: string;
    }[];
  };
  skills: {
    tag: string;
    heading: string;
    subtitle: string;
    tabs: {
      all: string;
      frontend: string;
      mobile: string;
      backend: string;
      tools: string;
    };
    categoryLabels: {
      frontend: string;
      mobile: string;
      backend: string;
      apis: string;
      tools: string;
      design: string;
    };
  };
  education: {
    tag: string;
    heading: string;
    subtitle: string;
    degree: {
      type: string;
      period: string;
      title: string;
      university: string;
      description: string;
      conferred: string;
    };
    certification: {
      type: string;
      period: string;
      title: string;
      issuer: string;
      description: string;
      verified: string;
    };
    languages: {
      title: string;
      subtitle: string;
      arabic: string;
      english: string;
    };
  };
  approach: {
    tag: string;
    heading: string;
    subtitle: string;
    principles: {
      number: string;
      title: string;
      tagline: string;
      description: string;
    }[];
  };
  contact: {
    tag: string;
    heading: string;
    subtitle: string;
    directTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationVal: string;
    downloadResume: string;
    directEmailBtn: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendBtn: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    name: string;
    role: string;
    rights: string;
    backToTop: string;
  };
  preloader: {
    name: string;
    role: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    navbar: {
      name: "SALEM BA ABBAD",
      role: "Frontend & Mobile Developer • UI/UX",
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        education: "Education",
        approach: "Approach",
        contact: "Contact",
      },
      resume: "Resume",
      resumePdf: "PDF",
      getInTouch: "Get In Touch",
      downloadResume: "Download Resume (PDF)",
      switchLangAria: "Switch language to Arabic",
    },
    hero: {
      statusBadge: "Available for Frontend & Mobile Opportunities",
      name: "SALEM BA ABBAD",
      titleMain: "Frontend & Mobile Developer",
      titleSub: "• UI/UX Designer",
      subtitle:
        "Building modern digital experiences through frontend development, mobile applications, and thoughtful UI/UX design. Transforming ideas into fast, responsive, and intuitive products.",
      exploreProjects: "Explore Projects",
      viewResume: "View Resume",
      getInTouch: "Get In Touch",
    },
    metrics: {
      tag: "Key Metrics",
      title: "Measurable Platform & App Records",
      badge: "Production Records",
      items: {
        users: { label: "Website Users", source: "Arab Coin Website" },
        views: { label: "Views and Visits", source: "Based on Google Analytics" },
        ios: { label: "iOS Device Registrations", source: "Supabase device-token records" },
        android: { label: "Android Device Registrations", source: "Supabase device-token records" },
      },
    },
    about: {
      tag: "// ABOUT ME",
      heading: "Bridging Thoughtful Design & Robust Engineering",
      name: "SALEM BA ABBAD",
      role: "Frontend & Mobile Developer • UI/UX Designer",
      location: "Riyadh, Saudi Arabia",
      availableBadge: "Available for Roles",
      mainHeading: "Transforming complex requirements into intuitive, fast, and scalable digital products.",
      bioP1:
        "I am an Information Technology graduate (2021 – 2025) from Al-Rayan University with specialized expertise in Frontend Development, Cross-Platform Mobile Development, and UI/UX Design.",
      bioP2:
        "My approach focuses on creating production-grade applications that seamlessly unite visual clarity with high performance. Having built and deployed live platforms like the Arab Coin precious metals web platform (serving 1,500+ active users and 20,000+ views) and its companion mobile app on iOS & Android, I understand what it takes to deliver end-to-end software that users love and businesses rely on.",
      coreValues: {
        pixelPerfect: {
          title: "Pixel-Perfect UI/UX",
          desc: "Designed in Figma and faithfully coded with attention to micro-interactions.",
        },
        performance: {
          title: "Performance & Speed",
          desc: "Fast page loads, optimized bundle sizes, and responsive layouts across all devices.",
        },
        crossPlatform: {
          title: "Cross-Platform Delivery",
          desc: "Unified mobile development using React Native & Expo for iOS & Android.",
        },
        bilingual: {
          title: "Bilingual & RTL-Ready",
          desc: "Native Arabic & professional English fluency with complete bidirectional support.",
        },
      },
    },
    experience: {
      tag: "// WORK EXPERIENCE",
      heading: "Professional Experience",
      subtitle: "Work history demonstrating operational discipline, accuracy, and customer-facing responsibility.",
      role: "Sales Associate & Data Entry Specialist",
      company: "Arab Coin Company",
      location: "Riyadh, Saudi Arabia",
      period: "Oct 2025 – Present",
      type: "Full-Time",
      description:
        "Managing operational records, daily sales data verification, and customer transactions in a fast-paced commercial environment with a strict commitment to data precision.",
      responsibilitiesTitle: "Key Responsibilities & Deliverables:",
      responsibilities: [
        "Maintained accurate customer and sales records using Microsoft Excel and Office tools.",
        "Managed daily data entry and verified records with a strong focus on accuracy and quality control.",
        "Supported daily business operations through organized documentation and data management workflows.",
        "Assisted customers and handled sales transactions in a fast-paced retail environment.",
      ],
      toolsTitle: "Skills & Tools:",
      tools: ["Microsoft Excel", "Data Verification", "Documentation", "Customer Service", "Office Tools"],
    },
    projects: {
      tag: "// FEATURED WORK",
      heading: "Real-World Projects & Case Studies",
      subtitle: "Shipped production web platforms, published mobile applications, and interactive UI/UX designs.",
      tabs: {
        all: "All Projects",
        web: "Web Applications",
        mobile: "Mobile Apps (iOS & Android)",
        design: "UI/UX Case Studies",
      },
      viewDetails: "View Details →",
      highlightsTitle: "Highlights & Technical Contributions:",
      techTitle: "Technologies Used:",
      closeBtn: "Close",
      openFigma: "Open Figma Prototype",
      visitLive: "Visit Live Website",
      appStore: "App Store",
      googlePlay: "Google Play",
      items: [
        {
          id: 1,
          title: "Arab Coin Precious Metals Website",
          category: "web",
          categoryLabel: "Production Web Platform",
          badge: "Live Production Platform",
          summary: "Live gold & silver precious metals trading platform with real-time price feeds and branch locator.",
          description:
            "A high-performance web platform built with Next.js and TypeScript for Arab Coin Company, a premier precious metals enterprise in Saudi Arabia. The platform integrates live market feeds to deliver real-time gold and silver pricing, bullion catalog exploration, and authorized branch discovery with complete mobile responsiveness.",
          bullets: [
            "Built a fully responsive Next.js website displaying live gold and silver prices with real-time data.",
            "Reached 1,500+ users and exceeded 20,000 views and visits, based on Google Analytics.",
            "Integrated REST APIs to fetch and display market price updates automatically.",
            "Designed responsive UI/UX layouts optimized for both mobile and large-screen displays.",
          ],
          metrics: [
            { value: "1,500+", label: "Active Website Users" },
            { value: "20,000+", label: "Views & Visits (Google Analytics)" },
          ],
          tags: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "UI/UX Design", "RTL / Arabic Support"],
          imageUrl: "/arabic-coin-logo.jpg",
          imageStyle: "logo",
          liveUrl: "https://arabiccoincompany.com",
        },
        {
          id: 2,
          title: "Arabic Coin Mobile App",
          category: "mobile",
          categoryLabel: "Published Mobile App",
          badge: "Published on App Store & Google Play",
          summary: "Cross-platform iOS and Android mobile app for live precious metals tracking and instant price alerts.",
          description:
            "Official cross-platform mobile application developed for Arab Coin Company using React Native and Expo. The app allows investors to monitor live bullion prices, compute holdings value in real time, and receive smart push notifications on market shifts.",
          bullets: [
            "Developed and deployed a cross-platform mobile app for live precious metals prices using React Native and Expo.",
            "Recorded 200+ device registrations on iOS and 200+ on Android through Supabase device-token records.",
            "Integrated live market price feeds with push notification support for price alerts.",
            "Successfully deployed the app to both Apple App Store and Google Play platforms.",
          ],
          metrics: [
            { value: "200+", label: "iOS Device Registrations" },
            { value: "200+", label: "Android Registrations" },
          ],
          tags: ["React Native", "Expo", "TypeScript", "REST APIs", "Push Notifications", "Mobile UI/UX"],
          imageUrl: "/arabic-coin-app-icon.png",
          imageStyle: "full",
          appStoreUrl: "https://lnkd.in/dpwsJw_x",
          googlePlayUrl: "https://lnkd.in/d4rck-9T",
        },
        {
          id: 3,
          title: "Emaar App UI/UX Case Study",
          category: "design",
          categoryLabel: "Figma Interactive Prototype",
          badge: "Interactive Prototype",
          summary: "Comprehensive UI/UX design and clickable interactive mobile prototype crafted in Figma.",
          description:
            "A complete UI/UX design exploration and interactive prototype for the Emaar mobile application. Built using modern design systems, comprehensive component libraries, auto-layout architecture, and high-fidelity wireframing to deliver a smooth and conversion-driven mobile user journey.",
          bullets: [
            "Designed full end-to-end user flows, onboarding screens, and service interaction models in Figma.",
            "Built interactive prototypes with micro-interactions and transition animations.",
            "Structured reusable design tokens, typography scales, and modular UI components.",
            "Conducted usability walkthroughs to refine user paths and reduce interaction friction.",
          ],
          tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Mobile UI"],
          imageUrl: "/emaar-logo-center.png",
          imageStyle: "logo",
          liveUrl: "https://www.figma.com/design/pIJjE8wN3wRGT71f0rWSuz/Emaar-App?node-id=0-1&t=zxxVwlgOVdcmavZk-1",
        },
        {
          id: 4,
          title: "Rayyan IT Portal (Graduation Project)",
          category: "web",
          categoryLabel: "Academic Graduation Project",
          badge: "Graduation Project 2021 – 2025",
          summary: "Web platform for IT services management and project workflow coordination at Al-Rayan University.",
          description:
            "A full-featured web portal developed as a distinguished graduation project for Al-Rayan University (2021 – 2025). The platform streamlines IT service management, departmental requests, and technical project progress tracking with role-based access and modern responsive layouts.",
          bullets: [
            "Engineered responsive web interfaces using Next.js and TypeScript.",
            "Implemented modular component architecture with Tailwind CSS styling.",
            "Developed structured service request workflows and administrative dashboard views.",
            "Completed as a capstone project fulfilling Bachelor's Degree requirements in Information Technology.",
          ],
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Portal", "UI/UX Architecture"],
          imageStyle: "portal",
        },
      ],
    },
    skills: {
      tag: "// TECHNICAL EXPERTISE",
      heading: "Skills & Technologies",
      subtitle: "Core technical proficiencies utilized in building production web applications, mobile apps, and UI/UX systems.",
      tabs: {
        all: "All Skills",
        frontend: "Frontend Development",
        mobile: "Mobile Development",
        backend: "Backend & APIs",
        tools: "Tools & Design",
      },
      categoryLabels: {
        frontend: "Frontend",
        mobile: "Mobile",
        backend: "Backend",
        apis: "APIs",
        tools: "Tools",
        design: "Design",
      },
    },
    education: {
      tag: "// ACADEMIC & CREDENTIALS",
      heading: "Education & Certifications",
      subtitle: "Formal education in Information Technology and specialized professional certifications.",
      degree: {
        type: "Higher Education",
        period: "2021 – 2025",
        title: "Bachelor's Degree in Information Technology",
        university: "Al-Rayan University",
        description:
          "Comprehensive study covering computer networks, database systems, software engineering fundamentals, and modern web & mobile application architectures. Completed capstone graduation project focused on IT service management workflows.",
        conferred: "Degree Conferred: 2025",
      },
      certification: {
        type: "Professional Certification",
        period: "2025",
        title: "UX/UI Design Certificate",
        issuer: "Satr Platform (منصة سطر)",
        description:
          "Specialized training in user research, wireframing, design thinking principles, high-fidelity interactive prototyping, usability heuristics, and modern component systems using Figma.",
        verified: "Verified Credential",
      },
      languages: {
        title: "Languages",
        subtitle: "Communication in Arabic and English.",
        arabic: "Arabic (Native)",
        english: "English (Professional)",
      },
    },
    approach: {
      tag: "// ENGINEERING & DESIGN PHILOSOPHY",
      heading: "How I Work & What I Bring",
      subtitle: "The core principles that guide my work from initial design thinking to production deployment.",
      principles: [
        {
          number: "01",
          title: "Design with Purpose",
          tagline: "Aesthetics serving functionality.",
          description:
            "Every screen, button, and interaction is designed to solve a specific user problem. I focus on clean visual hierarchies, intentional whitespace, and intuitive user journeys that feel effortless.",
        },
        {
          number: "02",
          title: "Build with Precision",
          tagline: "Clean, type-safe, and modular architecture.",
          description:
            "Writing maintainable TypeScript and Next.js code with structured components, robust state management, and clear API boundaries. Code is built to be scalable and easy to extend.",
        },
        {
          number: "03",
          title: "User First Performance",
          tagline: "Fast, accessible, and responsive everywhere.",
          description:
            "From mobile screens to large desktop monitors, I optimize for rapid initial load times, smooth transitions, and seamless touch interactions across both iOS and Android platforms.",
        },
        {
          number: "04",
          title: "From Concept to Product",
          tagline: "Bridging the gap between Figma and Production.",
          description:
            "I don't just stop at wireframes or prototypes. I take interactive Figma design systems and build them into fully functioning, deployable web and mobile applications with real data integrations.",
        },
      ],
    },
    contact: {
      tag: "// GET IN TOUCH",
      heading: "Let's Build Something Impactful Together",
      subtitle:
        "I am available for full-time frontend and mobile engineering roles, product collaborations, and innovative web projects.",
      directTitle: "Direct Contact Details",
      emailLabel: "Email Address",
      phoneLabel: "Phone & WhatsApp",
      locationLabel: "Current Location",
      locationVal: "Riyadh, Saudi Arabia",
      downloadResume: "Download Official Resume (PDF)",
      directEmailBtn: "Direct Email ↗",
      formTitle: "Send a Direct Message",
      namePlaceholder: "Your Full Name",
      emailPlaceholder: "Your Email Address",
      subjectPlaceholder: "Subject / Project Scope",
      messagePlaceholder: "How can I help with your project or role?",
      sendBtn: "Send Message",
      successTitle: "Message Sent Successfully!",
      successDesc: "Thank you for reaching out. I will respond to your inquiry promptly.",
    },
    footer: {
      name: "SALEM BA ABBAD",
      role: "Frontend & Mobile Developer • UI/UX Designer",
      rights: "All rights reserved.",
      backToTop: "Back to Top",
    },
    preloader: {
      name: "SALEM BA ABBAD",
      role: "Frontend & Mobile Developer • UI/UX Designer",
    },
  },
  ar: {
    navbar: {
      name: "سالم باعباد",
      role: "مطور واجهات وتطبيقات • UI/UX",
      nav: {
        about: "نبذة عني",
        experience: "الخبرة",
        projects: "المشاريع",
        skills: "المهارات",
        education: "التعليم",
        approach: "كيف أعمل",
        contact: "تواصل معي",
      },
      resume: "السيرة الذاتية",
      resumePdf: "PDF",
      getInTouch: "تواصل معي",
      downloadResume: "تحميل السيرة الذاتية (PDF)",
      switchLangAria: "التبديل إلى اللغة الإنجليزية",
    },
    hero: {
      statusBadge: "متاح لفرص تطوير الواجهات وتطبيقات الجوال",
      name: "سالم باعباد",
      titleMain: "مطور واجهات أمامية وتطبيقات جوال",
      titleSub: "• مصمم UI/UX",
      subtitle:
        "أبني تجارب رقمية حديثة تجمع بين تطوير الواجهات، وتطبيقات الجوال، وتصميم تجربة المستخدم. محوّلًا الأفكار إلى منتجات سريعة وسلسة وقابلة للتوسع.",
      exploreProjects: "استكشف المشاريع",
      viewResume: "عرض السيرة الذاتية",
      getInTouch: "تواصل معي",
    },
    metrics: {
      tag: "مؤشرات الأداء",
      title: "أرقام وإحصائيات موثقة للمشاريع",
      badge: "سجلات الإنتاج الفعلي",
      items: {
        users: { label: "مستخدمو الموقع", source: "موقع عرب كوين" },
        views: { label: "المشاهدات والزيارات", source: "استنادًا إلى Google Analytics" },
        ios: { label: "تسجيلات أجهزة iOS", source: "سجلات رموز أجهزة Supabase" },
        android: { label: "تسجيلات أجهزة Android", source: "سجلات رموز أجهزة Supabase" },
      },
    },
    about: {
      tag: "// نبذة عني",
      heading: "الربط بين التصميم المتقن والهندسة البرمجية القوية",
      name: "سالم باعباد",
      role: "مطور واجهات أمامية وتطبيقات جوال • مصمم UI/UX",
      location: "الرياض، المملكة العربية السعودية",
      availableBadge: "متاح للعمل",
      mainHeading: "تحويل المتطلبات المعقدة إلى منتجات رقمية بديهية وسريعة وقابلة للتوسع.",
      bioP1:
        "خريج بكالوريوس تقنية معلومات (2021 – 2025) من جامعة الريان، مع تخصص وخبرة في تطوير الواجهات الأمامية (Frontend Development)، وتطبيقات الجوال متعددة المنصات (Cross-Platform Mobile Development)، وتصميم تجربة وواجهة المستخدم (UI/UX Design).",
      bioP2:
        "يرتكز أسلوبي على بناء تطبيقات بمستوى إنتاجي يجمع بين الجاذبية البصرية والأداء العالي. بفضل تطويري وإطلاقي لمنصات حية مثل موقع عرب كوين للمعادن الثمينة (الذي يخدم أكثر من 1,500 مستخدم نشط وتجاوز 20,000 مشاهدة وزيارة) وتطبيقه على أنظمة iOS و Android، أمتلك الخبرة العملية لتقديم برمجيات متكاملة تحظى برضا المستخدمين وتلبي أهداف الأعمال.",
      coreValues: {
        pixelPerfect: {
          title: "تصميم دقيق UI/UX",
          desc: "مصمم في Figma ومبرمج بدقة متناهية مع الاهتمام بأدق تفاصيل التفاعل والحركة.",
        },
        performance: {
          title: "الأداء والسرعة",
          desc: "سرعة تحميل فائقة، وتحسين أحجام الحزم، وتجاوب سلس عبر كافة مقاسات الشاشات.",
        },
        crossPlatform: {
          title: "تطبيقات متعددة المنصات",
          desc: "تطوير تطبيقات موحدة باستخدام React Native و Expo لكل من نظامي iOS و Android.",
        },
        bilingual: {
          title: "دعم ثنائي اللغة و RTL",
          desc: "عربية أصيلة وإنجليزية احترافية مع دعم اتجاهي كامل ومتقن (RTL / LTR).",
        },
      },
    },
    experience: {
      tag: "// الخبرة المهنية",
      heading: "الخبرات المهنية",
      subtitle: "مسيرة عملية تعكس الانضباط التشغيلي، الدقة في إدارة البيانات، والتعامل الاحترافي مع العملاء.",
      role: "موظف مبيعات وأخصائي إدخال بيانات",
      company: "شركة العملة العربية (Arab Coin)",
      location: "الرياض، المملكة العربية السعودية",
      period: "أكتوبر 2025 – حتى الآن",
      type: "دوام كامل",
      description:
        "إدارة السجلات التشغيلية والتحقق اليومي من بيانات المبيعات والمعاملات التجارية في بيئة عمل سريعة مع التزام صارم بدقة البيانات وجودتها.",
      responsibilitiesTitle: "المسؤوليات والإنجازات الرئيسية:",
      responsibilities: [
        "الحفاظ على سجلات دقيقة للعملاء والمبيعات باستخدام Microsoft Excel وأدوات Office.",
        "إدارة عمليات إدخال البيانات اليومية ومراجعة السجلات بتركيز عالٍ على الدقة وضبط الجودة.",
        "دعم العمليات التجارية اليومية من خلال التوثيق المنظم وسير عمل إدارة البيانات.",
        "خدمة العملاء وإتمام معاملات المبيعات في بيئة تجارية نشطة وسريعة الوتيرة.",
      ],
      toolsTitle: "المهارات والأدوات:",
      tools: ["Microsoft Excel", "التحقق من البيانات", "التوثيق", "خدمة العملاء", "أدوات Office"],
    },
    projects: {
      tag: "// أبرز الأعمال",
      heading: "المشاريع ودراسات الحالة",
      subtitle: "منصات ويب في الإنتاج الفعلي، وتطبيقات جوال منشورة، وتصاميم UI/UX تفاعلية.",
      tabs: {
        all: "جميع المشاريع",
        web: "تطبيقات الويب",
        mobile: "تطبيقات الجوال (iOS و Android)",
        design: "دراسات UI/UX",
      },
      viewDetails: "عرض التفاصيل ←",
      highlightsTitle: "أبرز المساهمات التقنية:",
      techTitle: "التقنيات المستخدمة:",
      closeBtn: "إغلاق",
      openFigma: "فتح النموذج في Figma",
      visitLive: "زيارة الموقع الحي",
      appStore: "App Store",
      googlePlay: "Google Play",
      items: [
        {
          id: 1,
          title: "موقع عرب كوين للمعادن الثمينة",
          category: "web",
          categoryLabel: "منصة ويب في الإنتاج",
          badge: "منصة حية في الإنتاج الفعلي",
          summary: "منصة حية لتداول وأسعار الذهب والفضة والمعادن الثمينة مع تحديث فوري لأسعار السوق ودليل الفروع.",
          description:
            "منصة ويب عالية الأداء تم بناؤها باستخدام Next.js و TypeScript لشركة عرب كوين، إحدى الشركات البارزة في تجارة المعادن الثمينة في المملكة العربية السعودية. تتكامل المنصة مع واجهات السوق اللحظية لعرض أسعار الذهب والفضة بدقة، واستعراض كتالوج السبائك، وتحديد الفروع المعتمدة مع تجاوب كامل على جميع الأجهزة.",
          bullets: [
            "بناء موقع ويب متجاوب بالكامل باستخدام Next.js لعرض أسعار الذهب والفضة المباشرة ببيانات فورية.",
            "الوصول إلى أكثر من 1,500 مستخدم وتجاوز 20,000 مشاهدة وزيارة استنادًا إلى Google Analytics.",
            "ربط واجهات برمجة التطبيقات (REST APIs) لجلب وعرض تحديثات أسعار السوق تلقائيًا.",
            "تصميم واجهات وتجربة مستخدم (UI/UX) متجاوبة ومحسنة للهواتف والشاشات الكبيرة.",
          ],
          metrics: [
            { value: "1,500+", label: "مستخدم نشط على الموقع" },
            { value: "20,000+", label: "مشاهدة وزيارة (Google Analytics)" },
          ],
          tags: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "UI/UX Design", "RTL / Arabic Support"],
          imageUrl: "/arabic-coin-logo.jpg",
          imageStyle: "logo",
          liveUrl: "https://arabiccoincompany.com",
        },
        {
          id: 2,
          title: "تطبيق العملة العربية",
          category: "mobile",
          categoryLabel: "تطبيق جوال منشور",
          badge: "منشور على App Store و Google Play",
          summary: "تطبيق جوال متعدد المنصات لنظامي iOS و Android لمتابعة أسعار المعادن الثمينة وتنبيهات الأسعار الفورية.",
          description:
            "التطبيق الرسمي للشركة مطور بتقنيات React Native و Expo لأنظمة iOS و Android. يتيح للمستثمرين متابعة أسعار السبائك والذهب لحظة بلحظة، وحساب قيمة المقتنيات فورياً، واستقبال الإشعارات الفورية عند تغيرات السوق.",
          bullets: [
            "تطوير وإطلاق تطبيق جوال متعدد المنصات لأسعار المعادن الثمينة المباشرة باستخدام React Native و Expo.",
            "تسجيل أكثر من 200 جهاز على iOS وأكثر من 200 على Android عبر سجلات رموز أجهزة Supabase.",
            "تكامل مع بيانات السوق المباشرة مع دعم الإشعارات اللحظية (Push Notifications) لتنبيهات الأسعار.",
            "نشر التطبيق بنجاح على متجري Apple App Store و Google Play.",
          ],
          metrics: [
            { value: "200+", label: "تسجيلات أجهزة iOS" },
            { value: "200+", label: "تسجيلات أجهزة Android" },
          ],
          tags: ["React Native", "Expo", "TypeScript", "REST APIs", "Push Notifications", "Mobile UI/UX"],
          imageUrl: "/arabic-coin-app-icon.png",
          imageStyle: "full",
          appStoreUrl: "https://lnkd.in/dpwsJw_x",
          googlePlayUrl: "https://lnkd.in/d4rck-9T",
        },
        {
          id: 3,
          title: "دراسة حالة تطبيق إعمار UI/UX",
          category: "design",
          categoryLabel: "نموذج تفاعلي على Figma",
          badge: "نموذج تفاعلي",
          summary: "تصميم متكامل لواجهات وتجربة المستخدم ونموذج أولي تفاعلي قابل للنقر على Figma.",
          description:
            "دراسة تصميمية شاملة ونموذج أولي تفاعلي لتطبيق إعمار للجوال، مبني وفق أحدث أنظمة التصميم (Design Systems)، ومكتبات المكونات الشاملة، وهيكلية Auto-layout، ونماذج عالية الدقة لتوفير رحلة مستخدم سلسة وجذابة.",
          bullets: [
            "تصميم مسارات المستخدم الكاملة وشاشات الترحيب ونماذج التفاعل مع الخدمات في Figma.",
            "بناء نماذج تفاعلية بالحركات الانتقالية والتفاعلات الدقيقة (Micro-interactions).",
            "هيكلة الرموز التصميمية ومقاييس الخطوط والمكونات المعيارية القابلة لإعادة الاستخدام.",
            "إجراء اختبارات قابلية الاستخدام لتحسين المسارات وتقليل عوائق التفاعل.",
          ],
          tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Mobile UI"],
          imageUrl: "/emaar-logo-center.png",
          imageStyle: "logo",
          liveUrl: "https://www.figma.com/design/pIJjE8wN3wRGT71f0rWSuz/Emaar-App?node-id=0-1&t=zxxVwlgOVdcmavZk-1",
        },
        {
          id: 4,
          title: "بوابة تقنية المعلومات (مشروع التخرج)",
          category: "web",
          categoryLabel: "مشروع تخرج جامعي",
          badge: "مشروع تخرج 2021 – 2025",
          summary: "منصة ويب لإدارة خدمات تقنية المعلومات وتنسيق سير عمل المشاريع في جامعة الريان.",
          description:
            "بوابة ويب متكاملة طُوّرت كمشروع تخرج مميز لجامعة الريان (2021 – 2025). تسهم المنصة في تنظيم طلبات الدعم الفني، وتنسيق مهام الأقسام، ومتابعة المشاريع التقنية مع صلاحيات وصول متعددة وتصميم متجاوب حديث.",
          bullets: [
            "تطوير واجهات ويب متجاوبة باستخدام Next.js و TypeScript.",
            "تطبيق بنية مكونات معيارية وتنسيق حديث باستخدام Tailwind CSS.",
            "بناء مسارات منظمة لطلبات الخدمة ولوحات تحكم إدارية.",
            "تم إنجازه كمشروع تخرج رئيسي لاستيفاء متطلبات درجة البكالوريوس في تقنية المعلومات.",
          ],
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Portal", "UI/UX Architecture"],
          imageStyle: "portal",
        },
      ],
    },
    skills: {
      tag: "// الخبرات والمهارات التقنية",
      heading: "المهارات والتقنيات",
      subtitle: "القدرات التقنية الأساسية المستخدمة في بناء وتطوير منصات الويب وتطبيقات الجوال وأنظمة UI/UX.",
      tabs: {
        all: "جميع المهارات",
        frontend: "تطوير الواجهات",
        mobile: "تطبيقات الجوال",
        backend: "الخلفية وواجهات API",
        tools: "الأدوات والتصميم",
      },
      categoryLabels: {
        frontend: "تطوير الواجهات",
        mobile: "تطبيقات الجوال",
        backend: "الخلفية",
        apis: "واجهات API",
        tools: "أدوات",
        design: "تصميم",
      },
    },
    education: {
      tag: "// المؤهلات الأكاديمية والشهادات",
      heading: "التعليم والشهادات المهنية",
      subtitle: "التعليم الأكاديمي في تقنية المعلومات والشهادات التخصصية المعتمدة.",
      degree: {
        type: "التعليم الجامعي",
        period: "2021 – 2025",
        title: "بكالوريوس تقنية المعلومات",
        university: "جامعة الريان",
        description:
          "دراسة شاملة تغطي شبكات الحاسب، أنظمة قواعد البيانات، أساسيات هندسة البرمجيات، وهيكلة تطبيقات الويب والجوال الحديثة. إنجاز مشروع تخرج ركز على إدارة وتدفق خدمات تقنية المعلومات.",
        conferred: "تاريخ التخرج: 2025",
      },
      certification: {
        type: "شهادة مهنية متخصصة",
        period: "2025",
        title: "شهادة تصميم UX/UI",
        issuer: "منصة سطر (Satr Platform)",
        description:
          "تدريب متخصص في أبحاث المستخدمين، وتخطيط الهياكل، ومبادئ التفكير التصميمي، وبناء النماذج التفاعلية عالية الدقة، واختبارات الاستخدام، وأنظمة المكونات في Figma.",
        verified: "شهادة معتمدة وموثقة",
      },
      languages: {
        title: "اللغات",
        subtitle: "التواصل باللغتين العربية والإنجليزية.",
        arabic: "العربية (اللغة الأم)",
        english: "الإنجليزية (مستوى مهني)",
      },
    },
    approach: {
      tag: "// فلسفة العمل والتطوير",
      heading: "كيف أعمل وما أقدمه",
      subtitle: "المبادئ الأساسية التي توجه عملي من التفكير التصميمي الأولي حتى النشر في بيئة الإنتاج.",
      principles: [
        {
          number: "01",
          title: "التصميم بهدف",
          tagline: "الجمالية في خدمة الوظيفة.",
          description:
            "كل شاشة وزر وتفاعل مصمم لحل مشكلة محددة للمستخدم، مع التركيز على التسلسل الهرمي البصري، والمساحات المدروسة، والرحلات البديهية التي تجعل الاستخدام سلسًا ومريحًا.",
        },
        {
          number: "02",
          title: "البناء بدقة",
          tagline: "هندسة برمجية نظيفة وقوية ومعيارية.",
          description:
            "كتابة كود Next.js و TypeScript نظيف وقابل للصيانة، بمكونات منظمة، وإدارة حالة متينة، وحدود واضحة لواجهات API، مما يجعل الكود قابلاً للتوسع بسهولة.",
        },
        {
          number: "03",
          title: "المستخدم أولًا والأداء العالي",
          tagline: "سرعة، إمكانية وصول، وتجاوب فائق.",
          description:
            "من شاشات الهواتف إلى الشاشات الكبيرة، أركز على سرعة تحميل فائقة، وانتقالات سلسة، وتفاعلات لمس طبيعية عبر أنظمة iOS و Android.",
        },
        {
          number: "04",
          title: "من الفكرة إلى المنتج",
          tagline: "الربط المتكامل بين تصاميم Figma والمنتج الفعلي.",
          description:
            "لا يتوقف عملي عند النماذج الأولية، بل أحول تصاميم Figma التفاعلية إلى تطبيقات ويب وجوال حقيقية مكتملة ومربوطة بالبيانات الفعلية.",
        },
      ],
    },
    contact: {
      tag: "// تواصل معي",
      heading: "لنبتكر شيئًا مميزًا ومؤثرًا معًا",
      subtitle:
        "متاح لفرص العمل بدوام كامل في تطوير الواجهات وتطبيقات الجوال، والتعاون في المنتجات الرقمية والمشاريع المبتكرة.",
      directTitle: "بيانات التواصل المباشر",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف والواتساب",
      locationLabel: "الموقع الحالي",
      locationVal: "الرياض، المملكة العربية السعودية",
      downloadResume: "تحميل السيرة الذاتية الرسمية (PDF)",
      directEmailBtn: "إرسال بريد مباشر ↗",
      formTitle: "إرسال رسالة مباشرة",
      namePlaceholder: "الاسم الكامل",
      emailPlaceholder: "البريد الإلكتروني",
      subjectPlaceholder: "الموضوع / نطاق المشروع",
      messagePlaceholder: "كيف يمكنني مساعدتك في مشروعك أو فرصتك الوظيفية؟",
      sendBtn: "إرسال الرسالة",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successDesc: "شكرًا لتواصلك. سأقوم بالرد على استفسارك في أقرب وقت.",
    },
    footer: {
      name: "سالم باعباد",
      role: "مطور واجهات أمامية وتطبيقات جوال • مصمم UI/UX",
      rights: "جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى",
    },
    preloader: {
      name: "سالم باعباد",
      role: "مطور واجهات أمامية وتطبيقات جوال • مصمم UI/UX",
    },
  },
};
