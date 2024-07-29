import css from './TrackerPage.module.css';
import { useEffect } from 'react';
import WaterMainInfo from '../components/WatterMainInfo/WaterMainInfo/WaterMainInfo';
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
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
