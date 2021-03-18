function createCirlce(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCirlce(1);

console.log(circle);
console.log(circle.draw);

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
  });
}
const another = new Circle(1);
console.log(another);

for (let key in another) {
  console.log(key);
}

if ("radius" in another) {
  console.log("circle has a radius");
}

console.log(another);
