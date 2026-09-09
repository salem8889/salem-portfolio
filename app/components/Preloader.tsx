"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Preloader() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 600);
      return () => clearTimeout(removeTimer);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-600 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Spinner Outer Rings */}
        <div className="w-20 h-20 rounded-full border-2 border-t-black border-r-zinc-400 border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute w-14 h-14 rounded-full border-2 border-b-black border-l-zinc-300 border-t-transparent border-r-transparent animate-[spin_1.5s_linear_infinite_reverse]"></div>

        {/* Core Monogram */}
        <span className="absolute font-heading text-lg font-black text-black tracking-widest">
          SB
        </span>
      </div>

      <h2 className="mt-5 font-heading text-base font-extrabold text-zinc-950 tracking-wider">
        {t.preloader.name}
      </h2>
      <p className="mt-1 text-[11px] text-zinc-500 font-medium tracking-wide">
        {t.preloader.role}
      </p>
    </div>
  );
}
