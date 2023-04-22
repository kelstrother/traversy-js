//~ /////////////////////////
//!      4 BASIC PRINCIPLES OF OOP        //
//~ /////////////////////////

//! 1. ABSTRACTION:
//~   ----- Hiding all but the relevant parts of an object
//~         to reduce complexity and increase efficiency.
//! 2. ENCAPSULATION:
//~   ----- The process of wrapping up data and methods
//~         into a unit such as a class or function (data hiding).
//! 3. INHERITANCE:
//~   ----- The process of inheriting the properties and methods
//~         from a parent class or constructor.
//! 4. POLYMORPHISM:
//~   ----- The process of inheriting the properties and methods
//~         from a parent class or constructor.


//~ /////////////////////////
//!      OBJECT LITERALS        //
//~ /////////////////////////

const rectangle = {
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  area: function() {
    return this.width * this.height;
  }
}

const rectangle2 = {
  name: 'Rectangle 2',
  width: 30,
  height: 20,
  area: function() {
    return this.width * this.height;
  }
}
console.log(rectangle.area());