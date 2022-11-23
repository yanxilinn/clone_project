import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ReviewModal/Review.css";
import { getTrail } from "../../store/trail";
import {createReview, editReview, fetchReview, getReview,getReviews} from '../../store/review';
import {useInput, useSubmit} from "../../hooks";
import { useParams } from 'react-router-dom';

function EditReviewForm ( {closeForm,review} ) {
    const dispatch = useDispatch();
    const {reviewId} = useParams();
    const {trailId} = useParams();
    let reviews = useSelector(getReviews);
    const sessionUser = useSelector(state => state.session.user);
    const trail = useSelector(getTrail(trailId));
    const [newBody, onNewBody] = useState(review.body); 
    const handleBodyChange = (e) => {
        console.log(e); 
        onNewBody(e.target.value)
    }
    console.log(review)

    const handlEditSubmit = (e) => {
        dispatch(editReview({id:review.id, trailId: review.trailId, userId: sessionUser.id, body: newBody, date: review.date} ));
    }

    if(trail){
    return (
          <>
            <h1 className="review-trail">{trail.tName}</h1>
            <form onSubmit={handlEditSubmit}>
              <div className="review-box2">
                <textarea 
                  className="review-input" 
                  type="text" 
                  value={newBody} 
                  onChange={handleBodyChange} 
                  required 
                /> 
              </div> 
               <div className="review-next"> 
                  <button id="review-next" type="submit" value="Next">Next</button> 
               </div> 
            </form> 
          </>
        );
    }else{
        return (<></>)
    }
}

export default EditReviewForm;