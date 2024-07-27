import { useDispatch } from 'react-redux';
import css from './Calendar.module.css';
import { fetchMonthWater } from '../../redux/water/operations';
import { useEffect } from 'react';

const Calendar = ({ today, searchDate, onChangeDate, monthData }) => {
  const daysInMonth = new Date(
    searchDate.year,
    searchDate.month + 1,
    0
  ).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    return { day: i + 1, percentage: '0%' };
  });

  monthData.map(item => {
    daysArray[parseInt(item.date) - 1].percentage = item.percentage;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchMonthWater({ year: searchDate.year, month: searchDate.month })
    );
  }, [dispatch, searchDate.year, searchDate.month]);

  return (
    <ul className={css.calendar}>
      {daysArray.map(({ day, percentage }) => (
        <li key={day}>
          <button
            className={day === today.day ? css.currentday : css.calendarday}
            disabled={day > today.day}
            onClick={() => onChangeDate(searchDate.year, searchDate.month, day)}
          >
            {day}
          </button>
          <p className={css.percent}>{percentage}</p>
        </li>
      ))}
    </ul>
  );
};

export default Calendar;
