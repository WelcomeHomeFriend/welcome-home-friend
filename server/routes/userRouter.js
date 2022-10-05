const express = require('express');
const userController = require("../controllers/userController.js")

const router = express.Router();

// can add cookie settin middleware later if need be

router.post('/signup', userController.verifyUser, userController.createUser, (req, res) => res.status(200).json(res.locals.status))

router.post('/login', userController.loginUser, (req, res) => res.status(200).json(res.locals.status))

module.exports = router;