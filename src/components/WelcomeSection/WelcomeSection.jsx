import Logo from '../Logo/Logo';
import styles from './HomeMain.module.css';

const WelcomeSection = () => {
  return (
    <div className={styles.mainWrapper}>
      <Logo />
      <div className={styles.sectionWrap}>
        <h2 className={styles.subtitle}>Record daily water intake and track</h2>
        <h1 className={styles.title}>Water consumption tracker</h1>

        <a className={`${styles.button} ${styles.tryButton}`} href="/signup">
          Try tracker
        </a>
        <a className={`${styles.button} ${styles.signButton}`} href="/signin">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default WelcomeSection;
