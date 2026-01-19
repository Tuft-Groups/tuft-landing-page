"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionStarfield } from "@/components/ui/SectionStarfield";
import { FEATURE_DATA, type Feature } from "@/lib/constants";

// --- Constants ---

const CAROUSEL_RADIUS = 500; // Radius for the spherical arc arrangement
const ANGLE_STEP = 35; // Degrees between cards

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to an index (0 to length-1)
  const totalItems = FEATURE_DATA.length;
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, totalItems - 1]);
  const smoothIndex = useSpring(rawIndex, { stiffness: 60, damping: 20, mass: 0.5 });

  const [activeStep, setActiveStep] = useState(0);

  // Sync active step for text logic
  useEffect(() => {
    const unsub = smoothIndex.on("change", (latest) => {
      setActiveStep(Math.round(latest));
    });
    return () => unsub();
  }, [smoothIndex]);

  const activeFeature = FEATURE_DATA[activeStep] || FEATURE_DATA[0];

  // Navigation handlers
  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(index, totalItems - 1));

    // Calculate scroll position relative to the container and window to snap to the index
    const el = containerRef.current;
    const top = el.offsetTop;
    const scrollHeight = el.scrollHeight; // total height
    const viewHeight = window.innerHeight;
    const scrollableDistance = scrollHeight - viewHeight;
    const targetScroll = top + (clampedIndex / (totalItems - 1)) * scrollableDistance;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center bg-black">
        {/* --- Background Elements --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Sparse Starfield with Parallax */}
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }} className="absolute inset-0 h-[120%] -top-[10%]">
            <SectionStarfield starCount={100} />
          </motion.div>

          <div className="absolute -top-[50%] -left-[20%] w-[1000px] h-[1000px] bg-indigo-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[0%] right-[0%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center relative z-10">
          {/* --- Left Column: Dynamic Text --- */}
          <div className="order-2 md:order-1 flex flex-col justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Heading */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span style={{ backgroundColor: activeFeature.accent }} className="w-8 h-[2px] rounded-full" />
                    <span style={{ color: activeFeature.accent }} className="text-sm font-bold tracking-[0.2em] uppercase">
                      {activeFeature.tag}
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white">
                    {activeFeature.titleFirst} <br />
                    <span style={{ color: activeFeature.accent }} className="opacity-90">
                      {activeFeature.titleSecond}
                    </span>
                  </h2>
                </div>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-lg">{activeFeature.description}</p>

                {/* Bullets */}
                <div className="space-y-4 pt-4">
                  {activeFeature.badges.map((badge, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all group-hover:scale-110 group-hover:bg-white/10"
                        style={{ color: activeFeature.accent, borderColor: `${activeFeature.accent}33` }}
                      >
                        <badge.icon size={20} />
                      </div>
                      <span className="text-slate-200 font-medium tracking-wide group-hover:text-white transition-colors">
                        {badge.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- Right Column: 3D Carousel --- */}
          <div className="order-1 md:order-2 relative h-[500px] md:h-full w-full flex items-center justify-center -mr-20 group perspective-container">
            {/* Scene Container */}
            <div className="relative w-[300px] h-[600px]" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
              <CarouselRing scrollIndex={smoothIndex} />
            </div>

            {/* Navigation Buttons (Hover Only) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-between px-4 md:-mx-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <button
                onClick={() => scrollToStep(activeStep - 1)}
                disabled={activeStep === 0}
                className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-0 disabled:cursor-not-allowed hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scrollToStep(activeStep + 1)}
                disabled={activeStep === totalItems - 1}
                className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-0 disabled:cursor-not-allowed hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselRing({ scrollIndex }: { scrollIndex: MotionValue<number> }) {
  return (
    <motion.div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
      {FEATURE_DATA.map((feature, index) => (
        <CarouselItem key={feature.id} feature={feature} index={index} scrollIndex={scrollIndex} />
      ))}
    </motion.div>
  );
}

function CarouselItem({ feature, index, scrollIndex }: { feature: Feature; index: number; scrollIndex: MotionValue<number> }) {
  // Calculate properties based on scrollIndex
  // We want the item to be at `angle = (index - scrollIndex) * STEP`

  const angle = useTransform(scrollIndex, (val: number) => {
    return (index - val) * ANGLE_STEP;
  });

  const z = useTransform(angle, (a: number) => {
    // Position on a circle behind the view plane
    const rad = (a * Math.PI) / 180;
    return Math.cos(rad) * CAROUSEL_RADIUS - CAROUSEL_RADIUS;
  });

  const x = useTransform(angle, (a: number) => {
    const rad = (a * Math.PI) / 180;
    return Math.sin(rad) * CAROUSEL_RADIUS;
  });

  const rotateY = useTransform(angle, (a: number) => -a); // Rotate to face center

  const opacity = useTransform(angle, (a: number) => {
    const dist = Math.abs(a);
    if (dist > 90) return 0;
    return 1 - dist / 100;
  });

  const scale = useTransform(angle, (a: number) => {
    const dist = Math.abs(a);
    return 1 - dist / 200;
  });

  // Add brightness/filter effect
  const brightness = useTransform(angle, (a: number) => {
    const dist = Math.abs(a);
    return Math.max(0.3, 1 - dist / 100);
  });

  return (
    <motion.div
      style={{
        x,
        z,
        rotateY,
        opacity,
        scale,
        filter: useTransform(brightness, (b) => `brightness(${b})`),
        position: "absolute",
        width: 320,
        height: 650,
        left: "calc(50% - 160px)",
        top: "calc(50% - 325px)",
      }}
      className="rounded-[40px] overflow-hidden shadow-2xl border-[4px] border-[#222] bg-black"
    >
      <div className="absolute inset-0 bg-zinc-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={feature.mockup} alt={feature.titleFirst} className="w-full h-full object-cover" />

        {/* Glossy reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none" />
      </div>
    </motion.div>
  );
}
