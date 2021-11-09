const db = require("../../db-config");

module.exports = {
  // database functions to interact with the data
  find,
  insert,
};

function find() {
  return db("users").select("*");
}

function insert(user) {
  // need to find pg method to return the object posted
  return db("users").insert(user);
}
