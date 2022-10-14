import './TrailsPage.css';
import { Link } from 'react-router-dom';
import search from '../TrialPage/search.png';
import tImg1 from "../TrialPage/testTrail1.jpeg";
import tImg2 from "../TrialPage/testTrail2.jpeg" ; 
import tImg3 from "../TrialPage/testTrail3.jpeg" ;
import icon1 from "../TrialPage/icon1.png";
import icon2 from "../TrialPage/icon2.png";
import icon3 from "../TrialPage/icon3.png";
import icon4 from "../TrialPage/icon4.png";
import icon5 from "../TrialPage/icon5.png";

const TrailsPage = () => {
    return (
        <div className='trailPage'>
            <div className='tailPath'>
                <div className='path1'>United States of America > New York > Manhatten  </div>
                <div className='path2'>
                    <div className='trailBox'>
                        <input id="path2" placeholder='Enter a city, park or trail name' />
                        <Link id='search' >
                            <img id='searchPic' src={search} alt="search"></img>
                        </Link>
                    </div>
                </div>
                {/* <div className='path3'>3</div> */}
            </div>
            <div className='trailPicPage'>
                <div className='trailPic'>
                    <div class="imgList">
                        <img id="img" src={tImg1} alt="" />
                        <img id="img" src={tImg2} alt="" />
                        <img id="img" src={tImg3} alt="" />
                    </div>
                </div>
                <div className='trailPic2'>
                    {/* trailPic2 */}
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

        </div>
    )
};

export default TrailsPage; 
