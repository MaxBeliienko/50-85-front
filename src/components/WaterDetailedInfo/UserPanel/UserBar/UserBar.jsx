import { useCallback, useEffect, useState } from 'react';
import css from './UserBar.module.css';
import Iconsvg from '../../../Icon';
import { selectUserProfile } from '../../../../redux/user/selectors';
import { useSelector } from 'react-redux';
import LogOutModal from '../../../LogOutModal';

const UserBar = () => {
  const userBar = useSelector(selectUserProfile);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const UserSettingsModal = () => {};
  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
  };
  const closeLogOutModal = () => {
    setIsLogOutModalOpen(false);
  };
  const onClosePopup = useCallback(e => {
      const elem = e.target.closest("[data-popup]");
      console.log(elem);
      if (elem) return;
      console.log("hello");
    setIsPopupOpen(false);
  }, []);
  const arrowClass = !isPopupOpen ? '' : 'rotate-arrow';
  useEffect(() => {
    console.log(isPopupOpen);
    if (isPopupOpen) {
      document.addEventListener('click', onClosePopup);
    } else {
      document.removeEventListener('click', onClosePopup);
    }
  }, [isPopupOpen]);
  return (
    <>
      <div className={css.userButtonContainer} data-popup="true">
        <button className={css.userButton} onClick={togglePopup}>
          <div className={css.buttonContainer}>
            <span className={css.userName}>{userBar.name || 'User'}</span>

            <img
              src={
                userBar.avatar ||
                'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
              }
              className={css.userPhoto}
            />

            <div className={css[arrowClass]}>
              <Iconsvg
                width={10}
                height={6}
                iconName="vector"
                styles={css.svg}
              />
            </div>
          </div>
        </button>
        {isPopupOpen && (
          <div className={css.popupMenu}>
            <div className={css.popupMenuWrap}>
              <button
                className={css.popupMenuButton}
                onClick={UserSettingsModal}
              >
                <Iconsvg
                  width={16}
                  height={16}
                  iconName="settings"
                  styles={css.svg}
                />
                Settings
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
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
      {isLogOutModalOpen && <LogOutModal closeModal={closeLogOutModal} />}
    </>
  );
};

export default UserBar;
