import React, { useState } from 'react'
import './ReservationResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Button, Rating } from '@mui/material';
import {Link, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteReservation, removeReservation, updateReservation } from '../../store/reservation';
import { Pane, Dialog } from 'evergreen-ui'


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
    getLabelText

}) => {
  const {reservationId} = useParams();
  const [event,setEvent] = useState();
  const dispatch = useDispatch();
  const [isShown, setIsShown]  = useState(false);


  let start = startDate.slice(0,10)
  let end = endDate.slice(0,10)

 

  const[newNumGuest,setNewNumGuest] = useState(numGuests);
  const[newStartDate,setNewStartDate] = useState(start);
  const[newEndDate,setNewEndDate] = useState(end);







  const handleSubmit = (e) => {
    // e.preventDefault();

    dispatch(updateReservation({
        ...reser,
        listingId,
        id,
        userId,
        numGuests: newNumGuest,
        startDate,
        endDate,
        payment
    }))
  }

  




  return (
    <div className='SearchResult'>
        <Link to={`/listings/${listingId}`}>
            <img class='search-img-block' src={img} alt=""/>
        </Link>

        <div className='searchResult-info'>
            <div className='searchResult-infotop'>
                <div className='search-title'>
                    <p>{location}</p>
                    <FavoriteBorderIcon className="searchResult__heart" />
                </div>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
            </div>

            <div className='searchResult-bottom'>
                <div className='searchResult-stars'>

                    <p>
                        <Rating
                            name='read-only'
                            value={star}
                            precision={.5}
                            readOnly
                            />
                    </p>
                </div>
                <div className='searchResults-price'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                    <Button onClick={()=> dispatch(deleteReservation(reserId))}>Delete Reservation</Button>
                    <>                    
                        <Pane>
                            <Dialog
                                isShown={isShown}
                                title="Change My Reservation"
                                onCloseComplete={() => setIsShown(false)}
                                confirmLabel="Update Reservation"
                            >
                                <form className="create-project-form" onSubmit={handleSubmit}>
                                    <label>
                                    <span className='form-span'>Number of Guests </span>    
                                    <input
                                        className="form-field"
                                        type="number"
                                        placeholder="number of guests"
                                        value={newNumGuest}
                                        onChange={e => setNewNumGuest(e.target.value)}
                                        required
                                    />
                                    </label>
                                    <label>
                                    <span className='form-span'>Start Date </span>    
                                    <input
                                        className="form-field"
                                        type="text"
                                        placeholder="number of guests"
                                        value={newStartDate}
                                        onChange={e=> setNewStartDate(e.target.value)}
                                        required
                                    />
                                    </label>
                                    <label>
                                    <span className='form-span'>End Date </span>    
                                    <input
                                        className="form-field"
                                        type="text"
                                        placeholder="number of guests"
                                        value={newEndDate}
                                        onChange={e=> setNewEndDate(e.target.value)}
                                        required
                                    />
                                    </label>
                                    <button onClick={handleSubmit}>Update Reservation</button>
                                </form>
                            </Dialog>

                            <Button onClick={() => setIsShown(true)}>Edit Reservation</Button>
                        </Pane>
                    </>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReservationResult
