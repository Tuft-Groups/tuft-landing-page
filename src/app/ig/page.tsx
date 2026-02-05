import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CreatorsHero } from "@/components/sections/creators/CreatorsHero";
import { CreatorsProblem } from "@/components/sections/creators/CreatorsProblem";
import { CreatorsSolution } from "@/components/sections/creators/CreatorsSolution";
import { InstagramDetailedFeatures } from "@/components/sections/creators/InstagramDetailedFeatures";

export default function ForCreatorsPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <CreatorsHero />

      {/* Problem Section (Scroll triggered) */}
      <CreatorsProblem />

      {/* Solution/Features Grid */}
      <CreatorsSolution />

      {/* Detailed Features Scroll Section */}
      <InstagramDetailedFeatures />

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
