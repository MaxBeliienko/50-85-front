import css from './WaterItem.module.css';
import Iconsvg from '../Icon';

const WaterItem = ({ waterItem }) => {
  console.log(waterItem);
  return (
    <div className={css.container}>
      <Iconsvg
        width={16}
        height={16}
        iconName={'water-glass'}
        styles={css.icon}
      />
      <div className={css.data}>
        <p className={css.text}>{waterItem.volume} ml</p>
        <p className={css.text}>
          <span>{waterItem.time} AM</span>
        </p>
      </div>
      <div className={css.btns}>
        <button className={css.btn}>
          <Iconsvg
            width={16}
            height={16}
            iconName={'pencil'}
            styles={css.icon}
          />
        </button>
        <button className={css.btn}>
          <Iconsvg
            width={16}
            height={16}
            iconName={'trash'}
            styles={css.icon}
          />
        </button>
      </div>
    </div>
  );
};
export default WaterItem;
