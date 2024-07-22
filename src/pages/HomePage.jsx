import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import styles from '../stylesPages/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};
export default HomePage;
