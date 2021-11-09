const db = require("../../db-config");

module.exports = {
  // database functions to interact with the data
  find,
  insert,
  update,
  remove,
};

function find() {
  return db("users").select("*");
}

function insert(user) {
  return db("users").insert(user).returning("*");
}

function update(id, changes) {
  return db("users").where("id", Number(id)).update(changes).returning("*");
}

function remove(id) {
  return db("users").where({ id }).del().returning("*");
}
