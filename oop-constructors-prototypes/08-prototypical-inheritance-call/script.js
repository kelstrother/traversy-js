function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
}

function Rectangle(name, height, width) {
  Shape.call(this, name);

  this.height = height;
  this.width = width;
}

//~ Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype)

function Circle(name, radius) {
  Shape.call(this, name);

  this.radius = radius
} 

const rect = new Rectangle('Rectangle 1', 20, 10);

const cir = new Circle('Circle 1', 20);


// console.log(rect, cir);

rect.logName();