"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed top-8 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-500 will-change-transform",
        !isVisible && "-translate-y-[150%] opacity-0 pointer-events-none",
      )}
    >
      <div className="glass-card rounded-full px-8 py-4 flex justify-between items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 bg-tuft-dark/60 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tuft.in/assets/images/short_logo.png"
            alt="Tuft Logo"
            className="w-8 h-8 object-contain drop-shadow-[0_0_15px_rgba(150,93,188,0.6)] rounded-sm"
          />
          <span className="text-xl font-bold tracking-tight text-white">Tuft</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link href="/features" className="hover:text-white transition-colors duration-300">
            Features
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors duration-300">
            Blog
          </Link>
          <Link href="/#use-cases" className="hover:text-white transition-colors duration-300">
            Use Cases
          </Link>
          <Link href="/#pricing" className="hover:text-white transition-colors duration-300">
            Pricing
          </Link>
        </div>

        <Link href="https://app.tuft.in" className="btn-premium px-7 py-3 rounded-full text-xs font-bold shadow-xl tap-active">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
