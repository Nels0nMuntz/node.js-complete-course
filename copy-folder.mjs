import fs from "fs";
import path from "path";

const sourceDir = "./files"
const distDir = "./copied-files"

if(!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} does not exist`);
  console.log("Exiting...");
  process.exit(0)
}

if(fs.existsSync(distDir)) {
  fs.rmSync(distDir, { force: true, recursive: true })
}

fs.mkdirSync(distDir);

fs.readdir(sourceDir, (err, files) => {
  if(err) {
    console.log("Error occured whed reaqding source directory");
    process.exit(1)
  }

  console.log("Before");

  files.forEach(file => {
    fs.createReadStream(path.join(sourceDir, file))
      .pipe(
        fs.createWriteStream(path.join(distDir, `${file.split(".")[0]}(copy).${file.split(".")[1]}`))
          .on("finish", () => console.log(`File ${file} was copied`))
      )
  })

  console.log("After");

  setTimeout(() => console.log("Timeout"), 0)
})