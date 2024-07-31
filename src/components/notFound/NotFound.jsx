import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundMessage}>
        Sorry, the page you are looking for does not exist.
      </p>
      <p className={styles.redirectMessage}>
        You will be redirected to the HomePage in 5 seconds.
      </p>
      <div className={styles.bottleContainer}>
        <div className={styles.bottle}>
          <div className={styles.water}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
