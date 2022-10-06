import React, { useState, useEffect } from 'react';
import logo from '../images/logo_navbar.png';
import title from '../images/title_navbar.png';
import jwt_decode from 'jwt-decode';
//Seriously, what is adding imports on it's own? 


const Navbar = (props) => {

  console.log('props being passed into Navbar are: ', props);

  //Returns information from Google
  function handleCallbackResponse(response) {
    // console.log("Encoded JWT ID Token: ", response.credential);
    const userObject = jwt_decode(response.credential)

    // creating user object for sending info to database and putting in state
    const user = {};
    user.name = userObject.name;
    user.given_name = userObject.given_name;
    user.family_name = userObject.family_name;
    user.email = userObject.email;
    user.picture = userObject.picture;

    // props.setUserDetails(user);
    document.getElementById('signInDiv').hidden = true;

    //userObject.email   .family_name    .given_name    .name   .picture
    // We need to get this into state
    // We need to get this into our DB. 
    // We are going to send to BE, through router and middleware, upload to DB, then return EVERYTHING from the DB back and put in state. 

    // console.log('this is the user obj', user);

    // sending user info to our server, then sending it to our DB
    fetch('/api/userCreate', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(response => {
        console.log('response is...',response);
        //get the old state.
        //copy it to new state.
        //make our changes to new state.
        //setUserDetails. 
        const oldState = props.userDetails[0];
        const newState = {...oldState};
        newState.firstName = response[0].first_name;
        newState.lastName = response[0].last_name;
        newState.address = response[0].address;
        newState.email = response[0].email;
        newState.user_id = response[0]._id;
        newState.picture = user.picture;

        props.setUserDetails(newState)
      })

  } //end handleCallbackResponse

  function handleSignOut(event) {
    // if user wants to sign out, set user info to an empty object in state

    props.setUserDetails({})
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "917801807567-gfe8tjdgm07q6amr1j70nmfjdjh4q0gh.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <div className="navbar-container">
      <div id="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="navbar-title">
        <img src={title} alt="title" />
      </div>

      <div id="navbar-login">
        <div id="signInDiv"></div>
        {/*conditional rendering the sign out button (only if state has info)*/}
        {props.userDetails.firstName !== null &&
          <button className="sign-out-button" onClick={(e) => handleSignOut(e)}>Sign Out!</button>
        }
        {/* conditional rendering the picture and name */}
        {props.userDetails &&
          <div className="signInDisplay">
            {/* <img src={user.picture}></img> */}
            <img src={props.userDetails.picture}></img>
            {/* <h3>{user.given_name}</h3> */}
            <h3>{props.userDetails.firstName}</h3>
          </div>
        }
      </div>

    </div>
  )
}

export default Navbar;
