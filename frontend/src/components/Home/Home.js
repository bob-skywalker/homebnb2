import { Card } from '@mui/material'
import React from 'react'
import Banner from '../Banner/Banner'
import './Home.css'


const Home = () => {
  return (
    <>
      <div className='home'>
        <Banner/>
        <div className='home_section'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='home_section'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Home
