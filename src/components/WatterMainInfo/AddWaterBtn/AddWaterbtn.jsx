import css from './AddWaterBtn.module.css';
import Iconsvg from '../../Icon';

const AddWaterBtn = ({ onAddWater }) => {
  return (
    <div className={css.buttonContainer}>
      <button className={css.addWaterBtn} onClick={onAddWater}>
        <Iconsvg
          width={16}
          height={16}
          iconName="add-water"
          styles={css.icon}
        />
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
