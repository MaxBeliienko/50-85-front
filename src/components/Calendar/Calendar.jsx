import { useDispatch } from 'react-redux';
import css from './Calendar.module.css';
import { fetchDailyWater } from '../../redux/water/operations';

const Calendar = ({ year, month, currentDay, waterQuantity }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const dispatch = useDispatch();

  const handleDailyWater = () => {
    dispatch(fetchDailyWater);
  };

  return (
    <ul className={css.calendar}>
      {daysArray.map(day => (
        <li key={day}>
          <button
            className={day === currentDay ? css.currentday : css.calendarday}
            disabled={day > currentDay}
            onClick={() => {
              handleDailyWater(year, month, day);
            }}
          >
            {day}
          </button>
          <p className={day <= currentDay ? css.percent : css.hidden}>
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
