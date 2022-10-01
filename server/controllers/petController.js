const db = require('../models/models');
const petController = {};


petController.getPet = (req, res, next) => {
  // write code here
  //use client in here -> might be using query here ?
  db.query('SELECT * animals ORDER BY _id', (err, res)=>{
    if (err) {
      console.log(err);
    } else {
      res.locals.rows = rows;
    }
  })
  // next();
};

// petController.addPet = (req, res, next) => {
//   // getting req.body data of all input
//   const {_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found} = req.body;
//   const insertChar ="INSERT INTO animals (_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);"

//   db.query("", 
//     [_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found], (err, res)=>{
//       return res.locals.newPet = 
//     })
    
//   next();
// };

module.exports = petController;