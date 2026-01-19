"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Check, ShieldCheck, Zap } from "lucide-react";
import { useRef } from "react";

export function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 0.5], [0.95, 1]);

  // Parallax background movement - slows down as card comes into view
  const bgY = useTransform(smoothProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="py-12 md:py-24 px-6 relative overflow-hidden min-h-[50vh] flex items-center justify-center"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tuft-purple/10 via-transparent to-transparent opacity-60 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          style={{ y, opacity, scale }}
          className="relative"
        >
          {/* Glass Console Card */}
          <div className="glass-card rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 border border-white/10 relative overflow-hidden group">

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-tuft-purple/20 blur-[80px] rounded-full pointer-events-none" />

            {/* Tech details / "Launch Console" aesthetic corners */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/20 rounded-tl-lg" />
            <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/20 rounded-tr-lg" />
            <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/20 rounded-bl-lg" />
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/20 rounded-br-lg" />

            <div className="text-center relative z-10">
              {/* Overline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-slate-300">Beta Access Live</span>
              </motion.div>

              {/* Main Headline */}
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                Start for <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">₹0</span>
              </h2>

              <p className="text-lg md:text-xl text-slate-400 font-light max-w-lg mx-auto mb-10 leading-relaxed">
                Join the platform designed for modern leaders.
                <br className="hidden md:block" /> Experience everything without limits.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 text-slate-300 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400/80" />
                  <span>No credit card required</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-300/80" />
                  <span>Unlimited features during beta</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-400/80" />
                  <span>Instant setup</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="https://app.tuft.in"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg tracking-tight transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <span>Launch Your Space</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
