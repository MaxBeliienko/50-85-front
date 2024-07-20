import React, { useState } from 'react';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterbtn.jsx';
import css from './MainWaterInfo.module.css';
import Logo from '../../Logo/Logo.jsx';
import waterImage from '../img/bottle_for_water t1-min.png';

const MainWaterInfo = () => {
  const [consumed, setConsumed] = useState(0);
  const dailyNorma = 1.5;
  const addWater = () => {
    setConsumed(prev => prev + 250);
  };

  return (
    <div className={css.mainWaterInfo}>
      <img src={waterImage} alt="Water" className={css.waterImage} />
      <Logo />
      <div className={css.content}>
        <WaterDailyNorma dailyNorma={dailyNorma} />
        <WaterProgressBar consumed={consumed} dailyNorma={dailyNorma} />
        <AddWaterBtn onAddWater={addWater} />
      </div>
    </div>
  );
};

export default MainWaterInfo;
