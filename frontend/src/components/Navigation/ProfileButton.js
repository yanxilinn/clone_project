import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import pro from '../Navigation/profile.png';
import { Link } from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <div className="profile">
      <Link id='icon-pro'>
        <img id='click-pro' onClick={openMenu} src={pro} alt="pro" />
      </Link>
    </div>
    <>
    {showMenu && (
        <ul className="profile-dropdown">
          Hi, {user.firstName}
          <div className="out"  >
            <Link id='logout' onClick={logout} >Log Out</Link>
          </div>
        </ul>
      )}
    </>
    </>
  );
}

export default ProfileButton;
