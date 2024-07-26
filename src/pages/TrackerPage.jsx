import css from './TrackerPage.module.css';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';
import UserButton from '../components/WaterDetailedInfo/UserPanel/UserPanel';
import WaterList from '../components/WaterList/WaterList';
import { useEffect, useState } from 'react';
import { selectLoading, selectMonthWater } from '../redux/water/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDailyWater, fetchMonthWater } from '../redux/water/operations';
import { Audio } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

const TrackerPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const monthData = useSelector(selectMonthWater);
  console.log(monthData);

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

  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  };

  const [currentDate, setCurrentDate] = useState({
    year: today.year,
    month: today.month,
    day: today.day,
  });

  const [initialDate, setInitialDate] = useState({
    year: null,
    month: null,
    day: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const searchDate = {
    year: searchParams.get('year'),
    month: searchParams.get('month'),
    day: searchParams.get('day'),
  };

  const onChangeDate = (year, month, day) => {
    setSearchParams({ year, month: month, day });
    setInitialDate({ year, month, day });
  };

  const onChangeMonth = (year, month) => {
    setSearchParams({ year, month: month });
  };

  function formatNumber(str) {
    let num = parseInt(str, 10);
    let formattedNum = num.toString().padStart(2, '0');
    return formattedNum;
  }

  useEffect(() => {
    dispatch(
      fetchDailyWater({
        year: searchDate.year,
        month: formatNumber(searchDate.month),
        day: formatNumber(searchDate.day),
      })
    );
    dispatch(
      fetchMonthWater({
        year: searchDate.year,
        month: formatNumber(searchDate.month),
      })
    );

    // setCurrentDate(initial);
    // setInitialDate(initial);
    // dispatch(fetchMonthWater(initial.year, initial.month));
  }, [dispatch, searchDate.year, searchDate.month, searchDate.day]);

  const handleNextMonth = () => {
    setCurrentDate(prevState => {
      const nextMonth = (prevState.month + 1) % 12;
      const nextYear = prevState.year + Math.floor((prevState.month + 1) / 12);
      onChangeMonth(nextYear, nextMonth);
      // onChangeDate(nextYear, nextMonth + 1, 1);
      if (nextYear === initialDate.year && nextMonth === initialDate.month) {
        return {
          ...initialDate,
        };
      } else {
        return {
          year: nextYear,
          month: nextMonth,
          day: null,
        };
      }
    });
  };

  const handlePreviousMonth = () => {
    setCurrentDate(prevState => {
      const previousMonth = (prevState.month - 1 + 12) % 12;
      const previousYear =
        prevState.year + Math.floor((prevState.month - 1) / 12);
      onChangeMonth(previousYear, previousMonth);
      // onChangeDate(previousYear, previousMonth + 1, 1);

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
          day: null,
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
          currentDate={initialDate}
          monthNames={monthNames}
          searchDate={searchDate}
          today={today}
        />
        <CalendarSection
          currentDate={currentDate}
          monthNames={monthNames}
          handleNextMonth={handleNextMonth}
          handlePreviousMonth={handlePreviousMonth}
          onChangeDate={onChangeDate}
          today={today}
        />
      </div>
    </div>
  );
};

export default TrackerPage;
