// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'fr',
  fallbackLng: 'fr',
  resources: {
    fr: { translation: frTranslation },
    en: { translation: enTranslation },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
