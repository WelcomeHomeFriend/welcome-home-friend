import React from 'react';
import { usePetContext, usePetUpdateContext } from '../contexts/PostContext.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreatePost = () => {
  const addPetArr = usePetUpdateContext();
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
              borderColor: 'gray',
            },
            '& input': {
              fontSize: '0.8rem',
            },
            '&:hover fieldset': {
              borderColor: 'white',
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
              borderColor: 'gray',
            },
            '& textarea': {
              fontSize: '0.8rem',
            },
            '&:hover fieldset': {
              borderColor: 'white',
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
        <h3>Create a Post</h3>

        <h4>Your Information</h4>
        <div className="create-post-inputs">
        {inputDiv('Name:', 'owner')}
        {textAreaDiv('Address:', 'address')}
        {inputDiv('Number:', 'phone_number')}
        </div>
        
        <h4>Pet's Information</h4>
        <div className="create-post-inputs">
        {inputDiv('Name:', 'pet_name', true)}
        {inputDiv('Eye Color:', 'eye_color')}
        {inputDiv('Gender:', 'gender')}
        {inputDiv('Fur Color:', 'fur_color')}
        {textAreaDiv('Last Seen:', 'last_found')}
        {textAreaDiv('Additional Comments:', 'comments')}
        </div>

        <div className="create-post-submit">
          <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: '#666',
              color: 'white',
              '&:hover': {
                backgroundColor: '#ddd',
                color: '#222'
              },
            }}
            onClick={() => addPetArr(petData())}>
              Submit Lost Pet
            </Button>
        </div>
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