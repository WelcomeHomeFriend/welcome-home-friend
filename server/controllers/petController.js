const db = require('../models/models');
const petController = {};


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
  const {pet_name, phone_number, owner, address, eye_color, gender, image_url, fur_color, last_found, type, comments} = req.body;
  let {_id} = req.body;
  _id = Math.floor(Math.random() * 10000000); //new Date().getTime()  
  console.log(_id);
  
  const insertChar ="INSERT INTO animals (_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, type, comments, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *"
  const value = [_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, type, comments, phone_number];

  db.query(insertChar, value, (err, result)=>{
      if (err) {
        console.log(err);
      } else {
        console.log("result", result.rows[0]);
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

module.exports = petController;