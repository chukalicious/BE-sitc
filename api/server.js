const express = require("express");
//front end will have errors if cors is not imported
const cors = require("cors");
const server = express();

// Routers
const userRouter = require("./users/users-router");

// this tells our app to accept json objects
server.use(express.json());
server.use(cors());

server.use("/users", userRouter);

module.exports = server;
