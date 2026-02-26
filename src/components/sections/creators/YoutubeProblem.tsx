"use client";

export function YoutubeProblem() {
  return (
    <section className="relative py-32 px-6 bg-linear-to-b from-black via-[#1a0505] to-black">
      <div className="w-full max-w-[1200px] mx-auto p-6 md:p-32 rounded-3xl md:rounded-[3.5rem] text-center relative overflow-hidden transition-all duration-700 backdrop-blur-md border border-white/20 bg-white/5 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter leading-[1.1] text-white">
          One Demonetization <br />
          <span className="text-slate-500">Could Wipe You Out.</span>
        </h2>

        <div>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
            You spend weeks producing videos, but you don't own your subscribers' attention. On YouTube, you rely on the algorithm, and they
            take a 30% cut of your Channel Memberships. On <span className="text-white font-bold">Tuft</span>, you are completely
            independent.
            <span className="block mt-12 text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Take Control</span>
          </p>
        </div>
      </div>
    </section>
  );
}
