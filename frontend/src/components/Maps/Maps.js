import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import './Map.css';

const Maps = ({location, zoomLevel}) => {
  return (
    <div className='map'>
      {/* <h2 className='map-h2'>Come Visit Us At Our Campus</h2> */}
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyAFv-4PeQq7V9sawTytwS3oR9tME30hIlQ'}}
          defaultCenter={location}
          defaultZoom={10}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Maps
