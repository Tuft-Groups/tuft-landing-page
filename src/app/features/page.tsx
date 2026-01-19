import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DetailedFeatures } from "@/components/sections/DetailedFeatures";

export default function FeaturesPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#070707] text-white">
      <Navbar />

      {/* Features Hero Section */}
      <section className="pt-32 pb-10 md:pt-48 md:pb-20 px-6 md:px-12 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter shimmer-text">Features</h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
          Elevate group chats with announcements, storage, meetings, payments, analytics, and more. Redefine collaboration and organization
          in one platform.
        </p>
      </section>

      <DetailedFeatures />

      <Footer />
    </main>
  );
}
