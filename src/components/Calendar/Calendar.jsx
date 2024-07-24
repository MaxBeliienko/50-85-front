import { useDispatch } from 'react-redux';
import css from './Calendar.module.css';
import { fetchMonthWater } from '../../redux/water/operations';
import { useEffect } from 'react';

const Calendar = ({
  year,
  month,
  currentDate,
  waterQuantity,
  onChangeDate,
}) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMonthWater({ year, month }));
  }, [dispatch, year, month]);

  return (
    <ul className={css.calendar}>
      {daysArray.map(day => (
        <li key={day}>
          <button
            className={
              day === currentDate.day ? css.currentday : css.calendarday
            }
            disabled={day > currentDate.day}
            onClick={() => onChangeDate(year, month + 1, day)}
          >
            {day}
          </button>
          <p className={day <= currentDate.day ? css.percent : css.hidden}>
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
