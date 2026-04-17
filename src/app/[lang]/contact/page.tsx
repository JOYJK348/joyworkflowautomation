import { getDictionary } from '@/lib/get-dictionary';
import ContactContent from '@/components/sections/contact/ContactContent';
import Footer from '@/components/layout/Footer';

export default async function ContactPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <main>
      <ContactContent dict={dict} lang={lang} />
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
