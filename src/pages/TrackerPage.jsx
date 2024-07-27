import css from './TrackerPage.module.css';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';
import WaterDetailedInfo from '../components/WaterDetailedInfo/UserPanel/WaterDetailedInfo';

const TrackerPage = () => {
  return (
    <div className={css.container}>
      <MainWaterInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
