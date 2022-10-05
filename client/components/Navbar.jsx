import React from 'react';
import logo from '../images/logo_navbar.png';
import title from '../images/title_navbar.png';
import { Button } from '../styles/MUIComponents.jsx'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    fetch('/api/logout', {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((json) => {
        // if (json.status === 200) {
        //   useNavigate('/');
        // }
        navigate('/');
      })
      .catch((err) => {
        console.log('error:', err);
        navigate('/');
      })
  }

  return (
    <div className="navbar-container">
      <div id="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="navbar-title">
        <img src={title} alt="title" />
      </div>
      <div id="navbar-login">
        <Button onClick={handleClick}>Log Out</Button>
      </div>
    </div>
    /* logo / welcome home friend / login button */
  )
}



export default Navbar;