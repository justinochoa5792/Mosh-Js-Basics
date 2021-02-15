const object = document.querySelector(".object");

object.innerHTML = `
const circle = {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    isVisible: true,
    draw: function () {
      console.log("draw");
    },
  };
  circle.draw();
  circle.color = "Blue";
  console.log(circle);
  delete circle.color;
  console.log(circle);

  <br>
  
  for (let key in circle) {
    console.log(key);
  }
  
  // Old Way of copying objects
  const another = {};
  for (let key in circle) {
    another[key] = circle[key];
    console.log("another", another);
  }
  
  // new way of copying objects
  const another1 = Object.assign({}, circle);
  console.log(another1);
  
  // simplest way
  const another2 = { ...circle };
  console.log(another2);

  <br>
  
  // FACTORY FUNCTION
  function createCircle(radius) {
    return {
      radius: radius,
      isVisible: true,
      draw: function () {
        console.log("draw");
      },
    };
  }
  const circle1 = createCircle(1);
  console.log(circle1);
  const circle2 = createCircle(2);
  console.log(circle2);
  
  <br>

  // constructor function
  // pascal notation: OneTwoThree
  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }
  
  const circle3 = new Circle(1);
  console.log(circle3);

  <br>
  
  let x = 10;
  let y = x;
  x = 20;
  
  // They are independent of eachother which
  // is why when the value of x changed y stayed
  // the same.
  console.log("X", x);
  console.log("Y", y);
 
`;

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};
circle.draw();
circle.color = "Blue";
console.log(circle);
delete circle.color;
console.log(circle);

for (let key in circle) {
  console.log(key);
}

// Old Way of copying objects
const another = {};
for (let key in circle) {
  another[key] = circle[key];
  console.log("another", another);
}

// new way of copying objects
const another1 = Object.assign({}, circle);
console.log(another1);

// simplest way
const another2 = { ...circle };
console.log(another2);

// FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius: radius,
    isVisible: true,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);

// constructor function
// pascal notation: OneTwoThree
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);
console.log(circle3);

let x = 10;
let y = x;
x = 20;

// They are independent of eachother which
// is why when the value of x changed y stayed
// the same.
console.log("X", x);
console.log("Y", y);

const name = "Justin";

const message = `Hello my name ${name}`;

console.log(message);

// Exercises

const address = {
  street: "111 sw 1st ",
  city: "Hollywood",
  zip: 33021,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

let addy = createAddress("a", "b", "c");
console.log(addy);

function createAddress(street, city, zip) {
  return {
    street,
    city,
    zip,
  };
}

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

function areEqual(address1, address2) {}

function areSame(address1, address2) {
  return address1 === address2;
}

const blogPost = {
  title: "title",
  body: "body",
  author: "author",
  views: 10,
  comments: [
    {
      author: "auth",
      body: "body",
    },
    {
      author: "auth",
      body: "body",
    },
  ],
  isLive: true,
};

console.log(blogPost);

const post = new Blog("title", "Body", "Author");
console.log(post);
function Blog(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
