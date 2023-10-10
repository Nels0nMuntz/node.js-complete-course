const express = require("express");
const appRouter = require("./routes");
const logger = require("./middleware/logger");
const morgan = require("morgan");

const PORT = 5000;

const app = express();

app.use(morgan("tiny"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use(appRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
