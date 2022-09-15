import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useHistory} from "react-router-dom";
import { receiveListing, fetchListing, getListing } from '../../store/listings';
import {
    createReview,
    fetchReview,
    getReview,
    getReviews,
    updateReview
} from '../../store/reviews';
import './ReviewFormPage.css';
import LoginFormModal from '../LoginFormModal';
import StarRating from '../StarRating/StarRating';
import { Avatar, Divider, Grid, Paper, Rating } from '@mui/material';
import { Star } from '@material-ui/icons';


const ReviewFormPage = ({listing}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const listingData = useSelector(getListing(listingId));
    const sessionUser = useSelector((state)=> state.session.user);
    const [showLoginModal, setLoginModal] = useState(false);
    const [signUp,setSignUp] = useState(false);
    const reviews = useSelector(getReviews(listingId));
    const reviewData = useSelector(
        sessionUser ? getReview(sessionUser.id, +listingId) : getReview(null)
    );
    const [errors, setErrors] = useState([]);
    const [cleanliness,setCleanliness] = useState(5);
    const [accuracy, setAccuracy] = useState(1);
    const [communication, setCommunication] = useState(1);
    const [location, setLocation] = useState(1);
    const [check_in, setCheck_in] = useState(1);
    const [value, setValue] = useState(1);
    const [comment,setComment] = useState("");


    console.log(reviews)

    const type = reviewData ? "update" : "create";

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!sessionUser){
            return setLoginModal(true);
        } else {
            if(type ==='create'){
                dispatch(createReview({
                    cleanliness,
                    accuracy,
                    communication,
                    location,
                    check_in,
                    value,
                    comment,
                    listing_id: listingId,
                    reviewer_id: sessionUser.id
                })
                ).catch(async (res)=> {
                    let data;
                    try {
                        data = await res.clone().json();
                    } catch {
                        data = await res.text();
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                });
            } else {
                dispatch(updateReview({
                    ...reviewData,
                    cleanliness,
                    accuracy,
                    communication,
                    location,
                    check_in,
                    value,
                    comment
                })).catch(
                    async (res) => {
                        let data;
                        try {
                            data = await res.clone().json();
                        } catch {
                            data = await res.text();
                        }
                        if (data.errors) setErrors(data.errors);
                        else if (data) setErrors([data]);
                        else setErrors([res.statusText]);
                    }
                )
            }
        }
        if (comment) {
            history.push(`/listings/${listingId}`)
        }
    };

    useEffect(()=> {
        dispatch(fetchListing(listingId));
    },[listingId]);


    useEffect(()=>{
        if (sessionUser)
        dispatch(fetchReview(listingId,sessionUser.id))
    },[sessionUser]);

    useEffect(()=>{
        if (reviewData) {
            setCleanliness(reviewData.cleanliness);
            setAccuracy(reviewData.accuracy);
            setCommunication(reviewData.communication);
            setLocation(reviewData.location);
            setCheck_in(reviewData.check_in);
            setValue(reviewData.value);
            setComment(reviewData.comment)
        }
    },[reviewData]);

    if (!listingData){
        return null;
    }

 console.log(errors)

  return (
    <>
        <div>
            <ul>
                {errors.map((error)=>(
                    <li key={error} className='error'>
                        {error}
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit} className='reviewform'>
                <h2 id="listName">Write a Review!</h2>
                <div className='comment-section'>

                        {reviews.map(review=>{
                            return <Paper style={{padding: "40px 20px"}}>
                                        <Grid container wrap='nowrap' spacing={2}>
                                            <Grid item>
                                                <Avatar alt='avatar' src={review.reviwerPhoto} style={{transform: 'translateY(42%)'}}/>
                                            </Grid>
                                            <Grid>
                                                <h4 style={{margin: 0, textAlign: "left"}}>{review.username}</h4>
                                                <p style={{textAlign: "left"}}>{review.comment}</p>
                                                <Rating value={review.cleanliness} precision={0.5} readOnly />
                                                <p style={{textAlign: "left", color: "gray"}}>
                                                    posted on {review.createdAt.slice(0,10)}
                                                </p>
                                            </Grid>
                                        </Grid>
                                        <Divider variant='fullWidth' style={{margin: "30px 0 "}}/>
                                    </Paper>
                        })}

                </div>




                <div className='rating'>
                   <StarRating
                    className='rating'
                    cleanliness = {cleanliness}
                    setCleanliness = {setCleanliness}
                    accuracy = {accuracy}
                    setAccuracy = {setAccuracy}
                    communication = {communication}
                    setCommunication = {setCommunication}
                    location = {location}
                    setLocation = {setLocation}
                    check_in = {check_in}
                    setCheck_in = {setCheck_in}
                    value = {value}
                    setValue = {setValue}
                   />
                </div>

                <div className='review-body'>
                    <textarea
                        id="review-text"
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                    ></textarea>
                </div>

                <button type='submit' id="post-review">
                    Post Review
                </button>
                {(!sessionUser) && <LoginFormModal
                    showLogIn={showLoginModal}
                    setShowLogIn={setLoginModal}
                    setSignUp = {setSignUp}
                />}
            </form>
        </div>
    </>
  )
}

export default ReviewFormPage
