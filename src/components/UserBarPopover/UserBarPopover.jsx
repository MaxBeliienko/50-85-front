import { useState } from 'react';
import Modal from '../Modal';
import { useTranslation } from 'react-i18next';
import Iconsvg from '../Icon';
import LogOutModal from '../LogOutModal';
import UserSettingsModal from '../WaterDetailedInfo/UserPanel/UserBar/components/UserSettingsModal/UserSettingsModal';
import css from './UserBarPopover.module.css';

const UserBarPopover = ({ isPopupOpen, onChangeUserData }) => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isUserSettingsModalOpen, setIsUserSettingsModalOpen] = useState(false);

  const openUserSettingsModal = () => {
    setIsUserSettingsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeUserSettingsModal = () => {
    setIsUserSettingsModalOpen(false);
    document.body.style.overflow = 'auto';
    onChangeUserData();
  };

  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
  };
  const closeLogOutModal = () => {
    setIsLogOutModalOpen(false);
  };

  const { t } = useTranslation();
  return (
    <>
      {' '}
      {isPopupOpen && (
        <div className={css.popupMenu}>
          <div className={css.popupMenuWrap}>
            <button
              className={css.popupMenuButton}
              onClick={openUserSettingsModal}
            >
              <Iconsvg
                width={16}
                height={16}
                iconName="settings"
                styles={css.svg}
              />
              {t('description.userBar.setingsText')}
            </button>
          </div>
          <div className={css.popupMenuContainer}>
            <button className={css.popupMenuButton} onClick={openLogOutModal}>
              <Iconsvg
                width={16}
                height={16}
                iconName={'log-out'}
                styles={css.svg}
              />
              {t('description.userBar.logOutText')}
            </button>
          </div>
        </div>
      )}
      <Modal
        showModal={isLogOutModalOpen}
        closeModal={closeLogOutModal}
        buttonTop={20}
        buttonRight={20}
      >
        <LogOutModal closeModal={closeLogOutModal} />
      </Modal>
      <UserSettingsModal
        showModal={isUserSettingsModalOpen}
        closeModal={closeUserSettingsModal}
      />
    </>
  );
};

export default UserBarPopover;
