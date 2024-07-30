import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Iconsvg from '../Icon';
import styles from './WaterForm.module.css';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const WaterForm = ({ submit, waterItem, operationType }) => {
  const [waterAmount, setWaterAmount] = useState(
    waterItem ? waterItem.volume : 50
  );

  const { t } = useTranslation();
  const timeSchema = /^([01]\d|2[0-3]):([0-5]\d)$/;
  const validationSchema = Yup.object().shape({
    volume: Yup.number()
      .min(0)
      .max(5000)
      .integer()
      .required(t('description.waterForm.required')),
    time: Yup.string()
      .matches(timeSchema, t('description.waterForm.warningTime'))
      .required(t('description.waterForm.required')),
  });
  const getTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  };

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
      volume: waterAmount,
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
        toast(t('description.waterForm.warningAmount') + '[0,5000]', {
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

  return (
    <>
      <p className={styles.biggerText}>
        {operationType === 'add'
          ? t('description.waterForm.chooseValue')
          : t('description.waterForm.correctData')}
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
