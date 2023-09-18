import React from 'react';
import { MdOutlineStop, MdSensors, MdTurnLeft, MdTurnRight } from 'react-icons/md';
import './vehiclesstatus.scss';

const VehiclesStatus = ({vehicles}) => {
  return (
    <div className='VehiclesStatus'>
        <div className='status_icon'>
            <MdSensors size={25} className='icon'  />
            <h3>Live Status</h3>
        </div>

        <div className='vehicles'>
            {vehicles.map((vehicle) => {
                return <div className='vehicles_info'>
                    <div className='status_icons'>
                        {vehicle.moving === "Turned Left" && <MdTurnLeft />}
                        {vehicle.moving === "Turned Right" && <MdTurnRight />}
                        {vehicle.moving === "Stoped" && <MdOutlineStop />}
                    </div>

                    <div className='vehicles_details'>
                        <div className='vehicles_name_date'>
                            <p>{vehicle.name}</p>
                            <p>{vehicle.status}</p>
                        </div>
                        
                        <div className='vehicles_position_speed'>
                            <p>{vehicle.moving}</p>
                            <p>{vehicle.speed} kph</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default VehiclesStatus