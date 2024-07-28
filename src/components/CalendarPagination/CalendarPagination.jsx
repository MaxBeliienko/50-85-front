import Calendar from '../Calendar/Calendar';
import css from './CalendarPagination.module.css';
import Iconsvg from '../Icon';
import { selectMonthWater } from '../../redux/water/selectors';
import { useSelector } from 'react-redux';
import StatisticsSchedule from '../StatisticsSchedule/StatisticsSchedule';
import { useState } from 'react';

const CalendarPagination = ({
  searchDate,
  monthNames,
  onChangeDate,
  onChangeMonth,
  today,
  isCurrentMonth,
}) => {
  const currentMonthName = monthNames[Number(searchDate.month) - 1];
  const monthData = useSelector(selectMonthWater);

  function getNextMonth(currentDate) {
    if (Number(currentDate.month) === 12) {
      onChangeMonth(Number(currentDate.year) + 1, 1);
    } else {
      onChangeMonth(currentDate.year, Number(currentDate.month) + 1);
    }
  }

  function getPreviousMonth(currentDate) {
    if (Number(currentDate.month) === 1) {
      onChangeMonth(Number(currentDate.year) - 1, 12);
    } else {
      onChangeMonth(currentDate.year, Number(currentDate.month) - 1);
    }
  }

  const [activeComponent, setActiveComponent] = useState(true);

  const handleClick = () => {
    setActiveComponent(!activeComponent);
  };

  return (
    <>
      <div className={css.titlecomtainer}>
        <h2 className={css.month}>{activeComponent ? 'Month' : 'Statistics'}</h2>
        <div className={css.blockcalendar}>
          <button
            className={css.btn}
            id="prevMonth"
            aria-label="get previous month"
            onClick={() => getPreviousMonth(searchDate)}
          >
            <Iconsvg iconName={'left'} width={5} height={9} styles={css.btn} />
          </button>
          <p className={css.date}>
            {currentMonthName}, {searchDate.year}
          </p>

          <button
            className={css.btn}
            id="nextMonth"
            aria-label="get next month"
            onClick={() => {
              getNextMonth(searchDate);
            }}
          >
            <Iconsvg iconName={'right'} width={5} height={9} styles={css.btn} />
          </button>
          <button
            className={css.btn}
            id="statistics"
            aria-label="get statistics of week"
            onClick={handleClick}
          >
            <Iconsvg
              iconName={'schedule'}
              styles={css.schedule}
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
      {activeComponent ? (
        <Calendar
          searchDate={searchDate}
          onChangeDate={onChangeDate}
          today={today}
          monthData={monthData}
          isCurrentMonth={isCurrentMonth}
        />
      ) : (
        <StatisticsSchedule />
      )}
    </>
  );
};

export default CalendarPagination;
