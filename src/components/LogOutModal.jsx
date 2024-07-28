import { useDispatch } from 'react-redux';
import styles from './deleteWaterModal/DeleteWaterModal.module.css';
import { logOut } from '../redux/auth/operations';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LogOutModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleLogout = async () => {
      await dispatch(logOut()).unwrap();
      localStorage.removeItem('persist:auth');
      navigate('/');
    
  };

  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>{t('description.logOut.title')}</h6>
      <p className={styles.text}>{t('description.logOut.warning')}</p>
      <div className={styles.buttons}>
        <button
          className={styles.confirmBtn}
          onClick={handleLogout}
        >
          {t('description.logOut.title')}
        </button>
        <button className={styles.cancelBtn} onClick={closeModal}>
          {t('description.logOut.cancelBtn')}
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
