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
function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post)
    cb()
  }, 2000)
}


//! FUNCTION TO MIMIC MAKING A NETWORK REQUEST TO GET SOMETHING
function getPosts() {
  setTimeout(() => {
    posts.forEach((function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    }))
  }, 1000);
}

//! post is created, but not added to the dom cause it took longer than getPosts ^^^
// createPost({
//   title: "Post Three",
//   body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quis, eaque dolorum voluptatibus aliquid dolor neque et error esse cumque.",
// });

// getPosts()

//? so we pass in getPosts() to the createPost when it's called.
createPost({
  title: "Post Three",
  body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quis, eaque dolorum voluptatibus aliquid dolor neque et error esse cumque.",
}, getPosts);
