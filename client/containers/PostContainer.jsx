import React from "react";
//import child components/ containers
import Post from "../components/Post.jsx";

const PostContainer = () => {
    
    return (
        <div className="post-container">
          <h1>Lost to Found</h1>
            <div className="post-list">
                {/* Array of Post Components */}
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default PostContainer;