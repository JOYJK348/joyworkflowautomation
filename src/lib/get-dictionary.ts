import 'server-only';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  ta: () => import('../dictionaries/ta.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const targetLocale = (locale !== 'en' && locale !== 'ta') ? 'en' : locale;
  
  const dict = await dictionaries[targetLocale as 'en' | 'ta']();
  return dict;
};
