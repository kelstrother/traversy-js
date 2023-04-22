class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  area() {
    return this.width * this.height
  }
  perimeter() {
    return 2 * (this.height + this.width)
  }
  isSquare() {
    return this.height === this.width
  }
  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
square.logArea();