import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import styles from '../stylesPages/SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <div className={styles.signUpPageWrapper}>
      <div className={styles.formWrapper}>
        <SignUpForm />
      </div>
      <div className={styles.disabled}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignUpPage;
