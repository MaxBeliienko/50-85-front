import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';

const DailyInfo = ({ today, monthNames, searchDate, isToday, onEditWater }) => {
  return (
    <div className={css.container}>
      <WaterList
        today={today}
        monthNames={monthNames}
        searchDate={searchDate}
        isToday={isToday}
        onEditWater={onEditWater}
      />
    </div>
  );
};

export default DailyInfo;
