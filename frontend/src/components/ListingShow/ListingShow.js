import { useSelect } from "@mui/base";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing, receiveListing } from "../../store/listings";
import {Rating} from "@mui/material";
import ReactPhotoGrid from "react-photo-grid";
import './ListingShow.css'
import { fetchReviews, getReviews } from "../../store/reviews";
import ReviewFormPage from "../ReviewFormPage/ReviewFormPage";
import Maps from "../Maps/Maps";
import Search from "../Banner/Search";
import {Box, TextField} from '@mui/material';
import {DateRangePicker, DateRange} from '@mui/lab';




export const ListingShow = () => {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  const listing = useSelector(getListing(listingId));
  const reviewData = useSelector(getReviews(listingId));
  const sessionUser = useSelector((state)=> state.session.user)

  const [value,setValue] = useState([null,null]);




  useEffect(() => {
    dispatch(fetchListing(listingId))
    dispatch(fetchReviews(listingId));
  }, [listingId]);




  var imageData = [
  "http://via.placeholder.com/400x400/",
  "http://via.placeholder.com/500x700/",
  "http://via.placeholder.com/600x500/",
  "http://via.placeholder.com/600x800/"
  ]

  if (!listing) return null;

  const location = {
    address: listing?.streetAddress,
    lat: listing.lat,
    lng: listing.lng,
  }

  return (
    <>
      <div className="list-container">
        <h1>{listing.title}</h1>
        <div className="image-grid">
          <Rating
            name='read-only'
            value={listing.star}
            precision={0.1}
            readOnly
          />
        </div>
        <img alt="listingPhoto" src={listing.photo}/>
        <div className="content-container">
          <div className="content-left">
            <h2>Description</h2>
            <p className="listing-info">{listing.description}</p>
            <div className="host-info">
              <div>
              <h2>Hosted by {listing.username}</h2>
              <p>{listing.email}</p>
              </div>
              <img alt="profile-pic" className="profile-photo" src={listing.profilePhoto} />
            </div>
            <ReviewFormPage listing={listing} />
          </div>
          <div className="content-right">
          </div>
        </div>
        <h2 className='map-h2'>Where you'll be</h2>
        <Maps location={location} />
      </div>
    </>
  );
};
