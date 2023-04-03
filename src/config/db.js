require("dotenv").config();
const { Sequelize } = require("sequelize");

const { PG_URL } = process.env;

const db = new Sequelize(`${PG_URL}`, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

db.authenticate()
  .then(() => {
    console.log(`Connection has been established successfully. \u2705`);
  })
  .catch((error) => {
    console.error(`Unable to connect to the database:, ${error} \u274C`);
  });

module.exports = db;
