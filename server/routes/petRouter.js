const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.get("/", postController.getPosts, (req, res) =>
  res.status(200).json(res.locals.postsArr)
);

router.post("/create", postController.addPost, (req, res) =>
  res.status(200).json(res.locals.post)
);

router.delete(
  "/deleteComment",
  postController.deleteComment,
  postController.getOnePost,
  (req, res) => res.status(200).json(res.locals.newPost)
);

router.post(
  "/addComment",
  postController.addComment,
  postController.getOnePost,
  (req, res) => res.status(200).json(res.locals.newPost)
);

//router to delete all comments then the whole post then the animal
router.delete(
  "/delete",
  postController.deleteAllComments,
  postController.deletePost,
  (req, res) => res.status(200).json(res.locals.status)
);

module.exports = router;
