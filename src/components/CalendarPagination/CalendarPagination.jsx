import Calendar from '../Calendar/Calendar';
import css from './CalendarPagination.module.css';
import Iconsvg from '../Icon';
import { selectMonthWater } from '../../redux/water/selectors';
import { useSelector } from 'react-redux';
import StatisticsSchedule from '../StatisticsSchedule/StatisticsSchedule';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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

  const daysInMonth = new Date(searchDate.year, searchDate.month, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    return { day: i + 1, percentage: '0%' };
  });

  monthData.map(item => {
    daysArray[parseInt(item.date) - 1].percentage = item.percentage;
    daysArray[parseInt(item.date) - 1].volume = item.volume / 1000;
    daysArray[parseInt(item.date) - 1].dailyRequirement =
      item.dailyRequirement / 1000;
  });

  const [activeComponent, setActiveComponent] = useState(true);

  const handleClick = () => {
    setActiveComponent(!activeComponent);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className={css.titlecomtainer}>
        <h2 className={css.month}>
          {activeComponent
            ? t('description.tracker.month')
            : t('description.tracker.statistics')}
        </h2>
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
            disabled={isCurrentMonth}
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
          daysArray={daysArray}
          isCurrentMonth={isCurrentMonth}
        />
      ) : (
        <StatisticsSchedule data={daysArray} />
      )}
    </>
  );
};

export default CalendarPagination;
