import React from "react";
//import child components/ containers
import SidebarContainer from "./SidebarContainer.jsx";
import PostContainer from "./PostContainer.jsx";

const ContentContainer = () => {
    return (
        <div className="content-container">
            <SidebarContainer />
            <PostContainer />
        </div>
    )
}

export default ContentContainer;