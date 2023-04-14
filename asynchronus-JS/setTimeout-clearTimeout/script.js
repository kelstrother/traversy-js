//~ ////////////////////////////////
//!     CALLBACK FUNCTIONS        //
//~ ////////////////////////////////

//? //// setTimeout(function)
//~ setTimeout is a function that takes in a callback
//~ gets put into the queue and waits for call stack to clear
// setTimeout(function() {
  //   console.log('hello from callback');
  // }, 2000)
  
  //~ setTimeout with named function
  // setTimeout(changeText, 2000);
  
  function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback'
  }
  
  //~ setting a timer id in order to use clearTimeout()
  const timerId = setTimeout(changeText, 3000);
  
  //? //// clearTimeout(function)
  document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('timer canceled');
  })
  
  //? //// setInterval(function)
