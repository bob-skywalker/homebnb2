import React, { useState } from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';
import {Link, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteReservation, removeReservation } from '../../store/reservation';
import Footers from '../Footer/Footer'

const SearchResult = ({
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
    <>
    <div className='SearchResult'>
        <Link to={`/listings/${id}`}>
            <img class='search-img-block' src={img} alt=""/>

        <div className='searchResult-info'>
            <div className='searchResult-infotop'>
                <div className='search-title'>
                    <p>{location}</p>
                    <FavoriteBorderIcon className="searchResult__heart" />
                </div>
                <h3>{title}</h3>
                <p>____</p>
                <p className='description'>{description}</p>
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
                </div>
            </div>
        </div>
                            </Link>
    </div>
    </>
  )
}

export default SearchResult
