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

export const getReview = (reviewId) => state => {
    return state.reviews ? state.reviews[reviewId] : null
}

export const getReviews = state => {
    return state.reviews ? Object.values(state.reviews): []
}


export const fetchReviews = () => async dispatch => {
    const res = await fetch(`/api/reviews`)

    if (res.ok){
        const data = await res.json()
        dispatch(receiveReviews(data))
    }
}

export const fetchReview = (reviewId) => async dispatch => {
    const res = await fetch(`/api/reviews/${reviewId}`)

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





const reviewReducer = (state={},action) => {
    const nextState = {...state};

    switch( action.type ){
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

export default reviewReducer
