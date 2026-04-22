import { getDictionary } from "@/lib/get-dictionary";
import LabsHero from "@/components/sections/labs/LabsHero";
import LabsPhilosophy from "@/components/sections/labs/LabsPhilosophy";
import LabsCurriculum from "@/components/sections/labs/LabsCurriculum";
import LabsOutcome from "@/components/sections/labs/LabsOutcome";
import LabsCTA from "@/components/sections/labs/LabsCTA";
import Footer from "@/components/layout/Footer";

export default async function AILabsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <main style={{ background: '#05020a' }}>
      <LabsHero dict={dict} lang={lang} />
      <LabsPhilosophy dict={dict} />
      <LabsCurriculum dict={dict} lang={lang} />
      <LabsCTA dict={dict} lang={lang} />
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
