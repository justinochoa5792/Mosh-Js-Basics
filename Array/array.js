const numbers = [3, 4];

// Add to the end of the array
numbers.push(5, 6);
console.log(numbers);

// Add to the beginning of the array
numbers.unshift(1, 2);
console.log(numbers);

// Add to the middle of the array
numbers.splice(2, 0, 2.5);
console.log(numbers);

console.log(numbers.indexOf(5));

// .includes returns true if
// the # is in the array
console.log(numbers.includes(6));

// removing elements from the end
const last = numbers.pop();
console.log(numbers);
console.log(last);

// removing elements from the beginning
const beg = numbers.shift();
console.log(numbers);
console.log(beg);

// removing elements from the middle
const mid = numbers.splice(2, 1);
console.log(numbers);
console.log(mid);

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// returns first element that
// matches criteria
const course = courses.find((course) => {
  return course.name === "a";
});
console.log(course);

// combining array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combine = first.concat(second);
console.log(combine);

// solution 2
const combined = [...first, "a", ...second];
console.log(combined);

// slice array
// started after index 1 and finished
// after index 3
const slice = combine.slice(1, 3);
console.log(combine);
console.log(slice);

const number = [1, 2, 3];

// iterating over an array
number.forEach((num, index) => {
  console.log(num, index);
});

// joining arrays
const joined = number.join(" , ");
console.log(joined);

const message = "this is my message";
const parts = message.split(" ");
console.log(parts);

// sorting arrays
const numb = [3, 2, 1, 0, -1];
numb.sort();
console.log(numb);

// filtering arrays
const filtered = numb.filter((value) => {
  return value >= 0;
});
console.log(filtered);

const program = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

program.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(program);

// reducing an array
const num = [1, -1, 2, 3];

const sum = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// Exercises
const nums = arrayFromRange(-10, -4);

console.log(nums);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

const digits = [1, 2, 3, 4];

console.log(includes(digits, -1));

function includes(array, searchElement) {
  for (element of array) if (element === searchElement) return true;
  return false;
}

const output = except(digits, [1]);

console.log(output);

function except(array, excluded) {
  const output = [];

  for (let el of array) if (!excluded.includes(el)) output.push(el);
  return output;
}

const digit = [1, 2, 3, 4, 1];

const display = move(numbers, 0, 1);

console.log(display);

function move(array, index, offset) {
  const display = [...array];
  const elements = display.splice(index, 1)[0];
  display.splice(index + offset, 0, elements);
  return display;
}

const count = countOccurrences(digit, 1);
console.log(count);

function countOccurrences(array, searchEl) {
  let count = 0;
  for (e of array) if (e === searchEl) count++;
  return count;
}
