import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import '../ReviewModal/Review.css'; 
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import EditReviewForm from '../ReviewModal/EditReviewModal';

function EditReview() {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const handleEditReivew = () => {
      setShowModal(true)
  }

  return (
    <div>
        <button className='editButton' onClick={handleEditReivew}>Edit</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm closeForm={() => setShowModal(false)} />
        </Modal>
      )}
        
    </div>

  )

}

export default EditReview; 