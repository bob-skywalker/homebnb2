import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';// import locationIcon from '@iconify/icons-mdi/map-marker'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import HouseIcon from '@mui/icons-material/House';

const LocationPin = ({text}) => {
  return (
    <div className='pin'>
        <HouseIcon fontSize='large'  className="pin-icon" />
        <br></br>
        <p className='pin-text'></p>
    </div>
  )
}

export default LocationPin
