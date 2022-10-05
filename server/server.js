const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve index.html to GET '/'
app.get('/', (req, res) => {
  return res.redirect('/api/landing');
})

app.use('/api', apiRouter);

// This section is for grabbing data from server to SQL database //
// var pg = require('pg');
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


// catch-all route handler for any requests to an unknown route
 app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost${PORT}...`)
})

module.exports = app;