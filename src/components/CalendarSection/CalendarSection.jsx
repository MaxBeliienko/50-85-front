import Calendar from '../Calendar/Calendar';
import { useState, useEffect } from 'react';
import css from './CalendarSection.module.css';
import Iconsvg from '../Icon';

const CalendarSection = ({ waterQuantity }) => {
  const [currentDate, setCurrentDate] = useState({
    year: null,
    month: null,
    day: null,
  });

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    const today = new Date();

    setCurrentDate({
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
    });
  }, []);

  const handleNextMonth = () => {
    setCurrentDate(prevState => {
      const nextMonth = (prevState.month + 1) % 12;
      const nextYear = prevState.year + Math.floor((prevState.month + 1) / 12)

      return {
        year: nextYear,
        month: nextMonth,
        day: 1
      }
    })
  };
  const handlePreviousMonth = () => {
      setCurrentDate(prevState => {
        const previousMonth = (prevState.month - 1 + 12) % 12;
        const previousYear = prevState.year + Math.floor((prevState.month - 1) / 12)

        return {
          year: previousYear,
          month: previousMonth,
          day: 1
        }
      })
  }

  return (
    <>
      <div className={css.title}>
        <h2>Month</h2>
        <div className={css.blockcalendar}>
          <button className={css.btn} onClick={handlePreviousMonth} >
            <Iconsvg iconName={'left'} width={4.5} height={9} styles={css.btn} />
          </button>
          <p>
            {monthNames[currentDate.month]}, {currentDate.year}
          </p>
          <button className={css.btn} onClick={handleNextMonth}>
            <Iconsvg iconName={'right'} width={4.5} height={9}  styles={css.btn}/>
          </button>
          <button className={css.btn}>
            <Iconsvg iconName={'schedule'} styles={css.schedule}  height={24} width={24}/>
          </button>
        </div>
      </div>

      {currentDate.year !== null && currentDate.month !== null ? (
        <Calendar
          year={currentDate.year}
          month={currentDate.month}
          currentDay={currentDate.day}
          waterQuantity={waterQuantity}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CalendarSection;
