const fs = require("fs/promises");

fs.writeFile("./first.txt", "First file content")
  .then(() => console.log("File first.txt was written"))
  .then(() => fs.appendFile("./first.txt", "\nOne more line"))
  .then(() => console.log("Appended to the first.txt file"))
  .then(() => fs.rename("./first.txt", "./rename-first.txt"))
  .then(() => console.log("File first.txt was renamed"))
  .catch(err => console.log(err))