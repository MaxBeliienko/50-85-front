import Iconsvg from '../Icon';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';

const WaterList = ({ waterlist, currentDate, monthNames }) => {
  return (
    <div className={css.container}>
      <div className={css.topcontainer}>
        <h2 className={css.title}>
          {currentDate.day}, {monthNames[currentDate.month]}
        </h2>
        <div className={css.btncontainer}>
          <button className={css.btn}>
            <Iconsvg iconName="add-water" />
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
