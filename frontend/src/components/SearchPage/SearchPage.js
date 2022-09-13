import React, { useEffect } from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from '../SearchResult/SearchResult'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListings, getListings } from '../../store/listings'
const SearchPage = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings)
  useEffect(()=>{
    dispatch(fetchListings())
  },[])

  return (
    <div className='SearchPage'>
        <div className='SearchPage-info'>
          <p>62 stays · 26 august to 30 august · 2 guest</p>
          <h1>Stays nearby</h1>
          <Button
          variant='outlined'>
            Cancellation Flexibility
          </Button>
          <Button
          variant='outlined'>
            Type of place
          </Button>
          <Button
          variant='outlined'>
            Price
          </Button>
          <Button
          variant='outlined'>
            Rooms and beds
          </Button>
          <Button
          variant='outlined'>
            More filters
          </Button>
        </div>

        {listings.map(listing=>{
          return <SearchResult
            img={listing.photo}
            location={listing.state}
            title= {listing.title}
            description= {listing.description}
            star = {listing.star}
            price = {listing.price}
          />
        })}
            {/* <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of New York City"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$90 / night"
                total="$650 total"
                getLabelText='Fair'
            /> */}
        </div>

  )
}

export default SearchPage
