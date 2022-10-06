import React, { useEffect, useState } from "react";
//import child components/ containers 
import Post from "../components/Post.jsx";
import { usePetContext, usePetUpdateContext } from "../contexts/PostContext.jsx";
import MapContainer from "./MapContainer.jsx";
 // _id (req), pet_name (req), owner, address, eye_color, gender, image_url, fur_color, last_found, comments


const PostContainer = (props) => {
  console.log('PostContainer re-rendered')
  // petArr uses the context that contains the state of all pet information in the form of an array of objects
  const petArr = usePetContext();
  // addPetData is assigned function that updates state of pets by using its context
  const addPetData = usePetUpdateContext();
  // this state determines the center of the map, in future stretch features this can be set to the user's current location to see missing pets around user. Current center is LA
  const [center, setCenter] = useState({lat: 34.052, lng: -118.244})
  // update pet data on initial render
    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => {
                addPetData(data);
                console.log('fetch done. updated allPetData')
            })
            .catch(err => console.log(err));
    }, [])

  // console.log('petArr: ', petArr)
    return (
        <div className="post-container">
          <h1 className="center-text">Lost Friends</h1>
            <MapContainer allPetData={petArr} center={center}/>

          <div className="post-list">
            {/* Array of Post Components */}
            {petArr.map((el, i) => <Post key={i} petObj={el} />)}
          </div>
        </div>
    )
}

export default PostContainer;