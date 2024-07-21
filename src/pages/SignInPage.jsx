import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import SignInForm from '../components/SignInForm/SignInForm';

import styles from '../stylesPages/SignInPage.module.css';

const SignInPage = () => {
  return (
    <div className={styles.signInPageWrapper}>
      <div className={styles.formWrapper}>
        <SignInForm />
      </div>
      <div className={styles.disabled}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignInPage;
