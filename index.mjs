import { season, temperature } from "./named-exports.mjs"
import { isRaining, humidity } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";
import DEFAULT_SERVER, { USERNAME as MU_USERNAME, PASSWORD as MU_PASSWORD } from "./mixed-exports.mjs";

console.log({ season, temperature, isRaining, humidity });

getDataFromServer("https://jsonplaceholder.typicode.com/posts/1")
  .then(posts => console.log(posts))
  .catch(err => console.log(err))

console.log({ DEFAULT_SERVER, MU_USERNAME, MU_PASSWORD });