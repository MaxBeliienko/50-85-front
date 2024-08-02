import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Iconsvg from '../../Icon';
import { getGoogleOAuthUrl } from '../../../redux/auth/operations';
import styles from './GoogleAuth.module.css';

const GoogleAuth = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(getGoogleOAuthUrl());
  };

  return (
    <div className={styles.googleAuthWrapper}>
      <div className={styles.googleAuth}>
        <div className={styles.divider}>
          <span className={styles.dividerText}>
            {t('description.signIn.or')}
          </span>
        </div>

        <button onClick={handleGoogleLogin} className={styles.googleAuthButton}>
          {t('description.signIn.signUpGoogle')}{' '}
          <Iconsvg width={65} height={20} iconName={'logos_google'} />
        </button>
      </div>

      <div className={styles.terms}>
        <Link to="/privacy-policy">{t('description.useTerms.policy')}</Link>
        <br />
        <Link to="/terms-of-service">{t('description.useTerms.terms')}</Link>
      </div>
    </div>
  );
};

export default GoogleAuth;
