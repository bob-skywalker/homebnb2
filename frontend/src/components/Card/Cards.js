import React from 'react'
import './Cards.css'

const Cards = ({src, title, description, price}) => {
  return (
    <div className='card'>
      <img src={src} alt=""/>
      <div className='card-info'>
          <h4>{title}</h4>
          <p>{description}</p>
          <p className='price'>{price}</p>
      </div>
    </div>
  )
}

export default Cards
