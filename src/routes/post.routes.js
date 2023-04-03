const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the post page" });
});

router.post("/", (req, res) => {
  res.json({
    message: req.body.message,
  });
});

router.put("/:id", (req, res) => {
  console.log(
    `Post with id ${req.params.id} updated with message: ${req.body.message}`
  );
  res.json({
    message: "Post updated",
    id: req.params.id,
  });
});

router.delete("/:id", (req, res) => {
  console.log(`Post with id ${req.params.id} deleted`);
  res.json({
    message: "Post deleted",
    id: req.params.id,
  });
});

router.patch("/like/:id", (req, res) => {
  console.log(`Post with id ${req.params.id} liked`);
  res.json({
    message: "Post liked",
    id: req.params.id,
  });
});

router.patch("/dislike/:id", (req, res) => {
  console.log(`Post with id ${req.params.id} disliked`);
  res.json({
    message: "Post disliked",
    id: req.params.id,
  });
});

module.exports = router;
