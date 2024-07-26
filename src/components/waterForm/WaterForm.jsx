import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Iconsvg from '../Icon';
import styles from './WaterForm.module.css';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const timeSchema = /^([01]\d|2[0-3]):([0-5]\d)$/;
const validationSchema = Yup.object().shape({
  volume: Yup.number().min(0).max(5000).integer().required('Required'),
  time: Yup.string()
    .matches(timeSchema, 'Time must be in hh:mm format')
    .required('Required'),
});

const WaterForm = ({ submit, waterItem }) => {
  console.log('edit water form', waterItem._id);
  const [waterAmount, setWaterAmount] = useState(50);

  const getTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes}`;
  };

  function defaulVolume(item) {
    if (item) {
      return item.volume;
    } else {
      return waterAmount;
    }
  }

  function defaultTime(item) {
    if (item) {
      return item.time;
    } else {
      return getTime();
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      volume: defaulVolume(waterItem),
      time: defaultTime(waterItem),
    },
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    setValue('volume', waterAmount);
  }, [waterAmount, setValue]);

  const handleWaterBtnMinus = () => {
    setWaterAmount(prevWaterAmount => Math.max(prevWaterAmount - 50, 0));
  };
  const handleWaterBtnPlus = () => {
    setWaterAmount(prevWaterAmount => Math.min(prevWaterAmount + 50, 5000));
  };

  const handleWater = e => {
    const { value } = e.target;
    if (value === '') {
      setWaterAmount(0);
    } else {
      if (parseInt(value) > 5000 || parseInt(value) < 0) {
        toast('Amount of water could be from interwal [0,5000]', {
          duration: 2000,
          style: {
            margin: '60px',
            background: '#323f47',
            color: '#ffffff',
          },
        });
      } else {
        setWaterAmount(parseInt(value));
      }
    }
  };
  const { t } = useTranslation();
  return (
    <>
      <p className={styles.biggerText}>
        {t('description.waterForm.chooseValue')}
      </p>
      <p className={styles.smallerText}>
        {t('description.waterForm.amountWater')}
      </p>
      <div className={styles.amount}>
        <button
          type="button"
          className={styles.waterBtn}
          onClick={handleWaterBtnMinus}
          disabled={waterAmount < 50 || waterAmount === ''}
        >
          <Iconsvg
            width={40}
            height={40}
            iconName={'minus'}
            styles={'minusBtn'}
          />
        </button>
        <div className={styles.amountValue}>{waterAmount} ml</div>
        <button
          type="button"
          className={styles.waterBtn}
          onClick={handleWaterBtnPlus}
          disabled={waterAmount > 4950}
        >
          <Iconsvg
            width={40}
            height={40}
            iconName={'plus'}
            styles={'plusBtn'}
          />
        </button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <p className={styles.smallerText}>
          {t('description.waterForm.recordingTime')}
        </p>

        <div className={styles.inputWithDanger}>
          <input
            type="text"
            name="time"
            {...register('time')}
            className={styles.input}
          />
          <small className={styles.textDanger}>
            {errors?.time && errors.time.message}
          </small>
        </div>
        <p className={styles.biggerText}>
          {t('description.waterForm.usedWater')}
        </p>
        <div className={styles.inputWithDanger}>
          <input
            name="volume"
            {...register('volume')}
            value={waterAmount}
            onChange={handleWater}
            className={styles.input}
          />
          <small className={styles.textDanger}>
            {errors?.volume && errors.volume.message}
          </small>
        </div>
        <button type="submit" className={styles.saveBtn}>
          {t('description.waterForm.saveBtn')}
        </button>
      </form>
    </>
  );
};

export default WaterForm;
