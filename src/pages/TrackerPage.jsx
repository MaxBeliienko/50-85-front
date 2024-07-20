import css from './TrackerPage.module.css';
import CalendarSection from '../components/CalendarSection/CalendarSection';

const TrackerPage = () => {
  return (
    <div className={css.container}>
      <h2>Tracker Page</h2>
      <CalendarSection waterQuantity={50} />
    </div>
  );
};

export default TrackerPage;
