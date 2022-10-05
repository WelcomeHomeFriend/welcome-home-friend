const db = require('../models/models');
const UserController = {};

// during signup, checks if username is already taken
UserController.verifyUser = (req, res, next) => {
  const { username } = req.body;
  db.query('SELECT * FROM users WHERE username = $1', [username])
    .then(data => {
      if (data.rows.length > 0) {
        console.log('Username already taken');
        return next({
          log: 'Express error in userController.verifyUser',
          status: 400,
          message: {
            err: 'Username already taken'
          }
        })
      }
      next();
    })
    .catch(err => next({
      log: 'Express error in userController.verifyUser',
      status: 400,
      message: {
        err: `UserController.verifyUser: ERROR: ${err}`
      }
    }))
}

UserController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password])
    // after storing new user info in db, create cookie and redirect 
    .then(data => {
      res.locas.user = data.rows[0];
      next();
    })
    .catch(err => next({
      log: 'Express error in userController.createUser',
      status: 400,
      message: {
        err: `UserController.createUser: ERROR: ${err}`
      }
    }))
}

UserController.loginUser = (req, res, next) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password])
    .then(data => {
      if (data.rows.length === 0) {
        return next({
          log: 'Express error in userController.loginUser',
          status: 400,
          message: {
            err: 'Wrong username or password'
          }
        });
      } else {
        res.locals.user = data.rows[0];
        next();
      }
    })
}



UserController.logoutUser = (req, res, next) => {
  const cookie_id = req.cookies.SSID;
  db.query('DELETE FROM sessions WHERE cookie = $1', [cookie_id])
    .then(data => {
      next();
    })
    .catch(err => next({
      log: 'Express error in userController.logoutUser',
      status: 400,
      message: {
        err: `UserController.logoutUser: ERROR: ${err}`
      }
    }))
}

UserController.setCookie = (req, res, next) => {
  const { user_id } = res.locals.user;
  const cookie_id = Math.random().toString();
  res.cookie('SSID', cookie_id);
  db.query('INSERT INTO sessions (cookie, user_id) VALUES ($1, $2)', [cookie_id, user_id])
    .then(data => {
      return next();
    })
    .catch(err => next({
      log: 'Express error in userController.setCookie',
      status: 400,
      message: {
        err: `UserController.setCookie: ERROR: ${err}`
      }
    }))
}

UserController.checkCookie = (req, res, next) => {
  db.query('SELECT * FROM sessions WHERE cookie = $1', [req.cookies.SSID])
    .then(data => {
      if (data.rows.length === 0) {
        return res.status(401).json('Unauthorized');
      }
      return next();
    })
    .catch(err => next({
      log: 'Express error in userController.checkCookie',
      status: 400,
      message: {
        err: `UserController.checkCookie: ERROR: ${err}`
      }
    }))
}

module.exports = UserController;