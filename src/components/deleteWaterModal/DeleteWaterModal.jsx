import styles from './DeleteWaterModal.module.css';
import { useDispatch } from 'react-redux';
import { deleteWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const DeleteWaterModal = ({ closeModal, id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWater(id));
    toast.success(t('description.deleteWater.succesDelete'));
    closeModal();
  };

  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>{t('description.deleteWater.title')}</h6>
      <p className={styles.text}>{t('description.deleteWater.warning')}</p>
      <div className={styles.buttons}>
        <button className={styles.confirmBtn} onClick={handleDelete}>
          {t('description.deleteWater.deleteBtn')}
        </button>
        <button className={styles.cancelBtn} onClick={closeModal}>
          {t('description.deleteWater.cancelBtn')}
        </button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
