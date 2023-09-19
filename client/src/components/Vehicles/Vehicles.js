import React, { useState } from 'react'
import DistanceChart from '../DistanceChart/DistanceChart'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import VehiclesStatus from '../VehiclesStatus/VehiclesStatus'
import './vehicles.scss'

const Vehicles = () => {
  const [value, setValue] = useState("")
  const [filter, setFilter] = useState(false)
  const [filterVal, setFilterVal] = useState("")

  const vehicles = [
    { _id: 1, lat: 51.51, lng: -0.1, name: 'Vehicle 1', moving: "Turned Left", speed: 22, distanceCovered: 140,  status: "active" },
    { _id: 2, lat: 51.52, lng: -0.11, name: 'Vehicle 2', moving: "Stoped", speed: 77, distanceCovered: 300,  status: "active"  },
    { _id: 3, lat: 51.53, lng: -0.12, name: 'Vehicle 3', moving: "Turned Left", speed: 20, distanceCovered: 180,  status: "inactive"  },
    { _id: 4, lat: 51.50, lng: -0.13, name: 'Vehicle 4', moving: "Turned Right", speed: 12, distanceCovered: 102,  status: "active"  },
    { _id: 5, lat: 51.53, lng: -0.14, name: 'Vehicle 5', moving: "Turned Right", speed: 54, distanceCovered: 302,  status: "active"  },
    { _id: 6, lat: 51.48, lng: -0.15, name: 'Vehicle 6', moving: "Turned Left", speed: 33, distanceCovered: 228,  status: "active"  },
    { _id: 7, lat: 51.52, lng: -0.16, name: 'Vehicle 7', moving: "Stoped", speed: 12, distanceCovered: 198,  status: "active"  },
    { _id: 8, lat: 51.54, lng: -0.17, name: 'Vehicle 8', moving: "Turned Left", speed: 32, distanceCovered: 156,  status: "active"  },
    { _id: 9, lat: 51.52, lng: -0.10, name: 'Vehicle 9', moving: "Turned Right", speed: 107, distanceCovered: 390,  status: "active"  },
    { _id: 10, lat: 51.49, lng: -0.11, name: 'Vehicle 10', moving: "Turned Right", speed: 33, distanceCovered: 235,  status: "inactive"  },
    { _id: 11, lat: 51.51, lng: -0.1, name: 'Vehicle 1', moving: "Turned Left", speed: 22, distanceCovered: 140,  status: "active" },
    { _id: 2, lat: 51.52, lng: -0.11, name: 'Vehicle 2', moving: "Stoped", speed: 77, distanceCovered: 300,  status: "active"  },
    { _id: 3, lat: 51.53, lng: -0.12, name: 'Vehicle 3', moving: "Turned Left", speed: 20, distanceCovered: 180,  status: "inactive"  },
    { _id: 4, lat: 51.50, lng: -0.13, name: 'Vehicle 4', moving: "Turned Right", speed: 12, distanceCovered: 102,  status: "active"  },
    { _id: 5, lat: 51.53, lng: -0.14, name: 'Vehicle 5', moving: "Turned Right", speed: 54, distanceCovered: 302,  status: "active"  },
    { _id: 6, lat: 51.48, lng: -0.15, name: 'Vehicle 6', moving: "Turned Left", speed: 33, distanceCovered: 228,  status: "active"  },
    { _id: 7, lat: 51.52, lng: -0.16, name: 'Vehicle 7', moving: "Stoped", speed: 12, distanceCovered: 198,  status: "active"  },
    { _id: 8, lat: 51.54, lng: -0.17, name: 'Vehicle 8', moving: "Turned Left", speed: 32, distanceCovered: 156,  status: "active"  },
    { _id: 9, lat: 51.52, lng: -0.10, name: 'Vehicle 9', moving: "Turned Right", speed: 107, distanceCovered: 390,  status: "active"  },
    { _id: 10, lat: 51.49, lng: -0.11, name: 'Vehicle 10', moving: "Turned Right", speed: 33, distanceCovered: 235,  status: "inactive"  },
];

  const handleFilter = () => {
    setFilter(!filter)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    try {
      // api request

      console.log(value);
      console.log(filterVal);
    } catch (error) {
      console.log(error);
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
              <VehiclesStatus vehicles={vehicles} size={vehicles.length}  />


              <DistanceChart vehicles={vehicles} size={vehicles.length} />
                
              </div>
            </div>
      </div>
    </div>
  )
}

export default Vehicles