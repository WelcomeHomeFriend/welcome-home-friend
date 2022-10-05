import React, { useEffect, useState } from "react";
import Post from "../components/Post.jsx";
import { usePetContext, usePetUpdateContext } from "../contexts/PostContext.jsx";

const UserPostContainer = () => {

    const [userPets, setUserPets] = useState([]);

    useEffect(() => {
        fetch('/api/user')
            .then(res => res.json())
            .then(data => {
                setUserPets(data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="user-container">
            <h1 className="center-text">Your Lost Friends</h1>
            <div className="post-list">
                {/* Array of Post Components */}
                {userPets.map((el, i) => <Post key={i} petObj={el} />)}
            </div>
        </div>
    )
}

export default UserPostContainer;