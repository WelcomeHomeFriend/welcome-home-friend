import React from 'react';
import useState from 'react';
import logo from '../images/logo_navbar.png';
import title from '../images/title_navbar.png';
import Button from '@mui/material/Button';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';

const Navbar = () => {

  // how should we use react hooks for storing state?
  // const {signIn, loaded} = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId,
  //   cookiePolicy,
  // })

  const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
     // use state to store user?
  }

  // const logout = () => {
  //   console.log('logged out')
  // }

  return (
    <div className="navbar-container">
      <div id="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="navbar-title">
        <img src={title} alt="title" />
      </div>
      <div id="navbar-login">

        {/*https://www.npmjs.com/package/react-google-login */}
        {/*We need to make a link to Google for Oauth. Should send user to Google for login. 
        Google will send us a token ID that we need to verify. */}

        <GoogleLogin
          clientId="917801807567-gfe8tjdgm07q6amr1j70nmfjdjh4q0gh.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
          isSignedIn={false}
          redirectUri="postmessage"
        />
        {/* <GoogleLogout
          clientId="917801807567-gfe8tjdgm07q6amr1j70nmfjdjh4q0gh.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        >
        </GoogleLogout> */}
        {/* <Button
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
        >Log in</Button> */}
      </div>
    </div>
    /* logo / welcome home friend / login button */
  )
}

export default Navbar;