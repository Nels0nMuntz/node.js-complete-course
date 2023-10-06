const fs = require("fs");
const qs = require("querystring");
const { comments } = require("./data");

function getHome(req, res) {
  fs.readFile("./files/common-form.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Server error while loading HTML file");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
}

function getHtml(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><header>");
  res.write("<h1>Greeting from the HTTP server!</h1>");
  res.write("</header></body></html>");
  res.end();
}

function getText(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Text response from the HTTP server!");
}

function getComments(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(comments));
}

function postComment(req, res) {
  res.setHeader("Content-Type", "text/plain");

  if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
    let body = "";

    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      try {
        const comment = qs.parse(body);
        comments.push(comment);
        res.statusCode = 201;
        res.setHeader("Content-Type", "text/html");
        res.write("<htnl><body>")
        res.write("<h1>Comment was created</h1>")
        res.write("<a href='/'>Add new comment</a>")
        res.write("</body></htnl>")
        res.end();
      } catch (error) {
        res.statusCode = 400;
        res.end("Invalid JSON");
      }
    });
  } else if (req.headers["content-type"] === "application/json") {
    let comment = "";

    req.on("data", (chunk) => (comment += chunk));

    req.on("end", () => {
      try {
        const json = JSON.parse(comment);
        comments.push(json);
        res.statusCode = 201;
        res.end("Comment was created");
      } catch (error) {
        res.statusCode = 400;
        res.end("Invalid JSON");
      }
    });
  } else {
    res.statusCode = 400;
    res.end("Dada must be in JSON format");
  }
}

function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Page not found</h1>");
}

module.exports = {
  getHome,
  getHtml,
  getText,
  getComments,
  postComment,
  handleNotFound,
};
