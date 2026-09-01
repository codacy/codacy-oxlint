// all-patterns.js

// 1. Reassigning a constant
const myNumber = 10;
myNumber = 20; 

// 2. Duplicate keys in an object
const myObject = {
  name: "Oxlint",
  name: "Test" 
};

// 3. Leftover debugger statement
debugger; 

console.log(myNumber, myObject);