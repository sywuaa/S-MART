import React from 'react';
import AuthContainer from './auth/auth_container';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="header-container">
      <div className="left-nav">
        <Link className="logo" to='/'>S-Mart</Link>
        <span>Explore</span>
        <span>How It Works</span>
        <span>About Us</span>
      </div>

      <div className="right-nav">
        <AuthContainer />
      </div>
    </div>
  )
}

export default Header;
