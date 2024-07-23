import { useState } from 'react';
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

const MainWaterInfo = () => {
  const [consumed, setConsumed] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dailyNorma = 1.5;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addWater = amount => {
    setConsumed(prev => Math.min(prev + amount, dailyNorma));
    closeModal();
  };

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
        <WaterModal operationType="add" onAddWater={addWater} />
      </Modal>
    </>
  );
};

export default MainWaterInfo;
