import React from 'react';
import { usePetContext, usePetUpdateContext } from '../contexts/PostContext.jsx';

const CreatePost = () => {
  const addPetArr = usePetUpdateContext();
  // const petDetails = usePetContext()
  // _id (req), pet_name (req), owner, address, eye_color, gender, image_url, fur_color, last_found, comments

  return (
    <div className="create-post">
      <div>
        <h2>Create a Post</h2>

        <h3>Your Information</h3>
        <label for='your-name'>Your Name:</label>
        <input id='name-input' type='text'></input>
        <label for='address'>Address:</label>
        <input id='address' type='text'></input>
        
        <h3>Pet's Information</h3>
        <label for pet-name>Name:</label>
        <input id='pet-name' type='text'></input>
        <label for='eye-color'>Eye Color:</label>
        <input id='eye-color' type='text'></input>
        <label for='gender'>Gender:</label>
        <input id='gender' type='text'></input>
        <label for='image'>Image url:</label>
        <input id='image' type='text'></input>
        <label for='fur-color'>Fur Color:</label>
        <input id='fur-color' type='text'></input>
        <label for='last-seen'>Last Seen:</label>
        <input id='last-seen' type='text'></input>
        <label for='comments'>Additional Comments:</label>
        <input id='comments' type='text'></input>
      </div>
      
      <button onClick={() => addPetArr(petData())}>Submit</button>
    </div>
    /* form with inputs and button */ 
  )
}

//make a petData a function that returns an Object with all the data from the input fields of the DOM
//make sure he data is formatted with correct key value pairs
const petData = () => {
  return {
    pet_name: document.getElementById('pet-name').value,
    
    // _id (req), pet_name (req), owner, address, eye_color, gender, image_url,
    // fur_color: ,
    // last_found: ,
    comments: document.getElementById('comments').value
  }
}

export default CreatePost;