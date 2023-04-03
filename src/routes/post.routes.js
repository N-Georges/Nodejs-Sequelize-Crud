const express = require("express");
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

router.patch("/like/:id", likePost);

router.patch("/dislike/:id", dislikePost);

module.exports = router;
