import React from "react";
//import child components/ containers
import SidebarContainer from "./SidebarContainer.jsx";
import PostContainer from "./PostContainer.jsx";
import { PetDataProvider } from "../contexts/PostContext.jsx";
import UserPostContainer from "./UserPostContainer.jsx";

const ContentContainer = () => {
    return (
        <PetDataProvider>
            <div className="content-container">
                <SidebarContainer />
                <UserPostContainer />
                <PostContainer />
            </div>
        </PetDataProvider>
    )
}

export default ContentContainer;

// Google API key: AIzaSyBHLCkdnOimaN74IGqKOJrFAXslOygEJqI