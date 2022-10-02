import React from "react";
//import child components/ containers
import Post from "../components/Post.jsx";
import { usePetContext, usePetUpdateContext } from "../contexts/PostContext.jsx";
 // _id (req), pet_name (req), owner, address, eye_color, gender, image_url, fur_color, last_found, comments

const PostContainer = () => {
    const petArr = usePetContext();
    const addPetArr = usePetUpdateContext();
    
    return (
        <div className="post-container">
          <h1 className="center-text">Lost Friends</h1>
            <div className="post-list">
                {/* Array of Post Components */}
                {petArr.map((el, i) => <Post key={i} petObj={el} />)}
            </div>
        </div>
    )
}

export default PostContainer;