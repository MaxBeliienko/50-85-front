import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  advantageSectionText,
  signInText,
  signUpText,
  welcomeText,
} from './localization';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          description: {
            signUp: signUpText.en,
            signIn: signInText.en,
            advantage: advantageSectionText.en,
            welcome: welcomeText.en,
          },
        },
      },
      ukr: {
        translation: {
          description: {
            signUp: signUpText.ukr,
            signIn: signInText.ukr,
            advantage: advantageSectionText.ukr,
            welcome: welcomeText.ukr,
          },
        },
      },
    },
  });

export default i18n;
