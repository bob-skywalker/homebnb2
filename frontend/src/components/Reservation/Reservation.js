import { Button, Tab } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchReservations, getReservations } from '../../store/reservation';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import FlightIcon from '@mui/icons-material/Flight';
import { useLocation } from 'react-router-dom';


const Reservation = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchReservations())
  },[])

  let res = useSelector(state=> state.reservations)
  let results = Object.values(res)

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
        return <p>{reser.id}</p>
      })}
    </div>
  )
}

export default Reservation
