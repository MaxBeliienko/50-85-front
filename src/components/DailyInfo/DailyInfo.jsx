import { useEffect } from 'react';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';
import { fetchDailyWater } from '../../redux/water/operations';

const DailyInfo = ({ today, monthNames, searchDate, isToday }) => {
  useEffect(() => {
    if (!searchDate.year || searchDate.month || searchDate.day) return;
    dispatchEvent(
      fetchDailyWater({
        year: searchDate.year,
        month: searchDate.month,
        day: searchDate.day,
      })
    );
  });
  return (
    <div className={css.container}>
      <WaterList
        today={today}
        monthNames={monthNames}
        searchDate={searchDate}
        isToday={isToday}
      />
    </div>
  );
};

export default DailyInfo;
