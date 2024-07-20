import styles from './deleteWaterModal/DeleteWaterModal.module.css';

const LogOutModal = ({ closeModal }) => {
  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>Log out</h6>
      <p className={styles.text}>Do you really want to leave?</p>
      <div className={styles.buttons}>
        <button className={styles.confirmBtn}>Log out</button>
        <button className={styles.cancelBtn} onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
