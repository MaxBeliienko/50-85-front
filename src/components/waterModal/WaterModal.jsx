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
    console.log('submit', data);
    if (operationType === 'add') {
      dispatch(addWater(data.volume / 1000, data.time));
      toast.success('Successfully add');
      onCloseModal();
    }
    if (operationType === 'edit') {
      dispatch(editWater(id, data.volume / 1000, data.time));
      toast.success('Successfully edit');
      onCloseModal();
    }
  };

  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>{title}</h6>
      <WaterForm operationType={operationType} onSubmit={handleSubmit} />
    </div>
  );
};

export default WaterModal;
