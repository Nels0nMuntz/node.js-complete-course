const fs = require("fs");

fs.readFile("./text.txt", "utf-8", (err, data) => {
  if(!err) {
    console.log("File reading finished");
    console.log(data);
  }
});

console.log("Continue...");