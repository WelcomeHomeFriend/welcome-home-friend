const db = require('../db/index');
const petController = {};


petController.getPet = (req, res, next) => {
  // write code here
  //use client in here -> might be using query here ?
  db.query('sdkjhfjhsdfjdsgfgjhsd') // jargon
  next();
};

petController.addPet = (req, res, next) => {
  // write code here
  //use client in here
    
  next();
};

module.exports = petController;