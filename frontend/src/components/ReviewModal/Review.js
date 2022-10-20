// import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
// import ReviewModal from '../ReviewModal/Review'; 
import "../ReviewModal/Review.css";
import { getTrail } from "../../store/trail";
import {createReview} from '../../store/review';
import {useInput, useSubmit} from "../../hooks";
// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchTrail } from "../../store/trail";

function ReviewForm ( {closeForm} ) {
    const dispatch = useDispatch();
    const {trailId} = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const trail = useSelector(getTrail(trailId));
    const [body, onBodyChange] = useInput("");
    const [errors, onSubmit] = useSubmit({
        onSuccess: closeForm,
        action: createReview({ trailId: trail.id, userId: sessionUser.id, body})
    });

    const handleSubmit = (e) => {
      console.log(e);
      dispatch(createReview({trailId: trail.id, userId: sessionUser.id, body}));
    }

    return (
          <>
            <h1 className="review-trail">{trail.tName}</h1>
            <form onSubmit={handleSubmit}>
              <div className="review-box2">
                <textarea 
                  className="review-input" 
                  type="text" 
                  placeholder="Give back to the community. Share your thoughts about the trail so others want to expect." 
                  value={body} 
                  onChange={onBodyChange} 
                  required 
                /> 
              </div> 
               <div className="review-next"> 
                  <button id="review-next" type="submit" value="Next">Next</button> 
               </div> 
            </form> 
          </>
        );
}

export default ReviewForm;







// function ReviewForm() {
//   const dispatch = useDispatch();
//   const {trailId} = useParams();
//   const [review, setReview] = useState("");
//   const [errors, setErrors] = useState("");
//   const trail = useSelector(getTrail(trailId));
//   // const name = trail.tName;
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     return dispatch(fetchTrail(trailId))
//       .catch(async (res) => {
//         let data;
//         try {
//           data = await res.clone().json();
//         } catch {
//           data = await res.text();     
//         }
//         if (data?.errors) setErrors(data.errors);
//         else if (data) setErrors([data]);
//         else setErrors([res.statusText]);
//       })
//     };

//   return (
//     <>
//       <h1 className="review-trail">{trail.tName}</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="review-box2">
//           <textarea 
//             className="review-input"
//             type="text"
//             placeholder="Give back to the community. Share your thoughts about the trail so others want to expect."
//             value={review}
//             onChange={(e) => createReview(e.target.value)}
//             required
//           />
//         </div>
//         <div className="review-next">
//         <button id="review-next" type="Next" >Next</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default ReviewForm;