const db = require("../../db-config");

module.exports = {
  // database functions to interact with the data
  find,
};

function find() {
  return db("users").select("*");
}
