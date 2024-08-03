import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './HomeMain.module.css';
import { useTranslation } from 'react-i18next';
import LocalizationSwitcher from '../LocalizationSwitcher/LocalizationSwitcher';

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainWrapperHeader}>
        <Logo />
        <LocalizationSwitcher />
      </div>
      <div className={styles.sectionWrap}>
        <h2 className={styles.subtitle}>
          {t('description.welcome.subtitleText')}
        </h2>
        <h1 className={styles.title}>{t('description.welcome.titleText')}</h1>
        <NavLink
          to="/signup"
          className={`${styles.button} ${styles.tryButton}`}
        >
          {t('description.welcome.btnTryText')}
        </NavLink>
        <NavLink
          to="/signin"
          className={`${styles.button} ${styles.signButton}`}
        >
          {t('description.welcome.btnSigninText')}
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomeSection;
