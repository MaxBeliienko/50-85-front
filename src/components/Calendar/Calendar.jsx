import { useDispatch } from 'react-redux';
import css from './Calendar.module.css';
import { fetchMonthWater } from '../../redux/water/operations';
import { useEffect } from 'react';
import CalendarItem from '../CalendarItem/CalendarItem';

const Calendar = ({
  today,
  searchDate,
  onChangeDate,
  daysArray,
  isCurrentMonth,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchMonthWater({ year: searchDate.year, month: searchDate.month })
    );
  }, [dispatch, searchDate.year, searchDate.month]);

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
