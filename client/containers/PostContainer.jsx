import React, { useEffect, useState } from "react";
//import child components/ containers 
import Post from "../components/Post.jsx";
import { usePetContext, usePetUpdateContext } from "../contexts/PostContext.jsx";
import MapContainer from "./MapContainer.jsx";
 // _id (req), pet_name (req), owner, address, eye_color, gender, image_url, fur_color, last_found, comments

const PostContainer = (props) => {
  console.log('PostContainer re-rendered')
    const petArr = usePetContext();
    const addPetData = usePetUpdateContext();
    const [allPetData, setAllPetData] = useState();
    const [center, setCenter] = useState({lat: 34.052, lng: -118.244})
  console.log('petArr: ',petArr)
    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => {
                addPetData(data);
                setAllPetData(data);
                console.log('fetch done. updated allPetData')
            })
            .catch(err => console.log(err));
    }, [props.handleChange])
// z I like the onclick idea -- how else can we tell it to rerun when the DB is updated?
// im thinking prop drilling from content container, have the state there, pass down handleclick to submit post and the state to post container
  // i see now - create a submit click count and use it as the second arg line 24?
  // that could work too, but for rn im thinking since submitting a form changes the state in content container, this useEffect should detect that change
  // i see what you are saying
  // no idea if this would work lolol hahaha nothing has yet truu lo
    return (
        <div className="post-container">
          <h1 className="center-text">Lost Friends</h1>
          {/* conditionally render MapContainer component only when allPetData state is updated after the promise chain is resolved in useEffect above */}
          {allPetData ?
            <MapContainer allPetData={allPetData} center={center}/> :
            null
          }
          <div className="post-list">
            {/* Array of Post Components */}
            {petArr.map((el, i) => <Post key={i} petObj={el} />)}
          </div>
        </div>
    )
}

export default PostContainer;