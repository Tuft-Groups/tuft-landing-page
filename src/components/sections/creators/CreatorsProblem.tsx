"use client";

export function CreatorsProblem() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-[#1a0515] to-black">
      <div className="w-full max-w-[1200px] mx-auto p-6 md:p-32 rounded-3xl md:rounded-[3.5rem] text-center relative overflow-hidden transition-all duration-700 backdrop-blur-md border border-white/20 bg-white/5 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter leading-[1.1] text-white">
          One Algorithm Change <br />
          <span className="text-slate-500">Could Wipe You Out.</span>
        </h2>

        <div>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
            You spend hours creating content, but only 10% of your followers see it. On Instagram, you are a product. On{" "}
            <span className="text-white font-bold">Tuft</span>, you are the owner.
            <span className="block mt-12 text-pink-500 text-xs font-bold tracking-[0.3em] uppercase">Take Control</span>
          </p>
        </div>
      </div>
    </section>
  );
}
