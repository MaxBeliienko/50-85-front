import css from './TrackerPage.module.css';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';
import UserButton from '../components/WaterDetailedInfo/UserPanel/UserPanel';
import WaterList from '../components/WaterList/WaterList';
import { useEffect, useState } from 'react';
import { selectLoading } from '../redux/water/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonthWater } from '../redux/water/operations';
import { Audio } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

const TrackerPage = () => {
  const data = [
    { volume: 250, time: '7-00', id: '001' },
    { volume: 250, time: '11-00', id: '002' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const searchDate = {
    year: searchParams.get('year'),
    month: searchParams.get('month'),
    day: searchParams.get('day'),
  };

  const onChangeDate = (year, month, day) => {
    setSearchParams({ year, month, day });
  };

  const onChangeMonth = (year, month) => {
    setSearchParams({ year, month });
  };

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

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    const today = new Date();
    const initial = {
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
    };

    setCurrentDate(initial);
    setInitialDate(initial);
    dispatch(fetchMonthWater(initial.year, initial.month));
  }, [dispatch]);

  // useEffect(() => {
  //   const today = new Date();
  //   const initial = {
  //     year: today.getFullYear(),
  //     month: today.getMonth(),
  //     day: today.getDate(),
  //   };
  //   setCurrentDate(initial);
  //   setInitialDate(initial);
  // }, []);

  const handleNextMonth = () => {
    setCurrentDate(prevState => {
      const nextMonth = (prevState.month + 1) % 12;
      const nextYear = prevState.year + Math.floor((prevState.month + 1) / 12);
      onChangeMonth(nextYear, nextMonth + 1);

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
      onChangeMonth(previousYear, previousMonth + 1);
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
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}

      <MainWaterInfo />
      <div className={css.waterCalendarcontainer}>
        <UserButton />
        <WaterList
          waterlist={data}
          currentDate={currentDate}
          monthNames={monthNames}
          searchDate={searchDate}
        />
        <CalendarSection
          waterQuantity={50}
          currentDate={currentDate}
          monthNames={monthNames}
          handleNextMonth={handleNextMonth}
          handlePreviousMonth={handlePreviousMonth}
          onChangeDate={onChangeDate}
        />
      </div>
    </div>
  );
};

export default TrackerPage;
