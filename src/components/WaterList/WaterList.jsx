import { useState } from 'react';
import Iconsvg from '../Icon';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import Modal from '../Modal';
import WaterModal from '../waterModal/WaterModal';

const WaterList = ({ waterlist, currentDate, monthNames }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

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
          {currentDate.day}, {monthNames[currentDate.month]}
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
          <p className={css.text}>Add water</p>
        </div>
      </div>

      <ul className={css.list}>
        {waterlist.map(wateritem => {
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
