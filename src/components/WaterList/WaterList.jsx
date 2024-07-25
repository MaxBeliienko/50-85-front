import { useState } from 'react';
import Iconsvg from '../Icon';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import Modal from '../Modal';
import WaterModal from '../waterModal/WaterModal';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectDailyWater } from '../../redux/water/selectors';


const WaterList = ({ currentDate, monthNames }) => {
  const [showModal, setShowModal] = useState(false);
  const dailyWaterArray = useSelector(selectDailyWater);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };


  const { t } = useTranslation();
  const today = new Date();
  const initial = {
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
  };

  const isToday =
    initial.day === currentDate.day &&
    initial.month === currentDate.month &&
    initial.year === currentDate.year;


  return (
    <div className={css.container}>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        buttonTop={20}
        buttonRight={20}
      >
        <WaterModal operationType={'add'} onCloseModal={closeModal} />
      </Modal>
      <div className={css.topcontainer}>
        <h2 className={css.title}>
          {isToday
            ? 'Today'
            : `${currentDate.day}, ${monthNames[currentDate.month]}`}
        </h2>
        <div className={css.btncontainer}>
          <button className={css.btn} onClick={openModal}>
            <Iconsvg
              iconName="add-water"
              width={16}
              height={16}
              styles={css.svg}
            />
          </button>
          <p className={css.text}>{t('description.tracker.addWaterText')}</p>
        </div>
      </div>

      <ul className={css.list}>
        {dailyWaterArray.map(wateritem => {
          return (
            <li key={wateritem.id} className={css.item}>
              <WaterItem waterItem={wateritem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WaterList;
