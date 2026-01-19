"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function Statement() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);

  return (
    <section ref={containerRef} id="statement-section" className="relative h-[200vh] px-6">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: bgOpacity, scale: bgScale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(150,93,188,0.1),transparent)] rounded-full blur-[120px] -z-10 mix-blend-screen"
        ></motion.div>

        <motion.div
          style={{ scale: cardScale }}
          className="w-full max-w-[1200px] mx-auto p-12 md:p-32 rounded-[3.5rem] text-center relative overflow-hidden transition-all duration-700 backdrop-blur-sm border border-white/5 bg-white/[0.01] shadow-[0_50px_100px_-20px_rgba(150,93,188,0.1)]"
        >
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-12 tracking-tighter leading-[0.9] text-metallic">
            The End of <br />
            <span className="gradient-text-premium blur-[0.5px]">Admin Hell.</span>
          </h2>

          <motion.div style={{ opacity: textOpacity, y: textY }}>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              Replace the noise of WhatsApp and the chaos of fragmented tools with{" "}
              <span className="text-white font-medium">absolute clarity</span>.
              <span className="block mt-8 text-tuft-purple text-xs font-bold tracking-[0.3em] uppercase">Begin with clarity</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
