const express = require('express');

const petController = require('../controllers/petController');
const UserController = require('../controllers/UserController');

const router = express.Router();


router.get('/', 
    // UserController.checkCookie,  // uncomment when frontend is implemented redirect user to login
    petController.getPet, 
    (req, res) => {
    return res.status(200).json(res.locals.rows) 
});


router.post('/pet',
    // UserController.checkCookie,
    petController.addPet, 
    (req, res) => {
    return res.status(200).json(res.locals.newPet); 
});

router.post('/found',   
    (req, res) => {
    return res.status(200).json(res.locals.newPet); 
});


router.post('/signup', 
    UserController.verifyUser, 
    UserController.createUser, 
    UserController.setCookie, 
    (req, res) => {
    console.log('in signup route');
    return res.status(200).json(res.locals.user);
});


router.post('/login', 
    UserController.loginUser, 
    UserController.setCookie, 
    (req, res) => {
    console.log('in login route')
    res.status(200).json(res.locals.user)
});

router.post('/logout', 
    UserController.logoutUser, 
    (req, res) => {
    res.status(200).json({})
});

module.exports = router;