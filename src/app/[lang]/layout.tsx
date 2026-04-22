import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import Navbar from "@/components/layout/Navbar";
import { getDictionary } from "@/lib/get-dictionary";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JoyAutomations — Business Automation Agency",
  description:
    "உங்கள் Business-ஐ Automatic-ஆக ஓட வையுங்கள். Appointment booking, WhatsApp reminders, Dashboard — எல்லாம் custom coded. No monthly subscription.",
  keywords: [
    "business automation agency",
    "workflow automation solutions",
    "appointment booking system",
    "whatsapp automation",
    "small business automation india",
  ],
  openGraph: {
    title: "JoyAutomations — Business Automation",
    description: "Manual work குறையும். Time மிச்சமாகும். Revenue தானா ஏறும்.",
    type: "website",
    locale: "ta_IN",
  },
  icons: {
    icon: "/images/offl_logo.png",
    apple: "/images/offl_logo.png",
  },
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <html lang={lang === "ta" ? "ta-IN" : "en-US"} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Placeholder */}
        <script
          dangerouslySetInnerHTML={{
             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-PLACEHOLDER');`,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w1mer12q1g");
            `
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable}`} suppressHydrationWarning>
        <NextTopLoader color="#ff4d4d" showSpinner={false} height={3} />
        <Navbar dict={dict} lang={lang} />
        {props.children}
      </body>
    </html>
  );
}
