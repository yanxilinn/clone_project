import './TrailsPage.css';
import { Link } from 'react-router-dom';
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import weather from "./weather.png"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrail, getTrail } from '../../store/trail';
import TrailMap from '../TrailPage/TrailMap.js';
import t1 from '../HomePage/trail1.jpeg';
import t2 from '../HomePage/trail2.jpeg';
import t3 from '../HomePage/trail3.jpeg';
import t4 from '../HomePage/trail4.jpeg';
import t5 from '../HomePage/trail5.jpeg';
import t6 from '../HomePage/trail6.png';
import t7 from '../HomePage/trail7.jpeg';
import t8 from '../HomePage/trail8.webp';
import t9 from '../HomePage/trail9.jpeg';
import t10 from '../HomePage/trail10.jpeg';
import location from '../TrailPage/location.png'; 
import ReviewModal from '../ReviewModal'; 
import ReviewForm from '../ReviewModal/Review';
import handleWriteReivew from '../ReviewModal'
// import reviewsReducer, { fetchReviews, getReviews, getReview} from '../../store/review';
import reviewsReducer, { fetchReviews, getReviews, getReview, deleteReview, editReview } from '../../store/review';
import head from "../TrailPage/review-icon.png";
import EditReview from '../ReviewModal/EditReview';
import EditReviewForm from '../ReviewModal/EditReviewModal';
import NearbyTrails from '../NearbyTrails/NearbyTrails';

const TrailsPage = () => {
    const dispatch = useDispatch();
    const {trailId} = useParams();
    const {reviewId} = useParams();
    const trail = useSelector(getTrail(trailId));
    let reviews = useSelector(getReviews);
    // console.log(reviews);
    // const review = useSelector(getReview);
    const sessionUser = useSelector(state => state.session.user);
    
    const reviewList = reviews.map((review) => {

        const handleDelete = (e) => {
            e.preventDefault();
            dispatch(deleteReview(trailId, review.id));
        }
        return (
            <div key={review.id}>
                <div className='review-info'>
                    <img src={head} />
                    <div className='review-user'>
                        <div id='re-user'>{review.firstName} &nbsp; {review.lastName}</div>
                        <div id='re-date'>{review.date}</div>
                    </div>
                </div>
                <div className='review-body'>
                    {review.body}
                    {sessionUser?.id == review.userId && 
                    <div className='reviewButton'>
                <div className='editButton' > <EditReview review={review}/>  </div>
                <button className='deleteButton' onClick={handleDelete}>Delete</button>
                    </div>
                    }
                </div>
            </div>
        )
    })

    useEffect (() => {
        // dispatch(fetchTrails());
        dispatch(fetchTrail(trailId));
        dispatch(fetchReviews(trailId));
        // debugger
    }, [dispatch, trailId]);

 
    if (trail){
    return (
        <div className='trailPage'>
            <div className='tailPath'>
                {/* <div className='path1'>{trail.contry} - {trail.city}</div> */}
                {/* <div className='path2'>
                    <div className='trailBox'>
                        <input id="path2" placeholder='Enter a city, park or trail name' />
                        <div id='search'>
                            <img id='searchPic' src={search} alt="search"></img>
                        </div>
                    </div>
                </div> */}
            </div>  
            <div className='trailPicPage'>
                <div className='trailPic'>
                    <div className='trailName'>
                        <div id='name'>{trail.tName}</div>
                        <div className='rate'>
                        <div id='diff'>
                        <div id='difficult'>{trail.difficultyLevel}</div>
                        </div>
                        <div id='start'>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        </div>
                        </div>
                        <div id='location'>{trail.contry} -  {trail.city}</div>
                    </div>
                    <div className="imgList">
                        {trail.id == 1 && <img id="img" src={t1} alt="" />}
                        {trail.id == 2 && <img id="img" src={t2} alt="" />}
                        {trail.id == 3 && <img id="img" src={t3} alt="" />}
                        {trail.id == 4 && <img id="img" src={t4} alt="" />}
                        {trail.id == 5 && <img id="img" src={t5} alt="" />}
                        {trail.id == 6 && <img id="img" src={t6} alt="" />}
                        {trail.id == 7 && <img id="img" src={t7} alt="" />}
                        {trail.id == 8 && <img id="img" src={t8} alt="" />}
                        {trail.id == 9 && <img id="img" src={t9} alt="" />}
                        {trail.id == 10 && <img id="img" src={t10} alt="" />}
                    </div>
                </div>
                {/* <div className='trailPic2'>
                    <div className='trailIcon'>
                    <p className='icon1'> 
                        <img id="icon1" src={icon1} alt="" /> 
                        </p>
                    <p className='icon2'>
                    <img id="icon2" src={icon2} alt="" /> 
                    </p>
                    <p className='icon3'>
                    <img id="icon3" src={icon3} alt="" /> 
                    </p>
                    <p className='icon4'>
                    <img id="icon4" src={icon4} alt="" /> 
                    </p>
                    <p className='icon5'>
                    <img id="icon5" src={icon5} alt="" /> 
                    </p>
                    </div>
                    <div className='iconText'>
                        <div id='itext1'>Photos</div>
                        <div id='itext2'>Directions</div>
                        <div id='itext3'>Print</div>
                        <div id='itext4'>Share</div>
                        <div id='itext5'>More</div>
                    </div>
                </div> */}
            </div>
            <div className='content'>
                    <div className='left-col'>
                        <div className='description'>
                            <div id='des' >
                                {trail.description} 
                            </div>
                        </div>
                        <div className='tag'>
                            <div className='tag-top'>
                                <div id='length'>
                                    Length
                                <div id='length-num'>{trail.length} mi</div>
                                </div>
                                <div id='elevationGain'>
                                    Elevation gain
                                <div id='gain-num'>{trail.elevationGain}</div>
                                    </div>
                                <div id='type'>
                                    Route Type
                                <div id='type-text'>Loop</div>
                                    </div>
                            </div>
                            <div className='tag-bot1'>
                                <p id='tag-text'> Kid friendly </p>
                                <p id='tag-text'> Hiking </p>
                                <p id='tag-text'> Snowshoeing </p>
                                <p id='tag-text'> Walking </p>
                                <p id='tag-text'> Running </p>
                                <p id='tag-text'> Forest </p>
                            </div>
                            <div className='tag-bot2'>
                                <p id='tag-text'> Lake </p>
                                <p id='tag-text'> Dog friendly </p>
                                <p id='tag-text'> River </p>
                                <p id='tag-text'> Views </p>
                                <p id='tag-text'> Muddy </p>
                                <p id='tag-text'> Bird watching </p>
                            </div>
                        </div>
                        <div className='tab'>
                            <a className='tab-text'>Facilities</a>
                            <a className='tab-text'>Contact</a>
                            <div className='t-text'>
                                <div className='t-text-list'>Parking lot is free.  Bathrooms located at beach (fee might apply).</div>
                                <div className='t-text-list'>http://www.alltrails.com</div>
                            </div>
                        </div>
                        
                        <div className='condition'>
                            <div id='con-t'>
                            Conditions
                            </div>
                            <div id='condition1'>No conditions reported in the past 7 days</div>
                            <div id='condition2'>Want to report conditions for this trail? Write a review to inform other visitors!</div>
                        </div>
                        {/* <div className='weather'>
                            <div id='w'><div id='w-t'> Weather </div></div>
                            <div id='weather'>
                            <img id="weather" src={weather} alt="" /> 
                            </div>
                        </div> */}
                        <div className='review'>
                            <ReviewModal trailId={trail.id}/>    
                        </div>
                        <div className='review-post'>
                            <div className='block' />
                            <div className='re-box'>
                                {reviewList}
                            </div>
                        </div>

                    </div>
                    <div className='right-col'>
                            {/* <div className='map-box'> 
                                <TrailMap trails={[trail]} mapOptions={{ center: { lat: trail.latitude, lng: trail.longitude }}} />
                                <img id="location-poiter" src={location} alt=""  />
                                <p id='suggest-edit'>Suggest Edit</p>
                            </div> */}
                            <div className='nearby'>
                                <div id='nearby'>Nearby Trails</div>
                                <NearbyTrails trailId={trail.id}/>
                            </div>
                    </div>

            </div>

        </div>
            )
    };
    return(<></>);
    }


export default TrailsPage; 
