import csrfFetch from "./csrf.js";

const ADD_REVIEW = 'reviews/ADD_REVIEW';
const ADD_REVIEWS = 'reviews/ADD_REVIEWS';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const addReview = review => ({
  type: ADD_REVIEW,
  payload: review
});

export const addReviews = reviews => ({
  type: ADD_REVIEWS,
  payload: reviews
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  payload: reviewId
});

export const getReviews = ({reviews}) => ( reviews ? Object.values(reviews) : []);
export const getReview = (reviewId) => ({reviews}) => (reviews ? reviews[reviewId] : null);

export const getTrailReviews = trailId => state => (
  Object.values(state.reviews)
        .filter(review => review.trailId === trailId)
        .map(review => ({ 
          ...review, 
          user: state.users[review.userId]?.fName
        }))
);

export const createReview = (review) => async dispatch => {
  const response = await csrfFetch(`/api/trails/${review.trailId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review)
  });
  const data = await response.json();
  // debugger
  dispatch(addReview(data));
  // dispatch(addUser(data.user));
  // dispatch(addTrail(data.trail));
  return response;
};


export const fetchReviews = (trailId) => async dispatch => {
  const response = await csrfFetch(`/api/trails/${trailId}/reviews`,{
    method: 'GET',
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(addReviews(data));
  }
}
export const fetchReview = (trailId,reviewId) => async dispatch => {
  const res = await csrfFetch(`/api/trails/${trailId}/reviews/${reviewId}`);
  if (res.ok) {
      const data = await res.json();
      dispatch(addReview(data));
  }
}

export const deleteReview = (trailId,reviewId) => async dispatch => {
  const response = await csrfFetch(`/api/trails/${trailId}/reviews/${reviewId}`, {
      method: 'DELETE'
    })
    
  if (response.ok) {
      dispatch(removeReview(reviewId));
  }
}

export const editReview = (review) => async dispatch => {
  // debugger;
  const response = await csrfFetch(`/api/trails/${review.trailId}/reviews/${review.id}`, {
      method: "PATCH",
      body: JSON.stringify(review),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  if (response.ok) {
      let data = await response.json();
      dispatch(addReview(data));
  }
}

function reviewsReducer(state = {}, action) {
  Object.freeze(state);
  const nextState = {...state};

  switch (action.type) {
    case ADD_REVIEW: {
      nextState[action.payload.id] = action.payload
      return nextState;
    }
    case ADD_REVIEWS:
      if (!action.payload) return state;
      return action.payload;
    case REMOVE_REVIEW:
      delete nextState[action.payload];
      return nextState;
    
    default:
      return state;
  }
}

export default reviewsReducer;