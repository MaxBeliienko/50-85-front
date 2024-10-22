import { useCallback, useEffect, useState } from 'react';
import css from './UserBar.module.css';
import Iconsvg from '../../../Icon';
import { selectUserProfile } from '../../../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import UserBarPopover from '../../../UserBarPopover/UserBarPopover';
import defaultAvatar from '../../../../public/images/defaultAvatar.png';

const UserBar = ({ onChangeUserData }) => {
  const user = useSelector(selectUserProfile);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const onClosePopup = useCallback(e => {
    const elem = e.target.closest('[data-popup]');
    if (elem) return;

    setIsPopupOpen(false);
  }, []);

  const arrowClass = !isPopupOpen ? '' : 'rotate-arrow';

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('click', onClosePopup);
    } else {
      document.removeEventListener('click', onClosePopup);
    }
  }, [isPopupOpen, onClosePopup]);

  return (
    <>
      <div className={css.userButtonContainer} data-popup="true">
        <button className={css.userButton} onClick={togglePopup}>
          <div className={css.buttonContainer}>
            <span className={css.userName}>{user.name || 'User'}</span>

            <div className={css.userWpapper}>
              <img
                src={user.photo || defaultAvatar}
                alt="user profile picture"
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
          </div>
        </button>
        <UserBarPopover
          isPopupOpen={isPopupOpen}
          onChangeUserData={onChangeUserData}
        />
      </div>
    </>
  );
};

export default UserBar;
