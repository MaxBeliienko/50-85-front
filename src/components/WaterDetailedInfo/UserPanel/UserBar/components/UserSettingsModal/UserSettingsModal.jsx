// import { useEffect } from 'react';
import Modal from '../../../../../Modal';
import styles from './UserSettingsModal.module.css';
// import { getUserProfile } from '../../../../../../redux/auth/operations';
import { useTranslation } from 'react-i18next';
import LocalizationSwitcher from '../../../../../LocalizationSwitcher/LocalizationSwitcher';
import UserSettingsForm from './components/UserSettingsForm/UserSettingsForm';

const UserSettingsModal = ({ showModal, closeModal }) => {
  // const dispatch = useDispatch();
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (showModal) {
  //     dispatch(getUserProfile());
  //   }
  // }, [dispatch, showModal]);

  return (
    <Modal
      showModal={showModal}
      closeModal={closeModal}
      buttonTop={40}
      buttonRight={40}
      title="Settings"
    >
      <div className={styles.settingsModal}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          <p className={styles.settingsModalTitle}>
            {t('description.settings.title')}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              gap: '28px',
            }}
          >
            <label className={styles.formGroupLabel}>
              {t('description.settings.language')}
            </label>
            <LocalizationSwitcher isSettings={true} />
          </div>
        </div>

        <UserSettingsForm closeModal={closeModal} />
      </div>
    </Modal>
  );
};

export default UserSettingsModal;
