const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
// const db = require('./db') // grabbing db from inside the other folders ... might not be needed here?

const apiRouter = require('./routes/api');

/**
 * handle parsing request body
 */
 app.use(express.json());
//  app.use(express.urlencoded({ extended: true }));

 /**
  * define route handlers
  */
  app.use('/api', apiRouter);

  // route for serving static html
  app.use(express.static(path.join(__dirname, '../build')));


  

 // catch-all route handler for any requests to an unknown route
 app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global error handler
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