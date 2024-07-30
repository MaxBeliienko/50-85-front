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
import { Hourglass } from 'react-loader-spinner';
import { selectIsLoading } from '../../redux/auth/selectors';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import ChooseDate from '../ChooseDate/ChooseDate';

const WaterList = ({ searchDate, monthNames, isToday }) => {
  const [showModal, setShowModal] = useState(false);

  const todayWaterArray = useSelector(selectTodayWater);
  const dailyWaterArray = useSelector(selectDailyWater);
  const choosedWaterArray = isToday ? todayWaterArray : dailyWaterArray;

  const loading = useSelector(selectIsLoading);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const currentMonthName = monthNames[Number(searchDate.month) - 1];

  return (
    <>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        buttonTop={20}
        buttonRight={20}
      >
        <WaterModal operationType={'add'} onCloseModal={closeModal} />
      </Modal>

      <div className={css.topcontainer}>
        <ChooseDate
          currentMonthName={currentMonthName}
          searchDate={searchDate}
          isToday={isToday}
        />
        {isToday && <AddWaterBtn openModal={openModal} />}
      </div>
      {loading && (
        <Hourglass
          visible={true}
          height="40"
          width="40"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#9BE1A0', '#72a1ed']}
        />
      )}
      <ul className={css.list}>
        {choosedWaterArray.map(wateritem => {
          return (
            <li key={wateritem._id} className={css.item}>
              <WaterItem waterItem={wateritem} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default WaterList;
