let Loop = document.querySelector(".loop");

Loop.innerHTML = `
<hr>
Practice
<br>
// if else
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
<br>

// Switch Statements
let role;
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}
<br>

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop", i);
}
<br>

// while loop
let j = 1;
while (j <= 5) {
  console.log("While loop", j);
  j++;
}

<br>

// do while
let k = 1;
do {
  console.log("Do While loop", k);
  k++;
} while (k <= 5);

<br>

// For of
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
<hr>
`;

// if else
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

// Switch Statements
let role;
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop", i);
}

// while loop
let j = 1;
while (j <= 5) {
  console.log("While loop", j);
  j++;
}

// do while
let k = 1;
do {
  console.log("Do While loop", k);
  k++;
} while (k <= 5);

// For of
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// Exercises
function twoNums(a, b) {
  if (a > b) {
    return a;
  } else return b;
}
console.log(twoNums(5, 2));

function isLandscape(width, height) {
  if (width > height) {
    return true;
  }
  return false;
}
console.log(isLandscape(12, 3));

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "Not a number";
  } else if (input % 3 === 0 && input % 5 === 0) {
    return "Fizz Buzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  }
  return input;
}
console.log(fizzBuzz(7));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPoint = 5;
  if (speed < speedLimit + kmPoint) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPoint);
    if (points >= 12) console.log("License Suspended");
    else console.log("Points", points);
  }
}
checkSpeed(80);

function showNumbers(limit) {
  for (let i = 1; i <= limit; i++)
    if (i % 2 === 0) {
      console.log(i, "Even");
    } else console.log(i, "Odd");
}
showNumbers(10);

const movie = {
  title: "a",
  year: 2018,
  director: "b",
};

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

showProperties(movie);

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
console.log(sum(10));

function showStars(rows) {
  for (row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
showStars(5);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

showPrimes(10);
