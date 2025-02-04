import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pageEn from './locales/en/index.json';
import pageEs from './locales/es/index.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        homepage: pageEn,
      },
      es: {
        homepage: pageEs,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    ns: ['homepage'], // Use namespaces
    defaultNS: 'homepage',
    interpolation: { escapeValue: false },
  });

export default i18n;
