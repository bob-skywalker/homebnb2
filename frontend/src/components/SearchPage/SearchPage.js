import React, { useEffect } from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from '../SearchResult/SearchResult'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListings, fetchQueryListings, getListings } from '../../store/listings'
import Maps from '../Maps/Maps'
import { useHistory, useParams } from 'react-router-dom'


const SearchPage = () => {
  const history = useHistory();
  const {query} = useParams();
  const dispatch = useDispatch();
  const listings = useSelector(getListings)
  useEffect(()=>{
    dispatch(fetchListings())
    dispatch(fetchQueryListings(query))
  },[query])

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`)
  }

  if (!listings) {return null}

  const filtered = listings.filter(listing=> listing.title.toLowerCase().includes(query))



  return (
    <div className='SearchPage'>
      {console.log(listings)}
      <div className='SearchPage-left'>
          <div className='SearchPage-info'>
            <p>513 hosts · 26 sept to 30 oct · 2 guest</p>
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



          {filtered.length > 0 ? filtered.map(listing=>{
            return <SearchResult
              id={listing.id}
              img={listing.photo}
              location={listing.state}
              title= {listing.title}
              description= {listing.description}
              star = {listing.star}
              price = {`$${listing.price}/night`}
            />

          }): 'Sorry, no results found!'}




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
    </div>
  )
}

export default SearchPage
