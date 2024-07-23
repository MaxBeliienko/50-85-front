import css from './WaterItem.module.css';
import Iconsvg from '../Icon';
import { useDispatch } from 'react-redux';
import { deleteWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';
import Modal from '../Modal';
import { useState } from 'react';
import DeleteWaterModal from '../deleteWaterModal/DeleteWaterModal';
import WaterModal from '../waterModal/WaterModal';

const WaterItem = ({ waterItem }) => {
  const dispatch = useDispatch();

  // const handleDelete = () => {
  //   console.log(waterItem.id);
  //   dispatch(deleteWater(waterItem.id));
  //   toast.success('Successfully delet');
  // };

  const handleEdit = () => {
    console.log(waterItem.id);
    // open modal edit water
  };

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
        <DeleteWaterModal closeModal={closeModal} />
      </Modal>
      <Modal
        showModal={showEditModal}
        closeModal={closeShowEditModal}
        buttonTop={20}
        buttonRight={20}
      >
        {' '}
        <WaterModal
          operationType={'edit'}
          onEditWater={handleEdit}
          onClose={closeModal}
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
