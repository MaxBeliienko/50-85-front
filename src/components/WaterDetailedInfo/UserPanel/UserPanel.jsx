import { useState } from 'react';
import css from './UserPanel.module.css';
// import { selectUser } from '../../../redux/user/selectors';
// import { useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';

const UserButton = () => {
  // const user = useSelector(selectUser) //TODO коли буде зроблено redux розкоментувати.
  const user = {
    // name: '',
    image: 'https://via.placeholder.com/40',
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const onOpenSettings = () => {};
  const onOpenLogout = () => {};
  const arrowClass = !isPopupOpen ? '' : 'rotate-arrow';
  return (
    <div className={css['user-panel-wrap']}>
      <h3>Hello, {user.name || 'User'}!</h3>
      <div className={css['user-button-container']}>
        <button className={css['user-button']} onClick={togglePopup}>
          <div className={css['button-container']}>
            <span className={css['user-name']}>{user.name || 'User'}</span>
            <img src={user.image} alt="User" className={css['user-photo']} />
            <div className={css[arrowClass]}>
              <IoIosArrowDown />
            </div>
          </div>
        </button>

        {isPopupOpen && (
          <div className={css['popup-menu']}>
            <button onClick={onOpenSettings}>Settings</button>
            <button onClick={onOpenLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserButton;
