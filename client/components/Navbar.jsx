import React from 'react';
import logo from '../images/logo_navbar.png';
import title from '../images/title_navbar.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div id="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="navbar-title">
        <img src={title} alt="title" />
      </div>
      <div id="navbar-login">
        <button id="login-button" type="button">Log In</button>
      </div>
    </div>
    /* logo / welcome home friend / login button */ 
  )
}

export default Navbar;