import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappHero } from "@/components/sections/whatsapp/WhatsappHero";
import { WhatsappProblem } from "@/components/sections/whatsapp/WhatsappProblem";
import { WhatsappComparison } from "@/components/sections/whatsapp/WhatsappComparison";
import { WhatsappDetailedFeatures } from "@/components/sections/whatsapp/WhatsappDetailedFeatures";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuft vs. WhatsApp | Move Your Community Out of Admin Hell",
  description:
    "At Tuft, we built our mobile-first platform entirely in-house to bridge the gap between simple texting apps and overly complex, clunky desktop forums.",
  keywords: ["WhatsApp alternative", "community platform", "Tuft vs WhatsApp", "WhatsApp groups alternative", "monetize audience", "Tuft"],
  openGraph: {
    title: "Tuft vs. WhatsApp | Move Your Community Out of Admin Hell",
    description:
      "Tired of WhatsApp groups chaos? At Tuft, we built our mobile-first platform entirely in-house to bridge the gap between simple texting apps and overly complex, clunky desktop forums.",
    url: "https://tuft.in/whatsapp",
    siteName: "Tuft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tuft vs WhatsApp for Communities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuft vs. WhatsApp | Move Your Community Out of Admin Hell",
    description:
      "Tired of WhatsApp groups chaos? At Tuft, we built our mobile-first platform entirely in-house to bridge the gap between simple texting apps and overly complex, clunky desktop forums.",
    images: ["/og-image.png"],
  },
};

export default function ForWhatsappAdminsPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <WhatsappHero />

      {/* Problem Section (Scroll triggered) */}
      <WhatsappProblem />

      {/* Comparison Grid */}
      <WhatsappComparison />

      {/* Detailed Features Scroll Section */}
      <WhatsappDetailedFeatures />

      {/* CTA Section */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#25D366]/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Graduate?</h2>
          <p className="text-xl text-slate-400 mb-10">
            WhatsApp was built for family chats. Tuft was built for leaders. Give your community the premium, organized, and private home it
            deserves.
          </p>
          <a
            href="https://app.tuft.in"
            className="inline-block px-10 py-4 bg-[#25D366] text-black font-bold rounded-full hover:bg-[#20b858] transition-all text-lg shadow-[0_0_40px_-10px_rgba(37,211,102,0.4)]"
          >
            Build Your Tribe on Tuft — It's Free!
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
