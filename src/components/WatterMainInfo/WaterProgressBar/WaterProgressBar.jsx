import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import css from './WaterProgressBar.module.css';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodayWater } from '../../../redux/water/selectors';

const WaterProgressBar = ({ dailyNorma }) => {
  const todayWaterArray = useSelector(selectTodayWater);
  const totalVolume = todayWaterArray.reduce(
    (sum, waterItem) => sum + waterItem.volume,
    0
  );
  const percentage = Math.round((totalVolume / dailyNorma) * 100);

  const sliderStyle = {
    margin: '0',
    padding: '0',
    height: '8px',
    width: '100%',
    transition: 'width 0.5s ease-in-out',
  };

  const trackStyle = {
    backgroundColor: '#9be1a0',
    height: 8,
    borderRadius: 9,
    padding: 0,
    transition: 'width 0.5s ease-in-out',
  };

  const railStyle = {
    backgroundColor: '#f0eff4',
    height: 8,
    borderRadius: 9,
  };

  const handleStyle = {
    borderColor: '#9be1a0',
    backgroundColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 0,
    marginTop: -4,
    borderRadius: '100%',
    zIndex: 2,
    boxShadow: 'none',
    transition: 'left 0.5s ease-in-out',
  };
  const { t } = useTranslation();

  const handleRender = node => {
    return React.cloneElement(node, {
      'aria-label': 'Slider for showing how much water you drunk',
    });
  };
  return (
    <div className={css.waterProgressBar}>
      <div className={css.today}>{t('description.tracker.todayText')}</div>
      <div className={css.progressContainer}>
        <Slider
          value={percentage}
          trackStyle={trackStyle}
          railStyle={railStyle}
          handleStyle={handleStyle}
          style={sliderStyle}
          handleRender={handleRender}
          disabled
        />
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
