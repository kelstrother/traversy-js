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
const logo = document.querySelector("img");

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

//~ /////////////////////////////////////////////////
//!                INPUT EVENTS                   //
//~ /////////////////////////////////////////////////

// const itemInput = document.getElementById("item-input");
// const priorityInput = document.getElementById("priority-input");
// const checkbox = document.getElementById("checkbox");
// const heading = document.querySelector("h1");

// function onInput(e) {
//   // heading.textContent = e.target.value;
// }

// function onChecked(e) {
//   const isChecked = e.target.checked;
//   // heading.textContent = isChecked ? 'Checked' : 'Not Checked'
// }

// function onFocus() {
//   // console.log('input is focused');
//   itemInput.style.outlineStyle = 'groove'
//   itemInput.style.outlineWidth = '1px'
//   itemInput.style.outlineColor = 'red'
// }

// function onBlur() {
//   // console.log('input is not focused');
//   itemInput.style.outlineStyle = 'none'
// }
// itemInput.addEventListener('input', onInput)
// priorityInput.addEventListener('change', onInput) //* change is same as input
// checkbox.addEventListener('input', onChecked)
// itemInput.addEventListener('focus', onFocus)
// itemInput.addEventListener('blur', onBlur)

//~ /////////////////////////////////////////////////
//!                FORM SUBMISSIONS                //
//~ /////////////////////////////////////////////////

// const form = document.getElementById('item-form');

// function onSubmit(e) {
//   e.preventDefault();
//   const item = document.getElementById('item-input').value
//   const priority = document.getElementById('priority-input').value

//   if (item === '' || priority === '0') {
//     alert('Please fill in all fields.')
//     return;
//   }

//   console.log(item, priority);
// }
//? USING FORMDATA METHOD
// function onSubmit2(e) {
//   e.preventDefault()

  // !  initializing FormData
  // const formData = new FormData(form);

  //! get() method to get the values
  // const item = formData.get('item')
  // const priority = formData.get('priority')

  //! entries() method to get the values
  // const entries = formData.entries();

  // console.log(entries);

//   for (let entry of entries) {
//     console.log(entry[1]);
//   }
// }

// form.addEventListener('submit', onSubmit2)

//~ /////////////////////////////////////////////////
//!                EVENT BUBBLING                //
//~ /////////////////////////////////////////////////

// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');



// button.addEventListener('click', (e) => {
//   alert('Button was clicked.');
//   e.stopPropagation()   //?   stops from running click events on parent elements causing bubbling
// })

// div.addEventListener('click', () => {
//   alert('Div was clicked')
// })

// form.addEventListener('click', () => {
  //   alert('form was clicked')
  // })

  //~ /////////////////////////////////////////////////
  //!         EVENT DELEGATION & MULTIPLE EVENTS        //
  //~ /////////////////////////////////////////////////
  // const listItems = document.querySelectorAll('li');
  // const list = document.querySelector('ul');
  
  // !    ADDING LISTENERS TO MULTIPLE ELEMENTS
  //  ~  METHOD 1 (not the best way)
//   listItems.forEach((item) => {
  //     item.addEventListener('click', (e) => {
    //       e.target.remove();
    //     })
    //   })
    // !   EVENT DELEGATION
    // ~ adding a single listener to the parent and targeting from there
    // list.addEventListener('click', (e) => {
      //   if (e.target.tagName === 'LI') {
        //     e.target.remove()
        //   }
        // })

