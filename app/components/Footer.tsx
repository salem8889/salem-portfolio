"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <div className="flex items-center gap-3">
          <p className="text-sm text-zinc-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()}{" "}
            <strong className="text-white">SALEM MOHAMMED BA ABBAD</strong>
          </p>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c0c0e] border border-white/20 text-white text-xs font-cairo font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        >
          <span>العودة إلى الأعلى</span>
          <span>↑</span>
        </button>

      </div>
    </footer>
  );
}
