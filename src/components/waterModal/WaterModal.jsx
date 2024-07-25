import styles from './WaterModal.module.css';
import WaterForm from '../waterForm/WaterForm';
import { useDispatch } from 'react-redux';
import { addWater, editWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const WaterModal = ({ operationType, onCloseModal }) => {
  const { t } = useTranslation();

  let title;

  const dispatch = useDispatch();

  if (operationType === 'add') title = t('description.tracker.addWaterText');
  if (operationType === 'edit') title = t('description.waterModal.editWater');

  const handleSubmit = data => {
    // const volume = Number(data.volume);
    // const time = data.time;

    if (operationType === 'add') {
      dispatch(addWater(data.volume / 1000, data.time));
      toast.success(t('description.waterModal.succesAdd'));
      onCloseModal();
    }
    if (operationType === 'edit') {
      dispatch(editWater(data.volume / 1000, data.time));
      toast.success(t('description.waterModal.succesEdit'));

      onCloseModal();
    }
  };

  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>{title}</h6>
      <WaterForm operationType={operationType} submit={handleSubmit} />
    </div>
  );
};

export default WaterModal;
