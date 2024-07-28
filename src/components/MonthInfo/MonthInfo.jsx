import CalendarPagination from '../CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';

const MonthInfo = ({
  today,
  onChangeMonth,
  onChangeDate,
  searchDate,
  monthNames,
  isCurrentMonth,
  handleClick,
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
        handleClick={handleClick}
      />
    </div>
  );
};

export default MonthInfo;
