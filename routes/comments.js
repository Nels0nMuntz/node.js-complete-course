const { Router } = require("express");
const {
  getCommentsHandler,
  postCommentsHandler,
  getCommentHandler,
  deleteCommentHandler,
} = require("../controllers/comments");

const commentsRouter = new Router();

commentsRouter.get("/", getCommentsHandler);
commentsRouter.post("/", postCommentsHandler);
commentsRouter.get("/:commentId", getCommentHandler);
commentsRouter.delete("/:commentId", deleteCommentHandler);

module.exports = commentsRouter;
