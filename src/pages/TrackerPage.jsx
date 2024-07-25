import css from './TrackerPage.module.css';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';
import UserButton from '../components/WaterDetailedInfo/UserPanel/UserPanel';
import WaterList from '../components/WaterList/WaterList';
import { useEffect, useState } from 'react';
import { selectLoading } from '../redux/water/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDailyWater, fetchMonthWater } from '../redux/water/operations';
import { Audio } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

const TrackerPage = () => {
  const dispatch = useDispatch();

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

  const isLoading = useSelector(selectLoading);
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
    year: today.year,
    month: today.month,
    day: today.day,
  });

  const [searchParams, setSearchParams] = useSearchParams({
    year: today.year,
    month: today.month,
    day: today.day,
  });

  const searchDate = {
    year: searchParams.get('year'),
    month: searchParams.get('month'),
    day: searchParams.get('day'),
  };

  const onChangeDate = (year, month, day) => {
    setSearchParams({ year, month, day });
    setInitialDate({ year, month: month - 1, day });
  };

  const onChangeMonth = (year, month) => {
    setSearchParams({ year, month });
  };

  function formatNumber(str) {
    // Преобразуем строку в число (если нужно)
    let num = parseInt(str, 10);
    // Преобразуем число обратно в строку и добавляем ведущий ноль, если необходимо
    let formattedNum = num.toString().padStart(2, '0');
    return formattedNum;
  }

  useEffect(() => {
    console.log(
      searchDate.year,
      formatNumber(searchDate.month),
      formatNumber(searchDate.day)
    );
    dispatch(
      fetchDailyWater({
        year: searchDate.year,
        month: formatNumber(searchDate.month),
        day: formatNumber(searchDate.day),
      })
    );
    const today = new Date();

    const initial = {
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
    };

    setCurrentDate(initial);
    setInitialDate(initial);
    dispatch(
      fetchMonthWater({
        year: searchDate.year,
        month: formatNumber(searchDate.month),
      })
    );
  }, [dispatch, searchDate.year, searchDate.month, searchDate.day]);

  const handleNextMonth = () => {
    setCurrentDate(prevState => {
      const nextMonth = (prevState.month + 1) % 12;
      const nextYear = prevState.year + Math.floor((prevState.month + 1) / 12);
      onChangeMonth(nextYear, nextMonth);
      onChangeDate(nextYear, nextMonth + 1, 1);
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
      onChangeMonth(previousYear, previousMonth);
      onChangeDate(previousYear, previousMonth + 1, 1);

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
          currentDate={initialDate}
          monthNames={monthNames}
          searchDate={searchDate}
        />
        <CalendarSection
          waterQuantity={65}
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
