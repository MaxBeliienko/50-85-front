import css from './Calendar.module.css';
import CalendarItem from '../CalendarItem/CalendarItem';

const Calendar = ({
  today,
  searchDate,
  onChangeDate,
  daysArray,
  isCurrentMonth,
}) => {
  return (
    <ul className={css.calendar}>
      {daysArray.map(({ day, percentage }) => (
        <li key={day} className={css.item}>
          <CalendarItem
            percentage={percentage}
            day={day}
            searchDate={searchDate}
            today={today}
            onChangeDate={onChangeDate}
            isCurrentMonth={isCurrentMonth}
          />
        </li>
      ))}
    </ul>
  );
};

export default Calendar;
