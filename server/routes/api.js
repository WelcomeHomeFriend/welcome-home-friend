const express = require('express');

const petController = require('../controllers/petController');
const UserController = require('../controllers/UserController');

const router = express.Router();


// Check for cookie after user signs in, display all lost pets
router.get('/', 
    // UserController.checkCookie,  // uncomment when frontend is implemented redirect user to landing page
    petController.getPet, 
    (req, res) => {
    return res.status(200).json(res.locals.pets) 
});

// Displays current user's lost pets
router.get('/user', petController.userPets, (req, res) => {
    return res.status(200).json(res.locals.userPets);
})

// Displays landing page's limited pet info
router.get('/landing', petController.getLanding, (req, res) => {
    return res.status(200).json(res.locals.pets);
})


router.post('/pet',
    // UserController.checkCookie,
    petController.addPet, 
    (req, res) => {
    return res.status(200).json(res.locals.newPet); 
});

router.post('/found', 
    petController.foundPet,  
    (req, res) => {
    return res.status(200).json(res.locals.foundPet); 
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