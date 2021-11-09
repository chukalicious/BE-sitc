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

router.post("/", (req, res) => {
  db.insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ message: "could not add user" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  db.update(id, req.body)
    .then((user) => {
      res.status(203).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({ message: "could not update user" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then((user) => {
      res.status(204).json({ message: "user has been deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: "could not delete user st this time" });
    });
});

module.exports = router;
