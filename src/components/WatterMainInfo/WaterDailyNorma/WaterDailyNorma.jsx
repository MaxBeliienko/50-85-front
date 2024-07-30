import { useSelector } from 'react-redux';
import css from './WaterDailyNorma.module.css';
import { useTranslation } from 'react-i18next';
import { selectUser } from '../../../redux/auth/selectors';

const WaterDailyNorma = () => {
  const userData = useSelector(selectUser);

  const { t } = useTranslation();
  return (
    <div className={css.dailyNorma}>
      <div className={css.waterDailyNorma}>
        <span className={css.highlight}>
          {userData.dailyRequirement} {t('description.dailyNorma.ml')}
        </span>
        <p>{t('description.dailyNorma.normaText')}</p>
      </div>
    </div>
  );
};

export default WaterDailyNorma;
