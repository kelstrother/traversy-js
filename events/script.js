//~ /////////////////////////////////
//!     EVENT LISTENERS            //
//~ /////////////////////////////////

// const clearBtn = document.querySelector("#clear");
// const itemList = document.querySelector(".items");
// const items = document.getElementsByTagName("li");

//! JAVASCRIPT EVENT LISTENER
// clearBtn.onclick = function () {
//   console.log('clear items');
// }
// const onClear = (clearBtn) => console.log('clear items');

//?   addEventListener()
// clearBtn.addEventListener("click", () => {
//   itemList.removeChild(items);
// });
// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear) ,5000);

//?   A TIMER FUNCTION WHERE JS AUTOMATICALLY RUNS THE CLICK AFTER 5S
// setTimeout(() => clearBtn.click(), 5000);

//~ /////////////////////////////////
//!          MOUSE EVENTS          //
//~ /////////////////////////////////
// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');

// const onDoubleClick = () => {
//   if (document.body.style.background !== 'limegreen') {
//     document.body.style.background = 'limegreen';
//     document.body.style.color = '#fff';
//   } else {
//     document.body.style.background = 'white';
//     document.body.style.color = 'black';
//   }
// };
// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('mouse down event');
// const onMouseUp = () => console.log('mouse up event');
// const onMouseWheel = () => console.log('mouse wheel event');
// const onMouseOver = () => console.log('mouse over event');
// const onMouseOut = () => console.log('mouse out event');
// const onDragStart = () => console.log('drag start event');
// const onDrag = () => console.log('drag event');
// const onDragEnd = () => console.log('drag end event');



// //~ EVENT LISTENERS  //////////////////// 
// logo.addEventListener('click', onClick)
// logo.addEventListener('dblclick', onDoubleClick)
// logo.addEventListener('contextmenu', onRightClick)
// logo.addEventListener('mousedown', onMouseDown)
// logo.addEventListener('mouseup', onMouseUp)
// logo.addEventListener('wheel', onMouseWheel)
// //~ HOVER EVENTS
// logo.addEventListener('mouseover', onMouseOver)
// logo.addEventListener('mouseout', onMouseOut)
// logo.addEventListener('drag', onDrag)
// logo.addEventListener('dragend', onDragEnd)

//~ /////////////////////////////////
//!      THE EVENT OBJECT          //
//~ /////////////////////////////////
const logo = document.querySelector('img');

// function onClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.timeStamp);
  // console.log('X: ', e.clientX, 'Y: ', e.clientY);
  // console.log('X:', e.offsetX, 'Y:', e.offsetY);
  // console.log('X:', e.pageX, 'Y:', e.pageY);
  // console.log('X:', e.screenX, 'Y:', e.screenY);
  // e.target.style.background = 'black'
// }

// function onDrag(e) {
//   document.querySelector('h1').textContent = `X: ${e.clientX} Y: ${e.clientY}`
// }

// logo.addEventListener('click', onClick);
// logo.addEventListener('drag', onDrag);
// ?  event bubbling will occur
// document.body.addEventListener('click', function(e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// })


//* - `target` - The element that triggered the event
//* - `currentTarget` - The element that the event listener is attached to (These are the same in this case
//* - `type` - The type of event that was triggered
//* - `timeStamp` - The time that the event was triggered
//* - `clientX` - The x position of the mouse click relative to the window
//* - `clientY` - The y position of the mouse click relative to the window
//* - `offsetX` - The x position of the mouse click relative to the element
//* - `offsetY` - The y position of the mouse click relative to the element
//* - `pageX` - The x position of the mouse click relative to the page
//* - `pageY` - The y position of the mouse click relative to the page
//* - `screenX` - The x position of the mouse click relative to the screen
//* - `screenY` - The y position of the mouse click relative to the screen

//~ /////////////////////////////////////////////////
//!      KEYBOARD EVENTS & KEY PROPERTIES          //
//~ ///////////////////////////////////////////////// 
// const itemInput = document.getElementById('item-input');

// const onKeyPress = e => {
//   console.log('keypress');
// }

// const onKeyUp = e => {
//   console.log('key up');
// }

// const onKeyDown = e => {
  // ? key
  // if(e.key === 'Enter') {
  //   alert('You Pressed Enter')
  // }
  // document.querySelector('h1').innerText = e.key;
  // ? keyCode
//   if (e.keyCode === 13) {
//     alert('You Pressed Enter')
//   }
//   // ? code
//   if (e.code === 'Digit1') {
//     console.log('You Pressed 1');
//   }

//   if (e.repeat) {
//     console.log('You are holding ' + e.key);
//   }

//   console.log('Shift: ' + e.shiftKey);
//   console.log('Alt: ' + e.altKey);
//   console.log('Control: ' + e.ctrlKey);

//   if (e.shiftKey && e.key === 'K') {
//     console.log('You hit shift + K');
//   }
// }



// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);
