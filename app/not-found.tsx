import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | SALEM BAABBAD",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-24 bg-[#FAF4EA] text-[#064E3B] relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-40 blur-[120px] bg-gradient-to-r from-[#F8E7C9] via-[#FAF4EA] to-transparent -z-0"
      />

      <div className="relative z-10 text-center max-w-md mx-auto p-8 rounded-3xl glow-card">
        <span className="font-heading font-black text-6xl sm:text-7xl text-[#064E3B] tracking-tight block mb-2">
          404
        </span>
        <h1 className="font-heading font-bold text-xl sm:text-2xl text-[#064E3B] mb-3">
          Page Not Found | الصفحة غير موجودة
        </h1>
        <p className="text-xs sm:text-sm text-[#064E3B]/80 mb-6 leading-relaxed">
          The requested page could not be found. You can return to the portfolio homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#064E3B] text-[#F8E7C9] font-heading font-bold text-xs sm:text-sm hover:bg-[#043629] transition-all shadow-md cursor-pointer"
        >
          <span>Return Home | العودة للرئيسية</span>
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

