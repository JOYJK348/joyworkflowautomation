import HeroSection from "@/components/sections/hero/HeroSection";
import ResultSection from "@/components/sections/results/ResultsSection";
import BotDemo from "@/components/sections/bot-demo/BotDemo";
import LmsPortal from "@/components/sections/lms-portal/LmsPortal";
import Faq from "@/components/sections/faq/Faq";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <main>
      <HeroSection dict={dict} lang={lang} />
      
      <ResultSection dict={dict} lang={lang} />

      <LmsPortal dict={dict} lang={lang} />
      
      <BotDemo dict={dict} lang={lang} />
      
      <Faq dict={dict} lang={lang} />
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
