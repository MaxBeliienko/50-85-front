import css from './TrackerPage.module.css';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import { useState } from 'react';

const TrackerPage = () => {
  const [dailyNorma, setDailyNorma] = useState(1);

  const [waterQuantity, setWaterQuantity] = useState(0.5);

  return (
    <div className={css.container}>
      <h2>Tracker Page</h2>
      <CalendarSection waterQuantity={(waterQuantity / dailyNorma) * 100} />
    </div>
  );
};

export default TrackerPage;
