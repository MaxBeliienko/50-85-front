import DailyInfo from '../../DailyInfo/DailyInfo';
import MonthInfo from '../../MonthInfo/MonthInfo';
import css from './WaterDetailedInfo.module.css';
import UserPanel from './UserPanel';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchDailyWater,
  fetchMonthWater,
} from '../../../redux/water/operations';

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

  const isCurrentMonth =
    Number(today.month) === Number(searchDate.month) &&
    Number(today.year) === Number(searchDate.year);

  const [isChangeMonth, setIsChangeMonth] = useState(true);

  const { t } = useTranslation();
  const monthNames = [
    t('description.tracker.month1'),
    t('description.tracker.month2'),
    t('description.tracker.month3'),
    t('description.tracker.month4'),
    t('description.tracker.month5'),
    t('description.tracker.month6'),
    t('description.tracker.month7'),
    t('description.tracker.month8'),
    t('description.tracker.month9'),
    t('description.tracker.month10'),
    t('description.tracker.month11'),
    t('description.tracker.month12'),
  ];

  const dispatch = useDispatch();

  useEffect(() => {
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
        isCurrentMonth={isCurrentMonth}
      />
    </div>
  );
};

export default WaterDetailedInfo;
