import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import '../ReviewModal/Review.css'; 
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { fetchTrail, getTrail } from '../../store/trail';
// import Review from '../ReviewModal/Review';
import ReviewForm from '../ReviewModal/Review';

function ReviewModal() {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const handleWriteReivew = () => {
    if (!sessionUser) {
    history.push('/login');
    } else {
      setShowModal(true)
    }
  }

  return (
    <div className='review-block'>
      <div id='review-block'>Reviews</div>
      <div className='review-submit'>
      <button id="r-b" onClick={handleWriteReivew}>Write review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm closeForm={() => setShowModal(false)} />
        </Modal>
      )}
      </div>
    </div>
  );
}

export default ReviewModal;