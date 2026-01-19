import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Convergence } from "@/components/sections/Convergence";
import { Features } from "@/components/sections/Features";
import { BuiltForLeaders } from "@/components/sections/BuiltForLeaders";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Statement />
      <Convergence />
      <Features />
      <BuiltForLeaders />
      <Pricing />
      <Footer />
    </main>
  );
}
