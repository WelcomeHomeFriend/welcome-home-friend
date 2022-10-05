import React from 'react';
import logo from '../images/logo_navbar.png';
import title from '../images/title_navbar.png';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  //call the react hook navigate
  let navigate = useNavigate();

  //create a function for route change
  const routeChange = (e) => {
    console.log(e.target.id);
    let route = e.target.id;
    let path = `/${route}`;
    navigate(path);
  };

  return (
    <div className='navbar-container'>
      <div id='navbar-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div id='navbar-title'>
        <img src={title} alt='title' />
      </div>
      <div id='navbar-login'>
        <Button
          id='login'
          onClick={routeChange}
          size='large'
          variant='contained'
          sx={{
            backgroundColor: '#EED971FF',
            color: 'black',
            '&:hover': {
              backgroundColor: 'orange',
              color: '#222',
            },
          }}
        >
          Log In
        </Button>
        <Button
          id='register'
          onClick={routeChange}
          size='large'
          variant='contained'
          sx={{
            backgroundColor: '#EED971FF',
            color: 'black',
            '&:hover': {
              backgroundColor: 'orange',
              color: '#222',
            },
          }}
        >
          Register
        </Button>
      </div>
    </div>
    /* logo / welcome home friend / login button */
  );
};

export default Navbar;
