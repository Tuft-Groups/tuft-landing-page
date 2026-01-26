import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { DetailedPricing } from "@/components/sections/DetailedPricing";

export const metadata = {
  title: "Pricing - Tuft",
  description: "Check out our pricing plans and find the perfect fit for your organization.",
};

export default function PricingPage() {
  return (
    <main className="relative z-10 bg-slate-950 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Pricing />
        <DetailedPricing />
      </div>
      <Footer />
    </main>
  );
}
