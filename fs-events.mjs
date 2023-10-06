import { EventEmitter } from 'events';
import fs from "fs"

const WRITE_START_EVENT = "writeStart"
const WRITE_COMPLETE_EVENT = "writeComplete"
const APPEND_START_EVENT = "appendStart"
const APPEND_COMPLETE_EVENT = "appendComplete"

const filePath = "./first.txt"

const eventEmitter = new EventEmitter();

eventEmitter.on(WRITE_START_EVENT, () => {
  console.log("File first.txt is writting");
})
eventEmitter.on(WRITE_START_EVENT, () => {
  fs.writeFile(filePath, "First file text", () => eventEmitter.emit(WRITE_COMPLETE_EVENT))
})

eventEmitter.on(WRITE_COMPLETE_EVENT, () => {
  console.log("File first.txt was written");
})
eventEmitter.on(WRITE_COMPLETE_EVENT, () => {
  eventEmitter.emit(APPEND_START_EVENT)
})

eventEmitter.on(APPEND_START_EVENT, () => {
  console.log("File first.txt is appending");
})
eventEmitter.on(APPEND_START_EVENT, () => {
  fs.appendFile(filePath, "\nOne more line", () => eventEmitter.emit(APPEND_COMPLETE_EVENT))
})

eventEmitter.on(APPEND_COMPLETE_EVENT, () => {
  console.log("New line to the first.txt file was appended");
})

eventEmitter.emit(WRITE_START_EVENT)


