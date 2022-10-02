const db = require('../models/models');
const petController = {};


petController.getPet = (req, res, next) => {
  // write code here
  //use client in here -> might be using query here ?
  db.query('SELECT * FROM animals ORDER BY _id', (err, result)=>{
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

  const {pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, type, comments} = req.body;
  let {_id} = req.body;
  _id = Math.floor(Math.random() * 10000000);
  /*
  {
    _id: 3,
    pet_name: Max,

  }

const _id = 3;
const pet_name = Max;
const address = null;

  */
  
  const insertChar ="INSERT INTO animals (_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, type, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *"
  const value = [_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, type, comments];

  db.query(insertChar, value, (err, result)=>{
      if (err) {
        console.log(err);
      } else {
        console.log("result", result.rows[0]);
      // if we want to return single row inserted, uncomment below
      // return res.locals.newPet = result.rows[0]; 
      }
      return next();
    })
};

module.exports = petController;