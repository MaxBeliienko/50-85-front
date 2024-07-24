import { useTranslation } from 'react-i18next';
import styles from './AdvantagesSection.module.css';

const AdvantagesSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.backgroundPhoto}>
      <div className={styles.customersWrapper}>
        <img
          className={`${styles.customer1} ${styles.responsiveImage}`}
          src="../../../public/customers/customer1.png"
          alt="customer1"
        />
        <img
          className={`${styles.customer2} ${styles.responsiveImage}`}
          src="../../../public/customers/customer2.png"
          alt="customer2"
        />
        <img
          className={`${styles.customer3} ${styles.responsiveImage}`}
          src="../../../public/customers/customer3.png"
          alt="customer3"
        />
        <p className={styles.customerText}>
          {t('description.advantage.ourText')}
          <span className={styles.happyText}>
            {' '}
            {t('description.advantage.happyText')}
          </span>
          {t('description.advantage.customerText')}
        </p>
      </div>

      <div className={styles.hashtagsWrapper}>
        <p className={`${styles.hashtags} ${styles.habit}`}>
          {t('description.advantage.habitText')}
        </p>
        <p className={`${styles.hashtags} ${styles.statistics}`}>
          {t('description.advantage.statisticsText')}
        </p>
        <p className={`${styles.hashtags} ${styles.setting}`}>
          {t('description.advantage.setingText')}
        </p>
      </div>
    </div>
  );
};
export default AdvantagesSection;
