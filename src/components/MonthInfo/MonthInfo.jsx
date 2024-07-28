import CalendarPagination from '../CalendarSection/CalendarSection';
import css from './MonthInfo.module.css';

const MonthInfo = ({
  today,
  onChangeMonth,
  onChangeDate,
  searchDate,
  monthNames,
  isCurrentMonth,
}) => {
  return (
    <div className={css.container}>
      <CalendarPagination
        today={today}
        onChangeDate={onChangeDate}
        onChangeMonth={onChangeMonth}
        searchDate={searchDate}
        monthNames={monthNames}
        isCurrentMonth={isCurrentMonth}
      />
    </div>
  );
};

export default MonthInfo;
