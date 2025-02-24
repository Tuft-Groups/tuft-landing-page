import { AppMeta } from "@/lib/constants";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alexandria, Mulish } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

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
        <meta name="description" content={AppMeta.description} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tuft.in" />
        <meta property="og:title" content={AppMeta.title} />
        <meta property="og:description" content={AppMeta.description} />
        <meta property="og:image" content={AppMeta.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tuft.in" />
        <meta property="twitter:title" content={AppMeta.title} />
        <meta property="twitter:description" content={AppMeta.description} />
        <meta property="twitter:image" content={AppMeta.image} />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="community management, communication platform, file sharing, payments, analytics, education, webinars, content creation"
        />
        <meta name="author" content="Tuft" />
        <link rel="canonical" href="https://tuft.in" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4V7RECD9G6"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4V7RECD9G6');
        `}
        </Script>
      </Head>
      <Component className={mulish.className} {...pageProps} />
    </div>
  );
}
