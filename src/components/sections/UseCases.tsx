"use client";

import { motion } from "framer-motion";

export function UseCases() {
  return (
    <section id="use-cases" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-40 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-tuft-purple/5 blur-[120px] rounded-full -z-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-7xl font-bold mb-20 text-center tracking-tighter text-metallic"
      >
        Built for Every Leader.
      </motion.h2>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-12 group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[400px] tap-active">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tuft-purple/20 blur-[100px] rounded-full group-hover:bg-tuft-purple/30 transition-colors duration-700"></div>

          <div className="relative z-10">
            <span className="text-tuft-purple font-bold text-xs tracking-[0.2em] uppercase block mb-6">Revenue</span>
            <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:translate-x-2 transition-transform">
              The Creator-Educator
            </h3>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-lg relative z-10">
            Turn your group into a business. Automate entry fees, qualify members with joining forms, and get daily settlements without
            lifting a finger.
          </p>

          <div className="absolute -right-4 -bottom-4 text-white/10 rotate-12 w-32 h-32 pointer-events-none">
            {/* Pattern from rules */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
          </div>
        </div>

        <div className="glass-card rounded-[2.5rem] p-12 hover:border-tuft-pink/30 transition-colors duration-500 group flex flex-col justify-between cursor-pointer relative overflow-hidden min-h-[400px] tap-active">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-tuft-pink/20 blur-[80px] rounded-full group-hover:bg-tuft-pink/30 transition-colors duration-500"></div>
          <div className="relative z-10">
            <span className="text-tuft-pink font-bold text-xs tracking-[0.2em] uppercase block mb-6">Analytics</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform">
              Institutional
            </h3>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed mt-8 relative z-10">
            Track attendance and analyze engagement for your network or class with precision.
          </p>

          <div className="absolute -right-4 -bottom-4 text-white/5 rotate-12 w-24 h-24 pointer-events-none">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M3 3V21H21V19H5V3H3Z" />
              <path d="M7 14L10 10L13 13L17 8L19 10V5H14L16 7L13 10L10 7L6 12L7 14Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
