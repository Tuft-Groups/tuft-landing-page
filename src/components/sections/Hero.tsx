"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-10 lg:px-24 relative pt-32">
      {/* Refined Ambient Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-tuft-purple opacity-[0.06] blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-tuft-pink opacity-[0.04] blur-[180px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 shadow-lg">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase">The Community OS 2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.95] text-metallic drop-shadow-2xl">
            A Unified Platform <br />
            <span className="gradient-text-premium">for Your Community</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 border-l border-slate-700/50 pl-8">
            Centralize files, communication, and meetings in a secure, structured environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link
              href="https://app.tuft.in"
              className="group btn-premium px-9 py-4 rounded-full font-bold flex items-center justify-center gap-3 tap-active"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-12 lg:mt-0 flex justify-center lg:justify-end perspective-1000"
        >
          <div className="relative group max-w-[340px] md:max-w-[380px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#965dbc] to-[#c554b7] opacity-20 blur-[80px] rounded-full group-hover:opacity-30 transition-opacity duration-1000"></div>

            <div className="relative z-10 transform transition-transform duration-700 ease-out group-hover:rotate-y-[-8deg] group-hover:rotate-x-[4deg]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://media.tuft.in/internal_assets/app_screenshots/dashboard.webp"
                alt="Tuft Feed Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
