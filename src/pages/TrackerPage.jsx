import css from './TrackerPage.module.css';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';
import UserButton from '../components/WaterDetailedInfo/UserPanel/UserPanel';
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

  const [initialDate, setInitialDate] = useState({
    year: null,
    month: null,
    day: null,
  });

  useEffect(() => {
    const today = new Date();
    const initial = {
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
    };
    setCurrentDate(initial);
    setInitialDate(initial);
  }, []);

  const handleNextMonth = () => {
    setCurrentDate(prevState => {
      const nextMonth = (prevState.month + 1) % 12;
      const nextYear = prevState.year + Math.floor((prevState.month + 1) / 12);

      if (nextYear === initialDate.year && nextMonth === initialDate.month) {
        return {
          ...initialDate,
        };
      } else {
        return {
          year: nextYear,
          month: nextMonth,
          day: 1,
        };
      }
    });
  };
  const handlePreviousMonth = () => {
    setCurrentDate(prevState => {
      const previousMonth = (prevState.month - 1 + 12) % 12;
      const previousYear =
        prevState.year + Math.floor((prevState.month - 1) / 12);

      if (
        previousYear === initialDate.year &&
        previousMonth === initialDate.month
      ) {
        return {
          ...initialDate,
        };
      } else {
        return {
          year: previousYear,
          month: previousMonth,
          day: 1,
        };
      }
    });
  };

  return (
    <div className={css.container}>
      <MainWaterInfo />
      <div className={css.waterCalendarcontainer}>
        <UserButton />
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
    </div>
  );
};

export default TrackerPage;
