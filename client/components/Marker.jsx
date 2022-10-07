import React, { useState, useEffect, useRef } from "react";
import MarkerModal from "./MarkerModal.jsx";

const Marker = (props) => {
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
      console.log('options: ',props)
      marker.setOptions(props);
      // adding infoWindow when clicked 
      marker.addListener("click", () => {
        const contentString = 
          '<div class=info-window>' +
          `<h1>${props.petData.pet_name}</h1>` +
          // `<div class=pet-icon-container>` +
          `<img class='pet-icons' src=${props.petData.image_url}> ` + 
          // `<div/>` +
          `<h3>Last Seen At: ${props.petData.street_address + ', ' + props.petData.city}<h3/>`
          '</div>';
        const infowindow = new window.google.maps.InfoWindow({
        content: contentString
        })

        console.log('inside eventListener')
        console.log(infowindow);
        infowindow.open({
        anchor: marker,
        content: contentString,
        map: props.map
      })
    });
    }
  }, [marker, props]);

  // implementing open modal functionality 

  return null;
  
  
};

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

export default Marker; 