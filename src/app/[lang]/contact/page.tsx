import { getDictionary } from '@/lib/get-dictionary';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactForm from '@/components/sections/contact/ContactForm';
import Footer from '@/components/layout/Footer';

export default async function ContactPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "ta";
  const dict = await getDictionary(lang);

  return (
    <main>
      <ContactHero dict={dict} lang={lang} />
      <ContactForm dict={dict} />
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
