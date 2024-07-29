import css from './TrackerPage.module.css';
import { useEffect } from 'react';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';
import WaterDetailedInfo from '../components/WaterDetailedInfo/UserPanel/WaterDetailedInfo';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../redux/auth/operations';

const TrackerPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <MainWaterInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
