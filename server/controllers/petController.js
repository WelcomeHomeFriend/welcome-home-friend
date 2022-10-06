const db = require('../models/models');
const petController = {};
const axios = require('axios').default;

petController.getPet = (req, res, next) => {
  // write code here
  //use client in here -> might be using query here ?
  db.query('SELECT * FROM animals', (err, result)=>{
    if (err) {
      console.log(err); 
    } else {
      res.locals.rows = result.rows; //this is an array
    }
    return next();
  })
};

petController.addPet = (req, res, next) => {
  // getting req.body data of all input
  // name and breed required
  const {pet_name, owner, street_address, eye_color, gender, image_url, fur_color, city, state, longitude, latitude, breed, comments} = res.locals.postInfo;
  // let {_id} = req.body;
  // _id = Math.floor(Math.random() * 10000000); //new Date().getTime()  
  console.log('inside petController.addPet');
  console.log(pet_name, owner, street_address, eye_color, gender, image_url, fur_color, city, state, longitude, latitude)
  const insertChar =`
  INSERT INTO animals (_id, pet_name, owner, street_address, eye_color, gender, image_url, fur_color, user_id, latitude, longitude, city, state, breed, comments) 
  VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) 
  RETURNING *`
  const value = [pet_name, owner, street_address, eye_color, gender, image_url, fur_color, 1, latitude, longitude, city, state, breed, comments];

  db.query(insertChar, value, (err, result)=>{
      if (err) {
        return next({err: `error in add pet middleware: ${err}`, message: {err :' server error due to addPet middleware'}});
      } else {
        console.log("result: ", result.rows);
        // if we want to return single row inserted, uncomment below
        res.locals.newPet = result.rows;
        return next();
      }
    })
};

petController.foundPet = (req, res, next) => {
  // getting req.body data of all input
  // name and breed required
  const {_id} = req.body; 
  console.log(_id);
  
  const insertChar ="DELETE from animals WHERE _id IN ($1) RETURNING *;"
  const value = [_id];

  db.query(insertChar, value, (err, result)=>{
      if (err) {
        console.log(err);
      } else {
        console.log("result", result.rows);
      // if we want to return single row inserted, uncomment below
      res.locals.newPet = result.rows;
      return next();
      }
    })
};

// get the coordinates for the location, then combined the returned result with the rest of request body and save in res.locals 
petController.getCoordinates = (req, res, next) => {
  console.log('inside get coordinates')
  const {street_address, city, state} = req.body;

  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${street_address},+${city},+${state}&key=AIzaSyAB2C2iamCoJLJyVjkxxI2X3wTC-OoI6Vk`)
    .then((data) => {
      console.log('in getCoordinates location: ', data.data.results[0].geometry.location);
      res.locals.postInfo = Object.assign(req.body, {
        latitude : data.data.results[0].geometry.location.lat,
        longitude : data.data.results[0].geometry.location.lng
      })
      return next()
    })
    .catch(err =>  { return next(
      {log: `Error in getCoordinates Middlewehere: ${err}`,
        message: {err: 'Error in getCoordinates Middlewhere'}
    }
    )
    })

}

module.exports = petController;