//!  PARENT CLASS
class Shape {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log("Shape Name: " + this.name);
  }
}

//! SUB CLASS
class Rectangle extends Shape {
  constructor(name, width, height) {
    //~ super calls the constructor of inherited from obj
    super(name);

    this.height = height;
    this.width = width;
  }
}
class Circle extends Shape {
  constructor(name, radius) {
    //~ super calls the constructor of inherited from obj
    super(name);

    this.radius = radius;
  }
  logName() {
    console.log('Circle Name: ' + this.name);
  }
}

const rect = new Rectangle("Rect1", 20, 10);
const cir = new Circle("Cir1", 30);
rect.logName();
cir.logName();
console.log(rect.name);
