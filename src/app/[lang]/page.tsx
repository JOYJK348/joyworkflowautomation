import HeroSection from "@/components/sections/hero/HeroSection";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <main>
      <HeroSection dict={dict} />
    </main>
  );
}
