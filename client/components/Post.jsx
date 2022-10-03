import React from "react";
import Modal from "./PostModal.jsx"
import pushpin from '../images/randoogle_Thumbtack_Pushpin.svg';

const Post = ( {petObj} ) => {
  //petObj will be a giant object with key value pairs of:
      // _id (req), pet_name (req), owner, address, 
      //eye_color, gender, image_url, fur_color, last_found, comments

  function loadImg(url) {
    if (url) return <img className="lost-pet-pic" src={petObj.image_url}></img>
  }

  return (
    <div className="post">
      <div className="petPic">
        <img className="pushPin" src={pushpin} />
      </div>
      <h4 className="header4"><span class="petName">{petObj.pet_name.toUpperCase()}</span> is lost!</h4>
      <div className="petPic">{loadImg(petObj.image_url)}</div>
      <div className="info">
        <p>Pet is a <b>{petObj.gender.toUpperCase()} {petObj.type.toUpperCase()}</b></p> {/* put type in line 15 or here? */}
        <p>Has <b>{petObj.fur_color.toUpperCase()}</b> colored fur</p>
        <p>Has <b>{petObj.eye_color.toUpperCase()}</b> colored eyes</p>
        <p>Was last seen at? <b>{petObj.last_found.toUpperCase()}</b></p>
        <p>Owner is: <b>{petObj.owner.toUpperCase()}</b></p>
      <Modal petObj={petObj}></Modal>
      </div>
    
    </div>
  )
}

export default Post;