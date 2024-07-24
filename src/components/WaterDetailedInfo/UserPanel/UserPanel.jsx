import css from './UserPanel.module.css';
import UserBar from './UserBar/UserBar';
import { selectUserProfile } from '../../../redux/user/selectors';
import { useSelector } from 'react-redux';

const UserPanel = () => {
  const userBar = useSelector(selectUserProfile);

  return (
    <div className={css.userPanelWrap} >
      <h3 className={css.userTitle}>
        <span className={css.fontGilroy}>Hello</span>
        <span className={css.fontGilroyBolt}>,{userBar.name || 'User'}!</span>
      </h3>
      <UserBar />
    </div>
  );
};

export default UserPanel;
