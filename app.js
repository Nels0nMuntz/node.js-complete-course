const express = require("express");
const appRouter = require("./routes");

const PORT = 5000;

const app = express();

app.use(appRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
