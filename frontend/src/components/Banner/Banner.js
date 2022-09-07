import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Banner.css'
import Search from './Search';


const Banner = () => {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <div className='banner'>
      <div className='banner-search'>
        {searchBar && <Search/>}
        <Button className='banner-searchButton'
          variant='outlined' onClick={()=>setSearchBar(!searchBar)}>Search Dates
        </Button>
      </div>
      <div className='banner-info'>
        <h1>Explore the Unthinkable</h1>
          <h4>
            Plan your next travel and find your favourite hideout places near you.
          </h4>
          <Button variant='contained'>Let's Explore</Button>
      </div>
    </div>
  )
}

export default Banner
