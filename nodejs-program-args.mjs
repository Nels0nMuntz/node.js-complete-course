import fs from "fs";
import path from "path";

const argv = process.argv;

if (!argv[2] || !argv[3]) {
  console.log("Filename and lines qty must be supplied as arguments");
  process.exit(0);
}

let [filePath, numberOfStrings] = process.argv.splice(2);

numberOfStrings = parseInt(numberOfStrings)

if(isNaN(numberOfStrings)) {
  console.log("Lines qty must be a number");
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.resolve(filePath));

for (let i = 1; i <= +numberOfStrings; i++) {
  writeStream.write(`Line ${i} \n`);
}

writeStream.end(() => console.log(`Automatically generated file ${filePath} was created`))
