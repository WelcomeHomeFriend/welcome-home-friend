//setup stuff
//database
const db = require('../models/models');
//Oauth
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

const userController = {};



//Check to see if the user is already in the DB, using email. 
userController.checkDb = async (request, response, next) => {
  //Need to get email into the select statement, but it's being weird about double quotes, doing this to strip double quotes off it. 
  const checkEmail = request.body.email
  const emailWithoutQuotes = checkEmail.replaceAll('"', '')


  // If there's an already existing entry in the DB with that email....
  const alreadyExistingUser = await db.query(`SELECT * FROM "public"."users" WHERE email = '${emailWithoutQuotes}'`);


  //Notes on the reply....
  // this is the alreadyExistingUser Result {
    //   [0]   command: 'SELECT',
    //   [0]   rowCount: 0,
    //   [0]   oid: null,
    //   [0]   rows: [],

    //alreadyExistingUser is an object of class Result. We don't put Result in when indexing. Should be alreadyExistingUser.rowCount.

  
  if (alreadyExistingUser.rowCount === 0) {
    console.log('user doesn\'t exist in our DB')
    response.locals.alreadyExists = false;

  }else{
    console.log('User exists, loading DB information onto response to client for loading into state')
    response.locals.user = alreadyExistingUser.rows;
    response.locals.alreadyExists = true;
  }

  return next()

} //end checkDb


// IF the user isn't already in the DB...
//add the user details to the database and send back to client. 
//user details are in the body. .email   .family_name    .given_name    .name   .picture
//Also, add a session cookie. 
userController.addToDb = async (request, response, next) => {
  
  //Add user to DB if response.locals.alreadyExists is false. 
  if(response.locals.alreadyExists === false){

    //setting up SQL query
    const insertChar = `
    INSERT INTO users (_id, first_name, last_name, address, username, location, oauth, pet, email) 
    VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8) 
    RETURNING *`

    const first_name = request.body.given_name;
    const last_name = request.body.family_name;
    const email = request.body.email;
    const VALUES = [first_name, last_name, " ", " ", " ", " ", " ", email];


    const user = await db.query(insertChar, VALUES, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("\n\n result of adding to DB", result.rows[0], "\n\n");
        // if we want to return single row inserted, uncomment below
        response.locals.user = result.rows;
        return next();
      }
    })
  }else{
    return next();
  }
} //end addToDb

module.exports = userController;