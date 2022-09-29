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
import RangePicker from "../RangePicker/RangePicker";
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import CableIcon from '@mui/icons-material/Cable';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ModalImage from "react-modal-image";









export const ListingShow = () => {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  const listing = useSelector(getListing(listingId));
  const reviewData = useSelector(getReviews(listingId));
  const sessionUser = useSelector((state)=> state.session.user);

  const [isOpen, setIsOpen] = useState(true);

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const [value,setValue] = useState([null,null]);

  useEffect(() => {
    dispatch(fetchListing(listingId))
    dispatch(fetchReviews(listingId))
  }, [listingId]);




  // var imageData = [
  // "http://via.placeholder.com/400x400/",
  // "http://via.placeholder.com/500x700/",
  // "http://via.placeholder.com/600x500/",
  // "http://via.placeholder.com/600x800/"
  // ]

  if (!listing) return null;

  const location = {
    address: listing?.streetAddress,
    lat: listing.lat,
    lng: listing.lng,
  }


  function enlargeImg(e){
    // console.log(id)
    // let theImage = document.querySelector(id);
    // theImage.width = theImage.width * 2;
    // theImage.height = theImage.height * 2;
    e.target.width = e.target.width * 2;
  };

  return (
    <>
      <div className="list-container">
        <h1>{listing.title}</h1>
        <div>
          <Rating
            name='read-only'
            value={listing.star}
            precision={0.1}
            readOnly
          />
        </div >
        <div className="img-grid">
          {listing.photo.map((pho,i) => {
            return (

                    <figure className={`gallery__item gallery__item--${i+1}`}>
{/*
                      <img
                        id={`img-${i+1}`}
                        className='gallery__img'
                        alt={`${i+1}`}
                        src={pho}
                        >
                      </img> */}

                    <ModalImage className='gallery__img' small={pho} large={pho} hideDownload={true} key={i} showRotate={true}/>
                    </figure>

                    )
          })}
        </div>
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
                    <div className="misc">Amenities</div>
                      <div className="misc-container">
                        <div className="misc-left">
                          <div><WifiIcon/> Free Wifi</div>
                          <div><LocalParkingIcon/> Free Parking</div>
                          <div><FreeBreakfastIcon/> Breakfast</div>
                          <div><FireplaceIcon/> Indoor fireplace</div>
                        </div>
                        <div className="misc-right">
                          <div><CableIcon/> Cable</div>
                          <div><SevereColdIcon/> Air Condition</div>
                          <div><LiveTvIcon/> TV / Monitor</div>
                          <div><CheckroomIcon/> Hangers</div>
                        </div>
                      </div>
                      <ReviewFormPage listing={listing} />
                    </div>
                    <div className="content-right">
                      <RangePicker className='rangePicker' listing={listing} sx={{width: '40%'}}/>
                    </div>
          </div>
        </div>
          <h4 className='map-h2'>Where you'll be</h4>
          <Maps location={location} />
    </>
  );
};
