import css from './WaterItem.module.css';
import Iconsvg from '../Icon';

const WaterItem = ({ waterItem }) => {
  console.log(waterItem);
  return (
    <div className={css.container}>
      <Iconsvg iconName={'water-glass'} styles={css.svg} />
      <div className={css.data}>
        <p className={css.text}>{waterItem.volume} ml</p>
        <p className={css.text}>
          <span>{waterItem.time} AM</span>
        </p>
      </div>
      <div className={css.btns}>
        <button className={css.btn}>
          <Iconsvg iconName={'pencil'} />
        </button>
        <button className={css.btn}>
          <Iconsvg iconName={'trash'} />
        </button>
      </div>
    </div>
  );
};
export default WaterItem;
