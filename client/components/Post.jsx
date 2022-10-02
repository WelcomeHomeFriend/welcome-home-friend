import React from "react";

const Post = ( {petObj} ) => {
  //petObj will be a giant object with key value pairs of:
      // _id (req), pet_name (req), owner, address, 
      //eye_color, gender, image_url, fur_color, last_found, comments


  return (
    <div className="post">
      <h4><b>{petObj.pet_name}</b> is Lost</h4>
      <p>Has {petObj.fur_color} colored fur</p>
      <p>Has {petObj.eye_color} colored eyes</p>
      <p>Was last seen on/at? {petObj.last_found}</p>
      <p>Owner is:{petObj.owner}</p>
      <p>Contact owner at:{petObj.phone_number}</p>
      <p>Home is:{petObj.address}</p>
      <p>Additional Info:{petObj.commenets}</p>
    </div>
  )
}

export default Post;