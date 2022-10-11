import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
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
        <Link to="/signup">Sign Up</Link>
        <LoginFormModal />
      </>
    );
  }

  return (
    <div className='nav'>
      <div className='nav-left'>
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
        
  );
}

export default Navigation;
