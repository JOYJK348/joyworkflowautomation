import { getDictionary } from "@/lib/get-dictionary";
import Footer from "@/components/layout/Footer";
import AiLabsContent from "@/components/sections/ailabs/AiLabsContent";

export default async function AiLabsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <main>
      <AiLabsContent dict={dict} lang={lang} />
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
