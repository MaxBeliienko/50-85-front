import css from './Calendar.module.css';

// додати ще 1 пропс currentDay
const Calendar = ({ year, month, currentDay, waterQuantity }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  console.log(currentDay);
  // if (currentDay) {
  //   return <button className={css.calendarday}></button>
  // }

  return (
    <ul className={css.calendar}>
      {daysArray.map(day => (
        <li key={day}>
          <button
            className={day === currentDay ? css.currentday : css.calendarday}
            disabled={day > currentDay}
          >
            {day}
          </button>
          <p className={day < currentDay ? css.percent : css.hidden}>
            {waterQuantity}%
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Calendar;

// className={css.btn}
// className={`day === currentDay ? 'current-day' : 'calendar-day'`}
