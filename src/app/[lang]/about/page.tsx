import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutBeliefs from "@/components/sections/about/AboutBeliefs";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/lib/get-dictionary";

export default async function AboutPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <main>
      <AboutHero dict={dict} lang={lang} />
      <AboutStory dict={dict} lang={lang} />
      <AboutBeliefs dict={dict} lang={lang} />
      {/* More sections will go here */}
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
