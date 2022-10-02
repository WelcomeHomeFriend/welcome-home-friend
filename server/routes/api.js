const express = require('express');

const petController = require('../controllers/petController');

const router = express.Router();


router.get('/', petController.getPet, (req, res) => {
    return res.status(200).json(res.locals.rows) // place holders -> looks like i'll be using query instead or maybe in the controllers?
});


router.post('/pet', petController.addPet, (req, res) => {
    return res.status(200).redirect('/'); // place holders
});



module.exports = router;