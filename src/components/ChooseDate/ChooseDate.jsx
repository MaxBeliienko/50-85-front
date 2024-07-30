import { useTranslation } from 'react-i18next';
import css from './ChooseDate.module.css';
import { useTranslation } from 'react-i18next';

const ChooseDate = ({ isToday, searchDate, currentMonthName }) => {
  const { t } = useTranslation();
  return (
    <h2 className={css.title}>
      {isToday
        ? t('description.tracker.todayText')
        : `${searchDate.day}, ${t(`description.months.${currentMonthName}`)}`}
    </h2>
  );
};

export default ChooseDate;
