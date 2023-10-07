import fs from "fs";

const fileName = "./files/thrid.txt";
const fileNameCopy = "./files/thrid-copy.txt";

const readStream = fs.createReadStream(fileName);
readStream.on("end", () => console.log("Read stream ended"));
const writeStream = fs.createWriteStream(fileNameCopy);
writeStream.on("close", () => console.log("Write stream closed"));
writeStream.on("finish", () => console.log("File was copied"));

readStream.pipe(writeStream)
