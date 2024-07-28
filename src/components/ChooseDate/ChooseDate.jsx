import css from './ChooseDate.module.css';

const ChooseDate = ({ isToday, searchDate, currentMonthName }) => {
  return (
    <h2 className={css.title}>
      {isToday ? 'Today' : `${searchDate.day}, ${currentMonthName}`}
    </h2>
  );
};

export default ChooseDate;
