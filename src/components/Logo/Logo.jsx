import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <NavLink to="/" className={styles.logo}>
      AquaTrack
    </NavLink>
  );
};

export default Logo;
