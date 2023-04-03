const express = require("express");
const sequelize = require("./src/config/db");
const app = express();
const port = 3000;

// const Post = require("./src/models/post.model");

// test connection to database
const ConnectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

ConnectionDB();

// reset database and apply models
// sequelize.sync({ force: true });

// drop database
// Post.drop();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./src/routes/post.routes"));

app.listen(port, () => console.log("Server is running on port " + port));
