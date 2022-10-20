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

export const getTrailReviews = trailId => state => (
  Object.values(state.reviews)
        .filter(review => review.trailId === trailId)
        .map(review => ({ 
          ...review, 
          user: state.users[review.userId]?.fName
        }))
);

export const createReview = (review) => async dispatch => {
  const response = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(review)
  });
  const data = await response.json();
  dispatch(addReview(data.review));
  dispatch(addUser(data.user));
  dispatch(addTrail(data.trail));
  return response;
};

function reviewsReducer(state = {}, action) {
  switch (action.type) {
    case ADD_REVIEW: {
      const review = action.payload;
      return { ...state, [review.id]: review };
    }
    case ADD_REVIEWS:
      const reviews = action.payload;
      return { ...state, ...reviews };
    default:
      return state;
  }
}

export default reviewsReducer;