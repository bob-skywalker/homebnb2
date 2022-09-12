import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Banner.css'
import Search from './Search';


const Banner = () => {
  const [searchBar, setSearchBar] = useState(false);
  const history = useHistory();

  return (
    <div className='banner'>
      <div className='banner-search'>
        {searchBar && <Search />}
        <Button className='banner-searchButton'
          variant='outlined' onClick={()=>setSearchBar(!searchBar)}>
            {searchBar ? 'Hide': "Search Dates"}
        </Button>
      </div>
      <div className='banner-info'>
        <h1>Explore the Unthinkable</h1>
          <h4>
            Find your favourite hideout places near you.
          </h4>
          <Button variant='contained' onClick={()=>history.push('/search')}>Let's Explore</Button>
      </div>
    </div>
  )
}

export default Banner
