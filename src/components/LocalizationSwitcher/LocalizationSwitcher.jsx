import { useTranslation } from 'react-i18next';
import styles from './LocalizationSwitcher.module.css';

const LocalizationSwitcher = ({ isSettings }) => {
  const lngs = {
    en: { nativeName: 'English' },
    ukr: { nativeName: 'Українська' },
  };

  const { i18n } = useTranslation();

  const handleChange = event => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select
      value={i18n.resolvedLanguage}
      onChange={handleChange}
      className={`${styles.select} ${isSettings ? styles.noMargin : ''}`}
    >
      {Object.keys(lngs).map(lng => (
        <option key={lng} value={lng}>
          {lngs[lng].nativeName}
        </option>
      ))}
    </select>
  );
};

export default LocalizationSwitcher;
