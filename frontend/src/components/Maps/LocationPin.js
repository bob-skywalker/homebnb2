import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';// import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({text}) => {
  return (
    <div className='pin'>
        <LocationOnIcon  className="pin-icon" />
        <p className='pin-text'>{text}</p>
    </div>
  )
}

export default LocationPin
