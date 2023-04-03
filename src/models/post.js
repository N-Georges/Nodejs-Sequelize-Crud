const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const postSchema = sequelize.define("Post", {
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likers: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

postSchema.sync();

module.exports = postSchema;
