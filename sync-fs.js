const fs = require("fs");

try {
  fs.writeFileSync("./first.txt", "First file content")
  console.log("File first.txt was written")
  fs.appendFileSync("./first.txt", "\nOne more line")
  console.log("Appended to the first.txt file")
  fs.renameSync("./first.txt", "./rename-first.txt")
  console.log("File first.txt was renamed")
} catch (err) {
  console.log(err)
}

