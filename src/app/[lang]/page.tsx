import HeroSection from "@/components/sections/hero/HeroSection";
import ProblemSolution from "@/components/sections/problem-solution/ProblemSolution";
import RoiCalculator from "@/components/sections/calculator/RoiCalculator";
import NicheScroll from "@/components/sections/hero/NicheScroll";
import Services from "@/components/sections/services/Services";
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
      <ProblemSolution dict={dict} lang={lang} />
      <RoiCalculator dict={dict} lang={lang} />
      <NicheScroll dict={dict} />
      <Services dict={dict} />
      <Faq dict={dict} />
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
