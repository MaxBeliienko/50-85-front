import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import styles from '../stylesPages/HomePage.module.css';
// import { useSelector } from 'react-redux';
// import { selectLoading } from '../redux/water/selectors';
// import { useEffect } from 'react';
// import { fetchDailyWater } from '../redux/water/operations';

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};
export default HomePage;
