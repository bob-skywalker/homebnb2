import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Banner.css'

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner-search'>
        {showSearch && <h1>SHOW DATE PICKER</h1>}
        <Button className='banner-searchButton'
          variant='outlined'>Search Dates
        </Button>
      </div>
      <div className='banner-info'>
        <h1>Explore the Unthinkable!</h1>
          <h3>
            Plan your next travel and find out your favourite hideout places near you.
          </h3>
          <Button variant='contained'>Let's Explore</Button>
      </div>
    </div>
  )
}

export default Banner
