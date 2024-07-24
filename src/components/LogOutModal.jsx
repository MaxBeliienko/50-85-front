import { useDispatch } from 'react-redux';
import styles from './deleteWaterModal/DeleteWaterModal.module.css';
import { logOut } from '../redux/auth/operations';

const LogOutModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>Log out</h6>
      <p className={styles.text}>Do you really want to leave?</p>
      <div className={styles.buttons}>
        <button
          className={styles.confirmBtn}
          onClick={() => dispatch(logOut())}
        >
          Log out
        </button>
        <button className={styles.cancelBtn} onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
