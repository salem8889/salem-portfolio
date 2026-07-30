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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-600 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Glowing Outer Rings */}
        <div className="w-24 h-24 rounded-full border-2 border-t-white border-r-zinc-400 border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute w-16 h-16 rounded-full border-2 border-b-white border-l-zinc-600 border-t-transparent border-r-transparent animate-[spin_1.5s_linear_infinite_reverse]"></div>
        
        {/* Core Monogram */}
        <span className="absolute font-cairo text-xl font-black text-white tracking-widest drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
          SB
        </span>
      </div>

      <h2 className="mt-6 font-cairo text-lg font-bold text-white tracking-wider">
        SALEM MOHAMMED BA ABBAD
      </h2>
      <p className="mt-1 text-xs text-zinc-400 animate-pulse">
        جاري تحميل محفظة الأعمال...
      </p>
    </div>
  );
}
