import { receiveListing, RECEIVE_LISTING } from "./listings";


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReviews = (reviews) => {
    return({
        type: RECEIVE_REVIEWS,
        reviews
    })
}

export const receiveReview = (review) => {
    return({
        type: RECEIVE_REVIEW,
        review
    })
}

export const removeReview = (reviewId) => {
    return ({
        type: REMOVE_REVIEW,
        reviewId
    })
}

export const getReview = (reviewerId, listingId) => state => {
    if (!state || !state.reviews) {
        return null;
    } else {
        return Object.values(state.reviews).find((review)=> review.listingId === listingId && review.reviewerId === reviewerId)
    }
}

export const getReviews = listingId => state => {
    if (!state || !state.reviews){
        return []
    } else {
        let obj = Object.values(state.reviews).filter((review)=> review.listingId === parseInt(listingId))

        return obj
    }
}

export const getAuthorReviews = reviewerId => state =>{
    if (!state || !state.reviews){
        return []
    } else {
        let av = Object.values(state.reviews).filter((review)=> review.reviewerId === parseInt(reviewerId))
        return av
    }
}


export const fetchReviews = () => async dispatch => {
    const res = await fetch(`/api/reviews`)

    if (res.ok){
        const data = await res.json()
        dispatch(receiveReviews(data))
    }
}

export const fetchReview = (reviewerId,listingId) => async dispatch => {
    const res = await fetch(`/api/reviews/${listingId}?reviewerId=${reviewerId}`)

    if (res.ok){
        const data = await res.json()
        dispatch(receiveReview(data))
    }
}

export const createReview = (review) => async dispatch => {
    const res = await fetch(`/api/reviews`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(review)
    })

    if(res.ok){
        const data = await res.json()
        dispatch(receiveReview(data))
    }
}

export const updateReview = (review) => async dispatch => {
    const res = await fetch(`/api/reviews/${review.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })

    if (res.ok){
        const data = await res.json()
        dispatch(receiveReview(data))
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (res.ok){
        dispatch(removeReview(reviewId))
    }
}





const reviewsReducer = (state={},action) => {
    const nextState = {...state};

    switch( action.type ){
        case RECEIVE_LISTING:
            return {...nextState, ...action.listing.reviews}

        case RECEIVE_REVIEWS:
            return {...nextState, ...action.reviews}

        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState

        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState

        default:
            return state
    }
}
export default reviewsReducer
