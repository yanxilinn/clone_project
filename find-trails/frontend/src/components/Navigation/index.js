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
        <div className='logo'>
          <Link id="logo-link" to='/'>
            <img id='logo-img-home' src={logo2} alt="logo"/>
          </Link>
        </div>

        <div className='sessionLink'>
            {sessionLinks}
        </div>
    </div>
        // {sessionLinks}
        
  );
}

export default Navigation;
