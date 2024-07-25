import { useDispatch } from 'react-redux';
import css from './Calendar.module.css';
import { fetchMonthWater } from '../../redux/water/operations';
import { useEffect } from 'react';

const Calendar = ({ today, currentDate, onChangeDate }) => {
  const daysInMonth = new Date(
    currentDate.year,
    currentDate.month + 1,
    0
  ).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchMonthWater({ year: currentDate.year, month: currentDate.month })
    );
  }, [dispatch, currentDate.year, currentDate.month]);

  return (
    <ul className={css.calendar}>
      {daysArray.map(day => (
        <li key={day}>
          <button
            className={day === today.day ? css.currentday : css.calendarday}
            disabled={day > today.day}
            onClick={() =>
              onChangeDate(currentDate.year, currentDate.month + 1, day)
            }
          >
            {day}
          </button>
          <p className={css.percent}>50%</p>
        </li>
      ))}
    </ul>
  );
};

export default Calendar;
