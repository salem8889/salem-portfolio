import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

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
  title: "SALEM BAABBAD | Frontend & Mobile Developer • UI/UX ",
  description:
    "Portfolio of SALEM BAABBAD, Frontend & Mobile Developer and UI/UX  specializing in React, Next.js, React Native, TypeScript, and thoughtful digital experiences.",
  keywords: [
    "SALEM BAABBAD",
    "سالم باعباد",
    "Frontend Developer",
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
  openGraph: {
    title: "SALEM BAABBAD | Frontend & Mobile Developer • UI/UX",
    description:
      "Building modern digital experiences through frontend development, mobile applications, and thoughtful UI/UX design.",
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
      className={`${plusJakarta.variable} ${inter.variable} ${tajawal.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio_theme');
                  var isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#ffffff] text-[#09090b] font-sans antialiased selection:bg-black/10 selection:text-black overflow-x-hidden min-h-screen">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


