// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  {
    title: "Post One",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quis, eaque dolorum voluptatibus aliquid dolor neque et error esse cumque.",
  },
  {
    title: "Post Two",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quis, eaque dolorum voluptatibus aliquid dolor neque et error esse cumque.",
  },
];
//! FUNCTION TO CREATE A NEW POST //
// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post)
//   }, 2000)
// }
//? CREATE A NEW POST USING A CALLBACK (cb) //
// function createPost(post, cb) {
//   setTimeout(() => {
//     posts.push(post)
//     cb()
//   }, 2000)
// }

//! FUNCTION TO MIMIC MAKING A NETWORK REQUEST TO GET SOMETHING
// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     }))
//   }, 1000);
// }

//! post is created, but not added to the dom cause it took longer than getPosts ^^^
// createPost({
//   title: "Post Three",
//   body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quis, eaque dolorum voluptatibus aliquid dolor neque et error esse cumque.",
// });

// getPosts()

//? so we pass in getPosts() to the createPost when it's called.
// createPost({
//   title: "Post Three",
//   body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quis, eaque dolorum voluptatibus aliquid dolor neque et error esse cumque.",
// }, getPosts);

//~ //////////////////////////////////////
//!   REFACTORING CALLBACK TO PROMISE   \\
//~ //////////////////////////////////////
// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = true;

//       if (!error) {
//         posts.push(post);
//         resolve();
//       } else {
//         reject("Something went wrong.");
//       }
//     }, 2000);
//   });
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (post) {
//       const div = document.createElement("div");
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector("#posts").appendChild(div);
//     });
//   }, 1000);
// }

// function showError(error) {
//   const h3 = document.createElement("h3");
//   h3.innerHTML = `<strong>${error}</strong>`;
//   document.querySelector("#posts").appendChild(h3);
// }

// createPost({
//   title: "Post Three",
//   body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quis, eaque dolorum voluptatibus aliquid dolor neque et error esse cumque.",
// })
//   .then(getPosts)
//   .catch(showError);
//~ //////////////////////////////////////
//!       PROMISE CHAINING             \\
//~ //////////////////////////////////////

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Apollo", age: 0 });
    } else {
      reject("Something went wrong.");
    }
  }, 1000);
});

//~ ANYTHING RETURNED FROM A .THEN() CAN BE ACCESSED IN ANOTHER .THEN()
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => console.log(error))
  .then(() => console.log('this will run no matter what'));
