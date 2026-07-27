"use client";

import { useState, FormEvent, MouseEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4fd1ff] font-cairo font-bold text-sm tracking-widest uppercase">
            // تواصل معي
          </span>
          <h2 className="mt-2 font-cairo text-3xl sm:text-4xl font-extrabold text-[#eaf2ff]">
            هل لديك مشروع جديد أو فكرة تود مناقشتها؟
          </h2>
          <p className="mt-3 text-[#8ba0c9] text-base">
            يسعدني دائماً التواصل معك وبناء تجارب ويب وتصميمات مبتكرة تلبي طموحاتك.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#1d63c9] via-[#4fd1ff] to-[#1d63c9] mx-auto rounded-full"></div>
        </div>

        {/* Layout: Form & Direct Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info Cards (Left/Right depending on RTL) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glow-card p-6 sm:p-8 rounded-3xl border border-[#4fd1ff]/20">
              <h3 className="font-cairo text-xl font-bold text-[#eaf2ff] mb-6">
                معلومات التواصل المباشر
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#050b1f] border border-[#4fd1ff]/30 text-[#4fd1ff] flex items-center justify-center text-xl shrink-0">
                    <img src="/contact-email.png" alt="Email" className="w-8 h-8 object-contain rounded-lg" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8ba0c9] block">البريد الإلكتروني</span>
                    <a
                      href="mailto:salem_baabad@outlook.com"
                      className="font-cairo font-bold text-[#eaf2ff] hover:text-[#4fd1ff] transition-colors"
                    >
                      salem_baabad@outlook.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#050b1f] border border-[#4fd1ff]/30 text-[#4fd1ff] flex items-center justify-center text-xl shrink-0">
                    <img src="/contact-phone.png" alt="Phone" className="w-8 h-8 object-contain rounded-lg" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8ba0c9] block">الهاتف / واتساب</span>
                    <a
                      href="https://wa.me/966509788768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-cairo font-bold text-[#eaf2ff] hover:text-[#4fd1ff] transition-colors dir-ltr block text-right"
                    >
                      +966 50 978 8768
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#050b1f] border border-[#4fd1ff]/30 text-[#4fd1ff] flex items-center justify-center text-xl shrink-0">
                    <img src="/contact-location.png" alt="Location" className="w-8 h-8 object-contain rounded-lg" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8ba0c9] block">الموقع الحالي</span>
                    <span className="font-cairo font-bold text-[#eaf2ff]">
                      الرياض، المملكة العربية السعودية
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Label Contact Form */}
          <div className="lg:col-span-7">
            <div className="glow-card p-6 sm:p-8 rounded-3xl border border-[#4fd1ff]/20">
              
              <h3 className="font-cairo text-xl font-bold text-[#eaf2ff] mb-6">
                أرسل لي رسالة مباشرة
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#1d63c9]/20 border border-[#4fd1ff]/50 text-center animate-fade-in">
                  <span className="text-4xl mb-2 block">🎉</span>
                  <h4 className="font-cairo font-bold text-xl text-[#4fd1ff]">
                    تم إرسال رسالتك بنجاح!
                  </h4>
                  <p className="mt-2 text-sm text-[#eaf2ff]">
                    شكراً لتواصلك يا {formData.name || "صديقي"}. سأقوم بالرد عليك في أقرب وقت ممكن.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Floating Input: Name */}
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
                      الاسم الكامل
                    </label>
                  </div>

                  {/* Floating Input: Email */}
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
                      البريد الإلكتروني
                    </label>
                  </div>

                  {/* Floating Input: Subject */}
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
                      موضوع الرسالة
                    </label>
                  </div>

                  {/* Floating Textarea: Message */}
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
                      نص الرسالة التفصيلي...
                    </label>
                  </div>

                  {/* Submit Button with Ripple Effect */}
                  <button
                    type="submit"
                    onClick={handleRipple}
                    className="relative overflow-hidden w-full py-4 rounded-2xl bg-gradient-to-r from-[#1d63c9] via-[#0e3a8f] to-[#1d63c9] hover:from-[#4fd1ff] hover:to-[#1d63c9] text-[#eaf2ff] hover:text-[#050b1f] font-cairo font-black text-base border border-[#4fd1ff]/40 shadow-[0_0_20px_rgba(79,209,255,0.3)] transition-all transform hover:-translate-y-0.5"
                  >
                    إرسال الرسالة الان
                    
                    {/* Ripple Elements */}
                    {ripples.map((r) => (
                      <span
                        key={r.id}
                        className="absolute rounded-full bg-white/40 pointer-events-none animate-[ping_0.6s_linear]"
                        style={{
                          left: r.x - 20,
                          top: r.y - 20,
                          width: 40,
                          height: 40,
                        }}
                      />
                    ))}
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
