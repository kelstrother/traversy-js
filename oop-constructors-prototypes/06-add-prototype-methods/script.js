function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
}

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
}

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
}

Rectangle.prototype.changeName = function (newName) {
  (this.name = newName);
}

const rect = new Rectangle('Rect', 20, 10);
const rect2 = new Rectangle('Rect2', 30, 20);


console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
rect.changeName('Test')
console.log(rect.name);

console.log(rect2.area());