import React from "react";
import Modal from "./PostModal.jsx"
import pushpin from '../images/randoogle_Thumbtack_Pushpin.svg';
import { usePetUpdateContext } from "../contexts/PostContext.jsx";
import Button from '@mui/material/Button';

const Post = ( {petObj} ) => {
  //petObj will be a giant object with key value pairs of:
      // _id (req), pet_name (req), owner, address, 
      //eye_color, gender, image_url, fur_color, last_found, comments
  const addPetData = usePetUpdateContext();

  function loadImg(url) {
    if (url) return <img className="lost-pet-pic" src={petObj.image_url}></img>
  }
  // console.log(petObj);
  return (
    <div className="post">
      <div className="petPic">
        <img className="pushPin" src={pushpin} />
      </div>
      <h4 className="header4"><span className="petName">{petObj.pet_name.toUpperCase()}</span> is lost!</h4>
      <div className="petPic">{loadImg(petObj.image_url)}</div>
      <div className="info">
        <p>Pet is a <b>{petObj.gender.toUpperCase()} {petObj.breed.toUpperCase()}</b></p> 
        <p>Has <b>{petObj.fur_color.toUpperCase()}</b> colored fur</p>
        <p>Has <b>{petObj.eye_color.toUpperCase()}</b> colored eyes</p>
        <p>Was last seen at? <b>{petObj.street_address.toUpperCase() + ' ' + petObj.city.toUpperCase()}</b></p>
        <p>Owner is: <b>{petObj.owner.toUpperCase()}</b></p>
      <Modal petObj={petObj}></Modal>
      </div>
      <div className="found-button">
      <Button
            className="found-btn"
            size="large"
            variant="contained"
            sx={{
              marginTop: '20px',
              backgroundColor: '#DBEFDC',
              color: 'black',
              '&:hover': {
                backgroundColor: '#265728',
                color: 'white'
              },
            }}

         onClick={() => {
          fetch('/api/found', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( {_id: petObj._id} )
          })
            .then(() => {
              addPetData({DELETEID: petObj._id});
            })
            .catch(err => console.log(err))
        }}
      >Found</Button>
      </div>
    </div>
  )
}

export default Post;

/*
 onClick={() => {
        fetch('/api/found', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( {_id: petObj._id} )
        })
          .then(() => {
            addPetData({DELETEID: petObj._id});
          })
          .catch(err => console.log(err))
      }}
*/