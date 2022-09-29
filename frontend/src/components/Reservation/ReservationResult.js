import React, { useState } from "react";
import "./ReservationResult.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { Button, Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReservation,
  removeReservation,
  updateReservation,
} from "../../store/reservation";
import { Pane, Dialog } from "evergreen-ui";
import RangePicker from "../RangePicker/RangePicker";
import { getListing } from "../../store/listings";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const ReservationResult = ({
  reser,
  id,
  reserId,
  listingId,
  userId,
  numGuests,
  startDate,
  endDate,
  payment,
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  getLabelText,
  streetAddress,
}) => {
  const { reservationId } = useParams();
  const [event, setEvent] = useState();
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  let start = startDate.slice(0, 10);
  let end = endDate.slice(0, 10);

  const [newNumGuest, setNewNumGuest] = useState(numGuests);
  const [newStartDate, setNewStartDate] = useState(new Date());
  const [newEndDate, setNewEndDate] = useState(new Date());

  const dayDiff = () => {
    return (newEndDate.getTime() - newStartDate.getTime()) / 86400000;
  };

  const listDay1 = new Date(startDate);

  const listDay2 = new Date(endDate);

  const totalPrice = () => {
    return (payment / ((listDay2 - listDay1) / 86400000)) * dayDiff();
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    setIsShown(false);
    dispatch(
      updateReservation({
        reservation: {
          listing_id: listingId,
          id,
          user_id: userId,
          num_guests: newNumGuest,
          start_date: newStartDate,
          end_date: newEndDate,
          payment: totalPrice(),
        },
      })
    );
  };

  const selectionRange = {
    startDate: newStartDate,
    endDate: newEndDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    console.log(ranges);
    setNewStartDate(ranges.selection.startDate);
    setNewEndDate(ranges.selection.endDate);
  }

  return (
    <div className="SearchResult">
      <Link to={`/listings/${listingId}`}>
        <img class="search-img-block" src={img} alt="" />
      </Link>

      <div className="searchResult-info">
        <div className="searchResult-infotop">
          <div className="search-title">
            <p>{location}</p>
            <FavoriteBorderIcon className="searchResult__heart" />
          </div>
          <h3>{`${streetAddress}, ${title}`}</h3>
          <p>____</p>
          <p>{`Your Reservation is confirmed.`}</p>
          <p>{` For ${start} to ${end}`}</p>
        </div>

        <div className="searchResult-bottom">
          <div className="searchResult-stars">
            <p>
              <Rating name="read-only" value={star} precision={0.5} readOnly />
            </p>
          </div>
          <div className="searchResults-price">
            <h2>{price}</h2>
            <p>{total}</p>
            <div className="buttons">
              <Button onClick={() => dispatch(deleteReservation(id))}>
                Delete Reservation
              </Button>
              <>
                <Pane>
                  <Dialog
                    isShown={isShown}
                    title="Change My Reservation"
                    onCloseComplete={() => setIsShown(false)}
                    confirmLabel="Update Reservation"
                    onConfirm={handleSubmit}
                    width="700px"
                  >
                    <div className="form-container">
                      <form className="register-form-1">
                        <div className="form-top">
                          <label>
                            <span className="form-span">Number of Guests </span>
                            <input
                              className="form-field"
                              type="number"
                              placeholder="number of guests"
                              value={newNumGuest}
                              onChange={(e) => setNewNumGuest(e.target.value)}
                              required
                            />
                          </label>
                          <span className="form-span">
                            <h3>{`New Total: $${Math.round(totalPrice())}`}</h3>
                          </span>
                        </div>
                        <label>
                          <DateRangePicker
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                            minDate={new Date()}
                          />
                        </label>
                      </form>
                    </div>
                  </Dialog>

                  <Button onClick={() => setIsShown(true)}>
                    Edit Reservation
                  </Button>
                </Pane>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationResult;
