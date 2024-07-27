import Calendar from '../Calendar/Calendar';
import css from './CalendarSection.module.css';
import Iconsvg from '../Icon';
import { useTranslation } from 'react-i18next';
import { selectMonthWater } from '../../redux/water/selectors';
import { useSelector } from 'react-redux';

const CalendarSection = ({
  searchDate,
  monthNames,
  onChangeDate,
  onChangeMonth,
  today,
}) => {
  const { t } = useTranslation();
  const monthToNumber = Number(searchDate.month);
  const currentMonthName = monthNames[monthToNumber];
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
      onChangeMonth(currentDate.year, Number(currentDate.month), 1);
    }
  }

  // const handleNextMonth = () => {
  //   onChangeMonth(prevState => {
  //     const nextMonth = (prevState.month + 1) % 12;
  //     const nextYear = prevState.year + Math.floor((prevState.month + 1) / 12);
  //     console.log(nextMonth, nextYear);
  //     onChangeMonth(nextYear, nextMonth);
  // if (nextYear === searchDate.year && nextMonth === searchDate.month) {
  //   return {
  //     ...searchDate,
  //   };
  // } else {
  //   return {
  //     year: nextYear,
  //     month: nextMonth,
  //   };
  // }
  //   });
  // };

  // const handlePreviousMonth = () => {
  //   onChangeMonth(prevState => {
  //     const previousMonth = (prevState.month - 1 + 12) % 12;
  //     const previousYear =
  //       prevState.year + Math.floor((prevState.month - 1) / 12);
  //     onChangeMonth(previousYear, previousMonth);

  // if (
  //   previousYear === searchDate.year &&
  //   previousMonth === searchDate.month
  // ) {
  //   return {
  //     ...searchDate,
  //   };
  // } else {
  //   return {
  //     year: previousYear,
  //     month: previousMonth,
  //   };
  // }
  //   });
  // };
  return (
    <>
      <div className={css.title}>
        <h2>{t(`description.calendar.monthText`)}</h2>
        <div className={css.blockcalendar}>
          <button
            className={css.btn}
            onClick={() => getPreviousMonth(searchDate)}
          >
            <Iconsvg iconName={'left'} width={5} height={9} styles={css.btn} />
          </button>
          <p>
            {currentMonthName},{searchDate.year}
          </p>

          <button
            className={css.btn}
            onClick={() => {
              getNextMonth(searchDate);
            }}
          >
            <Iconsvg iconName={'right'} width={5} height={9} styles={css.btn} />
          </button>
          <button className={css.btn}>
            <Iconsvg
              iconName={'schedule'}
              styles={css.schedule}
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>

      <Calendar
        searchDate={searchDate}
        onChangeDate={onChangeDate}
        today={today}
        monthData={monthData}
      />
    </>
  );
};

export default CalendarSection;
