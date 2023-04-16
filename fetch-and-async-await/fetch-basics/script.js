//~ //////////////////////////////////////
//!           FETCH BASICS              \\
//~ //////////////////////////////////////

//? MAKING A FETCH REQUEST FOR JSON FILE
// fetch("./movies.json")
//   .then((res) => {
//     //~ .then() promise takes in the res (response) object.
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
//? SAME FETCH USING IMPLICIT RETURNS TO SIMPLIFY
// fetch("./movies.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//? MAKING A FETCH REQUEST FOR TEXT FILE
// fetch("./test.txt")
// .then((res) => res.text())
// .then((data) => console.log(data));

//? FETCHING FROM AN API
fetch('https://api.github.com/users/kelstrother')
.then(res => res.json())
// .then((data) => console.log(data))
.then((data) => document.querySelector('h1').textContent = data.name)
