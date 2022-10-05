const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.get("/", postController.getPosts, (req, res) =>
  res.status(200).json(res.locals.postsArr)
);

router.post("/create", postController.addPost, (req, res) =>
  res.status(200).json(res.locals.post)
);

module.exports = router;
