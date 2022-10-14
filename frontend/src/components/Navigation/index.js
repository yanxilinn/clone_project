import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo2 from '../Navigation/logo2.png';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <div className='signup'>
        <Link id='signup' to="/signup">Sign Up</Link>
      </div>
      <div className='login'>
        <Link id='login' to="/login">Log In</Link>
      </div>
      </>
    );
  }

  return (
    <>
      <div className='nav'>
        <div className='nav-left'>
          <div className='explore'>explore</div>
            {/* <div>
              explore
            </div>
            <div>
              community
            </div>
            <div>
              saved
            </div>
            <div>
              shop
            </div> */}
        </div>
          <div className='logo'>
            <Link id="logo-link" to='/'>
              <img id='logo-img-home' src={logo2} alt="logo"></img> 
            </Link>
          </div>

          <div className='nav-right'>
              {sessionLinks}
          </div>
        </div>
      </>
  );
}

export default Navigation;
