import React from 'react'
import Navigation from '../Navigation'
import './Header.css'



const Header = () => {
  return (
    <>
        <div className='header'>
            <img className='header-icon'
            src='https://i.postimg.cc/nVXJ207G/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c91db57-0436925715282009725974.png' alt='header-img'/>
            <div className='header-center'>
            <input type='text'/>
            <img className='magnifying-glass'
            src='https://cdn-icons-png.flaticon.com/512/3466/3466268.png' alt='header-img'/>
            </div>
            <Navigation />
        </div>
    </>
  )
}

export default Header
