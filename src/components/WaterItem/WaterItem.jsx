import css from './WaterItem.module.css';
import Iconsvg from '../Icon';
import Modal from '../Modal';
import { useState } from 'react';
import DeleteWaterModal from '../deleteWaterModal/DeleteWaterModal';
import WaterModal from '../waterModal/WaterModal';
import { useTranslation } from 'react-i18next';

const WaterItem = ({ waterItem, onEditWater, isToday }) => {
  
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const deleteWater = () => {
    setShowModal(false);
    onEditWater();
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const openShowEditModal = () => {
    setShowEditModal(true);
  };
  const closeShowEditModal = () => {
    setShowEditModal(false);
  };
  const editWater = () => {
    setShowEditModal(false);
    onEditWater();
  };

  const { t } = useTranslation();
  return (
    <>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        buttonTop={20}
        buttonRight={20}
      >
        <DeleteWaterModal
          closeModal={deleteWater}
          id={waterItem._id}
          isToday={isToday}
        />
      </Modal>
      <Modal
        showModal={showEditModal}
        closeModal={closeShowEditModal}
        buttonTop={20}
        buttonRight={20}
      >
        <WaterModal
          operationType={'edit'}
          onCloseModal={editWater}
          waterItem={waterItem}
        />
      </Modal>
      <div className={css.container}>
        <Iconsvg
          iconName={'water-glass'}
          styles={css.svg}
          height={38}
          width={38}
        />
        <div className={css.data}>
          <p className={css.text}>
            {waterItem.volume} {t('description.tracker.ml')}
          </p>
          <p className={css.text}>
            <span>{waterItem.time} AM</span>
          </p>
        </div>
        <div className={css.btns}>
          <button className={css.btn} onClick={openShowEditModal}>
            <Iconsvg
              iconName={'pencil'}
              styles={css.icons}
              height={16}
              width={16}
            />
          </button>
          <button className={css.btn} onClick={openModal}>
            <Iconsvg
              iconName={'trash'}
              styles={css.icons}
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
