import React from 'react';
import { MdOutlineMultipleStop } from 'react-icons/md';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import './distanceChart.scss';

const DistanceChart = ({vehicles, size, loading}) => {
  const data = vehicles?.slice(0, size).map((vehicle) => ({
    name: vehicle.name,
    distanceCovered: vehicle.distanceCovered,
    speed: vehicle.speed
  }));

  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;
  
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value.split(' ')[1]}
        </text>
      </g>
    );
  };

  // creating a custom tooltip
  const renderCustomTooltip = (props) => {
    const { active, payload, label } = props;
  
    if (active) {
      return (
        <div className="custom-tooltip">
          <p>{`Name: ${label}`}</p>
          {payload?.map((entry) => (
            <p key={entry.dataKey}>
              {entry.dataKey === 'speed'
                ? `${entry.name}: ${entry.value}kph`
                : `${entry.name}: ${entry.value}km`}
            </p>
        ))}
        </div>
      );
    }
  
    return null;
  };
  

  return (
    <div className='distance_covered'>
        <div className='distance_icon'>
            <MdOutlineMultipleStop size={24} className='icon'  />
          <h3>Vehicle Distance</h3>
        </div>

        {(!loading && vehicles.length === 0) && <p style={{"textAlign": "center"}}>No data to show!</p>}

        <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip  /> */}
          <Tooltip content={renderCustomTooltip} />
          <Legend />
          <Bar dataKey="distanceCovered" fill="#00C49F" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="speed" fill="#FF8042" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DistanceChart