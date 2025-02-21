import { AppImages } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header({ isHeaderWhite }: { isHeaderWhite?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`w-full ${isHeaderWhite ? "bg-white" : "bg-[#6665C0]"} pt-4 ${
        isHeaderWhite ? "text-black" : "text-white"
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src={AppImages.long_logo} alt="Site Logo" width={100} height={32} priority />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <div className="space-y-1">
              <span className={`block w-6 h-0.5 ${isHeaderWhite ? "bg-black" : "bg-white"}`}></span>
              <span className={`block w-6 h-0.5 ${isHeaderWhite ? "bg-black" : "bg-white"}`}></span>
              <span className={`block w-6 h-0.5 ${isHeaderWhite ? "bg-black" : "bg-white"}`}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              Home
            </Link>
            <Link href="/features" className="text-xl font-bold">
              Features
            </Link>
            <Link href="/pricing" className="text-xl font-bold">
              Pricing
            </Link>
            <Link href="/blog" className="text-xl font-bold">
              Blog
            </Link>
            <Link
              href="https://app.tuft.in"
              className={`rounded-xl ${isHeaderWhite ? "bg-black" : "bg-white"} px-4 py-1.5 text-lg font-semibold ${
                isHeaderWhite ? "text-white" : "text-[#081C44]"
              }`}
            >
              <span className={`${isHeaderWhite ? "text-white" : "text-[#081C44]"}`}>Get Started</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:hidden absolute top-20 left-0 right-0 flex-col items-center gap-6 py-6 ${
              isHeaderWhite ? "bg-white" : "bg-[#6665C0]"
            }`}
          >
            <Link href="/" className="text-xl font-bold">
              Home
            </Link>
            <Link href="/features" className="text-xl font-bold">
              Features
            </Link>
            <Link href="/pricing" className="text-xl font-bold">
              Pricing
            </Link>
            <Link href="/blog" className="text-xl font-bold">
              Blog
            </Link>
            <Link
              href="https://app.tuft.in"
              className={`rounded-xl ${isHeaderWhite ? "bg-black" : "bg-white"} px-4 py-1.5 text-lg font-semibold ${
                isHeaderWhite ? "text-white" : "text-[#081C44]"
              }`}
            >
              <span className={`${isHeaderWhite ? "text-white" : "text-[#081C44]"}`}>Get Started</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
