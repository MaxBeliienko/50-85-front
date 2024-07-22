import css from './TrackerPage.module.css';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';
import WaterList from '../components/WaterList/WaterList';
import { useEffect, useState } from 'react';

const TrackerPage = () => {
  const volume = 50;
  const data = [
    { volume: 250, time: '7-00' },
    { volume: 250, time: '11-00' },
  ];

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

  const [currentDate, setCurrentDate] = useState({
    year: null,
    month: null,
    day: null,
  });

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
      const nextYear = prevState.year + Math.floor((prevState.month + 1) / 12);

      return {
        year: nextYear,
        month: nextMonth,
        day: 1,
      };
    });
  };
  const handlePreviousMonth = () => {
    setCurrentDate(prevState => {
      const previousMonth = (prevState.month - 1 + 12) % 12;
      const previousYear =
        prevState.year + Math.floor((prevState.month - 1) / 12);

      return {
        year: previousYear,
        month: previousMonth,
        day: 1,
      };
    });
  };

  return (
    <div className={css.container}>
      Tracker Page
      <MainWaterInfo />
      <WaterList
        waterlist={data}
        currentDate={currentDate}
        monthNames={monthNames}
      />
      <CalendarSection
        waterQuantity={volume}
        currentDate={currentDate}
        monthNames={monthNames}
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
      />
    </div>
  );
};

export default TrackerPage;
