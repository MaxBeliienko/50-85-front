import Calendar from '../Calendar/Calendar';
import { useState, useEffect } from 'react';
import css from './CalendarSection.module.css';

const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState({
    year: null,
    month: null,
    day: null,
  });

  useEffect(() => {
    const today = new Date();

    setCurrentDate({
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    });
    console.log(today.getDate());
  }, []);

  return (
    <div className={css.container}>
      <div className={css.title}>
        <h2>Month</h2>
        <p>
          {currentDate.month},{currentDate.year}
        </p>
      </div>

      {currentDate.year !== null && currentDate.month !== null ? (
        <Calendar
          year={currentDate.year}
          month={currentDate.month}
          currentDay={currentDate.day}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CalendarSection;
