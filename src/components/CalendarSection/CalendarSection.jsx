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
    setCurrentDate(...(currentDate.month + 1));
    console.log(currentDate.month);
  };
  // const handlePreviesMonth = () => {
  //
  // }

  return (
    <>
      <div className={css.title}>
        <h2>Month</h2>
        <div className={css.blockcalendar}>
          <button className={css.btn}>
            <Iconsvg iconName={'left'} />
          </button>
          <p>
            {monthNames[currentDate.month]}, {currentDate.year}
          </p>
          <button className={css.btn} onClick={handleNextMonth}>
            <Iconsvg iconName={'right'} />
            <Iconsvg iconName={'schedule'} styles={css.schedule} />
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
