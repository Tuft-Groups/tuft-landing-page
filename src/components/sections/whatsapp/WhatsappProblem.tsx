"use client";

export function WhatsappProblem() {
  return (
    <section className="relative py-32 px-6 bg-linear-to-b from-black via-[#0a1a10] to-black">
      <div className="w-full max-w-[1200px] mx-auto p-6 md:p-32 rounded-3xl md:rounded-[3.5rem] text-center relative overflow-hidden transition-all duration-700 backdrop-blur-md border border-white/20 bg-white/5 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter leading-[1.1] text-white">
          A chatgroup is not <br />
          <span className="text-slate-500">a classroom.</span>
        </h2>

        <div>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
            Important announcements get buried under 40 &quot;Good morning!&quot; stickers. Your phone storage is screaming from auto-saved
            media. Managing payments means chasing down UPI screenshots, and—most uncomfortably—everyone&apos;s personal phone number is
            exposed to total strangers.
            <span className="block mt-12 text-[#25D366] text-xs font-bold tracking-[0.3em] uppercase">Stop the Chaos</span>
          </p>
        </div>
      </div>
    </section>
  );
}
