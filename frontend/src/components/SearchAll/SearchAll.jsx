import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import SearchResult from '../SearchResult/SearchResult'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListings, fetchQueryListings, getListings } from '../../store/listings'
import Maps from '../Maps/Maps'
import { useHistory, useParams } from 'react-router-dom'
import './SearchAll.css'
import Footers from '../Footer/Footer'


const SearchAll = () => {
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

  const filtered = listings.filter(listing=> listing.title === query)




  return (
    <>
    <div className='SearchPage'>
      <div className='SearchPage-left'>
          <div className='SearchPage-info'>
            <p>513 hosts · 26 sept to 30 oct · 5 guest</p>
            <h1>Stays nearby</h1>
          </div>



          {listings.map(listing=>{
            return <SearchResult
              id={listing.id}
              img={listing.photo[0]}
              location={listing.state}
              title= {listing.title}
              description= {listing.description}
              star = {listing.star}
              price = {`$${listing.price}/night`}
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
    </div>
    </>
  )
}

export default SearchAll
