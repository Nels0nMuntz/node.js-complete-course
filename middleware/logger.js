function logger(req, res, next) {
  console.log(`Method: ${req.method}, path: ${req.url}`);
  next();
}

module.exports = logger;
