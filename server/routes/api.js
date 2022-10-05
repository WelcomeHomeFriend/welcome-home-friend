const express = require('express');

const petController = require('../controllers/petController');
const UserController = require('../controllers/UserController');

const router = express.Router();


router.get('/', 
    UserController.checkCookie, 
    petController.getPet, 
    (req, res) => {
    return res.status(200).json(res.locals.rows) 
});


router.post('/pet', 
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
    (res, req) => {
    return res.status(200).json({});
});


router.post('/login', 
    UserController.loginUser, 
    UserController.setCookie, 
    (res, req) => {
    res.status(200).json({})
});

router.post('/logout', 
    UserController.logoutUser, 
    (res, req) => {
    res.status(200).json({})
});

module.exports = router;