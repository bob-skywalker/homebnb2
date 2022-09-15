import React, { useEffect, useState } from "react";
import "./RangePicker.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Box, Button, TextField } from "@mui/material";
import { PeopleOutline } from "@material-ui/icons";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListing } from "../../store/listings";
import Reservation from "../Reservation/Reservation";
import { createReservation } from "../../store/reservation";


const RangePicker = () => {
  const sessionUser = useSelector(state => state.session.user)
  const { listingId } = useParams();
  const [numGuest,setNumGuest] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();
  const listing = useSelector(getListing(listingId));
  const dispatch = useDispatch();

  const dayDiff = () => {
    return (endDate.getTime() - startDate.getTime()) / 86400000;
  };

  let res = {
    user_id: sessionUser.id,
    listing_id: parseInt(listingId),
    num_guests: numGuest,
    start_Date: startDate,
    end_Date: endDate,
    payment: listing.price * dayDiff()
  }

  console.log(res)



  // const [dateRange, setDateRanges] = useState(0);
  // const [selectionRanges, setSelectionRanges] = useState({
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: 'selection'
  // })

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // const handleSubmitButton = {
  //   dispatch(createReservation())
  // }

  // useEffect(()=>{
  //   setSelectionRanges(selectionRange)
  // },[selectionRange])

  function handleSelect(ranges) {
    // console.log('hello')
    // let days;
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    // days =
    //   (selectionRange.endDate.getTime() - selectionRange.startDate.getTime()) /
    //   86400000;
    // // console.log(selectionRange)
    // console.log(days);

    // setDateRanges(days);
  }
  const handleSubmit= e => {
    e.preventDefault();
    res = {
      user_id: sessionUser.id,
      listing_id: parseInt(listingId),
      num_guests: numGuest,
      start_date: startDate,
      end_date: endDate,
      payment: listing.price * dayDiff()}
      dispatch(createReservation(res));
      history.push('/reservation')
  }




  return (
    <>
      <div className="range-picker">
        <DateRangePicker
          className="rp"
          ranges={[selectionRange]}
          onChange={handleSelect}
          minDate={new Date()}
        />
        {/* {console.log((selectionRange.endDate.getTime()-selectionRange.startDate.getTime()) / 86400000)} */}
        <h2>
          Number of guests
          <PeopleOutlineIcon />
        </h2>
        <input onChange={e=> setNumGuest(e.target.value)} defaultValue={1} type="number" />
        <button onClick={handleSubmit}>
           Reserve
        </button>
        <div className="price-calculator">
          <p className="warning">You won't be charged yet</p>
          <div className="price-sums">
            <h3>{`$${listing.price}/night`}</h3>
            <h3>${listing.price * dayDiff()}</h3>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default RangePicker;
