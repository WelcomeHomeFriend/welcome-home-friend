import React from "react";
//import child components/ containers
import Navbar from './components/Navbar.jsx';
import ContentContainer from './containers/ContentContainer.jsx'
import { useState, useEffect } from 'react';


const App = () => {
    //We need state here with user info. 
    const [userDetails, setUserDetails] = React.useState({
        firstName: null,
        lastName: null,
        address: null,
        username: null,   //not currently used
        location: null, //not currently used
        password: null, //not currently used
        oauth: null, //not currently used
        pet: null,
        email: null,
        user_id: null,
        picture: null,
    })
    console.log("this is the userDetails state in App.jsx: ", userDetails);


    return (
        <div className="app-container">
            <Navbar userDetails={userDetails} setUserDetails={setUserDetails}/>
            <ContentContainer />
        </div>
    )
}

export default App;