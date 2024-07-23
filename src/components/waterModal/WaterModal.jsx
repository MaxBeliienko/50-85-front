import styles from './WaterModal.module.css';
import WaterForm from '../waterForm/WaterForm';

const WaterModal = ({ operationType, onAddWater, onClose }) => {
  let title;
  if (operationType === 'add') title = 'Add water';
  if (operationType === 'edit') title = 'Edit the entered amount of water';

  const handleSubmit = data => {
    onAddWater(data.volume / 1000);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h6 className={styles.title}>{title}</h6>
        <WaterForm operationType={operationType} onSubmit={handleSubmit} />
        <button onClick={onClose} className={styles.closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default WaterModal;
