import css from './TrackerPage.module.css';
import { useEffect, useState } from 'react';
import WaterMainInfo from '../components/WatterMainInfo/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../components/WaterDetailedInfo/UserPanel/WaterDetailedInfo';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../redux/auth/operations';
import { fetchDailyWater, fetchMonthWater } from '../redux/water/operations';
import { useSearchParams } from 'react-router-dom';

const TrackerPage = () => {
  const date = new Date();
  const today = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };

  const [isChangeMonth, setIsChangeMonth] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchDate = {
    year: formatNumber(searchParams.get('year') || today.year),
    month: formatNumber(searchParams.get('month') || today.month),
    day: formatNumber(searchParams.get('day') || today.day),
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    if (isChangeMonth) {
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
    }
    if (!isChangeMonth) {
      dispatch(
        fetchDailyWater({
          year: searchDate.year,
          month: searchDate.month,
          day: searchDate.day,
        })
      );
    }
  }, [
    dispatch,
    searchDate.year,
    searchDate.month,
    searchDate.day,
    isChangeMonth,
  ]);

  const onChangeDate = (year, month, day) => {
    setSearchParams({
      year: formatNumber(year),
      month: formatNumber(month),
      day: formatNumber(day),
    });
    setIsChangeMonth(false);
  };

  const onChangeMonth = (year, month) => {
    setSearchParams({
      year: formatNumber(year),
      month: formatNumber(month),
      day: '01',
    });
    setIsChangeMonth(true);
  };

  function formatNumber(str) {
    let num = parseInt(str, 10);
    let formattedNum = num.toString().padStart(2, '0');
    return formattedNum;
  }

  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo
        today={today}
        searchDate={searchDate}
        onChangeDate={onChangeDate}
        onChangeMonth={onChangeMonth}
      />
    </div>
  );
};

export default TrackerPage;
