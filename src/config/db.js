require("dotenv").config();
const { Sequelize } = require("sequelize");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sequelize = new Sequelize(URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

module.exports = sequelize;
