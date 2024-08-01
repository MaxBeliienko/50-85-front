import { ThreeCircles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <ThreeCircles
        height="300"
        width="300"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        wrapperClass="my-custom-class"
        visible={true}
        backgroundColor="#f0f0f0"
        secondaryColor="#ff6347"
        strokeWidth={3}
        animationDuration={800}
      />
    </div>
  );
};

export default Loader;
