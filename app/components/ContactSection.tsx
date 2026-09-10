"use client";

import { useState, FormEvent, MouseEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/SALEM_BAABAD@outlook.sa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `رسالة جديدة من الموقع: ${formData.subject || formData.name}`,
          subject: formData.subject,
          message: formData.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => ({}));

      // Accept 200 OK or Activation notification response as success
      if (response.ok || (data.message && data.message.includes("Activation"))) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-700 dark:text-zinc-300 font-heading font-bold text-xs tracking-widest uppercase">
            {t.contact.tag}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 dark:from-zinc-700 dark:via-white dark:to-zinc-700 mx-auto rounded-full"></div>
        </div>

        {/* Layout: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glow-card p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-6">
                {t.contact.directTitle}
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400 block uppercase tracking-wider font-bold">
                    {t.contact.emailLabel}
                  </span>
                  <a
                    href="mailto:SALEM_BAABAD@outlook.sa"
                    className="font-heading font-bold text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors text-sm sm:text-base"
                  >
                    SALEM_BAABAD@outlook.sa
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400 block uppercase tracking-wider font-bold">
                    {t.contact.phoneLabel}
                  </span>
                  <a
                    href="tel:+966509788768"
                    className="font-heading font-bold text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors block text-sm sm:text-base"
                    dir="ltr"
                  >
                    +966 50 978 8768
                  </a>
                </div>

                {/* Location */}
                <div>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400 block uppercase tracking-wider font-bold">
                    {t.contact.locationLabel}
                  </span>
                  <span className="font-heading font-bold text-zinc-950 dark:text-zinc-50 text-sm sm:text-base">
                    {t.contact.locationVal}
                  </span>
                </div>
              </div>

              {/* Links & Resume download */}
              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
                <a
                  href="/SALEM_BAABBAD.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-950 dark:text-zinc-50 font-heading font-bold text-xs flex items-center justify-between border border-black/10 dark:border-white/10 transition-all"
                >
                  <span>{t.contact.downloadResume}</span>
                  <span className="text-xs font-mono font-bold">PDF ↗</span>
                </a>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://github.com/salem8889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-heading font-bold text-xs text-center border border-black/15 dark:border-white/15 shadow-xs transition-all"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="mailto:SALEM_BAABAD@outlook.sa"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-heading font-bold text-xs text-center shadow-xs transition-all"
                  >
                    {t.contact.directEmailBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glow-card p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-6">
                {t.contact.formTitle}
              </h3>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-black/15 dark:border-white/15 text-center animate-fade-in space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-heading font-bold text-xl text-zinc-950 dark:text-zinc-50">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-xl bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-900 dark:text-zinc-100 font-heading font-bold text-xs transition-colors"
                    >
                      {t.contact.formTitle} ↺
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-sm space-y-2">
                      <p className="font-bold text-rose-800 dark:text-rose-300">
                        {t.contact.errorTitle}
                      </p>
                      <p className="text-xs text-rose-700 dark:text-rose-400">
                        {t.contact.errorDesc}
                      </p>
                      <a
                        href={`mailto:SALEM_BAABAD@outlook.sa?subject=${encodeURIComponent(formData.subject || "Message from Portfolio")}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
                        )}`}
                        className="inline-block text-xs font-bold underline text-rose-900 dark:text-rose-200 hover:opacity-80"
                      >
                        SALEM_BAABAD@outlook.sa ↗
                      </a>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="floating-group">
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder=" "
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="floating-input"
                    />
                    <label htmlFor="name" className="floating-label">
                      {t.contact.namePlaceholder}
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="floating-group">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="floating-input"
                    />
                    <label htmlFor="email" className="floating-label">
                      {t.contact.emailPlaceholder}
                    </label>
                  </div>

                  {/* Subject Input */}
                  <div className="floating-group">
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder=" "
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="floating-input"
                    />
                    <label htmlFor="subject" className="floating-label">
                      {t.contact.subjectPlaceholder}
                    </label>
                  </div>

                  {/* Textarea: Message */}
                  <div className="floating-group">
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="floating-input floating-textarea resize-none"
                    ></textarea>
                    <label htmlFor="message" className="floating-label">
                      {t.contact.messagePlaceholder}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    onClick={status === "loading" ? undefined : handleRipple}
                    className="relative overflow-hidden w-full py-4 rounded-2xl bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-heading font-extrabold text-sm border border-black dark:border-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        <span>{t.contact.sendingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.sendBtn}</span>
                        {ripples.map((r) => (
                          <span
                            key={r.id}
                            className="absolute rounded-full bg-white/30 pointer-events-none animate-[ping_0.6s_linear]"
                            style={{
                              left: r.x - 20,
                              top: r.y - 20,
                              width: 40,
                              height: 40,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
