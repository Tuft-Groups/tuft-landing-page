import { AppMeta } from "@/lib/constants";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alexandria, Mulish } from "next/font/google";
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4V7RECD9G6" />
        <script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4V7RECD9G6');
        `}
        </script>
        <script
          id="microsoft-clarity"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "iakxurip53");
          `,
          }}
        />
      </Head>
      <Component className={mulish.className} {...pageProps} />
    </div>
  );
}
