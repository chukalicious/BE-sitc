const db = require("../../db-config");

module.exports = {
  // database functions to interact with the data
  find,
  insert,
  update,
};

function find() {
  return db("users").select("*");
}

function insert(user) {
  return db("users").insert(user).returning("*");
}

function update(id, changes) {
  return db("users").where({ id }).insert(changes).returning("*");
}
