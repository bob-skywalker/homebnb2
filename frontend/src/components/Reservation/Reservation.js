import { Button, Tab } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchReservations, getReservations } from '../../store/reservation';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import FlightIcon from '@mui/icons-material/Flight';
import { useLocation } from 'react-router-dom';
import { fetchListings, getListings } from '../../store/listings';
import Banner from '../Banner/Banner';
import Cards from '../Card/Cards';
import SearchResult from '../SearchResult/SearchResult';
import { DateRangePicker } from "react-date-range";
import './Reservation.css';
import ReservationResult from './ReservationResult';
import Footers from '../Footer/Footer'

 




const Reservation = () => {
  const sessionUser = useSelector(state => state.session.user)
  const reservations = useSelector(getReservations).filter((reservation)=> reservation.userId ? reservation.userId === sessionUser.id : null)


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchReservations())
    // listingIds.forEach(id => dispatch(fetchListing(id)))
    dispatch(fetchListings())
  },[])

  // let res = useSelector(state=> state.reservations)
  let results = Object.values(reservations).reverse()
  // const listingIds = // loop through res, grab all listing ids
  // useSelector(state => state.listings)

  console.log(results)
  return (
    <div className='ReservationPage'>
      <div className='Reservation-left'>
        <div className='Reservation-info'>
        <p>62 stays · 2 guest · Welcome To Your Profile Page</p>
        <h1>My Reservation</h1>
          <Tab icon={<UpcomingIcon/>} label='Upcoming Reservations' value="Upcoming Reservations"/>
        </div>
      </div>
      {results.map(reser=>{
        return(
        <>
          {/* <p>{reser.listingId}</p> */}
          {/* <img src={reser.photoUrl} /> */}
          <ReservationResult
            reser = {reser}
            id={reser.id}
            listingId={reser.listingId}
            userId = {reser.userId}
            numGuests = {reser.numGuests}
            startDate = {reser.startDate}
            endDate = {reser.endDate}
            payment = {reser.payment}
            img={reser.photoUrl[0]}
            location={`Reservation For ${reser.numGuests} Guests`}
            streetAddress = {reser.streetAddress}
            title = {reser.title}
            star={reser.star}
            price= {`Total Charge: $${Math.round(reser.payment)}`}
          />

        </>
      )})}
    <Footers/>
    </div>
  )
}

export default Reservation
