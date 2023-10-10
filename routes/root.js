const { Router } = require("express");
const { getRootHandler } = require("../controllers/root");

const rootRouter = new Router();

rootRouter.get("/", getRootHandler);

module.exports = rootRouter;
