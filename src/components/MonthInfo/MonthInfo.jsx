import CalendarSection from '../CalendarSection/CalendarSection';
import css from './MonthInfo.module.css';

const MonthInfo = ({
  today,
  onChangeMonth,
  onChangeDate,
  searchDate,
  monthNames,
}) => {
  return (
    <div className={css.container}>
      <CalendarSection
        today={today}
        onChangeDate={onChangeDate}
        onChangeMonth={onChangeMonth}
        searchDate={searchDate}
        monthNames={monthNames}
      />
    </div>
  );
};

export default MonthInfo;
