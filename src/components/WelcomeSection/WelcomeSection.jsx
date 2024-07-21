import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './HomeMain.module.css';

const WelcomeSection = () => {
  return (
    <div className={styles.mainWrapper}>
      <Logo />
      <div className={styles.sectionWrap}>
        <h2 className={styles.subtitle}>Record daily water intake and track</h2>
        <h1 className={styles.title}>Water consumption tracker</h1>
        <NavLink
          to="/signup"
          className={`${styles.button} ${styles.tryButton}`}
        >
          Try tracker
        </NavLink>
        <NavLink
          to="/signin"
          className={`${styles.button} ${styles.signButton}`}
        >
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomeSection;
