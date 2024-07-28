import { useTranslation } from 'react-i18next';
import css from './AddWaterBtn.module.css';
import Iconsvg from '../Icon';

const AddWaterBtn = ({ openModal }) => {
  const { t } = useTranslation();

  return (
    <div className={css.btncontainer}>
      <button className={css.btn} onClick={openModal}>
        <Iconsvg iconName="add-water" width={16} height={16} styles={css.svg} />
      </button>
      <p className={css.text}>{t('description.tracker.addWaterText')}</p>
    </div>
  );
};

export default AddWaterBtn;
