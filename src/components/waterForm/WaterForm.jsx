import Iconsvg from '../Icon';
import styles from './WaterForm.module.css';

const WaterForm = () => {
  return (
    <>
      <p className={styles.biggerText}>Choose a value:</p>
      <p className={styles.smallerText}>Amount of water:</p>
      <div className={styles.amount}>
        <button type="button" className={styles.waterBtn}>
          <Iconsvg
            width={40}
            height={40}
            iconName={'minus'}
            styles={'minusBtn'}
          />
        </button>
        <div className={styles.amountValue}>{`${50} ml`}</div>
        <button type="button" className={styles.waterBtn}>
          <Iconsvg
            width={40}
            height={40}
            iconName={'plus'}
            styles={'plusBtn'}
          />
        </button>
      </div>
      <p className={styles.smallerText}>Recording time:</p>
      <input
        type="text"
        className={styles.input}
        name="timeInput"
        id="timeInput"
        value="7:00"
      />
      <p className={styles.biggerText}>Enter the value of the water used:</p>
      <input
        type="number"
        className={styles.input}
        name="waterInput"
        id="waterInput"
        value="50"
      />
      <button type="submit" className={styles.saveBtn}>
        Save
      </button>
    </>
  );
};

export default WaterForm;
