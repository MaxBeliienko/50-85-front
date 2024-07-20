import React from 'react';
import css from './WaterProgressBar.module.css';

const WaterProgressBar = ({ consumed, dailyNorma }) => {
  const progress = (consumed / dailyNorma) * 100;

  return (
    <div className={css.waterProgressBar}>
      <div className={css.today}>Today</div>
      <div className={css.progressContainer}>
        <div className={css.progress} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={css.labels}>
        <span className={css.label}>0%</span>
        <span className={css.label}>50%</span>
        <span className={css.label}>100%</span>
      </div>
    </div>
  );
};

export default WaterProgressBar;
