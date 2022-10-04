import React from 'react';
import logo from '../images/logo_navbar.png';
import title from '../images/title_navbar.png';
import Button from '@mui/material/Button';

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
      <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: '#EED971FF',
              color: 'black',
              '&:hover': {
                backgroundColor: 'orange',
                color: '#222'
              },
            }}
            >Log In</Button>
      </div>
    </div>
    /* logo / welcome home friend / login button */ 
  )
}

export default Navbar;