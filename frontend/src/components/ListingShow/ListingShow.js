import { useSelect } from "@mui/base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing, receiveListing } from "../../store/listings";
import {Rating} from "@mui/material";
import ReactPhotoGrid from "react-photo-grid";
import './ListingShow.css'
import { getReviews } from "../../store/reviews";
import ReviewFormPage from "../ReviewFormPage/ReviewFormPage";
import Maps from "../Maps/Maps";





export const ListingShow = () => {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  const listing = useSelector(getListing(listingId));
  const reviewData = useSelector(getReviews(listingId));
  const sessionUser = useSelector((state)=> state.session.user)

  useEffect(() => {
    dispatch(fetchListing(listingId));
  }, [listingId]);

  console.log(reviewData)

  var imageData = [
  "http://via.placeholder.com/400x400/",
  "http://via.placeholder.com/500x700/",
  "http://via.placeholder.com/600x500/",
  "http://via.placeholder.com/600x800/"
  ]

  if (!listing) return null;

  const location = {
    lat: listing.lat,
    lng: listing.lng,
  }
  console.log(listing['street_address'])


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
        <ReactPhotoGrid data={[listing.photo,listing.photo,listing.photo,listing.photo]}/>
        <h2 className='map-h2'>Come Visit Us At Our Campus</h2>
        <Maps location={location} />
      </div>
    </>
  );
};
