import { Card, Tab, Tabs } from '@mui/material'
import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Cards from '../Card/Cards'
import './Home.css'
import LandscapeIcon from '@mui/icons-material/Landscape';
import ForestIcon from '@mui/icons-material/Forest';
import SurfingIcon from '@mui/icons-material/Surfing';
import WindPowerIcon from '@mui/icons-material/WindPower';
import CastleIcon from '@mui/icons-material/Castle';
import WavesIcon from '@mui/icons-material/Waves';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {useDispatch, useSelector} from 'react-redux';
import { fetchListings, getListings } from '../../store/listings'
import { useHistory } from 'react-router-dom'
import Footers from '../Footer/Footer'

const Home = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings)
  useEffect(()=>{
    dispatch(fetchListings())
  },[])

  const history = useHistory();

  return (
    <>
      <h2 className='h1-invis'>I am Home component</h2>
      <div>
        <Tab icon={<LandscapeIcon/>} label="Amazing views"  value="Amazing views" onClick={() => history.push('/search')}/>
        <Tab icon={<WavesIcon/>} label="Lakefront"  value="Lakefront" onClick={()=> history.push(`/search/lake`)}/>
        <Tab icon={<SurfingIcon/>} label="Surfing"  value="Surfing" onClick={()=> history.push(`/search/cali`)}/>
        <Tab icon={<WindPowerIcon/>} label="Windmills"  value="Windmills" onClick={()=> history.push(`/search/pacifica`)}/>
        <Tab icon={<BeachAccessIcon/>} label="Beach" value="Beach" onClick={()=> history.push(`/search/surf`)}/>
      </div>
      {/* </Tabs> */}
      <div className='home'>
        <Banner/>

        <div className='home_section'>
          {listings.map(listing=>{
                    return <Cards
                    id={listing.id}
                    src={listing.photo}
                    title={listing.title}
                    description={listing.summary}
                    price={`$${listing.price} per night`}
                    height="720"
                    width="480"
                    />
                })}
        </div>
      </div>
      <Footers/>
    </>
          /* <Cards
          src="https://a0.muscache.com/im/pictures/c4c92198-fb3a-4c4b-bbb6-3aa8af8f7e73.jpg?im_w=720"
          title="5 Bedroom Mansion in Pacifica"
          description="Best place in town with the best scenary views."
          price='$150/night'
          />
            <Cards
              src="https://a0.muscache.com/im/pictures/0d07f1c2-4eab-44db-a2f0-f3df6e78f232.jpg?im_w=720"
              title="San Diego Unique stays"
              description="Spaces that are more than just a place to sleep."
              price='$120/night'/>
            <Cards
              src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
              title="Have the Entire home"
              description="Comfortable private places, with room for friends or family."
              price='$200/night'
          />


        <div className='home_section'>
            <Cards
                src="https://a0.muscache.com/im/pictures/56b2dc82-ed11-46a4-bf86-eb0bba5c2366.jpg?im_w=720"
                title="3 Bedroom Flat in Los Angeles"
                description="Get yourself a peace of mind with our Superhost listing in LA "
                price="$130/night"
            />
            <Cards
                src="https://a0.muscache.com/im/pictures/c31b1e0a-7a27-4593-bc99-112a0b9c5ab1.jpg?im_w=720"
                title="Penthouse in San Francisco"
                description="Enjoy the amazing sights of the bay with this stunning penthouse"
                price="$350/night"
            />
            <Cards
                src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-619648648726300172/original/a46428b5-0f2b-41cf-9aff-d9922d12e4c1.jpeg?im_w=720"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"
            /> */
  )
}

export default Home
