import DailyInfo from '../../DailyInfo/DailyInfo';
import MonthInfo from '../../MonthInfo/MonthInfo';
import css from './WaterDetailedInfo.module.css';
import UserPanel from './UserPanel';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  fetchDailyWater,
  fetchMonthWater,
} from '../../../redux/water/operations';
import { useDispatch } from 'react-redux';

const WaterDetailedInfo = () => {
  const date = new Date();
  const today = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const searchDate = {
    year: formatNumber(searchParams.get('year') || today.year),
    month: formatNumber(searchParams.get('month') || today.month),
    day: formatNumber(searchParams.get('day') || today.day),
  };
  const isToday =
    Number(today.day) === Number(searchDate.day) &&
    Number(today.month) === Number(searchDate.month) &&
    Number(today.year) === Number(searchDate.year);

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchDailyWater({
        year: searchDate.year,
        month: searchDate.month,
        day: searchDate.day,
      })
    );

    dispatch(
      fetchMonthWater({
        year: searchDate.year,
        month: searchDate.month,
      })
    );
  }, [dispatch, searchDate.year, searchDate.month, searchDate.day]);

  function formatNumber(str) {
    let num = parseInt(str, 10);
    let formattedNum = num.toString().padStart(2, '0');
    return formattedNum;
  }

  const onChangeDate = (year, month, day) => {
    setSearchParams({
      year: formatNumber(year),
      month: formatNumber(month),
      day: formatNumber(day),
    });
  };

  const onChangeMonth = (year, month) => {
    setSearchParams({
      year: formatNumber(year),
      month: formatNumber(month),
      day: '01',
    });
  };

  return (
    <div className={css.waterCalendarcontainer}>
      <UserPanel />
      <DailyInfo
        monthNames={monthNames}
        searchDate={searchDate}
        today={today}
        isToday={isToday}
      />
      <MonthInfo
        monthNames={monthNames}
        today={today}
        onChangeDate={onChangeDate}
        onChangeMonth={onChangeMonth}
        searchDate={searchDate}
      />
    </div>
  );
};

export default WaterDetailedInfo;
