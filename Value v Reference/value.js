let x = 10;
let y = x;

x.value = 20;
console.log(x);
console.log(y);

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
