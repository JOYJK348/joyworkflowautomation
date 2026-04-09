import ServicesHero from "@/components/sections/services/ServicesHero";
import IndustryGrid from "@/components/sections/services/IndustryGrid";
import ExpertiseSection from "@/components/sections/services/ExpertiseSection";
import UspSection from "@/components/sections/services/UspSection";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/lib/get-dictionary";

export default async function ServicesPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <main>
      <ServicesHero dict={dict} lang={lang} />
      <IndustryGrid dict={dict} />
      <ExpertiseSection dict={dict} />
      <UspSection dict={dict} />
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
