import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import '../ReviewModal/Review.css'; 
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import EditReviewForm from '../ReviewModal/EditReviewModal';
import { getTrail } from "../../store/trail";
import {createReview, editReview, fetchReview, getReview, getReviews} from '../../store/review';
import {useInput, useSubmit} from "../../hooks";
// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchTrail } from "../../store/trail";

function EditReview({review}) {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
    const {trailId} = useParams();
    const trail = useSelector(getTrail(trailId));
    let reviews = useSelector(getReviews);
    // const review = useSelector(getReview);
    
    // const review = useSelector(fetchReview(review.id));
    const [body, onBodyChange] = useInput("");
    
    const handleEditReivew = (e) => {
        // e.prevenDefault();
        setShowModal(true)
        // e.preventDefault();
        // dispatch(editReview(trailId, review.id));
        // console.log(reviews);
        // console.log("123123");
        // debugger;
        // <EditReviewForm />
        // console.log({reviews})
    // console.log({reviewId})
        // const editSingleReview = reviews.map((review)=> {
        //     debugger;
        //     dispatch(fetchReview(trailId, review.id));
        //     console.log({trailId})
        //     console.log({review})
        //    debugger;
        // })
    }

  return (
    <div>
        <button className='editButton' onClick={handleEditReivew}>Edit</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm review={review}
          closeForm={() => setShowModal(false)} />
        </Modal>
      )}
        
    </div>

   )

}

export default EditReview; 