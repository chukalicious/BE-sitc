// here we are both importing express and its Router method
const router = require("express").Router();
const db = require("./users-model");

router.get("/", (req, res) => {
  db.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "could not find users" });
    });
});

module.exports = router;
