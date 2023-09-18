import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import VehiclesMap from '../VehiclesMap/VehiclesMap'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
            <Navbar />
       

        <div className="home_main">
            <div className="home_sidebar">
                <Sidebar />
            </div>
            <div className="vehicles">
                <VehiclesMap />
            </div>
        </div>
    </div>
  )
}

export default Home