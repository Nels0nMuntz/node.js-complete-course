const { Router } = require("express");
const {
  getUsersHandler,
  postUsersHandler,
  getUserHandler,
  deleteUserHandler,
} = require("../controllers/users");

const usersRouter = new Router();

usersRouter.get("/", getUsersHandler);
usersRouter.post("/", postUsersHandler);
usersRouter.get("/:userId", getUserHandler);
usersRouter.delete("/:userId", deleteUserHandler);

module.exports = usersRouter;
