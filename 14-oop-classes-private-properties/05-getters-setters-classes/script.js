class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    // return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
    //~ after creating a separate function to capitalize first letter
    return this.capitalizeFirst(this._firstName)
  }
  
  set firstName(value) {
    // this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
    //~ after creating a separate function to capitalize first letter
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName)
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person("apollo", "strother");
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = 'theo';
person1.lastName = 'the iii'
console.log(person1);
console.log(person1.fullName);