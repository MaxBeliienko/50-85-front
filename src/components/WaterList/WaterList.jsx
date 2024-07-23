import { useEffect, useState } from 'react';
import Iconsvg from '../Icon';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import { selectError, selectLoading } from '../../redux/water/selectors';
import { fetchDailyWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';

const WaterList = ({ currentDate, monthNames, searchDate }) => {
  const [waterlist, setWaterlist] = useState([]);

  useEffect(() => {
    if (!searchDate.year || !searchDate.month || !searchDate.day) return;
    const fetchData = async () => {
      try {
        selectError(false);
        selectLoading(true);
        const data = await fetchDailyWater(
          searchDate.year,
          searchDate.month,
          searchDate.day
        );
        setWaterlist(data);
      } catch (error) {
        selectError(error);
        toast.error('Whoops, something went wrong!');
      } finally {
        selectLoading(false);
      }
    };
    fetchData();
  }, [searchDate.year, searchDate.month, searchDate.day]);

  return (
    <div className={css.container}>
      <div className={css.topcontainer}>
        <h2 className={css.title}>
          {currentDate.day}, {monthNames[currentDate.month]}
        </h2>
        <div className={css.btncontainer}>
          <button className={css.btn}>
            <Iconsvg
              iconName="add-water"
              width={10}
              height={10}
              styles={css.styles}
            />
          </button>
          <p className={css.text}>Add water</p>
        </div>
      </div>

      <ul className={css.list}>
        {waterlist.map((wateritem, id) => {
          return (
            <li key={id} className={css.item}>
              <WaterItem waterItem={wateritem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WaterList;
