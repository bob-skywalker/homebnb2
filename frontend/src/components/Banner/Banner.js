import { Button } from '@mui/material'
import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-info'>
        <h1>Go explore the unthinkable!</h1>
          <h3>
            Plan your next travel and find out your favourite hideout places near you.
          </h3>
          <Button variant='contained'>Let's Explore</Button>
      </div>
    </div>
  )
}

export default Banner
