// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en.json';
import esTranslation from '../locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'es', // Idioma predeterminado
    interpolation: {
      escapeValue: false, // React ya maneja la escapada de cadenas de texto
    },
  });

export default i18n;
