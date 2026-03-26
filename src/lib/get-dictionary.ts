import 'server-only';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  ta: () => import('../dictionaries/ta.json').then((module) => module.default),
};

const cache = new Map<string, any>();

export const getDictionary = async (locale: string) => {
  const targetLocale = (locale !== 'en' && locale !== 'ta') ? 'en' : locale;
  
  if (cache.has(targetLocale)) {
    return cache.get(targetLocale);
  }

  const dict = await dictionaries[targetLocale as 'en' | 'ta']();
  cache.set(targetLocale, dict);
  return dict;
};
