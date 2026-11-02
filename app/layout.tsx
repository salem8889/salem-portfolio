import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Tajawal } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const camelFont = localFont({
  src: [
    {
      path: "../public/fonts/TheYearofTheCamel-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TheYearofTheCamel-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TheYearofTheCamel-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/TheYearofTheCamel-Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/TheYearofTheCamel-Bold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-camel",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SALEM BAABBAD | Full-Stack Developer | iOS & Android App Developer | UI/UX",
  description:
    "Portfolio of SALEM BAABBAD, Full-Stack Developer, iOS & Android App Developer, and UI/UX Designer specializing in React, Next.js, React Native, TypeScript, and thoughtful digital experiences.",
  keywords: [
    "SALEM BAABBAD",
    "سالم باعباد",
    "Full-Stack Developer",
    "iOS Developer",
    "Android Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Software Engineer",
    "Riyadh Developer",
  ],
  authors: [{ name: "SALEM BAABBAD" }],
  icons: {
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    shortcut: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    apple: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  },
  openGraph: {
    title: "SALEM BAABBAD | Full-Stack Developer | iOS & Android App Developer | UI/UX",
    description:
      "Building modern digital experiences through full-stack development, mobile applications, and thoughtful UI/UX design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} ${tajawal.variable} ${camelFont.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  localStorage.removeItem('portfolio_theme');
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#FAF4EA] text-[#064E3B] font-sans antialiased selection:bg-[#064E3B]/20 selection:text-[#064E3B] overflow-x-hidden min-h-screen relative">
        {/* Global Vertical Grid Lines Background Layer */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "52px 100%",
            backgroundPosition: "center top",
          }}
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
