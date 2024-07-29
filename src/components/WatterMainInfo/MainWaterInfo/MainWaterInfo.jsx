import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterbtn.jsx';
import WaterModal from '../../waterModal/WaterModal.jsx';
import css from './MainWaterInfo.module.css';
import Logo from '../../Logo/Logo.jsx';
import bottle1 from '../../../public/images/bottle/bottle1.png';
import bottle2 from '../../../public/images/bottle/bottle2.png';
import bottle1t from '../../../public/images/bottle/bottle1t.png';
import bottle2t from '../../../public/images/bottle/bottle2t.png';
import bottle1d from '../../../public/images/bottle/bottle1d.png';
import bottle2d from '../../../public/images/bottle/bottle2d.png';
import Modal from '../../Modal.jsx';
import { fetchDailyWater } from '../../../redux/water/operations.js';
import { selectDailyWater } from '../../../redux/water/selectors';

const MainWaterInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const dailyWaterArray = useSelector(selectDailyWater);
  const dailyNorma = 1.5;

  // useEffect(() => {
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const month = today.getMonth() + 1;
  //   const day = today.getDate();
  //   // console.log('Fetching data for date:', { year, month, day });
  //   dispatch(fetchDailyWater({ year, month, day }));
  // }, [dispatch]);

  // console.log('dailyWaterArray:', dailyWaterArray);

  const consumed = dailyWaterArray.reduce((acc, item) => {
    if (item.data && item.data.volume) {
      return acc + item.data.volume;
    }
    return acc;
  }, 0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const handleAddWater = volume => {
  //   const today = new Date();
  //   const time = today.toISOString();
  //   dispatch(addWater({ volume, time })).then(() => {
  //     closeModal();
  //     dispatch(
  //       fetchDailyWater({
  //         year: today.getFullYear(),
  //         month: today.getMonth() + 1,
  //         day: today.getDate(),
  //       })
  //     );
  //   });
  // };

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
          <WaterProgressBar consumed={consumed} dailyNorma={dailyNorma} />
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

export default MainWaterInfo;
