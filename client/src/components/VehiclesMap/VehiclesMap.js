import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import './vehiclesmap.scss';

const VehiclesMap = ( {vehicles, google, loading}) => {
    const mapStyles = {
        width: '100%',
        height: '550px',
      };

    const [activeMarker, setActiveMarker] = useState(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    // Establish a WebSocket connection when the component mounts
  useEffect(() => {
    const socket = socketIOClient('https://vehicle-tacking.onrender.com', {
      withCredentials: true, 
    }); 

    // Request initial data when the component connects
    socket.emit('getInitialData');

    // Listen for updates
    socket.on('vehicleUpdates', (updatedVehicles) => {
      // Handle updated vehicle data here
      console.log('Received updated vehicle data:', updatedVehicles);
      // Update your component's state with the updated data
    });

    return () => {
      // Clean up the WebSocket connection when the component unmounts
      socket.disconnect();
    };
  }, []);


// The onMarkerClick function sets the active marker and shows the info window when a marker is
// clicked.
  const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
    setShowInfoWindow(true);
  };

  const onCloseInfoWindow = () => {
    setActiveMarker(null);
    setShowInfoWindow(false);
  };

      
  return (
    <div className='vehicles_map'>
        <Map
        google={google}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 51.505, lng: -0.09 }}
       
      >
        
        {!loading && vehicles?.map((vehicle) => (
        <Marker
          key={vehicle._id}
          position={{ lat: vehicle.lat, lng: vehicle.lng }}
          name={vehicle.name}
          speed={vehicle.speed}
          onClick={onMarkerClick}
          icon={{
                url: 'https://res.cloudinary.com/drbvugloj/image/upload/v1695020945/upload/tracking_1_mghnlt.png', // Change the marker color
                scaledSize: new window.google.maps.Size(35, 35), // Adjust the marker size if needed
    }}
        />
      ))}

      <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={onCloseInfoWindow}
        >
          <div>
          <h3>{activeMarker && activeMarker.name}</h3>
            <p style={{fontWeight: "bold"}}>
              Speed: {activeMarker && activeMarker.speed} km/h {/* Display the speed */}
            </p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: process.env.MAP_API_KEY, 
  })(VehiclesMap);