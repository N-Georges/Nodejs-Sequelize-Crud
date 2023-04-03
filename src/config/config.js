require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

module.exports = {
  development: {
    url: URL,
    ssl: true,
  },
  test: {
    url: URL,
    ssl: true,
  },
  production: {
    url: URL,
    ssl: true,
  },
};
