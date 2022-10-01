import React from "react";

const Post = ( {petObj} ) => {
  //petObj will be a giant object with key value pairs of:
      // _id (req), pet_name (req), owner, address, 
      //eye_color, gender, image_url, fur_color, last_found, comments


  return (
    <div className="post">
      <h5>My name is <b>{petObj.pet_name}</b> and I'm Lost</h5>
      <img src='../images/logo_navbar.png'></img>
    </div>
  )
}

export default Post;