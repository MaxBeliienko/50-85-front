import styles from './DeleteWaterModal.module.css';

const DeleteWaterModal = ({ closeModal }) => {
  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>Delete entry</h6>
      <p className={styles.text}>Are you sure you want to delete the entry?</p>
      <div className={styles.buttons}>
        <button className={styles.confirmBtn}>Delete</button>
        <button className={styles.cancelBtn} onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
