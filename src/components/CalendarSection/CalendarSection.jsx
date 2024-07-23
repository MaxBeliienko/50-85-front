import Calendar from '../Calendar/Calendar';
import css from './CalendarSection.module.css';
import Iconsvg from '../Icon';

const CalendarSection = ({
  waterQuantity,
  currentDate,
  monthNames,
  handlePreviousMonth,
  handleNextMonth,
  onChangeDate,
}) => {
  return (
    <>
      <div className={css.title}>
        <h2>Month</h2>
        <div className={css.blockcalendar}>
          <button className={css.btn} onClick={handlePreviousMonth}>
            <Iconsvg
              iconName={'left'}
              width={4.5}
              height={9}
              styles={css.btn}
            />
          </button>
          <p>
            {monthNames[currentDate.month]}, {currentDate.year}
          </p>

          <button className={css.btn} onClick={handleNextMonth}>
            <Iconsvg
              iconName={'right'}
              width={4.5}
              height={9}
              styles={css.btn}
            />
          </button>
          <button className={css.btn}>
            <Iconsvg
              iconName={'schedule'}
              styles={css.schedule}
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>

      {currentDate.year !== null && currentDate.month !== null ? (
        <Calendar
          year={currentDate.year}
          month={currentDate.month}
          currentDay={currentDate.day}
          waterQuantity={waterQuantity}
          onChangeDate={onChangeDate}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CalendarSection;
