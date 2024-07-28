import css from './StatisticsSchedule.module.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const StatisticsSchedule = ({ data }) => {
  // const data = [
  //   {
  //     day: '16',
  //     pv: 0.8,
  //     amt: 2.5,
  //   },
  //   {
  //     day: '17',
  //     pv: 1.3,
  //     amt: 2.5,
  //   },
  //   {
  //     day: '18',
  //     pv: 0.5,
  //     amt: 2.5,
  //   },
  //   {
  //     day: '19',
  //     pv: 1.8,
  //     amt: 2.5,
  //   },
  //   {
  //     day: '20',
  //     pv: 1.3,
  //     amt: 2.5,
  //   },
  //   {
  //     day: '21',
  //     pv: 2,
  //     amt: 2.5,
  //   },
  //   {
  //     day: '22',
  //     pv: 1.6,
  //     amt: 2.5,
  //   },
  // ];

  return (
    <div className={css.container}>
      <AreaChart
        width={604}
        height={340}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#9be1a0" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#9be1a0" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <YAxis
          dataKey="dailyRequirement"
          tickLine={false}
          axisLine={false}
          tickCount="6"
          unit=" L"
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="basic"
          dataKey="volume"
          stroke="#9be1a0"
          fillOpacity={1}
          fill="url(#colorPv)"
          dot={{ stroke: '#9be1a0', fill: '#fff', strokeWidth: '2px', r: 8 }}
        />
      </AreaChart>
    </div>
  );
};

export default StatisticsSchedule;
