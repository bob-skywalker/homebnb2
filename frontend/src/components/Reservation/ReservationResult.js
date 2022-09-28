import React, { useState } from 'react'
import './ReservationResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Button, Rating } from '@mui/material';
import {Link, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteReservation, removeReservation } from '../../store/reservation';

const ReservationResult = ({
    id,
    reserId,
    listingId,
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    getLabelText

}) => {
  const {reservationId} = useParams();
  const [event,setEvent] = useState();
  const dispatch = useDispatch();


  return (
    <div className='SearchResult'>
        <Link to={`/listings/${listingId}`}>
            <img class='search-img-block' src={img} alt=""/>
        </Link>

        <div className='searchResult-info'>
            <div className='searchResult-infotop'>
                <div className='search-title'>
                    <p>{location}</p>
                    <FavoriteBorderIcon className="searchResult__heart" />
                </div>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
            </div>

            <div className='searchResult-bottom'>
                <div className='searchResult-stars'>

                    <p>
                        <Rating
                            name='read-only'
                            value={star}
                            precision={.5}
                            readOnly
                            />
                    </p>
                </div>
                <div className='searchResults-price'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                    <Button onClick={()=> dispatch(deleteReservation(reserId))}>Delete Reservation</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReservationResult
