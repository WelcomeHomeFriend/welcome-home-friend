import React, {useState} from "react";
//import child components/ containers
import SidebarContainer from "./SidebarContainer.jsx";
import PostContainer from "./PostContainer.jsx";
import { PetDataProvider } from "../contexts/PostContext.jsx";

const ContentContainer = () => {
    const [handleChange, setHandleChange] = useState({count: 0});

    return (
        <PetDataProvider>
            <div className="content-container">
                <SidebarContainer handleChangeState={handleChange} handleChange={setHandleChange}/>
                <PostContainer handleChange={handleChange} />
            </div>
        </PetDataProvider>
    )
}

export default ContentContainer;