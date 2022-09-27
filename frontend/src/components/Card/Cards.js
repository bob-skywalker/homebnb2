import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

const Cards = ({id, src, title, description, price}) => {
  return (
    <div className='card'>
      <Link to={`/listings/${id}`}>
      <img className="card-img" src={src[0]} alt=""/>
      </Link>
      <div className='card-info'>
          <h4>{title}</h4>
          <p>{description}</p>
          <p className='price'>{price}</p>
      </div>
    </div>
  )
}

export default Cards
