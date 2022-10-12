import './HomePage.css';
import { useSelector } from "react-redux";
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
        </div>
    </div>
);

}


export default HomePage;