const db = require('../models/models');
const userController = {};
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)


//verify the token ID
userController.verifyTokenId = async (request, response, next) => {
  //Google sends us an id token to this route. 
  //Grab it from the request body
  const { token }  = request.body
  //Now we go to google's servers and download it, and check that it's the same as was sent to us. 
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID
  });
  //Assuming we're good, we get a payload of name, email, picture. 
  const { name, email, picture } = ticket.getPayload();
  //add those to request.locals.userDetails
  request.locals.name = name;
  request.locals.email = email;
  request.locals.picture = picture;
  next();

};

//add the user details to the database and send back to client. 
userController.addToDb = async (request, response, next) => {
  const user = await //add the user to the DB
  

};



module.exports = userController;