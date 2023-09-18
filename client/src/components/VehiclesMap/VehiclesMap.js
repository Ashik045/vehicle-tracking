import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';
import './vehiclesmap.scss';

const VehiclesMap = (props) => {
    const mapStyles = {
        width: '100%',
        height: '550px',
      };

      const vehicles = [
        { id: 1, lat: 51.51, lng: -0.1, name: 'Vehicle 1' },
        { id: 2, lat: 51.52, lng: -0.11, name: 'Vehicle 2' },
        { id: 3, lat: 51.53, lng: -0.12, name: 'Vehicle 3' },
        { id: 4, lat: 51.50, lng: -0.13, name: 'Vehicle 4' },
        { id: 5, lat: 51.53, lng: -0.14, name: 'Vehicle 5' },
        { id: 6, lat: 51.48, lng: -0.15, name: 'Vehicle 6' },
        { id: 7, lat: 51.52, lng: -0.16, name: 'Vehicle 7' },
        { id: 8, lat: 51.54, lng: -0.17, name: 'Vehicle 8' },
        { id: 9, lat: 51.52, lng: -0.10, name: 'Vehicle 9' },
        { id: 10, lat: 51.49, lng: -0.11, name: 'Vehicle 10' },
        // Add more vehicle data here
    ];
    

  return (
    <div className='vehicles_map'>
        <Map
        google={props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 51.505, lng: -0.09 }}
       
      >
        
        {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.id}
          position={{ lat: vehicle.lat, lng: vehicle.lng }}
          name={vehicle.name}
          icon={{
                url: 'https://res.cloudinary.com/drbvugloj/image/upload/v1695020945/upload/tracking_1_mghnlt.png', // Change the marker color
                scaledSize: new window.google.maps.Size(35, 35), // Adjust the marker size if needed
    }}
        />
      ))}
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB0jhHfbe9vIufepGNqwnM7O0Rp-p-nKts', // Replace with your API key
  })(VehiclesMap);