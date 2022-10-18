import './TrailsPage.css';
// import { Link } from 'react-router-dom';
import search from './search.png';
import tImg1 from "./testTrail1.jpeg";
// import tImg2 from "./testTrail2.jpeg" ; 
// import tImg3 from "./testTrail3.jpeg" ;
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
// import GoogleMapReact from 'google-map-react';  
// import { Wrapper } from "@googlemaps/react-wrapper";
import TrailMap from '../TrailPage/TrailMap.js';

const TrailsPage = () => {
    const dispatch = useDispatch();
    const {trailId} = useParams();
    const trail = useSelector(getTrail(trailId));
    // const trails = useSelector(getTrails);
    // console.log(trail);
    useEffect (() => {
        // dispatch(fetchTrails());
        dispatch(fetchTrail(trailId));
    }, [dispatch, trailId]);

 
    if (trail){
    return (
        <div className='trailPage'>
            <div className='tailPath'>
                <div className='path1'>{trail.contry} - {trail.city}</div>
                <div className='path2'>
                    <div className='trailBox'>
                        <input id="path2" placeholder='Enter a city, park or trail name' />
                        <div id='search'>
                            <img id='searchPic' src={search} alt="search"></img>
                        </div>
                    </div>
                </div>
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
                        <img id="img" src={tImg1} alt="" />
                        {/* <img id="img" src={tImg2} alt="" />
                        <img id="img" src={tImg3} alt="" /> */}
                    </div>
                </div>
                <div className='trailPic2'>
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
                </div>
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

                        <div className='weather'>
                            <div id='w'><div id='w-t'> Weather </div></div>
                            <div id='weather'>
                            <img id="weather" src={weather} alt="" /> 
                            </div>
                        </div>
                    </div>
                    <div className='right-col'>
                        <div className='map'> 
                        <TrailMap
                        // Map 
                        />
                        </div>
                        <p id='suggest-edit'>Suggest Edit</p>
                    </div>

            </div>

        </div>
            )
    };
    return(<></>);
    }


export default TrailsPage; 
