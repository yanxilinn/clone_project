import './HomePage.css';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import dog from '../HomePage/dog.png';
import hiking from '../HomePage/hiking.png';
import mountainBike from '../HomePage/mountainBiking.png';
import roadBike from '../HomePage/roadBiking.png';
import running from '../HomePage/running.png';
import wheelchair from '../HomePage/wheelchair.png';
import search from '../HomePage/search.png';
import click from '../HomePage/click.png';
// import * as sessionActions from "../../store/session"; 
// import bg1 from '../HomePage/bg1.png';
// import bg2 from '../HomePage/bg2.png';
// import bg3 from '../HomePage/bg3.png';


const HomePage = () => {   
    // const userName = (sessionUser) ? sessionUser. : '123';
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

    

return (
    <div className='home'>
        <div className='homepage-bg' > 
        <div id='hello'>
            { helloMessage }
        </div>
 
        <div className='search-home'>
            
           <img id="search" src={search} alt=""/> 
          <input className='bar' placeholder=' Search by city, park, or trail name' />
          <img id="click" src={click} alt=""/> 
          {/* <button className="search-button" to='/'>SEARCH</button> */}
        </div>
        <div className='block1'>
            <div className='title'>
                <div id="title">Local favorites in New York</div>
             <div className='home-show'>
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
        <div className='block5'>
            <div id="about">About Me</div>
        </div>


        </div>
    </div>
);

}


export default HomePage;