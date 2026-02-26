"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappy spring for the dot
  const dotX = useSpring(mouseX, { damping: 25, stiffness: 1000, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 25, stiffness: 1000, mass: 0.1 });

  // Trailing spring for the glow
  const glowX = useSpring(mouseX, { damping: 50, stiffness: 250, mass: 0.5 });
  const glowY = useSpring(mouseY, { damping: 50, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target) {
        const isOverClickable = !!target.closest("a, button, .tap-active, .glass-card");
        if (isOverClickable !== isHovering) {
          setIsHovering(isOverClickable);
        }
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, isHovering]);

  return (
    <>
      {/* Cinematic Glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 mix-blend-screen bg-[radial-gradient(circle,rgba(150,93,188,0.08)_0%,rgba(197,84,183,0.02)_40%,transparent_70%)] will-change-transform"
      />

      {/* Cursor Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 4 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.9)",
          mixBlendMode: isHovering ? "normal" : "difference",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] shadow-[0_0_10px_rgba(255,255,255,0.5)] hidden lg:block will-change-transform"
      />
    </>
  );
}

export function NoiseOverlay() {
  return <div className="noise-overlay" />;
}

export function DotGrid() {
  return <div className="fixed inset-0 dot-grid pointer-events-none z-0" />;
}
