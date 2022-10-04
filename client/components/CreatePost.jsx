import React from 'react';
import { usePetContext, usePetUpdateContext } from '../contexts/PostContext.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreatePost = () => {
  const addPetData = usePetUpdateContext();
  // const petDetails = usePetContext()
  // _id (req), pet_name (req), owner, address, eye_color, gender, image_url, fur_color, last_found, comments

  //NOTE: when invoking inputDev, make sure the second 'key' paramter matches a dataKey
  //data keys are for the properties of the big object returned when we setContext
  // also, if this particular field is required, add true as third parameter

  // dividing inputDev into 2 funcs: one for text field, one for textareas
  // originally was passing in className to change css but i think with materialUI it's better to just use the sx prop
  const inputDiv = (label, key, requiredBool) => { return (
    <div className="create-post-text-field">
      <TextField
        id={key}
        label={label}
        variant="outlined"
        size="small"
        sx={{
          width: '100%',
          '& label': {
            fontSize: '0.8rem',
          },
          '& label.Mui-focused': {
            color: '#333',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#333',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#333',
            },
            '& input': {
              fontSize: '0.8rem',
            },
            '&:hover fieldset': {
              borderColor: 'orange',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#333',
            },
          },
        }}
        required={requiredBool}
      />
    </div>
  )};

  const textAreaDiv = (label, key) => { return (
    <div className="create-post-text-field">
      <TextField
        id={key}
        label={label}
        variant="outlined"
        size="small"
        multiline rows={2}
        sx={{
          width: '100%',
          '& label': {
            fontSize: '0.8rem',
          },
          '& label.Mui-focused': {
            color: '#333',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#333',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#333',
            },
            '& textarea': {
              fontSize: '0.8rem',
            },
            '&:hover fieldset': {
              borderColor: 'orange',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#333',
            },
          },
          }}
        />
    </div>
  )};

  return (
    <div className="create-post">
        <h1>Create a Post</h1>

        <h4>Your Information</h4>
        <div className="create-post-inputs">
        {inputDiv('Name:', 'owner', true)}
        {inputDiv('Phone Number:', 'phone_number', true)}
        {textAreaDiv('Address:', 'address')}
        </div>
        
        <h4>Pet's Information</h4>
        <div className="create-post-inputs">
        {inputDiv('Name:', 'pet_name', true)}
        {inputDiv('Breed:', 'type', true)}
        {inputDiv('Fur Color:', 'fur_color')}
        {inputDiv('Eye Color:', 'eye_color')}
        {inputDiv('Gender:', 'gender')}
        {inputDiv('Pet Photo URL:', 'image_url',)}
        {textAreaDiv('Last Known Location:', 'last_found')}
        {textAreaDiv('Additional Comments:', 'comments')}
        </div>

        <div className="create-post-submit">
          <Button
            size="large"
            variant="contained"
            sx={{
              marginTop: '20px',
              backgroundColor: '#EED971FF',
              color: 'black',
              '&:hover': {
                backgroundColor: 'orange',
                color: '#222'
              },
            }}
            onClick={() => {
              // addPetData(petData())
              // fetch(postURL).then(whtvr).catch(handleerr)
              
              fetch('/api/pet', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(petData())
              })
                .then(res => res.json()) //then adding the pet to our state
                .then(data => addPetData(data))
                .catch(err => console.log(err))
            }}
            >Submit Lost Pet
            </Button>
        </div>
        <div className="cat-divider">
        <img id="cat-divider" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de114712-7dca-4f5b-920a-8a7d7d75c452/de0jawd-5dcf5ace-2070-45d1-9511-9d6277d25180.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlMTE0NzEyLTdkY2EtNGY1Yi05MjBhLThhN2Q3ZDc1YzQ1MlwvZGUwamF3ZC01ZGNmNWFjZS0yMDcwLTQ1ZDEtOTUxMS05ZDYyNzdkMjUxODAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lDQR5USnXOaRH_Y0ijIykOzRbAO-9Zh3GlzdTvrY-Ms"/>
        </div>
    </div>
  )
}

//make a petData a function that returns an Object with all the data from the input fields of the DOM
//make sure he data is formatted with correct key value pairs
//NOTE: make sure elements of dataKey match with the second param of inputDiv
const dataKeys = ['pet_name', 'type', 'owner', 'address', 'eye_color', 'gender', 'image_url', 'fur_color', 'last_found', 'comments', 'phone_number']
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