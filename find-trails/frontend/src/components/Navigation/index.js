import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <div className='loginPage'>
        <LoginFormModal />
        <NavLink to="/signup" >Sign Up</NavLink>
      </div>
    );
  }

  return (
        <div className='homePage'>
            <NavLink exact to='/'>
              <img src={logo2} alt="logo"/>
            </NavLink>
            {sessionLinks}
        </div>
        // {sessionLinks},
        
  );
}

export default Navigation;
