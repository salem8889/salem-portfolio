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
    greeting: string;
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
    showMore: string;
    showLess: string;
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
    categoryDetails: {
      frontend: { title: string; subtitle: string; count: string };
      mobile: { title: string; subtitle: string; count: string };
      backend: { title: string; subtitle: string; count: string };
      tools: { title: string; subtitle: string; count: string };
    };
  };
  education: {
    tag: string;
    heading: string;
    subtitle: string;
    certificationsHeading: string;
    certificationsSubtitle: string;
    verifyBtn: string;
    previewBtn: string;
    closePreview: string;
    showMore: string;
    showLess: string;
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
    certificationsList: {
      id: string;
      type: string;
      period: string;
      title: string;
      issuer: string;
      description: string;
      verified: string;
      imageUrl: string;
      credentialUrl: string;
    }[];
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
    sendingBtn: string;
    successTitle: string;
    successDesc: string;
    errorTitle: string;
    errorDesc: string;
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
      role: "Full-Stack Developer | iOS & Android | UI/UX",
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
      greeting: "Hello, I'm Salem",
      statusBadge: "Available for Full-Stack & Mobile Opportunities",
      name: "SALEM BA ABBAD",
      titleMain: "Full-Stack Developer",
      titleSub: "| iOS & Android App Developer | UI/UX",
      subtitle:
        "Results-driven Full-Stack Developer and Information Technology graduate building scalable web and cross-platform mobile applications.",
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
      role: "Full-Stack Developer | iOS & Android App Developer | UI/UX",
      location: "Riyadh, Saudi Arabia",
      availableBadge: "Available for Roles",
      mainHeading: "Transforming complex requirements into intuitive, fast, and scalable digital products.",
      bioP1:
        "I am an Information Technology graduate (2021 – 2025) from Al-Rayan University with specialized expertise in Full-Stack Web Development, Cross-Platform Mobile Development, and UI/UX Design.",
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
      subtitle: "Work history combining full-stack product deployment, operational discipline, and data precision.",
      role: "Sales Associate & Data Entry Specialist",
      company: "Arab Coin Company",
      location: "Riyadh, Saudi Arabia",
      period: "Oct 2025 – Present",
      type: "Full-Time",
      description:
        "Developing and maintaining the company's live digital platforms while managing operational records, daily sales data verification, and customer transactions with strict accuracy.",
      responsibilitiesTitle: "Key Responsibilities & Deliverables:",
      responsibilities: [
        "Developed and deployed the company's official live gold & silver web and mobile platforms using Next.js and React Native.",
        "Maintained accurate customer and sales records using Microsoft Excel and Office tools.",
        "Managed daily data entry and verified records with a strong focus on accuracy and quality control.",
        "Supported daily business operations through organized documentation and data management workflows.",
        "Assisted customers and handled sales transactions in a fast-paced retail environment.",
      ],
      toolsTitle: "Skills & Tools:",
      tools: ["Next.js", "React Native", "Microsoft Excel", "Data Verification", "Documentation", "Customer Service", "Office Tools"],
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
      showMore: "View More Projects",
      showLess: "View Less Projects",
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
            "Official cross-platform mobile application developed for Arab Coin Company using React Native, Expo, and Supabase. The app allows investors to monitor live bullion prices, compute holdings value in real time, and receive smart push notifications on market shifts.",
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
          tags: ["React Native", "Expo", "Supabase", "TypeScript", "REST APIs", "Push Notifications"],
          imageUrl: "/arabic-coin-logo.jpg",
          imageStyle: "logo",
          appStoreUrl: "https://apps.apple.com/sa/app/arabic-coin-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/id6792820414",
          googlePlayUrl: "https://play.google.com/store/apps/details?id=com.arabpound.metals",
        },
        {
          id: 3,
          title: "Malath Gold & Jewelry Platform",
          category: "web",
          categoryLabel: "Production E-Commerce Platform",
          badge: "Live Production Platform",
          summary: "Official e-commerce platform for fine gold bullions and jewelry with live market pricing in Riyadh.",
          description:
            "A comprehensive web and e-commerce platform developed for Al-Malath Gold and Jewelry Company in Riyadh. The platform enables investors and retail clients to browse and purchase certified 24-karat gold bullions (999.9 purity), track real-time global gold prices, and enjoy seamless, secure express shipping across Saudi Arabia.",
          bullets: [
            "Engineered a high-performance web platform for showcasing and trading certified 24K gold bullions and jewelry.",
            "Integrated live precious metals market feeds for accurate, real-time gold price updates.",
            "Designed an intuitive and secure purchasing journey optimized for both mobile and desktop users.",
            "Implemented clean, responsive modern UI with Arabic RTL typography and seamless navigation.",
          ],
          tags: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "E-Commerce", "UI/UX Design", "RTL / Arabic Support"],
          imageUrl: "/mlath-gold.jpg",
          imageStyle: "full",
          liveUrl: "https://mlathgold.com",
        },
        {
          id: 4,
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
          id: 5,
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
      subtitle: "Core technical proficiencies utilized in building production web applications, mobile apps, and AI-enabled systems.",
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
        apis: "APIs & AI",
        tools: "Tools",
        design: "Design",
      },
      categoryDetails: {
        frontend: {
          title: "Frontend Development",
          subtitle: "Modern component architecture, responsive UI, and state management",
          count: "8 Skills",
        },
        mobile: {
          title: "Mobile Development",
          subtitle: "Cross-platform mobile applications for iOS & Android",
          count: "4 Skills",
        },
        backend: {
          title: "Backend & APIs",
          subtitle: "Scalable backends, relational databases, and AI integration",
          count: "6 Skills",
        },
        tools: {
          title: "Tools & Design",
          subtitle: "Version control, design systems, deployment, and analytics",
          count: "7 Skills",
        },
      },
    },
    education: {
      tag: "// ACADEMIC & CREDENTIALS",
      heading: "Education & Certifications",
      subtitle: "Formal academic degree in Information Technology and verified professional certifications from global technology leaders.",
      certificationsHeading: "Licensed & Verified Certifications",
      certificationsSubtitle: "Official credentials from DataCamp, Microsoft, LinkedIn Learning, and Tuwaiq Academy (Satr Platform).",
      verifyBtn: "Verify Credential ↗",
      previewBtn: "Preview Certificate",
      closePreview: "Close Preview",
      showMore: "Show More",
      showLess: "Show Less",
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
      certificationsList: [
        {
          id: "aieda",
          type: "Associate Certification",
          period: "2026",
          title: "AI Engineer for Developers Associate (AIEDA)",
          issuer: "DataCamp",
          description:
            "Professional certification validating practical expertise in integrating Large Language Models (LLMs), OpenAI APIs, prompt engineering, and building AI-powered software architectures.",
          verified: "Verified Credential",
          imageUrl: "/certificates/datacamp-aieda.png",
          credentialUrl: "https://www.datacamp.com/certificate/AIEDA0013287689794",
        },
        {
          id: "daa",
          type: "Associate Certification",
          period: "2026",
          title: "Associate Data Analyst (DAA)",
          issuer: "DataCamp",
          description:
            "Professional certification validating proficiency in data analysis, SQL, exploratory data visualization, statistical analysis, and data-driven decision making.",
          verified: "Verified Credential",
          imageUrl: "/certificates/datacamp-daa.jpg",
          credentialUrl: "https://www.datacamp.com/certificate/DAA0014885246864",
        },
        {
          id: "linkedin-ai",
          type: "Learning Path Certificate",
          period: "2026",
          title: "Career Essentials in Generative AI & Professional Development",
          issuer: "Microsoft & LinkedIn Learning",
          description:
            "Comprehensive 4+ hour learning path by Microsoft and LinkedIn covering Generative AI fundamentals, Microsoft Copilot workflows, and responsible AI practices.",
          verified: "Verified Credential",
          imageUrl: "/certificates/linkedin-learning.png",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/5c5341ebd3a832dfaafea62f57a2f1e8a5b58172e28084e1ddbce52363bf770d",
        },
        {
          id: "ms-learn",
          type: "Official Certificate",
          period: "2026",
          title: "GitHub Basics - Management Essentials and Product Features",
          issuer: "Microsoft",
          description:
            "Official certificate awarded by Microsoft Learn for completing the GitHub Administration Basics, Management Essentials, and Product Features learning path.",
          verified: "Verified Credential",
          imageUrl: "/certificates/microsoft-learn.jpg",
          credentialUrl:
            "https://learn.microsoft.com/ar-sa/users/salembaabbad-4230/achievements/2tat5wbv?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        },
        {
          id: "github-foundations",
          type: "Technical Credential",
          period: "2026",
          title: "GitHub Foundations",
          issuer: "Microsoft",
          description:
            "Verified credential demonstrating proficiency in Git version control, repository management, branching strategies, pull requests, and collaborative software development workflows.",
          verified: "Verified Credential",
          imageUrl: "/certificates/microsoft-github.png",
          credentialUrl: "https://learn.microsoft.com/en-us/users/salembaabbad-4230/achievements/feh3nf6x",
        },
        {
          id: "satr-database",
          type: "Course Certificate",
          period: "2026",
          title: "Database Fundamentals Certificate",
          issuer: "Satr Platform — Tuwaiq Academy",
          description:
            "Certified training in relational database fundamentals, data modeling, structured queries, and backend data architecture.",
          verified: "Verified Credential",
          imageUrl: "/certificates/satr-database.png",
          credentialUrl:
            "https://core-files.tuwaiq.edu.sa/public/certificates/530354ce-6787-474c-b07f-fe12f7f6f09b/1791291459_f1340f32-9179-4790-86a1-e618487cb7dc.png",
        },
        {
          id: "satr-firebase",
          type: "Course Certificate",
          period: "2026",
          title: "Firebase Fundamentals Certificate",
          issuer: "Satr Platform — Tuwaiq Academy",
          description:
            "Practical training in Google Firebase services including authentication, real-time cloud databases, cloud storage, and mobile/web backend integration.",
          verified: "Verified Credential",
          imageUrl: "/certificates/satr-firebase.png",
          credentialUrl:
            "https://core-files.tuwaiq.edu.sa/public/certificates/530354ce-6787-474c-b07f-fe12f7f6f09b/1791466026_54a0935a-6ed3-4727-84d4-371c060474ce.png",
        },
        {
          id: "satr-uxui",
          type: "Professional Certificate",
          period: "2025",
          title: "UX/UI Design Certificate",
          issuer: "Satr Platform — Tuwaiq Academy",
          description:
            "Applied project training in user experience research, wireframing, design thinking, interactive prototyping, and component design using Figma.",
          verified: "Verified Credential",
          imageUrl: "/certificates/satr-uxui.png",
          credentialUrl:
            "https://assets.safcsp.cloud/public/certificates/530354ce-6787-474c-b07f-fe12f7f6f09b/1757241641_e6e5eda4-dc51-4734-a828-c2e9f1af61cb.png",
        },
      ],
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
        "I am available for full-time full-stack, frontend, and mobile engineering roles, product collaborations, and innovative web projects.",
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
      sendingBtn: "Sending Message...",
      successTitle: "Message Sent Successfully!",
      successDesc: "Thank you for reaching out. I will respond to your inquiry promptly.",
      errorTitle: "Failed to Send Message",
      errorDesc: "Something went wrong while sending. You can reach out directly via email.",
    },
    footer: {
      name: "SALEM BA ABBAD",
      role: "Full-Stack Developer | iOS & Android App Developer | UI/UX",
      rights: "All rights reserved",
      backToTop: "Back to Top",
    },
    preloader: {
      name: "SALEM BA ABBAD",
      role: "Full-Stack Developer | iOS & Android App Developer | UI/UX",
    },
  },
  ar: {
    navbar: {
      name: "سالم باعباد",
      role: "مطور Full-Stack وتطبيقات • UI/UX",
      nav: {
        about: "نبذة عني",
        experience: "الخبرة",
        projects: "المشاريع",
        skills: "المهارات",
        education: "التعليم والشهادات",
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
      greeting: "مرحباً، أنا سالم",
      statusBadge: "متاح لفرص تطوير Full-Stack وتطبيقات الجوال",
      name: "سالم باعباد",
      titleMain: "مطور Full-Stack",
      titleSub: "| مطور تطبيقات iOS و Android | مصمم UI/UX",
      subtitle:
        "مطور Full-Stack وخريج تقنية معلومات بخبرة عملية في بناء تطبيقات الويب القابلة للتوسع وتطبيقات الجوال متعددة المنصات.",
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
      role: "مطور Full-Stack | مطور تطبيقات iOS و Android | مصمم UI/UX",
      location: "الرياض، المملكة العربية السعودية",
      availableBadge: "متاح للعمل",
      mainHeading: "تحويل المتطلبات المعقدة إلى منتجات رقمية بديهية وسريعة وقابلة للتوسع.",
      bioP1:
        "خريج بكالوريوس تقنية معلومات (2021 – 2025) من جامعة الريان، مع تخصص وخبرة في تطوير الويب المتكامل (Full-Stack)، وتطبيقات الجوال متعددة المنصات (Cross-Platform Mobile Development)، وتصميم تجربة وواجهة المستخدم (UI/UX Design).",
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
      subtitle: "مسيرة عملية تجمع بين تطوير المنصات الرقمية الحية، والانضباط التشغيلي، والدقة في إدارة البيانات.",
      role: "موظف مبيعات وأخصائي إدخال بيانات",
      company: "شركة العملة العربية (Arab Coin)",
      location: "الرياض، المملكة العربية السعودية",
      period: "أكتوبر 2025 – حتى الآن",
      type: "دوام كامل",
      description:
        "تطوير وتشغيل المنصات الرقمية الرسمية للشركة (الموقع الإلكتروني وتطبيق الجوال) إلى جانب إدارة السجلات التشغيلية والتحقق اليومي من بيانات المبيعات والمعاملات التجارية بدقة عالية.",
      responsibilitiesTitle: "المسؤوليات والإنجازات الرئيسية:",
      responsibilities: [
        "تطوير وإطلاق المنصات الرسمية الحية للذهب والفضة (الموقع الإلكتروني وتطبيقات الجوال) للشركة باستخدام Next.js و React Native.",
        "الحفاظ على سجلات دقيقة للعملاء والمبيعات باستخدام Microsoft Excel وأدوات Office.",
        "إدارة عمليات إدخال البيانات اليومية ومراجعة السجلات بتركيز عالٍ على الدقة وضبط الجودة.",
        "دعم العمليات التجارية اليومية من خلال التوثيق المنظم وسير عمل إدارة البيانات.",
        "خدمة العملاء وإتمام معاملات المبيعات في بيئة تجارية نشطة وسريعة الوتيرة.",
      ],
      toolsTitle: "المهارات والأدوات:",
      tools: ["Next.js", "React Native", "Microsoft Excel", "التحقق من البيانات", "التوثيق", "خدمة العملاء", "أدوات Office"],
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
      showMore: "رؤية المزيد من الأعمال",
      showLess: "عرض أعمال أقل",
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
            "التطبيق الرسمي للشركة مطور بتقنيات React Native و Expo و Supabase لأنظمة iOS و Android. يتيح للمستثمرين متابعة أسعار السبائك والذهب لحظة بلحظة، وحساب قيمة المقتنيات فورياً، واستقبال الإشعارات الفورية عند تغيرات السوق.",
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
          tags: ["React Native", "Expo", "Supabase", "TypeScript", "REST APIs", "Push Notifications"],
          imageUrl: "/arabic-coin-logo.jpg",
          imageStyle: "logo",
          appStoreUrl: "https://apps.apple.com/sa/app/arabic-coin-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/id6792820414",
          googlePlayUrl: "https://play.google.com/store/apps/details?id=com.arabpound.metals",
        },
        {
          id: 3,
          title: "موقع الملاذ للذهب والمجوهرات",
          category: "web",
          categoryLabel: "منصة تجارة إلكترونية حية",
          badge: "منصة حية في الإنتاج الفعلي",
          summary: "منصة ويب رسمية لتجارة سبائك الذهب الخالص عيار 24 والمجوهرات مع تتبع مباشر لأسعار السوق بالرياض.",
          description:
            "منصة ويب وتجارة إلكترونية متكاملة لشركة الملاذ للذهب والمجوهرات في الرياض. تتيح للمستثمرين والعملاء شراء سبائك الذهب المعتمدة عيار 24 بنقاء (999.9) بمختلف الأوزان، ومتابعة أسعار الذهب لحظياً بناءً على حركة السوق العالمي، مع خدمة التوصيل الآمن إلى جميع مناطق المملكة.",
          bullets: [
            "تطوير منصة ويب تفاعلية وسريعة الاستجابة لعرض وبيع سبائك الذهب الخالص والمجوهرات بدقة عالية.",
            "ربط وتكامل بيانات أسعار الذهب اللحظية لتحديث الأسعار تلقائياً وفقاً للمؤشرات العالمية والمحلية.",
            "توفير تجربة تسوق وشراء آمنة وسلسة للمستثمرين والعملاء مع خدمات التوصيل والشحن المعتمد.",
            "تصميم واجهات وتجربة مستخدم (UI/UX) عصرية متوافقة تماماً مع الأجهزة الذكية وتدعم الاتجاه العربي بالكامل.",
          ],
          tags: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "تجارة إلكترونية", "UI/UX Design", "RTL / Arabic Support"],
          imageUrl: "/mlath-gold.jpg",
          imageStyle: "full",
          liveUrl: "https://mlathgold.com",
        },
        {
          id: 4,
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
          id: 5,
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
      subtitle: "القدرات التقنية الأساسية المستخدمة في بناء وتطوير منصات الويب وتطبيقات الجوال وأنظمة الذكاء الاصطناعي.",
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
        apis: "واجهات API و AI",
        tools: "أدوات",
        design: "تصميم",
      },
      categoryDetails: {
        frontend: {
          title: "تطوير الواجهات (Frontend)",
          subtitle: "أحدث أطر العمل وتطوير الواجهات المتجاوبة وإدارة الحالة",
          count: "8 مهارات",
        },
        mobile: {
          title: "تطبيقات الجوال (Mobile)",
          subtitle: "تطوير تطبيقات الجوال متعددة المنصات لنظامي iOS و Android",
          count: "4 مهارات",
        },
        backend: {
          title: "الخلفية وواجهات API (Backend & APIs)",
          subtitle: "الخدمات السحابية وقواعد البيانات وتكامل نماذج الذكاء الاصطناعي",
          count: "6 مهارات",
        },
        tools: {
          title: "الأدوات والتصميم (Tools & Design)",
          subtitle: "إدارة الإصدارات وأنظمة التصميم في Figma والأتمتة والتحليلات",
          count: "7 مهارات",
        },
      },
    },
    education: {
      tag: "// المؤهلات الأكاديمية والشهادات",
      heading: "التعليم والشهادات المهنية",
      subtitle: "الدرجة الأكاديمية في تقنية المعلومات والشهادات الاحترافية الموثقة من كبرى الجهات التقنية العالمية.",
      certificationsHeading: "الشهادات المهنية والاعتمادات الموثقة",
      certificationsSubtitle: "شهادات معتمدة من DataCamp و Microsoft و LinkedIn Learning وأكاديمية طويق (منصة سطر).",
      verifyBtn: "توثيق وعرض الشهادة ↗",
      previewBtn: "معاينة الشهادة",
      closePreview: "إغلاق المعاينة",
      showMore: "رؤية المزيد",
      showLess: "عرض أقل",
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
      certificationsList: [
        {
          id: "aieda",
          type: "اعتماد مهني",
          period: "2026",
          title: "مهندس ذكاء اصطناعي للمطورين (AIEDA)",
          issuer: "DataCamp",
          description:
            "اعتماد مهني يوثق المهارات العملية في دمج نماذج اللغة الكبيرة (LLMs)، وواجهات OpenAI API، وهندسة الأوامر، وبناء الأنظمة البرمجية المدعومة بالذكاء الاصطناعي.",
          verified: "شهادة معتمدة وموثقة",
          imageUrl: "/certificates/datacamp-aieda.png",
          credentialUrl: "https://www.datacamp.com/certificate/AIEDA0013287689794",
        },
        {
          id: "daa",
          type: "اعتماد مهني",
          period: "2026",
          title: "محلل بيانات معتمد (Associate Data Analyst)",
          issuer: "DataCamp",
          description:
            "اعتماد مهني يوثق الكفاءة في تحليل البيانات، واستعلامات SQL، واستكشاف وتمثيل البيانات بصريًا، والتحليل الإحصائي.",
          verified: "شهادة معتمدة وموثقة",
          imageUrl: "/certificates/datacamp-daa.jpg",
          credentialUrl: "https://www.datacamp.com/certificate/DAA0014885246864",
        },
        {
          id: "linkedin-ai",
          type: "مسار تدريبي معتمد",
          period: "2026",
          title: "أساسيات الذكاء الاصطناعي التوليدي والتطوير المهني",
          issuer: "Microsoft & LinkedIn Learning",
          description:
            "مسار تدريبي متكامل من Microsoft و LinkedIn يغطي أساسيات الذكاء الاصطناعي التوليدي (Generative AI)، وأدوات Microsoft Copilot، وأخلاقيات الذكاء الاصطناعي المسؤول.",
          verified: "شهادة معتمدة وموثقة",
          imageUrl: "/certificates/linkedin-learning.png",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/5c5341ebd3a832dfaafea62f57a2f1e8a5b58172e28084e1ddbce52363bf770d",
        },
        {
          id: "ms-learn",
          type: "شهادة رسمية معتمدة",
          period: "2026",
          title: "أساسيات GitHub - أساسيات الإدارة وميزات المنتج",
          issuer: "Microsoft",
          description:
            "شهادة رسمية من Microsoft Learn لإتمام مسار أساسيات إدارة GitHub وميزات المنتجات وإدارة الفرق والمستودعات البرمجية.",
          verified: "شهادة معتمدة وموثقة",
          imageUrl: "/certificates/microsoft-learn.jpg",
          credentialUrl:
            "https://learn.microsoft.com/ar-sa/users/salembaabbad-4230/achievements/2tat5wbv?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        },
        {
          id: "github-foundations",
          type: "شهادة تقنية",
          period: "2026",
          title: "أساسيات GitHub (GitHub Foundations)",
          issuer: "Microsoft",
          description:
            "شهادة موثقة من Microsoft تثبت الكفاءة في إدارة الإصدارات عبر Git، وإدارة المستودعات البرمجية، واستراتيجيات الفروع، وأتمتة سير العمل التعاوني.",
          verified: "شهادة معتمدة وموثقة",
          imageUrl: "/certificates/microsoft-github.png",
          credentialUrl: "https://learn.microsoft.com/en-us/users/salembaabbad-4230/achievements/feh3nf6x",
        },
        {
          id: "satr-database",
          type: "شهادة دورة تخصصية",
          period: "2026",
          title: "شهادة مقدمة في قواعد البيانات",
          issuer: "منصة سطر — أكاديمية طويق",
          description:
            "تدريب معتمد في أساسيات قواعد البيانات العلائقية، ونمذجة البيانات، وهيكلة الاستعلامات وإدارة البيانات الخلفية للتطبيقات.",
          verified: "شهادة معتمدة وموثقة",
          imageUrl: "/certificates/satr-database.png",
          credentialUrl:
            "https://core-files.tuwaiq.edu.sa/public/certificates/530354ce-6787-474c-b07f-fe12f7f6f09b/1791291459_f1340f32-9179-4790-86a1-e618487cb7dc.png",
        },
        {
          id: "satr-firebase",
          type: "شهادة دورة تخصصية",
          period: "2026",
          title: "شهادة أساسيات Firebase",
          issuer: "منصة سطر — أكاديمية طويق",
          description:
            "تدريب تطبيقي على خدمات Google Firebase شمل المصادقة، وقواعد البيانات السحابية اللحظية، والتخزين السحابي، وربط تطبيقات الويب والجوال.",
          verified: "شهادة معتمدة وموثقة",
          imageUrl: "/certificates/satr-firebase.png",
          credentialUrl:
            "https://core-files.tuwaiq.edu.sa/public/certificates/530354ce-6787-474c-b07f-fe12f7f6f09b/1791466026_54a0935a-6ed3-4727-84d4-371c060474ce.png",
        },
        {
          id: "satr-uxui",
          type: "شهادة مهنية",
          period: "2025",
          title: "شهادة تصميم UX/UI (مشروع تطبيقي)",
          issuer: "منصة سطر — أكاديمية طويق",
          description:
            "تدريب تطبيقي متخصص في أبحاث المستخدمين، وتخطيط الهياكل، ومبادئ التفكير التصميمي، وبناء النماذج التفاعلية عالية الدقة في Figma.",
          verified: "شهادة معتمدة وموثقة",
          imageUrl: "/certificates/satr-uxui.png",
          credentialUrl:
            "https://assets.safcsp.cloud/public/certificates/530354ce-6787-474c-b07f-fe12f7f6f09b/1757241641_e6e5eda4-dc51-4734-a828-c2e9f1af61cb.png",
        },
      ],
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
        "متاح لفرص العمل بدوام كامل في تطوير Full-Stack والواجهات وتطبيقات الجوال، والتعاون في المنتجات الرقمية والمشاريع المبتكرة.",
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
      sendingBtn: "جاري إرسال الرسالة...",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successDesc: "شكرًا لتواصلك. سأقوم بالرد على استفسارك في أقرب وقت.",
      errorTitle: "تعذر إرسال الرسالة",
      errorDesc: "حدث خطأ أثناء الإرسال، يمكنك التواصل معي مباشرة عبر البريد الإلكتروني.",
    },
    footer: {
      name: "سالم باعباد",
      role: "مطور Full-Stack | مطور تطبيقات iOS و Android | مصمم UI/UX",
      rights: "جميع الحقوق محفوظة",
      backToTop: "العودة للأعلى",
    },
    preloader: {
      name: "سالم باعباد",
      role: "مطور Full-Stack | مطور تطبيقات iOS و Android | مصمم UI/UX",
    },
  },
};
