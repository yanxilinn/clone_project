import csrfFetch from "./csrf.js";

const ADD_REVIEW = 'reviews/addReview';
const ADD_REVIEWS = 'reviews/addReviews';

const addReview = review => ({
  type: ADD_REVIEW,
  payload: review
});

export const addReviews = reviews => ({
  type: ADD_REVIEWS,
  payload: reviews
});

export const getReviews = ({reviews}) => ( reviews ? Object.values(reviews) : [])

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
  const response = await csrfFetch(`/api/trails/${trailId}/reviews`)
  // debugger
  
  if (response.ok) {
    const data = await response.json();
    dispatch(addReviews(data));
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
      // debugger
      if (!action.payload) return state;
      return action.payload;
    default:
      return state;
  }
}

export default reviewsReducer;