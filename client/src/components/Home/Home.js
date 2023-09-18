import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
            <Navbar />
       

        <div className="home_main">
        <div className="home_sidebar">
            <Sidebar />
        </div>
            <div className="home_items">
                <h1>vehicle tracking app</h1>
            </div>
        </div>
    </div>
  )
}

export default Home