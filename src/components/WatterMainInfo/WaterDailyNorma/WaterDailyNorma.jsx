import css from './WaterDailyNorma.module.css';
import { useTranslation } from 'react-i18next';

const WaterDailyNorma = ({ dailyNorma }) => {
  const { t } = useTranslation();
  return (
    <div className={css.dailyNorma}>
      <div className={css.waterDailyNorma}>
        <span className={css.highlight}>
          {dailyNorma / 1000} {t('description.dailyNorma.litr')}
        </span>
        <p>{t('description.dailyNorma.normaText')}</p>
      </div>
    </div>
  );
};

export default WaterDailyNorma;
