//~ //////////////////////////////
//!       CALLBACK HELL         //
//~ //////////////////////////////
// function getData(endpoint, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", endpoint);

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       cb(JSON.parse(this.responseText));
//     }
//   };

//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }
//? when you have multiple destinations you need data from in order
//? you have to use multiple nested callbacks (looks like a triangle)
//? this is solved by using promises
// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//     getData('./directors.json', (data) => {
//       console.log(data);
//     })
//   })
// });
//~ //////////////////////////////
//!           PROMISES           //
//~ //////////////////////////////
// const promise = new Promise((resolve, reject) => {
//   //~ do some async task
//   setTimeout(() => {
//     console.log('async task complete');
//     resolve();
//   }, 1000)
// })

// promise.then(() => {
//   console.log('Promise Consumed...');
// });

// ? attaching .then directly to the promise
// new Promise((resolve, reject) => {
//   //~ do some async task
//   setTimeout(() => {
//     //~ resolve takes in data that we want to return
//     resolve({ name: 'Apollo', age: 0 });
//   }, 1000);
//   //~ access the data from the resolve
// }).then((user) => console.log(user));

// ? handling errors
// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;

//     if (!error) {
//       resolve({ name: "Apollo", age: 0 });
//     } else {
//       reject("error: something went wrong");
//     }
//   }, 1000);
// });
// getUser
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error))
//   //~ .finally will run whether its been resolved or rejected
//   .finally(() => console.log("the promise has been resolved or rejected"));

// console.log("hello from global scope");

//~ //////////////////////////////////////
//!   REFACTORING CALLBACK TO PROMISE   \\
//~ //////////////////////////////////////

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject("something went wrong");
//         }
//       }
//     };
//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// getData("./movies.json")
//   .then((movies) => {
//     console.log(movies);
//     return getData("./actors.json");
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData("./directors.json");
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

  //~ //////////////////////////////////////
//!              PROMISE.ALL()          \\
//~ //////////////////////////////////////
//? VERY  CLEAN WAY TO FETCH FROM MULTIPLE PLACES

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("something went wrong");
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

//~ creating a variable to hold the returned data
const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

const dummyPromise = new Promise((resolve, reject) => {
  resolve('Dummy Promise is resolved')
});


//~ using the .all() method on the Promise
Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
})