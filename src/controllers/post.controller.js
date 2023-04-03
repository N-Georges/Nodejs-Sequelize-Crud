const PostModel = require("../models/post");

module.exports.getPosts = async (req, res) => {
  try {
    const posts = await PostModel.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    return res.status(400).json({
      message: "Post message is required",
    });
  }
  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

module.exports.editPost = async (req, res) => {
  const postId = await PostModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!req.body.message) {
    return res.status(400).json({
      message: "Post message is required",
    });
  } else if (!req.body.author) {
    return res.status(400).json({
      message: "Post author is required",
    });
  } else if (!postId) {
    return res.status(400).json({
      message: "This post does not exist",
    });
  }

  const postUpdate = await PostModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json(postUpdate);
};

module.exports.deletePost = async (req, res) => {
  const postId = await PostModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!postId) {
    return res.status(400).json({
      message: "This post does not exist",
    });
  }

  await PostModel.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json(`Post with id ${req.params.id} deleted`);
};

module.exports.likePost = async (req, res) => {
  try {
    const likes = await PostModel.findOne({
      where: {
        id: req.params.id,
      },
    }).then((post) => post.likers);

    await PostModel.update(
      {
        likers: [req.body.userId, ...likes],
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      message: "Post liked",
      id: req.params.id,
      userId: req.body.userId,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports.dislikePost = async (req, res) => {
  try {
    const likes = await PostModel.findOne({
      where: {
        id: req.params.id,
      },
    }).then((post) => post.likers);

    const filteredLikes = likes.filter((like) => like !== req.body.userId);

    await PostModel.update(
      {
        likers: filteredLikes,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      message: "Post disliked",
      id: req.params.id,
      userId: req.body.userId,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
