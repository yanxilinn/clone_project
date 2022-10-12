import './HomePage.css';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import dog from '../HomePage/dog.png';
import hiking from '../HomePage/hiking.png';
import mountainBike from '../HomePage/mountainBiking.png';
import roadBike from '../HomePage/roadBiking.png';
import running from '../HomePage/running.png';
import wheelchair from '../HomePage/wheelchair.png';
// import * as sessionActions from "../../store/session"; 
// import bg1 from '../HomePage/bg1.jpg';
// import bg2 from '../HomePage/bg2.jpg';
// import bg3 from '../HomePage/bg3.jpg';


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
        <div className='block1'>
            This is home page block1 
        </div>
        <div className='block2'>
        <div className='block3'>
            <div id="pic">
                <div id="pic-top">
                    <Link id="hiking" to='login'>
                        <img id='hiking' src={hiking} alt="hiking"></img> 
                    </Link>
                    <Link id="running" to='login'>
                        <img id='running' src={running} alt="running"></img> 
                    </Link>
                    <Link id="wheelchair" to='login'>
                        <img id='wheelchair' src={wheelchair} alt="wheelchair"></img> 
                    </Link>
                </div>
                <div id='pic-bot'>
                    <Link id="mountainBike" to='login'>
                        <img id='mountainBike' src={mountainBike} alt="mountainBike"></img> 
                    </Link>
                    <Link id="dog" to='login'>
                        <img id='dog' src={dog} alt="dog"></img> 
                    </Link>
                    <Link id="roadBike" to='login'>
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


        </div>
    </div>
);

}


export default HomePage;