function getUsersHandler(req, res) {
  res.send("Get users route");
}

function postUsersHandler(req, res) {
  res.send("Post users route");
}

function getUserHandler(req, res) {
  res.send(`Get user with id ${req.params.userId} route`);
}

function deleteUserHandler(req, res) {
  res.send(`Delete user with id ${req.params.userId} route`);
}

module.exports = {
  getUsersHandler,
  postUsersHandler,
  getUserHandler,
  deleteUserHandler,
};
