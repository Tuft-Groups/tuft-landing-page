import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { AppImages } from "@/lib/constants";
import { trackPageVisit } from "@/utils/track-page-visit";
import Head from "next/head";
import Image from "next/image";

export const runtime = "experimental-edge";

export async function getServerSideProps(context: any) {
  const { req } = context;
  await trackPageVisit(req);
  return { props: {} };
}

export default function Pricing() {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <Head>
        <title>Tuft Pricing - All Features Free | Community Management Platform</title>
        <meta
          name="description"
          content="Access all of Tuft's premium community management features completely free. No hidden costs. Get organized communication, file sharing, payments, and analytics tools today."
        />
      </Head>
      <Header />
      <main className="flex-grow">
        <div className="flex flex-col bg-[#6665C0] text-white px-10 md:px-20 py-8">
          <Image src={AppImages.money} alt="Site Logo" width={64} height={64} priority />
          <h1 className="text-4xl md:text-6xl font-bold mt-4 font-alexandria">
            Tuft is <span className="text-[#FFE262]">100% free</span> - No Hidden Costs
          </h1>
          <p className="mt-2 text-xl md:text-2xl mr-0 md:mr-36">
            We understand the heart and hustle that go into building a community—the late nights, the endless
            coordination, the challenge of keeping everyone engaged. We’ve been there, and we know how hard it is to
            find a platform that truly supports your vision. That’s why we made Tuft completely free. Because bringing
            people together shouldn’t come with a price tag. While we may introduce minimal charges in the future to
            help sustain the platform, our commitment remains the same—making community-building effortless, accessible,
            and stress-free. 💙
          </p>
          <div className="w-fit mb-16">
            <Button
              className="mt-8 bg-white text-black"
              size={"lg"}
              onClick={() => (window.location.href = "https://app.tuft.in")}
            >
              <b className="font-bold text-lg">Get Started for free</b>
            </Button>
          </div>
        </div>
        <div className="px-10 md:px-20 py-8">
          <h1 className="text-2xl md:text-4xl font-bold font-alexandria gradient-text">Want Your Own Branded App?</h1>
          <p className="text-lg md:text-2xl mr-0 md:mr-36 mt-4">
            Your community deserves its own identity. With Tuft’s white-label solution, you get a fully branded app—your
            name, your logo, your space. No more sharing platforms with countless other groups. Give your members a
            professional, distraction-free experience under your brand. We charge a small maintenance fee to keep your
            app running smoothly on the Play Store and App Store. <br /> <br /> 📩 Contact us to get started! 🚀
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
