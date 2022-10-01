import React from "react";
//import child components/ containers
import CreatePost from "../components/CreatePost.jsx"
import FeaturedPets from "../components/FeaturedPets.jsx"

const SidebarContainer = () => {
    return (
        <div className="sidebar-container">
            <CreatePost />
            <FeaturedPets />
        </div>
    )
}

export default SidebarContainer;