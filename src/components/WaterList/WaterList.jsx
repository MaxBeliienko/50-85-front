import { useState } from 'react';
import Iconsvg from '../Icon';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import Modal from '../Modal';
import WaterModal from '../waterModal/WaterModal';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectDailyWater } from '../../redux/water/selectors';
import { Hourglass } from 'react-loader-spinner';
import { selectIsLoading } from '../../redux/user/selectors';

const WaterList = ({ searchDate, monthNames, isToday }) => {
  const [showModal, setShowModal] = useState(false);
  const dailyWaterArray = useSelector(selectDailyWater);
  const loading = useSelector(selectIsLoading);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const { t } = useTranslation();
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
        <h2 className={css.title}>
          {isToday ? 'Today' : `${searchDate.day}, ${currentMonthName}`}
        </h2>
        {isToday && (
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
        )}
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
        {dailyWaterArray.map(wateritem => {
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
