export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";

export const receiveListings = (listings) => {
  return {
    type: RECEIVE_LISTINGS,
    listings,
  };
};

export const receiveListing = (listing) => {
  return {
    type: RECEIVE_LISTING,
    listing,
  };
};

export const removeListing = (listingId) => {
  return {
    type: REMOVE_LISTING,
    listingId,
  };
};

export const getListing = (listingId) => (state) => {
  return state.listings ? state.listings[listingId] : null;
};

export const getListings = (state) => {
  return state.listings ? Object.values(state.listings) : [];
};

export const fetchListings = () => async (dispatch) => {
  const res = await fetch(`/api/listings`);

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveListings(data));
  }
};

export const fetchListing = (listingId) => async (dispatch) => {
  const res = await fetch(`/api/listings/${listingId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveListing(data));
  }
};

export const createListing = (listing) => async (dispatch) => {
  const res = await fetch(`/api/listings`, {
    method: "POST",
    headers: {
      "Cotent-Type": "application/json",
    },
    body: JSON.stringify(listing),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveListing(data));
  }
};

const listingsReducer = (state = {}, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return { ...nextState, ...action.listings };
    case RECEIVE_LISTING:
      nextState[action.listing.id] = action.listing;
      return nextState;
    case REMOVE_LISTING:
      delete nextState[action.listingId];
      return nextState;
    default:
      return state;
  }
};

export default listingsReducer;
