import 'server-only';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  ta: () => import('../dictionaries/ta.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (locale !== 'en' && locale !== 'ta') {
    return dictionaries['en']();
  }
  return dictionaries[locale as 'en' | 'ta']();
};
