import { useState } from 'react';
import css from './UserPanel.module.css';

const UserButton = ({ user }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={css["user-panel-wrap"]}>
      <h3>Hello, {user.name}!</h3>
      <div className={css['user-button-container']}>
        <button className={css['user-button']} onClick={togglePopup}>
          <div className={css['button-container']}>
            <img src={user.photo} alt="User" className={css['user-photo']} />
            <span className={css['user-name']}>{user.name}</span>
          </div>
        </button>

        {isPopupOpen && (
          <div className={css['popup-menu']}>
            <a href="/settings">Settings</a>
            <a href="/logout">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserButton;
