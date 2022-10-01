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
  const {_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, comments} = req.body;
  const insertChar ="INSERT INTO animals (_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);"

  db.query(insertChar, 
    [_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, comments], (err, result)=>{
      if (err) {
        console.log(err);
      } else {
        console.log("result", result);
      return res.locals.newPet = result;
      }
      return next();
    })
};

module.exports = petController;