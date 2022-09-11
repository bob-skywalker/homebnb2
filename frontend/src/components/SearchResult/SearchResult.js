import React, { useState } from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';

const SearchResult = ({
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
        <img src={img} alt=""/>
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