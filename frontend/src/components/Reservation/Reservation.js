import { Button, Tab } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchReservations, getReservations } from '../../store/reservation';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import FlightIcon from '@mui/icons-material/Flight';
import { useLocation } from 'react-router-dom';
import { fetchListings, getListings } from '../../store/listings';


const Reservation = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchReservations())
    // listingIds.forEach(id => dispatch(fetchListing(id)))
    dispatch(fetchListings())
  },[])

  let res = useSelector(state=> state.reservations)
  let results = Object.values(res)
  // const listingIds = // loop through res, grab all listing ids
  // useSelector(state => state.listings)

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
          <img src={reser.photoUrl} />
        </>
      )})}
    </div>
  )
}

export default Reservation
