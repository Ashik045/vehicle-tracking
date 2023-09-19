import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DistanceChart from '../DistanceChart/DistanceChart'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import VehiclesStatus from '../VehiclesStatus/VehiclesStatus'
import './vehicles.scss'

const Vehicles = () => {
  const [value, setValue] = useState("")
  const [filter, setFilter] = useState(false)
  const [loading, setLoading] = useState(false)
  const [filterVal, setFilterVal] = useState("")
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true)
        let apiUrl = 'https://vehicle-tacking.onrender.com/api/vehicles';
        
      const res = await axios.get(apiUrl)

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

  const handleFilter = () => {
    setFilter(!filter)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      // api request
      setLoading(true)
      let apiUrl = 'https://vehicle-tacking.onrender.com/api/vehicles?';
      if (value) {
        apiUrl += `search=${value}&`;
      }
  
      if (filterVal) {
        apiUrl += `filter=${filterVal}`;
      }
    const res = await axios.get(apiUrl)

    const vehicles = res.data?.message
    setVehicles(vehicles)
    setLoading(false)
    } catch (error) {
      console.log(error);
    setLoading(false)
    }
   
  }

  return (
    <div className='vehicles_page'>
        <Navbar />

        <div className="vehicles_page_main">
            <div className="vehicles_sidebar">
                <Sidebar />
            </div>
            
            <div className="vehicles">
              <div className="vehicles_search">
                <form onSubmit={handleFormSubmit}>
                  <input type="text" value={value} onChange={(e) =>setValue(e.target.value)} />

                  <input type="submit" value="Search" />
                  
                  <p onClick={handleFilter} className="filter_btn">Filter:</p>

                  { <div className="filter_option">
                    <select value={filterVal} onChange={((e) => setFilterVal(e.target.value))}>
                      <option value="All">All</option>
                      <option value="Active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>}
                </form>
              </div>

              <div className="all_vehicles">
              <VehiclesStatus vehicles={vehicles} size={vehicles.length} loading={loading}  />


              <DistanceChart vehicles={vehicles} size={vehicles.length} loading={loading} />
                
              </div>
            </div>
      </div>
    </div>
  )
}

export default Vehicles