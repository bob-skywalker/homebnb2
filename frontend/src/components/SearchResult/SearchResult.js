import React, { useState } from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';
import {Link, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../../store/reservation';

const SearchResult = ({
    id,
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
        <Link to={`/listings/${id}`}>
            <img class='search-img-block' src={img} alt=""/>
        </Link>
        <FavoriteBorderIcon className="searchResult__heart" />

        <div className='searchResult-info'>
            <div className='searchResult-infotop'>
                <p>{location}</p>
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
                    <button onClick={()=> dispatch(removeReservation(reservationId))}>Delete Reservation</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult
