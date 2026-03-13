import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { getDictionary } from "@/lib/get-dictionary";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Workflow Craft — Business Automation Agency, Coimbatore",
  description:
    "Coimbatore-la உங்கள் Business-ஐ Automatic-ஆக ஓட வையுங்கள். Appointment booking, WhatsApp reminders, Dashboard — எல்லாம் custom coded. No monthly subscription.",
  keywords: [
    "business automation coimbatore",
    "workflow automation tamil",
    "appointment booking system coimbatore",
    "whatsapp automation coimbatore",
    "small business automation india",
  ],
  openGraph: {
    title: "Workflow Craft — Business Automation, Coimbatore",
    description: "Manual work குறையும். Time மிச்சமாகும். Revenue தானா ஏறும்.",
    type: "website",
    locale: "ta_IN",
  },
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <html lang={lang === "ta" ? "ta-IN" : "en-US"}>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
        <Navbar dict={dict} lang={lang} />
        {props.children}
      </body>
    </html>
  );
}
