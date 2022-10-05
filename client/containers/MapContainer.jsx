// importing dependencies 
import React from "react";
// probably also need to import React hooks as we go

import { Wrapper, Status } from "@googlemaps/react-wrapper";
// importing files 
import Map from '../components/Map.jsx';


const render = (status) => {
  return <h1>{status}</h1>;
};

const MapContainer = () => {

  return(
    <Wrapper apiKey={"AIzaSyAB2C2iamCoJLJyVjkxxI2X3wTC-OoI6Vk"} render={render}>
      <Map zoom={10} center={{lat: 34.052, lng: -118.244}}/>
    </Wrapper>
  )
};



export default MapContainer;