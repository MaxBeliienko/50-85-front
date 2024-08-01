import DailyInfo from '../../DailyInfo/DailyInfo';
import MonthInfo from '../../MonthInfo/MonthInfo';
import css from './WaterDetailedInfo.module.css';
import UserPanel from './UserPanel';
import { useTranslation } from 'react-i18next';

const WaterDetailedInfo = ({
  isToday,
  today,
  searchDate,
  onChangeDate,
  onChangeMonth,
  onEditWater,
}) => {
  const isCurrentMonth =
    Number(today.month) === Number(searchDate.month) &&
    Number(today.year) === Number(searchDate.year);

  const { t } = useTranslation();
  const monthNames = [
    t('description.tracker.month1'),
    t('description.tracker.month2'),
    t('description.tracker.month3'),
    t('description.tracker.month4'),
    t('description.tracker.month5'),
    t('description.tracker.month6'),
    t('description.tracker.month7'),
    t('description.tracker.month8'),
    t('description.tracker.month9'),
    t('description.tracker.month10'),
    t('description.tracker.month11'),
    t('description.tracker.month12'),
  ];

  return (
    <div className={css.waterCalendarcontainer}>
      <UserPanel />
      <DailyInfo
        monthNames={monthNames}
        searchDate={searchDate}
        today={today}
        isToday={isToday}
        onEditWater={onEditWater}
      />
      <MonthInfo
        monthNames={monthNames}
        today={today}
        onChangeDate={onChangeDate}
        onChangeMonth={onChangeMonth}
        searchDate={searchDate}
        isCurrentMonth={isCurrentMonth}
      />
    </div>
  );
};

export default WaterDetailedInfo;
