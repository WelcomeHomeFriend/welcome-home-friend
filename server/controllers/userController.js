const db = require('../models/models.js');

const userController = {};

//create user
userController.createUser = async (req, res, next) => {
  console.log('IN CREATEUSER');
  const { name, username, password } = req.body;
  const param = [name, username, password];

  try {
    //push the data into DB
    const newUserQuery = `INSERT INTO public.user(
      name,
      username,
      password
    )
    VALUES($1, $2, $3);`;

    const result = await db.query(newUserQuery, param);

    // send back user data from db to frontend
    res.locals.status = { success: true, message: 'Account created' };

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
  console.log('IN VERIFYUSER');
  const { username } = req.body;
  console.log(req.body);
  const param = [username];
  console.log(param);
  try {
    // Find user in database
    const verifyUserQuery = `SELECT * FROM public.user WHERE username=$1;`;

    // Query result
    const verifyResult = await db.query(verifyUserQuery, param);
    console.log(verifyResult);
    // User does not exist in database
    if (verifyResult.rows.length === 0) {
      // proceed to next middleware to create user
      return next();
    } else {
      // User exists in database
      // Terminate middleware and send back error message to client
      return res.status(404).json();
    }
  } catch (error) {
    return next({
      log: 'Express error in verifyUser middleware',
      status: 400,
      message: {
        err: `userController.verifyUser: ERROR: ${error}`,
      },
    });
  }
};

//log in
userController.loginUser = async (req, res, next) => {
  console.log('IN LOGIN USER');
  const { username, password } = req.body;

  const param = [username, password];

  try {
    const newNameQuery = `SELECT * FROM public.user WHERE username=$1 AND password=$2;`;
    const data = await db.query(newNameQuery, param);

    // check to see if the password obtained from database is same as the one sent in req.body
    if (data.rows.length > 0) {
      res.locals.status = { success: true, message: 'Successful Login' };
      return next();
    }
    res.locals.status = {
      success: false,
      message: 'Invalid username or password',
    };
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

module.exports = userController;
