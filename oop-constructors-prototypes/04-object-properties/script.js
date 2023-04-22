function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 20, 10);
const rect2 = new Rectangle("Rectangle 2", 30, 10);

console.log(rect1.name, rect2.width);
console.log(rect1['width']);

//~ add a new property to object
rect1.color = 'red';
console.log(rect1);

//~ add a function to an object
rect2.perimeter = () => 2 * (rect2.width + rect2['height']);

//~ remove a property from object
delete rect2.perimeter;

//~ check for property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

//~ Get keys of an object
console.log(Object.keys(rect1));

//~ Get values of an object
console.log(Object.values(rect2));

//~ Get entries
console.log(Object.entries(rect1));

//~ Loop through entries
for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}

// console.log(rect2);