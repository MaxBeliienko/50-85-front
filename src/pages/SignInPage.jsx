import Logo from '../components/Logo/Logo';
import SignInForm from '../components/SignInForm/SignInForm';

import styles from '../stylesPages/SignInPage.module.css';

const SignInPage = () => {
  return (
    <div className={styles.mainWrapper}>
      <Logo />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
