import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import styles from '../stylesPages/SignUpPage.module.css';

import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  ukr: { nativeName: 'Українська' },
};

const SignUpPage = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.signUpPageWrapper}>
      <div>
        {Object.keys(lngs).map(lng => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <div className={styles.formWrapper}>
        <SignUpForm />
      </div>
      <div className={styles.disabled}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignUpPage;
