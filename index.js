const { myName, myHobbies, myFavNumber } = require('./multiple-exports');
const {
  myName: myOtherName,
  myFriendName,
  mygreatHobbies,
} = require('./export-and-import');
const greeting = require('./single-export');

myHobbies.push('climbing');

console.log({
  myName,
  myHobbies,
  mygreatHobbies,
  myFavNumber,
  myOtherName,
  myFriendName,
});

greeting(myName);
