import css from './TrackerPage.module.css';
import MainWaterInfo from '../components/WatterMainInfo/MainWaterInfo/MainWaterInfo';
import WaterDetailedInfo from '../components/WaterDetailedInfo/UserPanel/WaterDetailedInfo';

const TrackerPage = () => {
  return (
    <div className={css.container}>
      <MainWaterInfo />
      <WaterDetailedInfo />
      {/* <div className={css.waterCalendarcontainer}> */}
      {/* <UserButton /> */}
      {/* <WaterList
          currentDate={initialDate}
          monthNames={monthNames}
          searchDate={searchDate}
          today={today}
        /> */}
      {/* <CalendarSection
          currentDate={currentDate}
          monthNames={monthNames}
          handleNextMonth={handleNextMonth}
          handlePreviousMonth={handlePreviousMonth}
          onChangeDate={onChangeDate}
          today={today}
          monthData={monthData}
        /> */}
      {/* </div> */}
    </div>
  );
};

export default TrackerPage;
