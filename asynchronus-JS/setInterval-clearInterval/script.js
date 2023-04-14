//~ ///////////////////////////////////
//!     SetInterval & clearInterval //
//~ ///////////////////////////////////

//? declaring the setInterval function
// const intervalID = setInterval(myCallback, 1000);

// function myCallback() {
//   console.log(Date.now());
// }

let intervalID;

function startChange() {
  if(!intervalID) {
    intervalID = setInterval(changeRandomColor, 200);
  }
}

// function changeColor() {
//   if (document.body.style.background !== 'black') {
//     document.body.style.background = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.background = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  //~ formula to get a random hex color
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = `#${randomColor}`
}

//? decalring the clearInterval(which takes in the setInterval id)
function stopChange() {
  clearInterval(intervalID);
};

document.getElementById('stop').addEventListener('click', stopChange);
document.getElementById('start').addEventListener('click', startChange);