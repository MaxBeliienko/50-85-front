import React from 'react';
import css from './AddWaterBtn.module.css';
import Icons from '../../../assets/sprite.svg';

const AddWaterBtn = ({ onAddWater }) => {
  return (
    <div className={css.buttonContainer}>
      <button className={css.addWaterBtn} onClick={onAddWater}>
        <svg width="16" height="16" className={css.icon}>
          <use href={`${Icons}#plus`}></use>
        </svg>
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
