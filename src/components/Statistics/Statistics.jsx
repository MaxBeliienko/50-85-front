import css from './Statistics.module.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Iconsvg from '../Icon';
// import { useTranslation } from 'react-i18next';

const Statistics = ({
  currentDate,
  monthNames,
  handlePreviousMonth,
  handleNextMonth,
  handleClick,
}) => {
  // const { t } = useTranslation();
  const data = [
    {
      day: '16',
      pv: 0.8,
      amt: 2.5,
    },
    {
      day: '17',
      pv: 1.3,
      amt: 2.5,
    },
    {
      day: '18',
      pv: 0.5,
      amt: 2.5,
    },
    {
      day: '19',
      pv: 1.8,
      amt: 2.5,
    },
    {
      day: '20',
      pv: 1.3,
      amt: 2.5,
    },
    {
      day: '21',
      pv: 2,
      amt: 2.5,
    },
    {
      day: '22',
      pv: 1.6,
      amt: 2.5,
    },
  ];
  return (
    <>
      <div className={css.title}>
        <h2>Statistics</h2>
        <div className={css.blockcalendar}>
          <button className={css.btn} onClick={handlePreviousMonth}>
            <Iconsvg iconName={'left'} width={5} height={9} styles={css.btn} />
          </button>
          <p>
            {monthNames[currentDate.month]}, {currentDate.year}
          </p>

          <button className={css.btn} onClick={handleNextMonth}>
            <Iconsvg iconName={'right'} width={5} height={9} styles={css.btn} />
          </button>
          <button className={css.btn} onClick={handleClick}>
            <Iconsvg
              iconName={'schedule'}
              styles={css.schedule}
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="50%">
        <AreaChart
          width={730}
          height={260}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#9be1a0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9be1a0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis dataKey="amt" tickLine={false} axisLine={false} tickCount="6" unit=" L" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="basic"
            dataKey="pv"
            stroke="#9be1a0"
            fillOpacity={1}
            fill="url(#colorPv)"
            dot={{ stroke: '#9be1a0', fill: '#fff', strokeWidth: '2px', r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Statistics;
