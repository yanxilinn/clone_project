import './HomePage.css';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import dog from '../HomePage/dog.png';
import hiking from '../HomePage/hiking.png';
import mountainBike from '../HomePage/mountainBiking.png';
import roadBike from '../HomePage/roadBiking.png';
import running from '../HomePage/running.png';
import wheelchair from '../HomePage/wheelchair.png';
import search from '../HomePage/search.png';
// import * as sessionActions from "../../store/session"; 
import t1 from '../HomePage/trail1.jpeg';
import t2 from '../HomePage/trail2.jpeg';
import t3 from '../HomePage/trail3.jpeg';
import t4 from '../HomePage/trail4.jpeg';
import t5 from '../HomePage/trail5.jpeg';
import t6 from '../HomePage/trail6.png';
import t7 from '../HomePage/trail7.jpeg';
import t8 from '../HomePage/trail8.webp';
import mypic from '../HomePage/mypic.png';
import github from '../HomePage/github.gif';
import linkedin from '../HomePage/linkedin.gif'; 
import SearchBar from '../SearchBar';
import {getTrails,getTrail} from '../../store/trail';
// import {dropDown} from '../SearchBar/SearchInput';
import React from 'react';



const HomePage = () => {   
    let getTimeState = () => {
        let timeNow = new Date();
        let hours = timeNow.getHours();
        let text = "";
        if (hours >= 0 && hours <= 12) {
            text = "Good morning, ";
        } else if (hours > 12 && hours <= 18) {
            text = "Good afternoon, ";
        } else if (hours > 18 && hours <= 24) {
            text = "Good evening, ";
        } 
        return text; 
    }; 

    let textState = getTimeState();
    const sessionUser = useSelector(state => state.session.user);
    const helloMessage = (sessionUser) ? `${textState} ${sessionUser.firstName}` : 'Find your next trail'

    const allTrails = useSelector(getTrails);
    // console.log(state);

    // const searchInputDropDown = (e) => {
    //     return (
    //         <div>
    //             <input className='bar' placeholder="Search by city, park, or trail name" />
    //             <Dropdown
    //                 trigger={'focus'}
    //                 position={'bottomLeft'}
    //                 render={
    //                     <Dropdown.Menu tabIndex={-1}>
    //                         <Dropdown.Item>Trail 1</Dropdown.Item>
    //                         <Dropdown.Item>Trail 2</Dropdown.Item>
    //                         <Dropdown.Item>Trail 3</Dropdown.Item>
    //                     </Dropdown.Menu>
    //                 }
    //             >
    //             </Dropdown>
    //         </div>
    //     );
    // }

return (
    <div className='home'>
        <div className='homepage-bg' > 
        <div id='hello'>{ helloMessage }</div>
 
        <div className='search-home'>
            <div className='search'>
                <img id="search-img" src={search} alt=""/> 
                    {/* <SearchBar /> */}
                <div className='bar'>
                <input className='bar-input' placeholder="Search by city, park, or trail name" />
                </div>
            </div>
        </div>
        <div className='search-result'>
            <div className='search-result-list'>
            123123123123
            </div>
            </div>
        </div>
        <div className='block1'>
             <div className='home-show'>
            <div className='title'>
                <div id="title">Local favorites in New York</div>
                <div className='show-pic'>
                    <div className='trail1'><Link to='/trails/1' ><img id="tImg" src={t1} alt="" /></Link></div>
                    <div className='trail1'><Link to='/trails/2' ><img id="tImg" src={t2} alt="" /></Link></div>
                    <div className='trail1'><Link to='/trails/3' ><img id="tImg" src={t3} alt="" /></Link></div>
                    <div className='trail1'><Link to='/trails/4' ><img id="tImg" src={t4} alt="" /></Link></div>
                </div>
                <div className='show-text'>
                    <div className='trai1'>
                        <div id="diff-easy">easy</div>
                        <div id="t-n">Mount Tamalpais State Trail</div>
                        <div id="t-l">USA - New York</div>
                        <div id="t-l">Length: 8.4mi</div>
                    </div>
                    <div className='trai2'>
                        <div id="diff-hard">hard</div>
                        <div id="t-n">East and West Drive Loop</div>
                        <div id="t-l">USA - New York</div>
                        <div id="t-l">Length: 6.1mi</div>
                    </div>
                    <div className='trai3'>
                        <div id="diff-mod">moderate</div>
                        <div id="t-n">Jennings Beach To Pine Creek Point Trail</div>
                        <div id="t-l">USA - New York</div>
                        <div id="t-l">Length: 4.9mi</div>
                    </div>
                    <div className='trai4'>
                        <div id="diff-easy">easy</div>
                        <div id="t-n">Twin Brooks Park Loop</div>
                        <div id="t-l">USA - New York</div>
                        <div id="t-l">Length: 2.5mi</div>
                    </div>
                </div>
             </div>
             <div className='title'>
                <div id="title">Best Trail in New York</div>
                <div className='show-pic'>
                    <div className='trail1'><Link to='/trails/5' ><img id="tImg" src={t5} alt="" /></Link></div>
                    <div className='trail1'><Link to='/trails/6' ><img id="tImg" src={t6} alt="" /></Link></div>
                    <div className='trail1'><Link to='/trails/7' ><img id="tImg" src={t7} alt="" /></Link></div>
                    <div className='trail1'><Link to='/trails/8' ><img id="tImg" src={t8} alt="" /></Link></div>
                </div>
                <div className='show-text'>
                    <div className='trai1'>
                        <div id="diff-mod">moderate</div>
                        <div id="t-n">Teepee to Thrilla to Viper to IMBA Loop</div>
                        <div id="t-l">USA - New York</div>
                        <div id="t-l">Length: 4.9mi</div>
                    </div>
                    <div className='trai2'>
                        <div id="diff-easy">easy</div>
                        <div id="t-n">Forest Park Loop</div>
                        <div id="t-l">USA - New York</div>
                        <div id="t-l">Length: 2.3mi</div>
                    </div>
                    <div className='trai3'>
                        <div id="diff-mod">moderate</div>
                        <div id="t-n">Alley Pond Park Loop</div>
                        <div id="t-l">USA - New York</div>
                        <div id="t-l">Length: 3.2mi</div>
                    </div>
                    <div className='trai4'>
                        <div id="diff-easy">easy</div>
                        <div id="t-n">Joe Michaels Mile</div>
                        <div id="t-l">USA - New York</div>
                        <div id="t-l">Length: 5mi</div>
                    </div>
                </div>
             </div>
        </div>
</div>

        <div className='block2'>
        <div className='block3'>
            <div id="pic">
                <div id="pic-top">
                    <Link id="hiking" to="/login">
                        <img id='hiking'  src={hiking} alt="hiking"></img> 
                    </Link>
                    <Link id="running" to='/login'>
                        <img id='running' src={running} alt="running"></img> 
                    </Link>
                    <Link id="wheelchair" to='/login'>
                        <img id='wheelchair' src={wheelchair} alt="wheelchair"></img> 
                    </Link>
                </div>
                <div id='pic-bot'>
                    <Link id="mountainBike" to='/login'>
                        <img id='mountainBike' src={mountainBike} alt="mountainBike"></img> 
                    </Link>
                    <Link id="dog" to='/login'>
                        <img id='dog' src={dog} alt="dog"></img> 
                    </Link>
                    <Link id="roadBike" to='/login'>
                        <img id='roadBike' src={roadBike} alt="roadBike"></img> 
                    </Link>
                </div>
            </div>
        </div>
        <div className='block4'>
            <div id='text1'>Build for everyone to go wild</div>
            <div id='text2'>Whether you want a casual stroll or a trek to the summit, we've got you covered.</div>
            <div id='botton'>
                <Link id='signup' to="/signup">Sign Up</Link>
            </div>
        </div>
        
        </div>
        <div id='line' />
        <div className='block5'>
            <div id="about">About Me</div>
            <div id="myPic"> 
            <img id="mypic" src={mypic} /> 
            <a href="https://github.com/yanxilinn/clone_project.git" target="_blank" rel="noopener noreferrer"> <img id='l' src={github} /> </a> 
            <a href="https://www.linkedin.com/in/yanxi-lin-363959145" target="_blank" rel="noopener noreferrer"> <img id='l' src={linkedin} /> </a>
            </div>
        </div>
    </div>
);

}


export default HomePage;