import React, { useState, useEffect, useRef } from "react";


const Marker = (options) => {
  const [marker, setMarker] = useState();
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
   
  return null;
};



export default Marker; 