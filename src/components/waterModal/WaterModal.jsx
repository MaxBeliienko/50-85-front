import styles from './WaterModal.module.css';
import WaterForm from '../waterForm/WaterForm';

const WaterModal = ({ operationType }) => {
  let title;
  if (operationType === 'add') title = 'Add water';
  if (operationType === 'edit') title = 'Edit the entered amount of water';

  return (
    <div className={styles.modal}>
      <h6 className={styles.title}>{title}</h6>
      <WaterForm operationType={operationType} />
    </div>
  );
};

export default WaterModal;
