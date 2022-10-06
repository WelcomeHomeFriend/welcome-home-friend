import React, { useState, useEffect, useRef } from "react";
import MarkerModal from "./MarkerModal.jsx";

const Marker = (options) => {
  const [marker, setMarker] = useState();
  const [open, setOpen] = useState();

  console.log('Marker re-rendered')

  useEffect(() => {
    // console.log(options);
    if (!marker) {
      // when this is first called, map is undefined because we need to first pass the array of <Marker/> to Map first, therefore we are not adding the position and map from props here
      setMarker(new google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  // second use effect will be triggered once a marker has been created to set market options
  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  // implementing open modal functionality 
  const handleClick = () => {
    
  }
  return (
    <MarkerModal petData={options.petData} openState={open}/>
  )
};



export default Marker; 