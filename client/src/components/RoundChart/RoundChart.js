import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';


const RoundChart = ({vehicles}) => {
      // Calculate the count of active and inactive vehicles
  const activeCount = vehicles.filter((vehicle) => vehicle.status === 'active').length;
  const inactiveCount = vehicles.filter((vehicle) => vehicle.status === 'inactive').length;
  
  const vehicledata = [
    { name: 'Active', value: activeCount },
    { name: 'Inactive', value: inactiveCount },
  ];

  const COLORS = [ '#00C49F', '#FF8042'];
  return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={vehicledata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            // fill="#82ca9d"
            label
          >
            {vehicledata.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
          </Pie>
          
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  )
}

export default RoundChart