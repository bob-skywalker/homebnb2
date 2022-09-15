import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './StarRating.css'

const StarRating = ({
    cleanliness,
    setCleanliness,
    accuracy,
    setAccuracy,
    communication,
    setCommunication,
    location,
    setLocation,
    check_in,
    setCheck_in,
    value,
    setValue
}) => {

   const [hover,setHover] = useState(null)


  return (
    <div>
    {[...Array(5)].map((star,i)=> {
        const ratingValue = i + 1
        return (
            <label key={ratingValue}>
                <input
                type='radio'
                name='rating'
                value={ratingValue}
                onClick={()=>
                setCleanliness(ratingValue)}
                />
                <FaStar
                className='star'
                color={ratingValue <= (hover|| cleanliness) ? "#ffc107" : "#e4e5e9"}
                size={30}
                onMouseEnter = {()=> setHover(ratingValue)}
                onMouseLeave = {()=> setHover(null)}
                />


            </label>
        )
    })}



    </div>
  )
}

export default StarRating
