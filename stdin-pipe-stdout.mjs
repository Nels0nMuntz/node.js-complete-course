import fs from "fs";
import { Transform } from "stream";

const upperCaseStream = new Transform({
  transform: function (chunk, encoding, callback) {
    const uppercased = chunk.toString().toUpperCase();
    callback(null, uppercased);
  },
});

const reverseStream = new Transform({
  transform: (chunk, encoding, callback) => {
    const chars = chunk.toString().split("");
    const lastChar = chars.pop();
    const reversed = chars.reverse().concat(lastChar).join("");
    callback(null, reversed);
  },
});

process.stdin.pipe(reverseStream).pipe(upperCaseStream).pipe(process.stdout);
