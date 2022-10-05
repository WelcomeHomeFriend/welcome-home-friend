const db = require("../models/models");
const postController = {};

postController.getPosts = async (req, res, next) => {
  try {
    // query str
    const getPostsQuery = `SELECT p.timestamp, p.description, p._id, 
                            a._id, a.name, a.eye_color, a.gender, a.color, a.last_seen, a.images,
                            u.username, c.user_id, c.text, c.timestamp
                           FROM public.post AS p
                           INNER JOIN public.comment AS c ON p._id = c.post_id
                           INNER JOIN public.animals AS a ON p.pet_id = a._id
                           INNER JOIN public.user AS u ON p.user_id = u._id
                           ORDER BY p.timestamp`;

    const result = await db.query(getPostsQuery);
    console.log(result.rows);
    // locals.postsArr should be an arr of objs
    res.locals.postsArr = result.rows;
    return next();
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

postController.getOnePost = async (req, res, next) => {
  // find post for response to frontend
  try {
    const param = [res.locals.post_id];
    console.log(param);
    const getPostQuery = `SELECT p.timestamp, p.description, p._id, 
                            a._id, a.name, a.eye_color, a.gender, a.color, a.last_seen, a.images,
                            u.username, c.user_id, c.text, c.timestamp
                          FROM public.post AS p
                          INNER JOIN public.animals AS a ON p.pet_id = a._id
                          INNER JOIN public.user AS u ON p.user_id = u._id
                          INNER JOIN public.comment AS c ON u._id = c.user_id
                          WHERE c.post_id=$1`;
    const newPostData = await db.query(getPostQuery, param);
    console.log(newPostData.rows[0]);
    res.locals.newPost = newPostData.rows[0];
    return next();
  } catch (error) {
    return next({
      log: "Express error in getOnePost middleware",
      status: 400,
      message: {
        err: `postController.getOnePost: ERROR: ${error}`,
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

postController.deletePost = async (req, res, next) => {
  const { post_id, pet_id } = res.locals.post;
  console.log("Post ID:", post_id);
  console.log("Pet ID:", pet_id);
  try {
    // delete post
    const param = [post_id];
    const deletePostQuery = `DELETE FROM public.post WHERE _id = $1`;
    const deletePostResult = await db.query(deletePostQuery, param);
  } catch (error) {
    return next({
      log: "Express error in deletePost -deletePost- middleware",
      status: 400,
      message: {
        err: `petController.deletePost: ERROR: ${error}`,
      },
    });
  }
  try {
    // delete pet
    const param2 = [pet_id];
    const deletePetQuery = `DELETE FROM public.animals WHERE _id = $1`;
    const deletePetResult = await db.query(deletePetQuery, param2);

    res.locals.status = { success: true, message: "Post deleted" };
    return next();
  } catch (error) {
    return next({
      log: "Express error in deletePost -deletePet- middleware",
      status: 400,
      message: {
        err: `petController.deletePost: ERROR: ${error}`,
      },
    });
  }
};

// middleware for deleting a single comment
postController.deleteComment = async (req, res, next) => {
  // req.body
  const { comment_id, post_id } = req.query;

  const param = [comment_id];

  try {
    const deleteCommentQuery = `DELETE FROM public.comment WHERE _id=$1`;

    db.query(deleteCommentQuery, param);

    res.locals.post_id = post_id;

    return next();
  } catch (error) {
    return next({
      log: "Express error in deleteComment middleware",
      status: 400,
      message: {
        err: `userController.deleteComment: ERROR: ${error}`,
      },
    });
  }
};

postController.deleteAllComments = async (req, res, next) => {
  // req.body
  const { post_id, pet_id } = req.query;

  const param = [post_id];

  try {
    const deleteCommentQuery = `DELETE FROM public.comment WHERE post_id=$1`;

    const result = db.query(deleteCommentQuery, param);

    res.locals.post = { post_id: post_id, pet_id: pet_id };

    return next();
  } catch (error) {
    return next({
      log: "Express error in deleteComment middleware",
      status: 400,
      message: {
        err: `userController.deleteComment: ERROR: ${error}`,
      },
    });
  }
};

postController.addComment = async (req, res, next) => {
  const { comment, post_id, user_id } = req.body;

  const param = [comment, post_id, user_id];

  try {
    const addCommentQuery = `INSERT INTO public.comment(text, post_id, user_id) 
                             VALUES($1, $2, $3)`;

    db.query(addCommentQuery, param);

    res.locals.post_id = post_id;

    return next();
  } catch (error) {
    return next({
      log: "Express error in deleteComment middleware",
      status: 400,
      message: {
        err: `userController.deleteComment: ERROR: ${error}`,
      },
    });
  }
};

module.exports = postController;
