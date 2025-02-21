import "@/styles/globals.css";
import { Metadata } from "next";
import type { AppProps } from "next/app";
import { Mulish, Alexandria } from "next/font/google";
import Head from "next/head";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${mulish.variable} ${alexandria.variable} min-h-screen flex flex-col font-mulish`}>
      <Head>
        <title>Tuft - All-in-One Community Management & Communication Platform</title>
        <meta
          name="description"
          content="Streamline your community with Tuft's comprehensive tools for organized communication, file sharing, payments, and analytics. Perfect for educators, webinar hosts, and content creators."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tuft.com" />
        <meta property="og:title" content="Tuft - All-in-One Community Management & Communication Platform" />
        <meta
          property="og:description"
          content="Streamline your community with Tuft's comprehensive tools for organized communication, file sharing, payments, and analytics. Perfect for educators, webinar hosts, and content creators."
        />
        <meta property="og:image" content="https://tuft.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tuft.com" />
        <meta property="twitter:title" content="Tuft - All-in-One Community Management & Communication Platform" />
        <meta
          property="twitter:description"
          content="Streamline your community with Tuft's comprehensive tools for organized communication, file sharing, payments, and analytics. Perfect for educators, webinar hosts, and content creators."
        />
        <meta property="twitter:image" content="https://tuft.com/og-image.jpg" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="community management, communication platform, file sharing, payments, analytics, education, webinars, content creation"
        />
        <meta name="author" content="Tuft" />
        <link rel="canonical" href="https://tuft.com" />
      </Head>
      <Component className={mulish.className} {...pageProps} />
    </div>
  );
}
