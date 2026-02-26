import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { YoutubeHero } from "@/components/sections/creators/YoutubeHero";
import { YoutubeProblem } from "@/components/sections/creators/YoutubeProblem";
import { CreatorsSolution } from "@/components/sections/creators/CreatorsSolution";
import { YoutubeDetailedFeatures } from "@/components/sections/creators/YoutubeDetailedFeatures";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuft for YouTube Creators | Build & Own Your Community",
  description:
    "Tired of relying on AdSense and the YouTube algorithm? Tuft helps creators build owned communities, host exclusive content, and monetize their audience freely.",
  keywords: ["YouTube creators", "creator economy", "community platform", "monetize audience", "Tuft"],
  openGraph: {
    title: "Tuft for YouTube Creators | Build & Own Your Community",
    description:
      "Tired of relying on AdSense and the YouTube algorithm? Tuft helps creators build owned communities, host exclusive content, and monetize their audience freely.",
    url: "https://tuft.in/youtube",
    siteName: "Tuft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tuft for YouTube Creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuft for YouTube Creators | Build & Own Your Community",
    description:
      "Tired of relying on AdSense and the YouTube algorithm? Tuft helps creators build owned communities, host exclusive content, and monetize their audience freely.",
    images: ["/og-image.png"],
  },
};

export default function ForYoutubeCreatorsPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <YoutubeHero />

      {/* Problem Section (Scroll triggered) */}
      <YoutubeProblem />

      {/* Solution/Features Grid */}
      <CreatorsSolution />

      {/* Detailed Features Scroll Section */}
      <YoutubeDetailedFeatures />

      {/* Simple CTA similar to Pricing or just a big button at the bottom */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-tuft-purple/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to own your audience?</h2>
          <p className="text-xl text-slate-400 mb-10">Join thousands of creators building sustainable communities on Tuft.</p>
          <a
            href="https://app.tuft.in"
            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Get Started for Free
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
