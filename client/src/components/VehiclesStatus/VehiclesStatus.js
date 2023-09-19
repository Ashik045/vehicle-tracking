import React from 'react';
import { MdOutlineStop, MdSensors, MdTurnLeft, MdTurnRight } from 'react-icons/md';
import './vehiclesstatus.scss';

const VehiclesStatus = ({vehicles, size, loading}) => {
  return (
    <div className='VehiclesStatus'>
        <div className='status_icon'>
            <MdSensors size={25} className='icon'  />
            <h3>Live Status</h3>
        </div>

        <div className='vehicles'>
            {loading ? <div className='loader_div'> <span className="loader"></span> </div> : vehicles.slice(0, size).map((vehicle) => {
                return <div className='vehicles_info' key={vehicle._id}>
                    <div className='status_icons'>
                        {vehicle.moving === "Turned Left" && <MdTurnLeft size={22} style={{color: "#3d3c42"}} />}
                        {vehicle.moving === "Turned Right" && <MdTurnRight size={22} style={{color: "#3d3c42"}} />}
                        {vehicle.moving === "Stoped" && <MdOutlineStop size={22} style={{color: "#3d3c42"}} />}
                    </div>

                    <div className='vehicles_details'>
                        <div className='vehicles_name_date'>
                            <p >{vehicle.name}</p>
                            <p >{vehicle.status}</p>
                        </div>
                        
                        <div className='vehicles_position_speed'>
                            <p style={{fontWeight: "600"}}>{vehicle.moving}</p>
                            <p>{vehicle.speed} kph</p>
                        </div>
                    </div>
                </div>
            })}

            {(!loading && vehicles.length === 0) && <p style={{"textAlign": "center"}}>No data to show!</p>}
        </div>
    </div>
  )
}

export default VehiclesStatus