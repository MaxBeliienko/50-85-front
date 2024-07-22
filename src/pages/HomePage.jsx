import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import styles from '../stylesPages/HomePage.module.css';
import { Audio } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectLoading } from '../redux/water/selectors';
import { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';
// import { fetchDailyWater } from '../redux/water/operations';

const HomePage = () => {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // const date = { year: '2024', month: '07', day: '07' };
  // useEffect(() => {
  //   dispatch(fetchDailyWater(date));
  // }, [dispatch, date]);

  return (
    <div className={styles.homePageWrapper}>
      <WelcomeSection />
      <AdvantagesSection />
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
export default HomePage;
