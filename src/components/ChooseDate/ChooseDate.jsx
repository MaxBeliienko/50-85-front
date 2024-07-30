import { useTranslation } from 'react-i18next';
import css from './ChooseDate.module.css';

const ChooseDate = ({ isToday, searchDate, currentMonthName }) => {
  const { t } = useTranslation();
  return (
    <h2 className={css.title}>
      {isToday
        ? t('description.tracker.todayText')
        : `${searchDate.day}, ${currentMonthName}`}
    </h2>
  );
};

export default ChooseDate;
