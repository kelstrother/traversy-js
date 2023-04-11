//!           ARRAY LITERAL
// const numbers = [12, 42, 35, 43, 28];
// console.log(numbers);

//!             ARRAY CONSTRUCTOR
// const fruits = new Array('apple', 'grape', 'orange', 'kiwi');
// console.log(fruits);

//?   accessing values by index
// x = numbers[0];
// x = numbers[0] + numbers[3];

// x = `My favorite fruit is a ${fruits[3]}`;

//?   changing a value in an array.
// fruits[2] = 'pear';

//?   another way to add value to end of array without using method.
// fruits[fruits.length] = 'blueberry';

// x = fruits;

// console.log(x);

//!         ARRAY METHODS
// let x;
// const arr = [34, 54, 65, 78, 15];

//?   .push (will insert new value after the last index)
// arr.push(100);
//?   .pop (will 'pop' off the value in the last index)
// arr.pop()
//?   .unshift (will add value to the 0 index)
// arr.unshift(99);
//?   .shift (will remove value from the 0 index)
// arr.shift();
//?   .reverse (will reverse the order of the array)
// arr.reverse();
//?   .includes (will check if a value is present in the array. Returns true or false)
// x = arr.includes(20);
//?   .indexOf (will return the index of specified value)
// x = arr.indexOf(54);
//?   .slice (returns specified group of values. allows 2 arguments (start index, stop index )does not change og array)
// x = arr.slice(1, 4)
//?   .splice (returns specified group of values. allows 2 arguments (start index, stop index )removes unspecified values & changes og array)
// x = arr.splice(2, 1)
//?   chaining methods
// x = arr.splice(1, 4).reverse().toString().charAt(0);

// console.log('x = ', x);
//~ ///////////////////////////////////////////////////
//!         NESTING, CONCAT, SPREAD OPERATOR
//~ ///////////////////////////////////////////////////
//? nesting an array within an array
// let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);
//?   accessing value in the nested array [index where nested arr is][then the index of value within it]
// x = fruits[3][1];

// const allFruits = [fruits, berries];

// x = allFruits;

//?   concat arrays (combines the values to the array resulting in 1 array)
// x = fruits.concat(berries);
//?   spread operator (... combines values of 2 arrays into 1.)
// x = [...fruits, ...berries]
// ?    flatten arrays (returns a single array)
// const arr = [1, 2, [3, 4], 5, [6, 7], 8];
// x = arr.flat();

//!   STATIC ARRAY METHODS  (built in methods on the Array object)
//?   isArray(checks to see if it is an array (returns true/false))
// x = Array.isArray(fruits);
//?   .from(creates an array from an array like value.(useful with html collections and node lists))
// x = Array.from('12345')
//?   .of(creates an array from a set of values)
// const a = 1;
// const b = 2;
// const c = 3;
// x = Array.of(a, b, c);
// console.log(x);
//~ ///////////////////////////////////////////////////
//!             ARRAY CHALLENGES
//~ ///////////////////////////////////////////////////
//!  challenge 1
//,  expected result: [6, 5, 4, 3, 2, 1, 0];
// const arr = [1, 2, 3, 4, 5];
// arr.reverse().push(0);
// arr.unshift(6);
// console.log(arr);

//!  challenge 2
//,  Combine arr1 and arr2 into a new array called arr3
//,  Be sure to remove the extra 5
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

//?  solution 1
// const arr3 = [...arr1, ...arr2];
// arr3.splice(4, 1);
// console.log(arr3);

//?  solution 2
// const arr4 = arr1.slice(0, 4).concat(arr2)
// console.log(arr4);

//~ ////////////////////////////////////////////////////////////
//!  OBJECT LITERALS (data structure that holds key/value pairs)
//~ ////////////////////////////////////////////////////////////
// const person = {
//   name: 'Apollo Strother',
//   age: 0,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Denver',
//     state: 'CO',
//   },
//   hobbies: ['music', 'sleeping'],
// };
// ?  accessing properties via bracket syntax
// x = person['name'];
// ?  accessing properties via dot syntax
// x = person.name;
// x = person.address.state;
// x = person.hobbies[1];
// ?  updating properties
// person.address = '8707 E Florida ave.'
// ?  removing properties
// delete person.hobbies[0];
// ?  adding properties
// person.isStinky = true;
// ?  adding a function to an object
// person.greet = function () {
//   console.log(`Greetings, I am ${this.name}`);
// }

// person.greet();

//?  SEPERATE WORD PROPERTIES CAN ONLY BE CALLED VIA BRACKET NOTATION
//~   person2['first name'];
// const person2 = {
//   'first name': 'Apollo',
//   'last name': 'Strother',
// }

// x = person2["first name"];

// console.log(x);
//~ ////////////////////////////////////////////////////////////
//!           OBJECT SPREAD OPERATOR & METHODS
//~ ////////////////////////////////////////////////////////////
let x;
//~ one way of creating an object
// const todo = {};
//~ another way to create an object
// const todo = new Object();

// todo.id = 1
// todo.name = 'Buy Milk';
// todo.completed = false;
// x = todo;

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};
// ?  SPREAD OPERATOR
// const obj3 = {...obj1, ...obj2};
// ?   BUILT IN OBJECT METHOD (assign(does the same thing as spread))
// const obj4 = Object.assign({}, obj1, obj2);

// ?    ARRAY OF OBJECTS
// const todos = [
//   { id: 1, name: 'Buy Milk' },
//   { id: 2, name: 'Pick up kids from school' },
//   { id: 3, name: 'Take out trash' },
// ];
// x = todos[0].name;
// ?  .keys(GET ALL KEYS FROM AN OBJECT AND ADD TO ARRAY)
// x = Object.keys(todo);
// ?  .values(GET ALL VALUES FROM AN OBJECT AND ADD TO ARRAY)
// x = Object.values(todo);
// ?  .entries(GET ALL KEY:VALUE PAIRS FROM AN OBJECT AND ADD TO ARRAY)
// x = Object.entries(todo);
// ?  .hasOwnProperty(checks if object has specified property)
// x = todo.hasOwnProperty('name')
// console.log(x);

//~ ////////////////////////////////////////////////////////////
//!           DESTRUCTURING & NAMING
//~ ////////////////////////////////////////////////////////////
// const todo = {
//   id: 1,
//   title: 'Take out trash',
//   user: {
//     name: 'Teddy'
//   }
// }

// const { id, title, user: { name } } = todo;
// console.log(id, title, name);

// const numbers = [12, 35, 53, 22];
// // ~  rest operator(...) returns the rest of the values into a seperate array
// const [first, second, ...nums] = numbers;

// console.log(first, second, nums);
//~ ////////////////////////////////////////////////////////////
//!           JSON (JAVASCRIPT OBJECT NOTATION)
//~ ////////////////////////////////////////////////////////////
// const post = {
//   id: 1,
//   title: 'Post One',
//   body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quidem? Sed ad nihil aut iusto perferendis cum dignissimos delectus, et, rem illo necessitatibus recusandae dolorem ratione non voluptatum praesentium? Ex.'
// };
// // ?  CONVERT OBJECT TO A JSON STRING (useful for adding things to local storage)
// const str = JSON.stringify(post);
// // ?  PARSE CONVERTS OBJECT TO A JSON OBJECT
// const obj = JSON.parse(str);
// console.log(obj);

//, ////////////////////////////////////////////////////////////
//!                OBJECT CHALLENGE
//, ////////////////////////////////////////////////////////////
// ?  step 1
//  Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.
const library = [
  {
    title: "Enders Game",
    author: "Orson Scott Card",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Ender in Exile",
    author: "Orson Scott Card",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Foundation",
    author: "Isaac Asimov",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
// ?  step 2
//  You finished reading all of the books. Set the `read` value for all of them to true. Do not edit the initial object. Set the values using dot notation.
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

// ?  step 3
//Destructure the title from the first book and rename the variable to firstBook
//, my attempt WRONG -> library[0].title = 'firstBook';
const { title: firstBook } = library[0];
// ?  step 4
//  Turn the library object into a JSON string
const str = JSON.stringify(library);
console.log(str);
