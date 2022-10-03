import React from "react";
import Modal from "./PostModal.jsx"

const Post = ( {petObj} ) => {
  //petObj will be a giant object with key value pairs of:
      // _id (req), pet_name (req), owner, address, 
      //eye_color, gender, image_url, fur_color, last_found, comments

  function loadImg(url) {
    if (url) return <img height='75' width='75' src={petObj.image_url}></img>
  }

  return (
    <div className="post">
      <h4><b>{petObj.pet_name}</b> is Lost</h4>
      {loadImg(petObj.image_url)}
      <p>Is a {petObj.type}</p>
      <p>Has {petObj.fur_color} colored fur</p>
      <p>Has {petObj.eye_color} colored eyes</p>
      <p>Was last seen on/at? {petObj.last_found}</p>
      <p>Owner is:{petObj.owner}</p>
      <Modal petObj={petObj}></Modal>
    </div>
  )
}

export default Post;