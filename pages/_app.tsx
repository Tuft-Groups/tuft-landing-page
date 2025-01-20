import "@/styles/globals.scss";
import "@/styles/index.scss";
import { MantineProvider } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { Mulish, Sora } from "@next/font/google";
import Script from "next/script";

const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  variable: "--sora",

  subsets: ["latin"],
  display: "swap",
});

export const mulishFamily = mulish.style.fontFamily;
export const soraFamily = sora.style.fontFamily;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sora.variable} font-sans`}>
      <style jsx global>{`
        * {
          font-family: ${mulishFamily};
        }
      `}</style>
      <MantineProvider theme={{ fontFamily: mulishFamily }} withCSSVariables>
        {process.env.NODE_ENV! !== "development" && (
          <>
            <Analytics />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-4V7RECD9G6" strategy="lazyOnload" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4V7RECD9G6');
        `}
            </Script>
            <Script id="ms_clarity_recordings">
              {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "iakxurip53");
          `}
            </Script>
            {/* <Script id="tawto_chat_widget">{`
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/66150a96a0c6737bd129e1e7/1hr132nam';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
            `}</Script> */}
          </>
        )}

        <Component {...pageProps} />
      </MantineProvider>
    </main>
  );
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await NextApp.getInitialProps(appContext);
//   return {
//     ...appProps,
//   };
// };
