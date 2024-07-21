import styles from './AdvantagesSection.module.css';

const AdvantagesSection = () => {
  return (
    <div className={styles.backgroundPhoto}>
      <div className={styles.customersWrapper}>
        <img
          className={`${styles.customer1} ${styles.responsiveImage}`}
          src="../../public/images/customers/customer1.png"
          alt="customer1"
        />
        <img
          className={`${styles.customer2} ${styles.responsiveImage}`}
          src="../../public/images/customers/customer2.png"
          alt="customer2"
        />
        <img
          className={`${styles.customer3} ${styles.responsiveImage}`}
          src="../../public/images/customers/customer3.png"
          alt="customer3"
        />
        <p className={styles.customerText}>
          Our
          <span className={styles.happyText}> happy </span>customers
        </p>
      </div>

      <div className={styles.hashtagsWrapper}>
        <p className={`${styles.hashtags} ${styles.habit}`}>Habit drive</p>
        <p className={`${styles.hashtags} ${styles.statistics}`}>
          View statistics
        </p>
        <p className={`${styles.hashtags} ${styles.setting}`}>
          Personal rate setting
        </p>
      </div>
    </div>
  );
};
export default AdvantagesSection;
