import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor, NoiseOverlay } from "@/components/ui/BackgroundElements";
import { Starfield } from "@/components/ui/Starfield";
import Script from "next/script";
import { Schema } from "@/components/seo/Schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuft.in"),
  title: "Tuft - All-in-One Community Platform",
  description:
    "Streamline your community with Tuft's comprehensive tools for organized communication, file sharing, payments, and analytics. Perfect for educators, webinar hosts, and content creators.",
  alternates: {
    canonical: "https://tuft.in",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Tuft - All-in-One Community Platform",
    description:
      "Streamline your community with Tuft's comprehensive tools for organized communication, file sharing, payments, and analytics. Perfect for educators, webinar hosts, and content creators.",
    images: ["https://tuft.in/og-image.png"],
    url: "https://tuft.in",
    siteName: "Tuft",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuft - All-in-One Community Platform",
    description:
      "Streamline your community with Tuft's comprehensive tools for organized communication, file sharing, payments, and analytics.",
    images: ["https://tuft.in/og-image.png"],
    creator: "@tuft_in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4V7RECD9G6" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4V7RECD9G6');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "iakxurip53");
          `}
        </Script>
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-tuft-dark text-white selection:bg-tuft-purple selection:text-white`}
      >
        <Starfield />
        <NoiseOverlay />
        <CustomCursor />
        <Schema />
        {children}
      </body>
    </html>
  );
}
