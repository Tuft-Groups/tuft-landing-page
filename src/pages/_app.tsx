import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Mulish, Alexandria } from "next/font/google";

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
      <Component className={mulish.className} {...pageProps} />
    </div>
  );
}
