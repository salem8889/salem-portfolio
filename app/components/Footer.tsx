"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050b1f] border-t border-[#4fd1ff]/15 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <div className="flex items-center gap-3">
          <p className="text-sm text-[#8ba0c9]">
            جميع الحقوق محفوظة © {new Date().getFullYear()}{" "}
            <strong className="text-[#eaf2ff]">SALEM MOHAMMED BA ABBAD</strong>
          </p>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1a3d] border border-[#4fd1ff]/20 text-[#4fd1ff] text-xs font-cairo font-bold hover:bg-[#4fd1ff] hover:text-[#050b1f] transition-all shadow-[0_0_15px_rgba(79,209,255,0.2)]"
        >
          <span>العودة إلى الأعلى</span>
          <span>↑</span>
        </button>

      </div>
    </footer>
  );
}
