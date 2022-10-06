// importing dependencies 
import React, { useState, useEffect, useRef } from "react"; 
// probably also need to import React hooks as we go

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MarkerClusterer from "@googlemaps/markerclustererplus";




const Map = (props) => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  console.log('map re-rendered')


  useEffect(() => {
    if (ref.current && !map) {
      console.log('inside Map --- inside useEffect', ref, ref.current);
      setMap(new window.google.maps.Map(ref.current, {center: props.center, zoom: props.zoom}));
    }
  }, [ref, map]);

  return (
  <div>

    <div ref={ref} className='map-please' />
    {/* passing the map state to each child component (<Marker/>) by cloning the children components while merging map into existing props (options) */}
    {React.Children.map(props.arrayOfMarkers, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { map: map });
      }
    })}

    {/* This is a test div to determine difference if we included a hard coded div vs ref.current*/}
    {/* <div id="test" className='map-please'>
  
    </div> */}
    
  </div>
  )
};


export default Map;