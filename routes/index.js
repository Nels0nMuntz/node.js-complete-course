const { Router } = require("express");
const rootRouter = require("./root");
const usersRouter = require("./users");
const commentsRouter = require("./comments");

const appRouter = new Router();

appRouter.get("/", rootRouter);
appRouter.use("/users", usersRouter);
appRouter.use("/comments", commentsRouter);

module.exports = appRouter;
