import css from './UserPanel.module.css';
import UserBar from './UserBar/UserBar';
import { selectUserProfile } from '../../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const UserPanel = ({ onChangeUserData }) => {
  const user = useSelector(selectUserProfile);
  const { t } = useTranslation();
  return (
    <div className={css.userPanelWrap}>
      <h3 className={css.userTitle}>
        <span className={css.fontGilroy}>
          {t('description.userBar.helloText')}
        </span>
        <span className={css.fontGilroyBolt}>
          ,{user.name || t('description.userBar.userText')}!
        </span>
      </h3>
      <UserBar onChangeUserData={onChangeUserData} />
    </div>
  );
};

export default UserPanel;
