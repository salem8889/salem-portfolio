import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SALEM MOHAMMED BA ABBAD | مصمم UI/UX ومطور مواقع وبرامج",
  description: "الموقع الشخصي ومحفظة الأعمال لمصمم UI/UX ومطور المواقع والبرامج SALEM MOHAMMED BA ABBAD - مشاريع ابتكارية بتأثيرات بصرية عالية الجودة.",
  keywords: ["مطور مواقع", "مطور برامج", "تصميم UI/UX", "Web Developer", "Software Developer", "Next.js", "React", "SALEM MOHAMMED BA ABBAD", "سالم محمد باعباد"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable} scroll-smooth`}>
      <body className="bg-[#000000] text-[#ffffff] font-tajawal antialiased selection:bg-white/20 selection:text-white overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}

