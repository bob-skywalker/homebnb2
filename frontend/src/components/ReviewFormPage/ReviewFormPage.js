import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useHistory} from "react-router-dom";
import { receiveListing, fetchListing, getListing } from '../../store/listings';
import {
    createReview,
    fetchReview,
    getReview,
    updateReview
} from '../../store/reviews';
import './ReviewFormPage.css';
import LoginFormModal from '../LoginFormModal';
import StarRating from '../StarRating/StarRating';


const ReviewFormPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const listingData = useSelector(getListing(listingId));
    const sessionUser = useSelector((state)=> state.session.user);
    const [showLoginModal, setLoginModal] = useState(false);
    const [signUp,setSignUp] = useState(false);
    const reviewData = useSelector(
        sessionUser ? getReview(sessionUser.id, +listingId) : getReview(null)
    );
    const [errors, setErrors] = useState([]);
    const [cleanliness,setCleanliness] = useState(1);
    const [accuracy, setAccuracy] = useState(1);
    const [communication, setCommunication] = useState(1);
    const [location, setLocation] = useState(1);
    const [check_in, setCheck_in] = useState(1);
    const [value, setValue] = useState(1);
    const [comment,setComment] = useState("");


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
                <h1 id="listName">{listingData.title}</h1>
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
                <LoginFormModal
                    showLogIn={showLoginModal}
                    setShowLogIn={setLoginModal}
                    setSignUp = {setSignUp}
                />
            </form>
        </div>
    </>
  )
}

export default ReviewFormPage
