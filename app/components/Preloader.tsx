"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 600);
      return () => clearTimeout(removeTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050b1f] transition-opacity duration-600 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Glowing Outer Rings */}
        <div className="w-24 h-24 rounded-full border-2 border-t-[#4fd1ff] border-r-[#1d63c9] border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute w-16 h-16 rounded-full border-2 border-b-[#4fd1ff] border-l-[#0e3a8f] border-t-transparent border-r-transparent animate-[spin_1.5s_linear_infinite_reverse]"></div>
        
        {/* Core Monogram */}
        <span className="absolute font-cairo text-xl font-black text-[#4fd1ff] tracking-widest drop-shadow-[0_0_12px_rgba(79,209,255,0.8)]">
          SB
        </span>
      </div>

      <h2 className="mt-6 font-cairo text-lg font-bold text-[#eaf2ff] tracking-wider">
        SALEM MOHAMMED BA ABBAD
      </h2>
      <p className="mt-1 text-xs text-[#8ba0c9] animate-pulse">
        جاري تحميل محفظة الأعمال...
      </p>
    </div>
  );
}
