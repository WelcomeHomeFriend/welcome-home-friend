const db = require('../models/models');
const petController = {};

petController.getLanding = (req, res, next) => {
  db.query('SELECT pet_name, image_url FROM animals;')
    .then(data => {
      res.locals.pets = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'Express error in petController.getLanding',
      status: 400,
      message: {
        err: `petController.getLanding: ERROR: ${err}`
      }
    }))
};

petController.getPet = (req, res, next) => {
  // write code here
  //use client in here -> might be using query here ?
  db.query('SELECT * FROM animals')
    .then(data => {
      res.locals.pets = data.rows;
      next();
    })
    .catch(err => next({
      log: 'Express error in petController.getPet',
      status: 400,
      message: {
        err: `petController.getPet: ERROR: ${err}`
      }
    }))
};

petController.userPets = (req, res, next) => {
  // const { user_id } = res.locals.user;
  db.query('SELECT * FROM animals WHERE user_id = $1', [1])
    .then(data => {
      res.locals.userPets = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'Express error in petController.userPets',
      status: 400,
      message: {
        err: `petController.userPets: ERROR: ${err}`
      }
    }))
}


petController.addPet = (req, res, next) => {
  // getting req.body data of all input
  // name and breed required
  console.log(req.body);
  // const { user_id } = res.locals.user;
  const {pet_name, phone_number, owner, address, eye_color, gender, image_url, fur_color, last_found, breed} = req.body;
  
  const insertChar ="INSERT INTO animals (user_id, pet_name, owner, phone_number, address, breed, eye_color, gender, image_url, fur_color, last_found, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *"
  // replace 1 with user_id later
  const value = [1, pet_name, owner, phone_number, address, breed, eye_color, gender, image_url, fur_color, last_found, false];

  db.query(insertChar, value)
    .then(data => {
      res.locals.newPet = data.rows;
      console.log(res.locals.newPet);
      return next();
    })
    .catch(err => next({
      log: 'Express error in petController.addPet',
      status: 400,
      message: {
        err: `petController.addPet: ERROR: ${err}`
      }
    }));
};

petController.foundPet = (req, res, next) => {
  // getting req.body data of all input
  // name and breed required
  const {_id} = req.body; 
  console.log(_id);

  db.query('DELETE FROM animals WHERE _id = ($1) RETURNING *;', [_id])
    .then(data => {
      res.locals.foundPet = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'Express error in petController.foundPet',
      status: 400,
      message: {
        err: `petController.foundPet: ERROR: ${err}`
      }
    }))
};

module.exports = petController;