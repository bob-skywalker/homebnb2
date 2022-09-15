import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReservations } from '../../store/reservation';

const Reservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(getReservations)
  console.log(reservations)


  return (
    <div>

    </div>
  )
}

export default Reservation
