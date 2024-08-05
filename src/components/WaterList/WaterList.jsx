import { useState } from 'react';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import Modal from '../Modal';
import WaterModal from '../waterModal/WaterModal';
import { useSelector } from 'react-redux';
import {
  selectDailyWater,
  selectTodayWater,
} from '../../redux/water/selectors';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import ChooseDate from '../ChooseDate/ChooseDate';
import { useTranslation } from 'react-i18next';

const WaterList = ({ searchDate, monthNames, isToday, onEditWater }) => {
  const [showModal, setShowModal] = useState(false);

  const todayWaterArray = useSelector(selectTodayWater);
  const dailyWaterArray = useSelector(selectDailyWater);
  const choosedWaterArray = isToday ? todayWaterArray : dailyWaterArray;

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const editWater = () => {
    setShowModal(false);
    onEditWater();
  };

  const currentMonthName = monthNames[Number(searchDate.month) - 1];

  const { t } = useTranslation();

  return (
    <>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        buttonTop={20}
        buttonRight={20}
      >
        <WaterModal operationType={'add'} onCloseModal={editWater} searchDate={ searchDate} />
      </Modal>

      <div className={css.topcontainer}>
        <ChooseDate
          currentMonthName={currentMonthName}
          searchDate={searchDate}
          isToday={isToday}
        />
        <AddWaterBtn openModal={openModal} />
      </div>
      {choosedWaterArray.length > 0 ? (
        <ul className={css.list}>
          {choosedWaterArray.map(wateritem => {
            return (
              <li key={wateritem._id} className={css.item}>
                <WaterItem
                  waterItem={wateritem}
                  onEditWater={onEditWater}
                  isToday={isToday}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={css.datacontainer}>
          <p className={css.data}> {t('description.tracker.noData')}</p>
        </div>
      )}
    </>
  );
};

export default WaterList;
