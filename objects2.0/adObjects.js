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
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);
console.log(another);
