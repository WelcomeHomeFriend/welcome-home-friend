// importing dependencies 
import React from "react";
// probably also need to import React hooks as we go

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MarkerClusterer from "@googlemaps/markerclustererplus";




const Map = (props) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {center: props.center, zoom: props.zoom}));
    }
  }, [ref, map]);

  return <div ref={ref} className='map-please' />;
};


export default Map;