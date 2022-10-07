// importing dependencies 
import React, { useEffect, useState } from "react"; 
// probably also need to import React hooks as we go

import { Wrapper, Status } from "@googlemaps/react-wrapper";
// importing files 
import Map from '../components/Map.jsx';
import Marker from "../components/Marker.jsx";
import MarkerModal from "../components/MarkerModal.jsx";



const render = (status) => {
  return <h1>{status}</h1>;
};

const MapContainer = (props) => {
  console.log('MapContainer re-rendered')

  const [selected, setSelected] = useState({});
  const [map, setMap] = useState();
  const [renderArray, setRenderArray] = useState();
  const [stopRerendering, setStopRerendering] = useState();

  const onSelect = (item, position)=> {
    const contentString = 
    '<div>' +
      `<h1>${selected.pet_name}</h1>` +
    '</div>';


    console.log('inside onSelect')
    setSelected(item);
    infowindow.open({
      position: position,
      content: contentString,
      map: map
    })
  }

  // info window 
  
  
  // const infowindow = new window.google.maps.InfoWindow({
  //   content: contentString
  // })


  const arrayOfCoordinates = [];

  // put all missing pets coordinates into an array
  const populateCoordinates = () => {
    for (let i=0; i<props.allPetData.length; i++) {
      // need to convert coordinates to number because SQL returns everything in string format 
      const lng = Number(props.allPetData[i].longitude);
      const lat = Number(props.allPetData[i].latitude);
      arrayOfCoordinates.push({lat: lat, lng: lng})
    }
  }
  // render markers on initial render/ every re-render
  populateCoordinates();
  console.log('coords array: ',arrayOfCoordinates)
  const arrayOfMarkers = [];
  // create Market component with the corresponding data and put them inside an array to be rendered 
  const getArray = () => {
    console.log("inside getArray()")
    for (let i=0; i<arrayOfCoordinates.length; i++) {
      arrayOfMarkers.push(
        <Marker position={arrayOfCoordinates[i]} petData={props.allPetData[i]}  style={{}} map={map} onClick={() => onSelect(props.allPetData[i], arrayOfCoordinates[i])}>
          {/* <MarkerModal petData={props.allPetData[i]} /> */}
        </Marker>
        )
    }

    // for adding in images as marker: icon={props.allPetData[i].image_url }
    // return arrayOfMarkers
  }

  getArray();

  // LMAO
  if (arrayOfMarkers.length>0 && !stopRerendering) {
    setRenderArray(true);
    setStopRerendering(true);
  } 
    

  console.log('arrayOfMarkers: ', arrayOfMarkers)
  return(
    <Wrapper apiKey={"AIzaSyAB2C2iamCoJLJyVjkxxI2X3wTC-OoI6Vk"} render={render}>
      <Map zoom={10} center={props.center} arrayOfMarkers={arrayOfMarkers}  map={map} setMap={setMap} >
        {/* {(renderArray) ?
          {arrayOfMarkers} :
          null
        } */}
        {/* {arrayOfMarkers} */}
      </Map>
    </Wrapper>
  )
};



export default MapContainer;