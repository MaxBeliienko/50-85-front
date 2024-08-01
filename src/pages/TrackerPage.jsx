import css from './TrackerPage.module.css';
import WaterMainInfo from '../components/WatterMainInfo/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../components/WaterDetailedInfo/UserPanel/WaterDetailedInfo';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../redux/auth/operations';
import { useSearchParams } from 'react-router-dom';
import {
  fetchDailyWater,
  fetchMonthWater,
  fetchTodayWater,
} from '../redux/water/operations';

const TrackerPage = () => {
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

  const [isChangeMonth, setIsChangeMonth] = useState(true);
  const [isWaterEdited, setIsWaterEdited] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodayWater());
  }, [dispatch]);

  useEffect(() => {
    if (!isToday)
      dispatch(
        fetchDailyWater({
          year: searchDate.year,
          month: searchDate.month,
          day: searchDate.day,
        })
      );
    if (isChangeMonth) {
      dispatch(
        fetchMonthWater({
          year: searchDate.year,
          month: searchDate.month,
        })
      );
    }
  }, [
    dispatch,
    searchDate.year,
    searchDate.month,
    searchDate.day,
    isChangeMonth,
    isToday,
  ]);

  useEffect(() => {
    if (isWaterEdited) {
      dispatch(
        fetchMonthWater({
          year: searchDate.year,
          month: searchDate.month,
        })
      );
      setIsWaterEdited(false);
    }
  }, [dispatch, isWaterEdited, searchDate.year, searchDate.month]);

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

  const onEditWater = () => {
    setIsWaterEdited(true);
  };

  return (
    <div className={css.container}>
      <WaterMainInfo onEditWater={onEditWater} />
      <WaterDetailedInfo
        today={today}
        searchDate={searchDate}
        isToday={isToday}
        onChangeDate={onChangeDate}
        onChangeMonth={onChangeMonth}
        onEditWater={onEditWater}
      />
    </div>
  );
};

export default TrackerPage;
