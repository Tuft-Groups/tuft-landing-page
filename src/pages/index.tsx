import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppImages } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const runtime = "experimental-edge";

export async function getServerSideProps(context: any) {
  const { req } = context;

  try {
    // Extract User-Agent and Referrer (with better fallback handling)
    const userAgent = req.headers["user-agent"] || "";
    const referrer =
      req.headers["referer"] ||
      req.headers["referrer"] ||
      (req.headers.origin ? `Origin: ${req.headers.origin}` : "Direct Visit");

    // Get IP address (checking multiple headers)
    const ip = req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || req.socket?.remoteAddress || "Unknown";

    // Convert x-forwarded-for to string if it's an array
    const clientIP = Array.isArray(ip) ? ip[0] : ip;

    // Log headers for debugging
    console.log("Request headers:", {
      userAgent,
      referrer: req.headers["referer"],
      origin: req.headers.origin,
      host: req.headers.host,
      ip: clientIP,
      allHeaders: req.headers,
    });

    // Detect if the request is from a bot
    const isBot = /bot|crawl|spider|slurp|facebookexternalhit|WhatsApp|Telegram/i.test(userAgent);

    // Detect device type with more specific patterns
    let deviceType = "Unknown";
    if (/Mobile|Android|iPhone|iPad|iPod/i.test(userAgent)) {
      deviceType = "Mobile";
    } else if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
      deviceType = "Tablet";
    } else if (/Windows|Macintosh|Linux/i.test(userAgent)) {
      deviceType = "Desktop";
    }

    await fetch("https://tuft-core-400170117812.asia-south1.run.app/internal/website_visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isBot,
        userAgent,
        deviceType,
        referrer,
        ip: clientIP,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error("Failed to record visit:", error);
  }

  return {
    props: {}, // Return empty props since we don't need to pass data to the page
  };
}

export default function Home() {
  const targetAudience = [
    { text: "College's", color: "#FFE262" },
    { text: "YouTuber's", color: "#FFE262" },
    { text: "School's", color: "#FFE262" },
    { text: "Study Club's", color: "#FFE262" },
  ];

  const basicFeatures = [
    {
      title: "Easy to Use",
      subtitle: "Built for Everyone",
      description: "Simple, intuitive design that feels as easy as WhatsApp.",
      icon: AppImages.easy,
    },
    {
      title: "Mobile-First",
      subtitle: "Access Anytime, Anywhere",
      description: "Designed for a seamless experience on smartphones.",
      icon: AppImages.mobile,
    },
    {
      title: "Cloud-Based",
      subtitle: "No Installs, No Hassles",
      description: "All data is securely stored in the cloud, accessible from any device.",
      icon: AppImages.cloud,
    },
    {
      title: "Free to Use",
      subtitle: "No Cost, No Limits",
      description: "Enjoy full functionality without worrying about subscription fees.",
      icon: AppImages.free,
    },
    {
      title: "Secure & Private",
      subtitle: "Your Data, Your Control",
      description: "Advanced security keeps your data private and protected.",
      icon: AppImages.secure,
    },
    {
      title: "Scalable & Reliable",
      subtitle: "Grows with You",
      description: "Tuft seamlessly adapts to groups of any size.",
      icon: AppImages.rocket,
    },
  ];

  const featureList = [
    {
      title: "FEED",
      desc: "Stay updated with structured announcements.",
      screenshot: AppImages.screenshots.feed,
    },
    {
      title: "CHAT",
      desc: "Connect instantly with your community.",
      screenshot: AppImages.screenshots.chat,
    },
    {
      title: "FILES",
      desc: "Organize, store, and access everything with ease.",
      screenshot: AppImages.screenshots.files,
    },
    {
      title: "PAYMENTS",
      desc: "Collect payments from your members",
      screenshot: AppImages.screenshots.payments,
    },
    {
      title: "MEETINGS",
      desc: "Host Meetings with your members",
      screenshot: AppImages.screenshots.meetings,
    },
  ];

  const whyBrandedApp = [
    {
      title: "Enhanced Trust",
      desc: "Build stronger engagement with a branded community platform.",
      screenshot: AppImages.trust,
    },
    {
      title: "Professional Identity",
      desc: "Maintain a consistent and polished look across all interactions.",
      screenshot: AppImages.identity,
    },
    {
      title: "Better Monetization",
      desc: "Increase revenue with a trusted and professional community experience.",
      screenshot: AppImages.money,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % targetAudience.length);
    }, 3000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#6665C0] from-50% to-[#0A3D62] min-h-screen py-28">
          <h1 className="text-[32px] sm:text-[72px] font-bold mb-6 text-center font-alexandria text-white leading-normal">
            Powerful Community Platform <br /> built for{" "}
            <span style={{ color: targetAudience[currentIndex].color }}>{targetAudience[currentIndex].text}</span>
          </h1>
          <div className={`flex flex-col md:flex-row justify-center items-center mt-24 gap-8 px-4`}>
            <div className="flex flex-col gap-8 justify-center ">
              {basicFeatures.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col md:w-[300px] max-w-full shadow-[0_0_4px_rgba(0,0,0,0.25)] p-6 rounded-3xl text-white bg-white/[0.03]"
                >
                  <Image src={feature.icon} alt={feature.title} width={64} height={64} />
                  <h2 className="text-2xl font-bold mt-4">{feature.title}</h2>
                  <p className="text-sm font-bold">{feature.subtitle}</p>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <Image src={AppImages.screenshots.feed} alt="Feed" width={440} height={440} />
            <div className="flex flex-col gap-8">
              {basicFeatures.slice(3, 6).map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col md:w-[300px] max-w-full shadow-[0_0_4px_rgba(0,0,0,0.25)] p-6 rounded-3xl text-white bg-white/[0.03]"
                >
                  <Image src={feature.icon} alt={feature.title} width={64} height={64} />
                  <h2 className="text-2xl font-bold mt-4">{feature.title}</h2>
                  <p className="text-sm font-bold">{feature.subtitle}</p>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="bg-gradient-to-b from-[#0A3D62] from-50% to-[#091D45] min-h-screen px-3 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center font-alexandria gradient-text">
            All the features you need
          </h2>
          <p className="text-center text-lg md:text-3xl text-gray-200 mt-4 max-w-[700px] mx-auto">
            Tuft comes with all the features you need to build a great and better community
          </p>
          <div ref={scrollContainerRef} className="flex gap-8 mt-24 overflow-x-scroll">
            {featureList.map((feature, index) => (
              <div key={index} className="flex flex-col bg-white/[0.03] p-6 rounded-3xl shrink-0 w-[280px]">
                <h2 className="text-2xl font-bold text-white">{feature.title}</h2>
                <p className="text-md text-gray-200 mb-4">{feature.desc}</p>
                <Image src={feature.screenshot} alt={feature.title} width={440} height={440} />
              </div>
            ))}
          </div>
        </div>
        {/* Use Cases Section */}
        <div className="bg-gradient-to-b from-[#091D45] from-50% to-[#6665C0] min-h-screen px-4 py-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center font-alexandria gradient-text">Use Cases</h2>
          <p className="text-center text-lg md:text-3xl text-gray-200 mt-4 max-w-[700px] mx-auto">
            Tuft is designed to work with any community, from small study groups to large organizations.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
            <div className="flex flex-col gap-8">
              <div
                className="relative h-[200px] w-[300px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${AppImages.school})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-black/60">
                  <p className="text-3xl text-white text-center">Schools</p>
                </div>
              </div>
              <div
                className="relative h-[400px] w-[300px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${AppImages.webinar})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-black/60">
                  <p className="text-3xl text-white text-center">Webinars</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div
                className="relative h-[300px] w-[300px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${AppImages.classrooms})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-black/60">
                  <p className="text-3xl text-white text-center">Classrooms</p>
                </div>
              </div>
              <div
                className="relative h-[300px] w-[300px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${AppImages.football})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-black/60">
                  <p className="text-3xl text-white text-center">Events</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div
                className="relative h-[200px] w-[300px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${AppImages.college})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-black/60">
                  <p className="text-3xl text-white text-center">Universities</p>
                </div>
              </div>
              <div
                className="relative h-[400px] w-[300px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${AppImages.student_clubs})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-black/60">
                  <p className="text-3xl text-white text-center">Student Clubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Branded App Section */}
        <div className="py-24 px-4 bg-[#213064]">
          <h2 className="text-3xl md:text-5xl  font-bold text-center font-alexandria gradient-text">
            Your Brand, Your Platform
          </h2>
          <p className="text-center text-xl md:text-3xl mt-4 text-white">
            Launch your own branded app with Tuft's white-label solution—fully customized <br /> with your logo and
            unique experience.
          </p>

          <div className="flex flex-col md:flex-row gap-8 py-12 justify-center items-center">
            {whyBrandedApp.map((feature, index) => (
              <div key={index} className="flex flex-col bg-white/[0.03] p-6 rounded-3xl w-[400px] max-w-full">
                <Image src={feature.screenshot} alt={feature.title} width={64} height={64} />
                <h2 className="text-xl md:text-2xl font-bold text-white mt-4">{feature.title}</h2>
                <p className="text-md md:text-xl text-gray-200">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
