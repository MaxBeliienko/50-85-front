import { useState } from 'react';
import css from './UserPanel.module.css';
// import { selectUser } from '../../../redux/user/selectors';
// import { useSelector } from 'react-redux';
import Iconsvg from '../../Icon';
import { FaRegFaceSmileWink } from 'react-icons/fa6';

const UserButton = () => {
  // const user = useSelector(selectUser) //TODO коли буде зроблено redux розкоментувати.
  const user = {};
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const onOpenSettings = () => {};
  const onOpenLogout = () => {};
  const arrowClass = !isPopupOpen ? '' : 'rotate-arrow';
  return (
    <div className={css.userPanelWrap}>
      <h3 className={css.userTitle}>
        <span className={css.fontGilroy}>Hello</span>
        <span className={css.fontGilroyBolt}>,{user.name || 'User'}!</span>
      </h3>
      <div className={css.userButtonContainer}>
        <button className={css.userButton} onClick={togglePopup}>
          <div className={css.buttonContainer}>
            <span className={css.userName}>{user.name || 'User'}</span>
            {user.image || <FaRegFaceSmileWink className={css.userPhoto} />}
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
              <button className={css.popupMenuButton} onClick={onOpenSettings}>
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
              <button className={css.popupMenuButton} onClick={onOpenLogout}>
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
    </div>
  );
};

export default UserButton;
