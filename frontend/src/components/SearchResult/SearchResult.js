import React, { useState } from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';
import {Link} from 'react-router-dom';

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
  const [event,setEvent] = useState();
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult
