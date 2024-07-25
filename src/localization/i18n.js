import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  advantageSectionText,
  calendarText,
  dailyNormaText,
  deleteWater,
  logOutModalText,
  monthNames,
  signInText,
  signUpText,
  trackerText,
  userBarText,
  waterForm,
  waterModalText,
  welcomeText,
} from './localization';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          description: {
            signUp: signUpText.en,
            signIn: signInText.en,
            advantage: advantageSectionText.en,
            welcome: welcomeText.en,
            dailyNorma: dailyNormaText.en,
            tracker: trackerText.en,
            userBar: userBarText.en,
            calendar: calendarText.en,
            mounths: monthNames.en,
            waterModal: waterModalText.en,
            waterForm: waterForm.en,
            deleteWater: deleteWater.en,
            logOut: logOutModalText.en,
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
            dailyNorma: dailyNormaText.ukr,
            tracker: trackerText.ukr,
            userBar: userBarText.ukr,
            calendar: calendarText.ukr,
            mounths: monthNames.ukr,
            waterModal: waterModalText.ukr,
            waterForm: waterForm.ukr,
            deleteWater: deleteWater.ukr,
            logOut: logOutModalText.ukr,
          },
        },
      },
    },
  });

export default i18n;
