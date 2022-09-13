import { useSelect } from "@mui/base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";

export const ListingShow = () => {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  const listing = useSelector(getListing(listingId));
  useEffect(() => {
    dispatch(fetchListing(listingId));
  }, [listingId]);

  if (!listing) return null;

  return (
    <>
      <h1>{listing.title}</h1>
      <img src={listing.photo}></img>
    </>
  );
};
