const { UNSAFE_NavigationContext } = require('react-router-dom');
const db = require('../models/dbModels');

const userController = {};

//create user
userController.createUser = async (req, res, next) => {
  const { username, password } = req.body; //user should be an object from frontend

  try {
    //push the data into DB
    const newCharQuery = `
    
    `;

    const result = await db.query(newCharQuery, param);
  
    

    return next();

  } catch (error) {
    return next({
      log: 'Express error in createUser middleware',
      status: 400,
      message: {
        err: `userController.createUser: ERROR: ${error}`,
      },
    });
  }
};

// Sign up route: check if user already exists in database
userController.verifyUser = async (req, res, next) => {
  const { username } = req.body;

  const param = [username];

  try {
    // Find user in database
    const verifyUserQuery = `
    `;

    // Query result
    const verifyResult = await db.query(verifyUserQuery, param);

    // User does not exist in database
    if (verifyResult.rows.length === 0) {
      // proceed to next middleware to create user
      return next();
    } else {
      // User exists in database
      // Terminate middleware and send back error message to client
      return res
        .status(404)
        .json();
    }
  } catch (error) {
    return next({
      log: 'Express error in vertifyUser middleware',
      status: 400,
      message: {
        err: `userController.verifyUser: ERROR: ${error}`,
      },
    });
  }
};

//log in
userController.loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  const param = [username];

  try {
    const newNameQuery = `
    
    `;
    const data = await db.query(newNameQuery, param);


    return next();
  } catch (error) {
    return next({
      log: 'Express error in userController.loginUser middleware',
      status: 400,
      message: {
        err: `userController.loginUser: ERROR: ${error}`,
      },
    });
  }
};