import React, {useState} from "react";
//import child components/ containers
import SidebarContainer from "./SidebarContainer.jsx";
import PostContainer from "./PostContainer.jsx";
import { PetDataProvider } from "../contexts/PostContext.jsx";

const ContentContainer = () => {


    return (
        <PetDataProvider>
            <div className="content-container">
                <SidebarContainer/>
                <PostContainer />
            </div>
        </PetDataProvider>
    )
}

export default ContentContainer;