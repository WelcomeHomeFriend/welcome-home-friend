//Set up stuff
//express stuff
const express = require('express');
const router = express.Router();

//controllers
const petController = require('../controllers/petController');
const userController = require('../controllers/userController');

//test middleware
const holler = (request, response, next) => {
    console.log('\n \nHoller! We\'re in the router you\'re testing!');
    console.log('request body is...', request.body)
    console.log('response locals is...', response.locals)
    console.log('\n\n')
    return next();
}


router.get('/',
    petController.getPet,
    (req, res) => {
        return res.status(200).json(res.locals.rows) // place holders -> looks like i'll be using query instead or maybe in the controllers?
    });

router.post('/pet',
    petController.addPet,
    (req, res) => {
        return res.status(200).json(res.locals.newPet); // place holders
    });

router.post('/found',
    petController.foundPet,
    (req, res) => {
        return res.status(200).json(res.locals.newPet); // place holders
    });

router.post('/userCreate',
    // holler,
    userController.checkDb,
    // holler,
    userController.addToDb,
    // holler,
    (req, res) => {
        return res.status(201).json(res.locals.user);
    });


module.exports = router;