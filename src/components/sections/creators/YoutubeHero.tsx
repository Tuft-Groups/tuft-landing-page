"use client";

import { ArrowRight, Youtube } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function YoutubeHero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-10 lg:px-24 relative pt-32">
      {/* Refined Ambient Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-red-600 opacity-[0.08] blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-amber-600 opacity-[0.06] blur-[180px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 shadow-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white">
              <Youtube size={16} />
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase">For YouTube Creators</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.95] text-metallic drop-shadow-2xl">
            Beyond AdSense. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-orange-500">
              Own Your Audience
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 border-l border-slate-700/50 pl-8">
            Ad revenue is unpredictable. Subscribers miss notifications. Move your most dedicated viewers into a community you actually
            control.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link
              href="https://app.tuft.in"
              className="group btn-premium px-9 py-4 rounded-full font-bold flex items-center justify-center gap-3 tap-active bg-white text-black hover:bg-slate-200 transition-colors"
            >
              Start Your Community
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
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff0000] to-[#ff4d4d] opacity-20 blur-[80px] rounded-full group-hover:opacity-30 transition-opacity duration-1000"></div>

            <div className="relative z-10 transform transition-transform duration-700 ease-out group-hover:rotate-y-[-8deg] group-hover:rotate-x-[4deg]">
              <img
                src="https://media.tuft.in/internal_assets/app_screenshots/dashboard.webp"
                alt="Tuft Community Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
