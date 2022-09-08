import { Card } from '@mui/material'
import React from 'react'
import Banner from '../Banner/Banner'
import Cards from '../Card/Cards'
import './Home.css'


const Home = () => {
  return (
    <>
      <div className='home'>
        <Banner/>
        <div className='home_section'>
          <Cards
          src="https://i.postimg.cc/9M2Z6sr5/happy-people.png"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."/>
          <Cards
           src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
           title="Unique stays"
           description="Spaces that are more than just a place to sleep."/>
          <Cards
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
          />
        </div>
        <div className='home_section'>
        <Cards
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Los Angeles"
                description="Get yourself a peace of mind with our Superhost listing in LA"
                price="$130/night"
            />
            <Cards
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in San Francisco"
                description="Enjoy the amazing sights of the bay with this stunning penthouse"
                price="$350/night"
            />
            <Cards
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"
            />
        </div>
      </div>
    </>
  )
}

export default Home
