import styles from './WaterModal.module.css';
import WaterForm from '../waterForm/WaterForm';
import { useDispatch } from 'react-redux';
import { addWater, editWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';

const WaterModal = ({ operationType, onCloseModal, id }) => {
  let title;

  const dispatch = useDispatch();

  if (operationType === 'add') title = 'Add water';
  if (operationType === 'edit') title = 'Edit the entered amount of water';

  const handleSubmit = data => {
    const volume = Number(data.volume);
    const time = data.time;

    if (operationType === 'add') {
      console.log('add', volume, time);
      dispatch(addWater({ volume, time }));
      toast.success('Successfully add');
      onCloseModal();
    }
    if (operationType === 'edit') {
      console.log('edit', id, volume, time);
      dispatch(editWater(id, volume, time));
      toast.success('Successfully edit');
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
