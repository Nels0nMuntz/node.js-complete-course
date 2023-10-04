const fs = require("fs");

const data = fs.readFileSync("./text.txt", "utf-8");

console.log("File reading finished");
console.log(data);

console.log("Continue...");