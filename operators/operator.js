let x = 10;
let y = 3;

// Addition Operator
console.log(x + y);
// Subtraction
console.log(x - y);
// Multiplication Operator
console.log(x * y);
// Division Operator
console.log(x / y);
// Remainder of Division
console.log(x % y);
// Exponentiation
console.log(x ** y);

// Increment (++)
console.log(++x);
// or
console.log(x++);
// then
console.log(x);

// Decrement
console.log(--x);

// Comparison Operator
let a = 1;
console.log(a > 0);
console.log(a >= 1);
console.log(a < 1);
console.log(a <= 1);

// Ternary Operator
// if customer has more than 100 points
// they are gold customers
// if they have less then they are silver

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// Logical Operators
let highIncome = true;
let goodCredit = true;

let eligibleForLoan = highIncome && goodCredit;

console.log(eligibleForLoan);

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

// Swapping variable colors
let d = "red";
let e = "blue";

let f = d;

d = e;
e = f;

console.log(d);
console.log(e);
