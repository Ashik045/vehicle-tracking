import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Chart from '../Chart/Chart'
import DistanceChart from '../DistanceChart/DistanceChart'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import VehiclesMap from '../VehiclesMap/VehiclesMap'
import VehiclesStatus from '../VehiclesStatus/VehiclesStatus'
import './home.scss'

const Home = () => {
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(false)

//  fetch the list of vehicles from the specified API endpoint when the component mounts.
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true)

      const res = await axios.get('https://vehicle-tacking.onrender.com/api/vehicles')

      const vehicles = res.data?.message
      setVehicles(vehicles)
      setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
    }

    fetchVehicles()
  }, [])

// Pseudocode for distance calculation logic
// Function to calculate and update distance covered in kilometers
function updateDistanceCoveredKm() {
  vehicles.forEach((vehicle) => {
    if (vehicle.status === 'active' && vehicle.moving !== 'Stoped') {
      // Calculate distance covered in kilometers based on speed and time (e.g., distance = speed * time)
      const timeIntervalInSeconds = 1; // Adjust as needed
      const distanceCoveredKm = (vehicle.speed / 3600) * timeIntervalInSeconds; // Convert time to hours
      vehicle.distanceCoveredKm += distanceCoveredKm;
    }
  });
}

// Set up an interval to update distance covered in kilometers periodically (e.g., every second)
setInterval(updateDistanceCoveredKm, 1000); // Adjust the interval as needed

  return (
    <div className='home'>
        <Navbar />

        <div className="home_main">
            <div className="home_sidebar">
                <Sidebar />
            </div>
            
            <div className="vehicles">
                <VehiclesMap vehicles={vehicles} loading={loading} />

                <div className="vehicles_status">
                  <VehiclesStatus vehicles={vehicles} size={9} loading={loading} />

                  <div className="charts">
                    <Chart vehicles={vehicles} loading={loading} />

                    <DistanceChart vehicles={vehicles} size={9} />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home