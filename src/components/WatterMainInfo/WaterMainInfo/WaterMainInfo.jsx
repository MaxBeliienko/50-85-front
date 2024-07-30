import { useEffect, useState } from 'react';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterbtn.jsx';
import WaterModal from '../../waterModal/WaterModal.jsx';
import css from './WaterMainInfo.module.css';
import Logo from '../../Logo/Logo.jsx';
import bottle1 from '../../../public/images/bottle/bottle1.png';
import bottle2 from '../../../public/images/bottle/bottle2.png';
import bottle1t from '../../../public/images/bottle/bottle1t.png';
import bottle2t from '../../../public/images/bottle/bottle2t.png';
import bottle1d from '../../../public/images/bottle/bottle1d.png';
import bottle2d from '../../../public/images/bottle/bottle2d.png';
import Modal from '../../Modal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayWater } from '../../../redux/water/operations.js';
import { selectUser } from '../../../redux/auth/selectors.js';
// import { useDispatch } from 'react-redux';
// import { fetchDailyWater } from '../../../redux/water/operations.js';

const WaterMainInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useSelector(selectUser);
  const dailyNorma = userData.dailyRequirement;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodayWater());
  }, [dispatch]);

  // const monthData = useSelector(selectMonthWater);

  // const findTodayData = ({ day, month, year }) => {
  //   const todayStringFormat = `${day < 10 ? `0${day}` : day}.${
  //     month < 10 ? `0${month}` : month
  //   }.${year}`;
  //   const data = monthData.find(day => day.date === todayStringFormat) || {
  //     dailyRequirement: 0,
  //     percentage: '0%',
  //   };
  //   return data;
  // };
  // const { percentage } = findTodayData(today);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const percentage = 10;
  return (
    <>
      <div className={css.mainWaterInfo}>
        <img
          src={bottle1}
          srcSet={`${bottle1} 1x, ${bottle2} 2x, ${bottle1t} 1x, ${bottle2t} 2x, ${bottle1d} 1x, ${bottle2d} 2x`}
          alt="Water"
          className={css.waterImage}
          loading="lazy"
        />
        <Logo />
        <div className={css.content}>
          <WaterDailyNorma dailyNorma={dailyNorma} />
          <WaterProgressBar dailyNorma={dailyNorma} />
          <AddWaterBtn onAddWater={openModal} />
        </div>
      </div>
      <Modal
        showModal={isModalOpen}
        closeModal={closeModal}
        buttonTop={20}
        buttonRight={20}
      >
        <WaterModal operationType="add" onCloseModal={closeModal} />
      </Modal>
    </>
  );
};

export default WaterMainInfo;
