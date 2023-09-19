import React from 'react';
import { FaCarAlt, FaDotCircle } from 'react-icons/fa';
import RoundChart from '../RoundChart/RoundChart';
import './chart.scss';

const Chart = ({vehicles, loading}) => {
        // Calculate the count of active and inactive vehicles
        const activeCount = vehicles.filter((vehicle) => vehicle.status === 'active').length;
        const inactiveCount = vehicles.filter((vehicle) => vehicle.status === 'inactive').length;

  return (
    <div className='chart_component'>
      <div className='active_inactiv'>
        <div className='status_icon'>
            <FaCarAlt size={22} className='icon'  />
          <h3>Active and Inactive vehicles</h3>
        </div>

        {loading ? <div className='loader_div'> <span className="loader"></span> </div> :
        <div className='active_inactiv_lists'>
          <div className='active_list'>
            <p><FaDotCircle style={{marginRight: "5px"}} size={13} /> Active vehicles</p>
            <p>{activeCount}</p>
          </div>

          <div className='inactive_list'>
            <p> <FaDotCircle style={{marginRight: "5px"}} size={13} /> Inactive vehicles</p>
            <p>{inactiveCount}</p>
          </div>
        </div>
      }
      </div>
      
      <RoundChart vehicles={vehicles} />
    </div>
  )
}

export default Chart