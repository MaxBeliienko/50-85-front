import css from './TrackerPage.module.css';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';

const TrackerPage = () => {
  return (
    <div className={css.container}>
      Tracker Page
      <MainWaterInfo />
      <CalendarSection waterQuantity={50} />
    </div>
  );
};

export default TrackerPage;
