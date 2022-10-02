import React from 'react';
import { usePetContext, usePetUpdateContext } from '../contexts/PostContext.jsx';

const CreatePost = () => {
  const addPetArr = usePetUpdateContext();
  // const petDetails = usePetContext()
  // _id (req), pet_name (req), owner, address, eye_color, gender, image_url, fur_color, last_found, comments

  //NOTE: when invoking inputDev, make sure the second 'key' paramter matches a dataKey
  //data keys are for the properties of the big object returned when we setContext
  const inputDiv = (label, key) => { return (
    <div>
      <label>{label}</label>
      <input id={key} type='text'></input>
    </div>
  )};

  return (
    <div className="create-post">
        <h2>Create a Post</h2>

        <h3>Your Information</h3>
        {inputDiv('Your Name:', 'owner')}
        {inputDiv('Address:', 'address')}
        {inputDiv('Number:', 'phone_number')}
        
        <h3>Pet's Information</h3>
        {inputDiv('Name:', 'pet_name')}
        {inputDiv('Eye Color:', 'eye_color')}
        {inputDiv('Gender:', 'gender')}
        {inputDiv('Fur Color:', 'fur_color')}
        {inputDiv('Last Seen:', 'last_found')}
        {inputDiv('Additional Comments:', 'comments')}
      <button onClick={() => addPetArr(petData())}>Submit</button>
    </div>
  )
}

//make a petData a function that returns an Object with all the data from the input fields of the DOM
//make sure he data is formatted with correct key value pairs
//NOTE: make sure elements of dataKey match with the second param of inputDiv
const dataKeys = ['pet_name', 'owner', 'address', 'eye_color', 'gender', 'image_url', 'fur_color', 'last_found', 'comments', 'phone_number']
const petData = () => {
  const dataObj = {}

  for (let key of dataKeys) {
    if (document.getElementById(key)) {
      dataObj[key] = document.getElementById(key).value;
      document.getElementById(key).value = '';
    }
  }

  return dataObj;
}

export default CreatePost;