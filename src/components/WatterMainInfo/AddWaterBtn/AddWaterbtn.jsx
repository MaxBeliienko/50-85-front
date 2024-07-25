import css from './AddWaterBtn.module.css';
import Iconsvg from '../../Icon';
import { useTranslation } from 'react-i18next';

const AddWaterBtn = ({ onAddWater }) => {
  const { t } = useTranslation();
  return (
    <div className={css.buttonContainer}>
      <button className={css.addWaterBtn} onClick={onAddWater}>
        <Iconsvg
          width={16}
          height={16}
          iconName="add-water"
          styles={css.icon}
        />
        {t('description.tracker.addWaterText')}
      </button>
    </div>
  );
};

export default AddWaterBtn;
