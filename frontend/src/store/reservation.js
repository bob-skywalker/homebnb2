export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations,
})

export const receiveReservation = (reservation) => {

    return({
        type: RECEIVE_RESERVATION,
        reservation,
    });
}

export const removeReservation = (reservationId) => {
    return({
        type: REMOVE_RESERVATION,
        reservationId
    })
}

export const getReservation = (reservationId) => state => {
    return state.reservations ? state.reservations[reservationId] : null
}

export const getReservations = state => {
    return state.reservations ? Object.values(state.reservations) : []
}


export const fetchReservations = () => async dispatch => {
    const res = await fetch(`/api/reservations`)

    if (res.ok){
        const data = await res.json()
        dispatch(receiveReservations(data))
    }
}

export const fetchReservation = (reservationId) => async dispatch => {
    const res = await fetch(`api/reservations/${reservationId}`)

    if (res.ok){
        const data = await res.json();
        dispatch(receiveReservation(data))
    }
}

export const createReservation = (reservation) => async dispatch => {
    const res = await fetch (`/api/reservations`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(reservation)
    })

    if(res.ok){
        const data = await res.json();
        dispatch(receiveReservation(data))
    }
}

export const updateReservation = (reservation) => async dispatch => {
    const res = await fetch(`/api/reservations/${reservation.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(reservation)
    })
    if (res.ok){
        const data= await res.json();
        dispatch(receiveReservation(data))
    }
}

export const deleteReservation = (reservationId) => async dispatch => {
    const res = await fetch (`/api/reservations/${reservationId}`,{
        method: 'DELETE'
    });

    if (res.ok){
        dispatch(removeReservation(reservationId))
    }
};


const reservationsReducer = (state={}, action) => {
    const nextState = {...state};

    switch(action.type){
        case RECEIVE_RESERVATIONS
    }
}

export default reservationsReducer;
