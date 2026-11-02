"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-24 bg-[#FAF4EA] text-[#064E3B] relative overflow-hidden">
      <div className="relative z-10 text-center max-w-md mx-auto p-8 rounded-3xl glow-card">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#064E3B]/10 flex items-center justify-center text-2xl font-bold text-[#064E3B]">
          !
        </div>
        <h1 className="font-heading font-bold text-xl sm:text-2xl text-[#064E3B] mb-2">
          Something went wrong | حدث خطأ غير متوقع
        </h1>
        <p className="text-xs sm:text-sm text-[#064E3B]/80 mb-6 leading-relaxed">
          An unexpected error occurred. Please try again or return to the main portfolio.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full bg-[#064E3B] text-[#F8E7C9] font-heading font-bold text-xs sm:text-sm hover:bg-[#043629] transition-all shadow-md cursor-pointer"
          >
            Try Again | إعادة المحاولة
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-full bg-white/70 text-[#064E3B] border border-[#064E3B]/15 font-heading font-bold text-xs sm:text-sm hover:bg-[#F8E7C9] transition-all shadow-xs cursor-pointer"
          >
            Home | الرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}

