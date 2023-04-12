//~ /////////////////////////////////
//!     Functions
//~ /////////////////////////////////

// function sayHello() {
//   console.log('Hello World');
// }

// sayHello();

//?   data passed when defining the function is called parameters.
// function add(num1, num2) {
//   console.log(num1 + num2);
// }
//?   data passed in when invoking function is called arguments.
// add(3, 4);

// function subtract(num1, num2) {
//   return num1 - num2;
// }
// subtract(20, 7);
//? need to store the value into a variable to do something with it
// const result = subtract(20, 7);
// console.log(result);

//~ /////////////////////////////////
//!     ARGUMENTS & PARAMETERS
//~ /////////////////////////////////
//?   setting default param (after 2015)
// function registerUser(user = 'Bot') {
//? setting a default param in case no user was included (before 2015).
// if (!user) {
//   user = 'Bot';
// }
//   return user + ' is registered';
// }
//? user param is not available outside of the function
//, console.log(user);

// console.log(registerUser('John'));

//?    REST PARAMS
// function sum(...numbers) {  //?   creates an array of the provided arguments
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total
// }
// console.log(sum(1, 2, 3, 4, 6));  //?   (can add unlimited arguments)

//?   OBJECTS AS PARAMS
// function loginUser(user) {
//   return `the user ${user.name} with the id of ${user.id} is logged in.`
// }

// const user = {
//   id: 1,
//   name: 'John'
// };

// console.log(loginUser(user));
// console.log(
//   loginUser({
//     id: 2,
//     name: 'Sarah'
//   })
//   );

//!   ARRAYS AS PARAMS
//?   get random number based on passed in array
// function getRandom(arr) {
//? generating a random index
// const randomIndex = Math.floor(Math.random() * arr.length);
//? creating a variable to store the random index
//   const item = arr[randomIndex];
//   console.log(item);
// }
// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//~ /////////////////////////////////
//!              SCOPE             //
//~ /////////////////////////////////

// window.alert("Hello");    //?   window is a top level object
// alert('Hello')    //?   so we dont even need to include it.
// console.log(window.innerWidth);

// function aboveGlobal() {
//   console.log('Above Global: ', x);   //?   cant recall global variable above its definition
// }

const x = 100; //? variables defined outside of a function are in the global scope

// console.log("Global in Global Scope: ", x);

// function run() {
//   console.log(window.innerHeight);
//   console.log("Global in Function Scope: ", x);
// }

// run();

// if (true) {
//   console.log('Global in Block Scope: ', x);
// }

// function add() {
//   const x = 1; //?   variable shadowing (overwriting global variable (shadowing only overwrites within the local scope.))
//   const y = 50; //?   y is a block scope variable
//   console.log(x + y);
// }

// add();

// console.log('Global After Shadowing: ', x);

//~ /////////////////////////////////
//!              BLOCK SCOPE       //
//~ /////////////////////////////////
// const foo = 1;
// var bar = 2;    //?   var variables show up on the window object (which is not ideal)

// if (true) {
//   const y = 200;
//   console.log(x + y);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// console.log(i);    //?   i is only accessible within it's local block scope

// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;    //? var is not block scoped. Accessible outside (loops, conditionals etc.)
// }
// console.log(c);

// function run() {
//   var d = 100; //?   BUT IT IS FUNCTION SCOPED.
//   console.log(d);
// }
// run();
//? CANT ACCESS VAR FROM OUTSIDE FUNCTION
//, console.log(d);

//~ /////////////////////////////////
//!             NESTED SCOPE       //
//~ /////////////////////////////////
//, /////// parent function ///////
// function parentFunction() {
//   const x = 100;                 //,   cannot access variables from child function scope within parent scope
//~ //// child function ////////
//   function childFunction() {
//     const y = 200;
//     console.log('Second: ', x + y); //~   we can access any variables from parent function scope from child function scope.
//   }
//~ //////////////////////////////
//   childFunction();
// }
//, ////////////////////////////////
// parentFunction();

// if (true) {
//   const x = 100;

//   if (x === 100) {
//     const y = 200;
//     console.log('If Block: ', x + y);
//   }
// }

//~ //////////////////////////////////////////////////////
//!            FUNCTION DECLARATION VS EXPRESSION       //
//~ //////////////////////////////////////////////////////

//?  FUNCTION DECLARATION   
// console.log(addDollarSign(100));  //?(you can call a function declaration above it due to hoisting)
// function addDollarSign(value) {
//   return "$" + value;
// }

// //?  FUNCTION EXPRESSION (a function assigned to a variable)
// const addPlusSign = function (value) {
//   return "+" + value;
// };
// console.log(addPlusSign(200));

//~ //////////////////////////////////////////////////////
//!            ARROW FUNCTIONS                           //
//~ //////////////////////////////////////////////////////
// function add1(a, b) { //?   FUNCTION DECLARATION SYNTAX
//   return a + b;
// }
// const add2 = (a, b) => { //? ARROW FUNCTION SYNTAX(the arrow replaces the function keyword)
//   return a + b;
// }

// //~ IMPLICIT RETURN
// const subtract = (a, b) => a - b; //?  we dont need curly braces if there is 1 single return expression

// const double1 = (a) => a * 2;  
// const double2 = a => a * 2;  //!   if there is only 1 param, we don't need the ()

// //? RETURNING AN OBJECT
// const createObj = () => ({  //! surround curly braces in ()
//   name: 'Trish'
// })

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (n) {
//   console.log(n);
// })

// //? arrow function in a callback
// numbers.forEach(n => console.log(n));

// console.log(add1(1, 2));
// console.log(add2(1, 2));
// console.log(subtract(2, 3));
// console.log(double2(10));
// console.log(createObj());

//~ //////////////////////////////////////////////////////
//!    IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)   //
//~ //////////////////////////////////////////////////////
//?   IF THERE IS A GLOBAL VARIABLE FROM ANOTHER JS SOURCE
//?   WE CAN RESOLVE THE ERROR BY USING AN 'IIFE'

// (function() {
//   const user = 'John';
//   console.log('IIFE: ', user);
// })();

//~ //////////////////////////////////////////////////////
//!                    FUNCTION CHALLENGES              //
//~ //////////////////////////////////////////////////////

//?  CHALLENGE 1
// //* Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
// const getCelsius = (f) => (f - 32) * 5 / 9;

// console.log(`The temperature is ${getCelsius(60)} \xB0C`);

// //?  CHALLENGE 2
// //* Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

// const minMax = (arr) => ({
//   min: Math.min(...arr),
//   max: Math.max(...arr)
// })
// console.log(minMax([1, 2, 20, 3, 4, 5, -1]));

// //?  CHALLENGE 3
// //* Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

// (function(l, w) {
//   const a = l * w;
//   console.log(`The area of a rectangle with a length of ${l} and a width of ${w} is ${a}`);
// })(10, 5);

// ? IIFE AS AN ARROW FUNCTION
// ((length, width) => {
//   const area = length * width;
//   console.log(
//     `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`
//   );
// })(20, 5);
//~ //////////////////////////////////////////////////////
//!             EXECUTION CONTEXT                     //
//~ //////////////////////////////////////////////////////

