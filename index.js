const path = require('path');

const filePath = '/Users/eugene/Desctop/node/index.js';
const textFilePath = '/Users/eugene/Desctop/file.txt';
const relativepath = './node/movie.mov';
const dirPath = './node/subfolder';

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(relativepath));

console.log(path.basename(textFilePath));
console.log(path.basename(dirPath));

console.log(path.dirname(textFilePath));
console.log(path.dirname(dirPath));

console.log(path.resolve(relativepath));

console.log(path.extname(textFilePath));
console.log(path.extname(relativepath));
console.log(path.extname(dirPath));

const parsedPath = path.parse(filePath);
console.log(path.join(parsedPath.dir, `${parsedPath.name}.min${parsedPath.ext}`));