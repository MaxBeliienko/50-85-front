import css from './WaterItem.module.css';
import Iconsvg from '../Icon';
import { useDispatch } from 'react-redux';
import { deleteWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';

const WaterItem = ({ waterItem }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWater(waterItem._id));
    toast.success('Successfully delet');
  };

  return (
    <div className={css.container}>
      <Iconsvg
        iconName={'water-glass'}
        styles={css.svg}
        width={32}
        height={36}
      />
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
        <button className={css.btn} onClick={handleDelete}>
          <Iconsvg iconName={'trash'} />
        </button>
      </div>
    </div>
  );
};
export default WaterItem;
