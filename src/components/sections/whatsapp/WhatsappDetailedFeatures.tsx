"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BellBold,
  DocumentTextBold,
  GlobalBold,
  ShieldCheckBold,
  UsersGroupTwoRoundedBold,
  WidgetBold,
  CheckCircleBold,
  StarBold,
  LockBold,
  LibraryBold,
  VideoFrameBold,
  MoneyBagBold as Money,
} from "solar-icon-set";

// Define local Feature/Badge types if they aren't fully exported or just explicitly type them here
type Badge = { icon: React.ElementType; text: string };
type Feature = {
  id: string;
  tag: string;
  accent: string;
  color: "tuft-purple" | "tuft-pink";
  titleFirst: string;
  titleSecond: string;
  description: string;
  badges: Badge[];
  mockup: string;
};

const WHATSAPP_FEATURES: Feature[] = [
  {
    id: "privacy",
    tag: "Privacy",
    accent: "#10B981", // Emerald
    color: "tuft-purple",
    titleFirst: "Privacy is",
    titleSecond: "Freedom.",
    description:
      "In a standard chat group, you are just one click away from a stranger having your personal number. For coaches, educators, and leaders, this is a massive boundary issue. We engineered Tuft with our Privacy Shield. By default, phone numbers are hidden.",
    badges: [
      { icon: LockBold, text: "Privacy Shield" },
      { icon: ShieldCheckBold, text: "Hidden Phone Numbers" },
      { icon: GlobalBold, text: "Total Safety" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/chat.webp",
  },
  {
    id: "library",
    tag: "Organization",
    accent: "#F59E0B", // Amber
    color: "tuft-pink",
    titleFirst: "Build a Library,",
    titleSecond: "Not a Chat Log.",
    description:
      "A chat is not a classroom. Stop letting your valuable PDFs, links, and guides disappear into the endless chat history. With Tuft, we separate the signal from the noise. You get a dedicated Feed where only admins can post crucial updates. Want to spark a discussion? Use Chat Threads to keep conversations organized by topic.",
    badges: [
      { icon: LibraryBold, text: "Smart Files Library" },
      { icon: BellBold, text: "Admin-Only Feed" },
      { icon: WidgetBold, text: "Organized Threads" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/files.webp",
  },
  {
    id: "monetization",
    tag: "Revenue",
    accent: "#EF4444", // Red
    color: "tuft-purple",
    titleFirst: "Turn Followers",
    titleSecond: "into a Paid Tribe.",
    description:
      "Turning a free audience into a paid community shouldn't require a degree in software integration. We've eliminated the need for third-party paywalls. With our seamless Joining Workflow, you can set up an Entry Fee in under 5 minutes. Members pay to unlock access natively.",
    badges: [
      { icon: Money, text: "In-App Payments" },
      { icon: CheckCircleBold, text: "Daily Settlements" },
      { icon: StarBold, text: "No Third-Party Links" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/payments.webp",
  },
  {
    id: "allinone",
    tag: "Ecosystem",
    accent: "#3B82F6", // Blue
    color: "tuft-pink",
    titleFirst: "Delete Zoom,",
    titleSecond: "Drive, and Slack.",
    description:
      "The biggest relief our users experience is the joy of deleting their duct-taped tech stack. Tuft is a true all-in-one ecosystem built for your pocket. Want to host a live masterclass? Launch Native Meetings with HD Media sharing instantly. Need to qualify new members gathering feedback? Use forms and attendance workflows.",
    badges: [
      { icon: VideoFrameBold, text: "HD Native Meetings" },
      { icon: DocumentTextBold, text: "Forms & Quizzes" },
      { icon: UsersGroupTwoRoundedBold, text: "Live Attendance" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/dashboard.webp",
  },
];

export function WhatsappDetailedFeatures() {
  const [activeId, setActiveId] = useState("privacy");
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const activeFeature = WHATSAPP_FEATURES.find((f) => f.id === activeId);

  return (
    <section id="features" ref={containerRef} className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-24 relative">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        {/* Left Column: Content Triggers */}
        <div className="w-full md:w-1/2 space-y-[45vh] md:space-y-[65vh] pb-[20vh] md:pb-[30vh] relative pl-10 md:pl-0">
          <div className="hidden lg:block absolute -left-10 md:-left-14 top-0 h-full w-px bg-white/5">
            <motion.div
              style={{ top: progressTop, y: "-50%" }}
              className={cn(
                "absolute -left-px w-[3px] h-[180px] rounded-full transition-[background,box-shadow] duration-500",
                activeFeature?.color === "tuft-purple"
                  ? "bg-linear-to-b from-transparent via-tuft-purple to-transparent shadow-[0_0_20px_var(--tuft-purple)]"
                  : "bg-linear-to-b from-transparent via-tuft-pink to-transparent shadow-[0_0_20px_var(--tuft-pink)]",
              )}
            />
          </div>

          {WHATSAPP_FEATURES.map((feature) => (
            <FeatureTrigger key={feature.id} feature={feature} onVisible={() => setActiveId(feature.id)} />
          ))}
        </div>

        {/* Right Column: Sticky Phone */}
        <div className="hidden md:block md:w-1/2">
          <div className="sticky top-0 h-screen flex items-center justify-center perspective-[2500px]">
            {/* Ambient phone light */}
            <div className="absolute inset-0 bg-white/5 blur-[50px] rounded-full z-0 pointer-events-none"></div>

            <div className="w-[320px] lg:w-[360px] h-[650px] lg:h-[740px] relative transform-style-3d transition-transform duration-100 ease-out">
              <div className="absolute inset-0 rounded-[44px] overflow-hidden bg-black shadow-[0_0_0_2px_#333,0_0_0_4px_#1a1a1a,0_50px_100px_-20px_rgba(0,0,0,0.8)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={WHATSAPP_FEATURES.find((f) => f.id === activeId)?.mockup}
                  className="w-full h-full object-cover"
                  alt="Mockup Screen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureTrigger({ feature, onVisible }: { feature: Feature; onVisible: () => void }) {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          onVisible();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div ref={ref} className={cn("reveal", isActive && "active")}>
      <div className="mb-10">
        <span
          className={cn(
            "font-bold tracking-[0.3em] text-[10px] uppercase mb-6 flex items-center gap-3",
            feature.color === "tuft-purple" ? "text-tuft-purple" : "text-tuft-pink",
          )}
        >
          <span className={cn("w-8 h-px", feature.color === "tuft-purple" ? "bg-tuft-purple" : "bg-tuft-pink")} />
          {feature.tag}
        </span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tighter text-metallic">
          {feature.titleFirst} <br />
          <span className="gradient-text-premium">{feature.titleSecond}</span>
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md font-light">{feature.description}</p>
      </div>

      <div className="space-y-4 max-w-md">
        {feature.badges.map((badge: Badge, idx: number) => (
          <div
            key={idx}
            className="flex items-center gap-5 p-4 rounded-3xl bg-white/5 border border-white/10 tap-active cursor-pointer group hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div
              className={cn(
                "w-14 h-14 rounded-2xl bg-white/5  flex items-center justify-center transition-all shadow-2xl group-hover:scale-110 shrink-0",
                feature.color === "tuft-purple"
                  ? "text-tuft-purple group-hover:bg-tuft-purple group-hover:text-white"
                  : "text-tuft-pink group-hover:bg-tuft-pink group-hover:text-white",
              )}
            >
              <badge.icon size={28} />
            </div>

            <p className="text-slate-200 font-semibold text-lg tracking-tight group-hover:text-white transition-colors">{badge.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
