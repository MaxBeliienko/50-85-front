import { useCallback, useEffect, useState } from 'react';
import css from './UserBar.module.css';
import Iconsvg from '../../../Icon';
import { selectUserProfile } from '../../../../redux/user/selectors';
import { useSelector } from 'react-redux';
import UserBarPopover from '../../../UserBarPopover/UserBarPopover';

const UserBar = () => {
  const userBar = useSelector(selectUserProfile);
  console.log(userBar);

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
            <span className={css.userName}>
              {userBar.name || 'User'}
            </span>

            <div className={css.userWpapper}>
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
          </div>
        </button>
        <UserBarPopover isPopupOpen={isPopupOpen}/>
      </div>
    </>
  );
};

export default UserBar;
