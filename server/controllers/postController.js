const db = require("../models/models");
const postController = {};

postController.getPosts = async (req, res, next) => {
  try {
    // query str
    const getPostsQuery = `SELECT * FROM public.post`;

    const result = await db.query(getPostsQuery);
    console.log(result);

    // locals.postsArr should be an arr of objs
    res.locals.postsArr = result;
  } catch (error) {
    return next({
      log: "Express error in getPosts middleware",
      status: 400,
      message: {
        err: `userController.getPosts: ERROR: ${error}`,
      },
    });
  }
};

postController.addPost = async (req, res, next) => {
  // get userId from frontend (need to send userid in response from createUser and loginUser)
  const { name, user_id, eye_color, gender, color, last_seen, description } =
    req.body;
  const param = [name, user_id, eye_color, gender, color, last_seen];
  let petData;
  // add pet
  try {
    const addPetQuery = `INSERT INTO public.animals(
      name,
      user_id,
      eye_color,
      gender,
      color,
      last_seen
    )VALUES( $1, $2, $3, $4, $5, $6) RETURNING *`;
    petData = await db.query(addPetQuery, param);
    console.log("Added pet: ", petData);
  } catch (error) {
    return next({
      log: "Express error in addPost -addPet- middleware",
      status: 400,
      message: {
        err: `petController.addPost: ERROR: ${error}`,
      },
    });
  }
  // add post
  try {
    const param2 = [user_id, petData.rows[0]._id, description];
    console.log("Param2: ", param2);
    const addPostQuery = `INSERT INTO public.post(
      pet_id,
      user_id,
      description
    )VALUES($1, $2, $3) RETURNING description`;

    const addPostResult = await db.query(addPostQuery, param2);
    console.log("Adding Post");
    // save response in res.locals
    let pet = petData.rows[0];
    console.log(pet);
    res.locals.post = {
      name: pet.name,
      eye_color: pet.eye_color,
      gender: pet.gender,
      color: pet.color,
      last_seen: pet.last_seen,
      description: addPostResult,
    };
    return next();
  } catch (error) {
    return next({
      log: "Express error in addPost -addPost- middleware",
      status: 400,
      message: {
        err: `petController.addPost: ERROR: ${error}`,
      },
    });
  }
};

// petController.getPet = (req, res, next) => {
//   // write code here
//   //use client in here -> might be using query here ?
//   db.query('SELECT * FROM public.animals', (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.locals.rows = result.rows; //this is an array
//     }
//     return next();
//   });
// };

// petController.addPet = (req, res, next) => {
//   // getting req.body data of all input
//   // name and breed required
//   const {
//     pet_name,
//     phone_number,
//     owner,
//     address,
//     eye_color,
//     gender,
//     image_url,
//     fur_color,
//     last_found,
//     type,
//     comments,
//   } = req.body;
//   let { _id } = req.body;
//   _id = Math.floor(Math.random() * 10000000); //new Date().getTime()
//   console.log(_id);

//   const insertChar =
//     'INSERT INTO public.animals (_id, pet_name, owner, address, eye_color, gender, image_url, fur_color, last_found, type, comments, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
//   const value = [
//     _id,
//     pet_name,
//     owner,
//     address,
//     eye_color,
//     gender,
//     image_url,
//     fur_color,
//     last_found,
//     type,
//     comments,
//     phone_number,
//   ];

//   db.query(insertChar, value, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('result', result.rows[0]);
//       // if we want to return single row inserted, uncomment below
//       res.locals.newPet = result.rows;
//       return next();
//     }
//   });
// };

// petController.foundPet = (req, res, next) => {
//   // getting req.body data of all input
//   // name and breed required
//   const { _id } = req.body;
//   console.log(_id);

//   const insertChar =
//     'DELETE from public.animals WHERE _id IN ($1) RETURNING *;';
//   const value = [_id];

//   db.query(insertChar, value, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('result', result.rows);
//       // if we want to return single row inserted, uncomment below
//       res.locals.newPet = result.rows;
//       return next();
//     }
//   });
// };

module.exports = postController;
