import css from './WaterItem.module.css';
import Iconsvg from '../Icon';
import Modal from '../Modal';
import { useState } from 'react';
import DeleteWaterModal from '../deleteWaterModal/DeleteWaterModal';
import WaterModal from '../waterModal/WaterModal';

const WaterItem = ({ waterItem }) => {
  console.log(waterItem._id);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const openShowEditModal = () => {
    setShowEditModal(true);
  };
  const closeShowEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        buttonTop={20}
        buttonRight={20}
      >
        <DeleteWaterModal closeModal={closeModal} id={waterItem._id} />
      </Modal>
      <Modal
        showModal={showEditModal}
        closeModal={closeShowEditModal}
        buttonTop={20}
        buttonRight={20}
      >
        <WaterModal
          operationType={'edit'}
          onCloseModal={closeShowEditModal}
          waterItem={waterItem}
        />
      </Modal>
      <div className={css.container}>
        <Iconsvg
          iconName={'water-glass'}
          styles={css.svg}
          height={36}
          width={32}
        />
        <div className={css.data}>
          <p className={css.text}>{waterItem.volume} ml</p>
          <p className={css.text}>
            <span>{waterItem.time} AM</span>
          </p>
        </div>
        <div className={css.btns}>
          <button className={css.btn} onClick={openShowEditModal}>
            <Iconsvg
              iconName={'pencil'}
              styles={css.pencil}
              height={16}
              width={16}
            />
          </button>
          <button className={css.btn} onClick={openModal}>
            <Iconsvg
              iconName={'trash'}
              styles={css.trash}
              height={16}
              width={16}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default WaterItem;
