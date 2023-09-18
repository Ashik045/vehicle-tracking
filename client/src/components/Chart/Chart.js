import React from 'react';
import RoundChart from '../RoundChart/RoundChart';
import './chart.scss';

const Chart = ({vehicles}) => {

  return (
    <div className='chart_component'>
      <div className='active_inactiv'>
        <h3>Active and Inactive vehicles</h3>
        <RoundChart vehicles={vehicles} />
      </div>

      <div className='active&inactive'></div>
    </div>
  )
}

export default Chart