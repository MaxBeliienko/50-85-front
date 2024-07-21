import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = ({ dailyNorma }) => {
  return (
    <div className={css.dailyNorma}>
      <div className={css.waterDailyNorma}>
        <span className={css.highlight}>{dailyNorma} L</span>
        <p>My daily norma</p>
      </div>
    </div>
  );
};

export default WaterDailyNorma;
