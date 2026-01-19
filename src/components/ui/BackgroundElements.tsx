"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { damping: 20, stiffness: 150 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isOverClickable = target.closest("a, button, .tap-active, .glass-card");
      setIsHovering(!!isOverClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Cinematic Glow */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 800 : 600,
          height: isHovering ? 800 : 600,
          opacity: isHovering ? 0.6 : 1,
        }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-0 transition-[width,height,opacity] duration-500 mix-blend-screen bg-[radial-gradient(circle,rgba(150,93,188,0.08)_0%,rgba(197,84,183,0.02)_40%,transparent_70%)]"
      />

      {/* Cursor Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 4 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.9)",
          mixBlendMode: isHovering ? "normal" : ("difference" as "normal" | "difference"),
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] shadow-[0_0_10px_rgba(255,255,255,0.5)] hidden lg:block"
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
