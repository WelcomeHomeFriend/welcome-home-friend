const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

console.log(path.join(__dirname + "../../.env"))

// requiring dotenv file in .env, can now grab variables using process.env
require('dotenv').config()
console.log(process.env.CONNECTION_STRING);
// from dotenv, connectionString will be the URL for database
const connectionString = process.env.CONNECTION_STRING;
// using pg-promise, we now connect to the db and db is now database
const pgp = require("pg-promise")()
const db = pgp(connectionString)





// This section is for grabbing data from server to SQL database //
var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

// var conString = "postgres://thszliqh:f6_hpjl5OD2XMZ62pWetNaCNOuOcDeGK@heffalump.db.elephantsql.com/thszliqh" //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT * FROM "animals"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

app.listen(PORT, () => {
  console.log("Server is running...")
})
module.exports = app;