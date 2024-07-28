import css from './CalendarItem.module.css';

const CalendarItem = ({
  day,
  today,
  searchDate,
  onChangeDate,
  isCurrentMonth,
  percentage,
}) => {
  return (
    <>
      <button
        className={
          day === today.day && isCurrentMonth ? css.currentday : css.calendarday
        }
        // disabled={day > today.day && isCurrentMonth}
        onClick={() => onChangeDate(searchDate.year, searchDate.month, day)}
      >
        {day}
      </button>
      <p className={css.percent}>{percentage}</p>
    </>
  );
};

export default CalendarItem;
