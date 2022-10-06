//setup stuff
//database
const db = require('../models/models');
//Oauth
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

console.log('inside userController')
const userController = {};


//verify the token ID
userController.verifyTokenId = async (request, response, next) => {
  console.log('inside verifyTokenId')
  //Google sends us an id token to this route. 
  //Grab it from the request body
  const { token }  = request.body
  console.log('this is the token', token);
  //Now we go to google's servers and download it, and check that it's the same as was sent to us. 
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID
  });
  //Assuming we're good, we get a payload of name, email, picture.
  //We need more than this? See if we can get more than this. 
  const payload = ticket.getPayload();
  console.log('What is google telling people about me? ', payload);
  const { name, email, picture } = payload;
  //add those to request.locals.userDetails
  request.locals.name = name;
  request.locals.email = email;
  request.locals.picture = picture;
  return next();

}

//add the user details to the database and send back to client. 
//Also, add a session cookie. 
userController.addToDb = async (request, response, next) => {
  console.log('inside addToDb')
  const insertChar ="INSERT INTO users (_id, first_name, last_name, address, username, location, oauth, pet, email)"
  const first_name = request.locals.name;
  const last_name = request.locals.name;
  const email = request.locals.email;
  const VALUES = [DEFAULT, first_name, last_name, " ", " ", " ", " ", " ", email];

  const user = await db.query(insertChar, VALUES, (err, result)=>{
    if (err) {
      console.log(err);
    } else {
      console.log("result", result.rows[0]);
    // if we want to return single row inserted, uncomment below
    res.locals.user = result.rows;
    }
  })

  request.session.userId = user._id //off the DB? 
  return next();

}





module.exports = userController;