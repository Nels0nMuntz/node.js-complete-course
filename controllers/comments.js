function getCommentsHandler(req, res) {
  res.send("Get comments route");
}

function postCommentsHandler(req, res) {
  res.send("Post comments route");
}

function getCommentHandler(req, res) {
  res.send(`Get comment with id ${req.params.commentId} route`);
}

function deleteCommentHandler(req, res) {
  res.send(`Delete comment with id ${req.params.commentId} route`);
}

module.exports = {
  getCommentsHandler,
  postCommentsHandler,
  getCommentHandler,
  deleteCommentHandler,
};
