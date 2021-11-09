exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Bandit",
          password: "123456",
          email: "bandit@gmail.com",
          role: "student",
        },
      ]);
    });
};
