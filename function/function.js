function walk() {
  console.log("walk");
}
walk();

let run = function () {
  console.log("run");
};
run();

// Rest Operator
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5));

// Default parameters
function interest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;

  return ((principal * rate) / 100) * years;
}
console.log(interest(10000));

const person = {
  firstName: "Justin",
  lastName: "Ochoa",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

console.log(person.fullName());

const color = "red";

// Scoping
function start() {
  const message = "hi";
  console.log("inside function", color);
}
start();
console.log("outside of function", color);

// let vs var
function stop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    if (true) {
      var newColor = "red";
    }
  }
  console.log(newColor);
}
stop();

// this keyword

// method => obj
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
video.showTags();
// function => global(window,global)
function playVideo() {
  console.log(this);
}
playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}
const v = new Video("title");

function newName(a, b) {
  console.log(this);
}
newName.call({ name: "Justin" }, 1, 2);
newName.apply({ name: "Ochoa" }, [1, 2]);

// Exercises
function newSum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(newSum(1, 2, 3, 4, 5));

function sum2(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}
console.log(sum2(1, 2, 3, 4, 5));

const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area);

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (error) {
  console.log(error);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Not an array ");

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
