import React from 'react'
import Chart from '../Chart/Chart'
import DistanceChart from '../DistanceChart/DistanceChart'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import VehiclesMap from '../VehiclesMap/VehiclesMap'
import VehiclesStatus from '../VehiclesStatus/VehiclesStatus'
import './home.scss'

const Home = () => {
  const vehicles = [
    { _id: 1, lat: 51.51, lng: -0.1, name: 'Vehicle 1', moving: "Turned Left", speed: 12,  status: "active" },
    { _id: 2, lat: 51.52, lng: -0.11, name: 'Vehicle 2', moving: "Stoped", speed: 77,  status: "active"  },
    { _id: 3, lat: 51.53, lng: -0.12, name: 'Vehicle 3', moving: "Turned Left", speed: 22,  status: "inactive"  },
    { _id: 4, lat: 51.50, lng: -0.13, name: 'Vehicle 4', moving: "Turned Right", speed: 12,  status: "active"  },
    { _id: 5, lat: 51.53, lng: -0.14, name: 'Vehicle 5', moving: "Turned Right", speed: 54,  status: "active"  },
    { _id: 6, lat: 51.48, lng: -0.15, name: 'Vehicle 6', moving: "Turned Left", speed: 33,  status: "active"  },
    { _id: 7, lat: 51.52, lng: -0.16, name: 'Vehicle 7', moving: "Stoped", speed: 12,  status: "active"  },
    { _id: 8, lat: 51.54, lng: -0.17, name: 'Vehicle 8', moving: "Turned Left", speed: 32,  status: "active"  },
    { _id: 9, lat: 51.52, lng: -0.10, name: 'Vehicle 9', moving: "Turned Right", speed: 107,  status: "active"  },
    { _id: 10, lat: 51.49, lng: -0.11, name: 'Vehicle 10', moving: "Turned Right", speed: 89,  status: "inactive"  },
    // Add more vehicle data here
];
  return (
    <div className='home'>
            <Navbar />
       

        <div className="home_main">
            <div className="home_sidebar">
                <Sidebar />
            </div>
            
            <div className="vehicles">
                <VehiclesMap />

                <div className="vehicles_status">
                  <VehiclesStatus vehicles={vehicles}  />

                  <div className="charts">
                    <Chart vehicles={vehicles} />

                    <DistanceChart vehicles={vehicles} />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home