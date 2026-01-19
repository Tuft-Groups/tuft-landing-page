"use client";

import { useScroll, useTransform, motion, type MotionValue, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LayoutList, MessageSquareText, Files, Video, CreditCard, BarChart3, ClipboardList, UserCheck } from "lucide-react";

interface Feature {
  id: string;
  x: number;
  y: number;
}

const FEATURES: Feature[] = [
  { id: "feed", x: -800, y: -600 },
  { id: "chat", x: 800, y: -600 },
  { id: "files", x: -800, y: 0 },
  { id: "meetings", x: 800, y: 0 },
  { id: "payments", x: -800, y: 600 },
  { id: "polls", x: 800, y: 600 },
  { id: "forms", x: 0, y: -800 },
  { id: "attendance", x: 0, y: 800 },
];

const ICONS = {
  feed: LayoutList,
  chat: MessageSquareText,
  files: Files,
  meetings: Video,
  payments: CreditCard,
  polls: BarChart3,
  forms: ClipboardList,
  attendance: UserCheck,
};

const TITLES = {
  feed: "Smart Feed",
  chat: "Real-Time Chat",
  files: "Resource Library",
  meetings: "Virtual Meetups",
  payments: "Secure Payments",
  polls: "Interactive Polls",
  forms: "Custom Forms",
  attendance: "Attendance",
};

const COLORS = {
  feed: {
    bg: "from-blue-500/40 to-cyan-500/40",
    border: "border-blue-400/50",
    icon: "text-blue-300",
    tileBg: "bg-gradient-to-b from-blue-500/20 to-blue-500/10 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]",
  },
  chat: {
    bg: "from-violet-500/40 to-purple-500/40",
    border: "border-violet-400/50",
    icon: "text-violet-300",
    tileBg: "bg-gradient-to-b from-violet-500/20 to-violet-500/10 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]",
  },
  files: {
    bg: "from-amber-500/40 to-orange-500/40",
    border: "border-amber-400/50",
    icon: "text-amber-300",
    tileBg: "bg-gradient-to-b from-amber-500/20 to-amber-500/10 shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)]",
  },
  meetings: {
    bg: "from-emerald-500/40 to-green-500/40",
    border: "border-emerald-400/50",
    icon: "text-emerald-300",
    tileBg: "bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]",
  },
  payments: {
    bg: "from-pink-500/40 to-rose-500/40",
    border: "border-pink-400/50",
    icon: "text-pink-300",
    tileBg: "bg-gradient-to-b from-pink-500/20 to-pink-500/10 shadow-[0_0_20px_-5px_rgba(236,72,153,0.3)]",
  },
  polls: {
    bg: "from-indigo-500/40 to-blue-500/40",
    border: "border-indigo-400/50",
    icon: "text-indigo-300",
    tileBg: "bg-gradient-to-b from-indigo-500/20 to-indigo-500/10 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]",
  },
  forms: {
    bg: "from-teal-500/40 to-emerald-500/40",
    border: "border-teal-400/50",
    icon: "text-teal-300",
    tileBg: "bg-gradient-to-b from-teal-500/20 to-teal-500/10 shadow-[0_0_20px_-5px_rgba(20,184,166,0.3)]",
  },
  attendance: {
    bg: "from-orange-500/40 to-red-500/40",
    border: "border-orange-400/50",
    icon: "text-orange-300",
    tileBg: "bg-gradient-to-b from-orange-500/20 to-orange-500/10 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]",
  },
};

export function Convergence() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const titleScale = useTransform(scrollYProgress, [0.1, 0.9], [1.5, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8, 0.9], [1, 1, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section ref={containerRef} id="convergence-section" className="relative h-[250vh] px-6">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Fireworks Layer */}
        <FireworksDisplay scrollYProgress={scrollYProgress} />

        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.5),transparent)] opacity-50 pointer-events-none"></div>

        <motion.div style={{ opacity: titleOpacity, scale: titleScale }} className="z-10 text-center max-w-5xl relative mb-16">
          <div className="absolute inset-0 bg-tuft-purple/10 blur-[100px] -z-10 rounded-full"></div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white px-4 drop-shadow-2xl">
            Everything you need.
          </h2>
        </motion.div>

        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="absolute bottom-20 text-slate-500 text-sm uppercase tracking-[0.4em] font-bold"
        >
          The Complete Suite
        </motion.p>

        {FEATURES.map((feature, index) => (
          <FeatureItem key={feature.id} feature={feature} index={index} scrollYProgress={scrollYProgress} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}

function FeatureItem({
  feature,
  index,
  scrollYProgress,
  isMobile,
}: {
  feature: Feature;
  index: number;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}) {
  // Grid layout configuration based on device
  const colCount = isMobile ? 2 : 4;
  const rowCount = isMobile ? 4 : 2;

  // Optimized spacing for new larger card sizes
  // Card Sizes: Mobile ~160px, Desktop ~220px
  const spacingX = isMobile ? 170 : 250;
  const spacingY = isMobile ? 170 : 250;

  const row = Math.floor(index / colCount);
  const col = index % colCount;

  const gridWidth = (colCount - 1) * spacingX;
  const gridHeight = (rowCount - 1) * spacingY;

  const targetX = col * spacingX - gridWidth / 2;
  const targetY = row * spacingY - gridHeight / 2;

  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const x = useTransform(progress, [0, 1], [feature.x, targetX]);
  const y = useTransform(progress, [0, 1], [feature.y, targetY]);
  const scale = useTransform(progress, [0, 1], [0.5, 1]);
  const opacity = useTransform(progress, [0, 0.3, 1], [0, 1, 1]);

  const Icon = ICONS[feature.id as keyof typeof ICONS];
  const color = COLORS[feature.id as keyof typeof COLORS];

  return (
    <motion.div style={{ x, y, scale, opacity, zIndex: index + 20 }} className="absolute">
      <div
        className={`
        w-[160px] h-[160px] md:w-[220px] md:h-[220px]
        rounded-3xl
        border-[1.5px]
        backdrop-blur-xl
        flex flex-col items-center justify-center
        group
        transition-all duration-300
        hover:scale-105 hover:shadow-[0_0_40px_-5px_currentColor]
        ${color.border}
        ${color.tileBg}
      `}
        style={{ color: "currentColor" }}
      >
        <div
          className={`
          p-5 rounded-2xl
          bg-gradient-to-br ${color.bg}
          border border-white/20
          shadow-[0_0_15px_-5px_currentColor]
          group-hover:border-white/40
          group-hover:shadow-[0_0_25px_-5px_currentColor]
          transition-all duration-300
          relative
          flex items-center justify-center
          ${color.icon}
        `}
        >
          {/* Glow effect matching the icon color */}
          <div className="absolute inset-0 rounded-xl bg-current opacity-20 blur-md pointer-events-none"></div>
          <Icon
            className="size-16 md:size-20 relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            strokeWidth={2}
          />
        </div>
        <span className="mt-5 text-sm md:text-lg font-bold text-white tracking-wide text-center leading-tight px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {TITLES[feature.id as keyof typeof TITLES]}
        </span>
      </div>
    </motion.div>
  );
}

// -- Fireworks Implementation --

interface FireworkConfig {
  id: string;
  x: number; // Horizontal position 0-100%
  targetY: number; // Target vertical burst position 0-100%
  color: string;
  delay?: number;
}

function FireworksDisplay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const [rockets, setRockets] = useState<FireworkConfig[]>([]);
  const lastProgress = useRef(0);
  const lastLaunchTime = useRef(0);

  // Vibrant Neon Palette
  const COLORS = [
    "#FF0080", // Neon Rose
    "#7928CA", // Neon Violet
    "#FF4D4D", // Bright Red
    "#F000FF", // Magenta
    "#00FF99", // Neon Green
    "#00E5FF", // Cyan
    "#FFFF00", // Bright Yellow
    "#FF9900", // Orange
    "#FFFFFF", // White
    "#F472B6", // Pink
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const diff = latest - lastProgress.current;

    // Trigger when tiles are arranged (progress > 0.8) and user is scrolling down
    if (diff > 0 && latest > 0.8) {
      const now = Date.now();
      // Throttle launches to avoid chaos, but ensure consistent pairs
      if (now - lastLaunchTime.current > 800) {
        if (Math.random() < 0.8) {
          launchRocketPair();
          lastLaunchTime.current = now;
        }
      }
    }
    lastProgress.current = latest;
  });

  const launchRocketPair = () => {
    const id1 = Math.random().toString(36).substring(7);
    const id2 = Math.random().toString(36).substring(7);

    // Left Rocket (0-15%)
    const rocket1: FireworkConfig = {
      id: id1,
      x: 2 + Math.random() * 13,
      targetY: 15 + Math.random() * 30, // Burst in top/mid area
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };

    // Right Rocket (85-98%)
    const rocket2: FireworkConfig = {
      id: id2,
      x: 85 + Math.random() * 13,
      targetY: 15 + Math.random() * 30,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.2, // Slight offset for natural feel
    };

    setRockets((prev) => [...prev, rocket1, rocket2]);

    // Cleanup after full animation cycle (Rise ~0.6s + Burst ~2s)
    setTimeout(() => {
      setRockets((prev) => prev.filter((r) => r.id !== id1 && r.id !== id2));
    }, 4000);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      <AnimatePresence>
        {rockets.map((r) => (
          <RocketFirework key={r.id} config={r} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function RocketFirework({ config }: { config: FireworkConfig }) {
  const [hasBurst, setHasBurst] = useState(false);

  return (
    <>
      {/* Rising Rocket Phase */}
      {!hasBurst && (
        <motion.div
          initial={{ left: `${config.x}%`, top: "110%", opacity: 1, scale: 1 }}
          animate={{ top: `${config.targetY}%` }}
          transition={{
            duration: 0.6, // Fast rise
            ease: "easeOut",
            delay: config.delay || 0,
          }}
          onAnimationComplete={() => setHasBurst(true)}
          className="absolute w-1 h-8 rounded-full origin-bottom"
          style={{
            backgroundColor: config.color,
            boxShadow: `0 0 10px ${config.color}, 0 0 20px ${config.color}`,
          }}
        >
          {/* Engine Trail */}
          <div className="absolute top-full left-0 w-full h-12 bg-gradient-to-b from-white/80 to-transparent blur-[1px]" />
        </motion.div>
      )}

      {/* Burst Phase */}
      {hasBurst && <FireworkBurst x={config.x} y={config.targetY} color={config.color} />}
    </>
  );
}

function FireworkBurst({ x, y, color }: { x: number; y: number; color: string }) {
  // 30 particles for a dense explosion
  const particles = Array.from({ length: 30 }).map((_, i) => {
    const angle = (i / 30) * 360;
    return {
      angle,
      velocity: 100 + Math.random() * 150, // Explosive power
      scale: 0.5 + Math.random(),
      delay: Math.random() * 0.1,
    };
  });

  return (
    <div className="absolute w-0 h-0" style={{ left: `${x}%`, top: `${y}%` }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1, x: 0, y: 0, scale: p.scale }}
          animate={{
            opacity: 0,
            x: Math.cos((p.angle * Math.PI) / 180) * p.velocity,
            y: Math.sin((p.angle * Math.PI) / 180) * p.velocity + 60, // Gravity effect
            scale: 0,
          }}
          transition={{ duration: 1.5, ease: "easeOut", delay: p.delay }}
          className="absolute rounded-full"
          style={{
            width: "4px",
            height: "4px",
            backgroundColor: color,
            boxShadow: `0 0 8px 1px ${color}, 0 0 16px 2px ${color}`,
          }}
        />
      ))}
    </div>
  );
}
