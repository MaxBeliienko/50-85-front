import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';

const DailyInfo = ({ today, monthNames, searchDate, isToday }) => {
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
