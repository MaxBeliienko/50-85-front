import styles from './WaterModal.module.css';
import WaterForm from '../waterForm/WaterForm';
import { useDispatch } from 'react-redux';
import { addWater, editWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const WaterModal = ({ operationType, onCloseModal, waterItem, searchDate }) => {
  const { t } = useTranslation();

  let title;

  const dispatch = useDispatch();


  const addDate = `${searchDate.day}.${searchDate.month}.${searchDate.year}`

  if (operationType === 'add') title = t('description.tracker.addWaterText');
  if (operationType === 'edit') title = t('description.waterModal.editWater');

  const handleSubmit = data => {
    const volume = Number(data.volume);
    const time = data.time;

    if (operationType === 'add') {
      dispatch(addWater({ volume, time, date :  addDate}));
      toast.success(t('description.waterModal.succesAdd'));
      onCloseModal();
    } else {
      dispatch(editWater({ id: waterItem._id, volume, time }));
      toast.success(t('description.waterModal.succesEdit'));
      onCloseModal();
    }
  };

  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>{title}</h6>
      <WaterForm
        operationType={operationType}
        submit={handleSubmit}
        waterItem={waterItem}
      />
    </div>
  );
};

export default WaterModal;
