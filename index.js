// String Literal
let firstName = "Justin";
let lastName = "Ochoa";
// Number Literal
let age = 28;
// Boolean Literal
let isApproved = false;

//  Objects
let person = {
  name: "Justin",
  age: 28,
};

// Dot Notation
person.name = "John";

// Bracket Notation
person["name"] = "Mosh";

let selection = "name";

person[selection] = "Mary";

console.log(person);

// Array

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors.length);
console.log(selectedColors);

// Functions

function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Justin");

function square(number) {
  return number * number;
}

console.log(square(3));
