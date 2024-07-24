import styles from './DeleteWaterModal.module.css';
import { useDispatch } from 'react-redux';
import { deleteWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';

const DeleteWaterModal = ({ closeModal, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(id);
    dispatch(deleteWater(id));
    toast.success('Successfully delet');
    closeModal();
  };

  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>Delete entry</h6>
      <p className={styles.text}>Are you sure you want to delete the entry?</p>
      <div className={styles.buttons}>
        <button className={styles.confirmBtn} onClick={handleDelete}>
          Delete
        </button>
        <button className={styles.cancelBtn} onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
