// importing dependencies 
import React from "react";
// probably also need to import React hooks as we go

import { Wrapper, Status } from "@googlemaps/react-wrapper";
// importing files 
import Map from '../components/Map.jsx';
import Marker from "../components/Marker.jsx";



const render = (status) => {
  return <h1>{status}</h1>;
};

const MapContainer = () => {
  const options = {
    position: {lat: 34.052, lng: -118.244}
  }

  const arrayOfMarkers = [];

  const getArray = () => {
    arrayOfMarkers.push(<Marker options={options} />)
    return arrayOfMarkers
  }

  return(
    <Wrapper apiKey={"AIzaSyAB2C2iamCoJLJyVjkxxI2X3wTC-OoI6Vk"} render={render}>
      <Map zoom={10} center={options.position} arrayOfMarkers={getArray()}>
        {arrayOfMarkers}
      </Map>
    </Wrapper>
  )
};



export default MapContainer;