//~ /////////////////////////////////
//!     SELECTING DOM ELEMENTS     //
//~ /////////////////////////////////

//! GET ELEMENT BY ID
// console.log(document.getElementById('app-title'));

//! SET ATTRIBUTES
// document.getElementById('app-title').title = 'Shopping List';
// document.getElementById('app-title').setAttribute('class', 'title');

//!   STORING ELEMENT IN A VARIABLE
// const title = document.getElementById('app-title');

//!   GET/CHANGE CONTENT
// console.log(title.textContent);
// title.textContent = 'Fuckin\' Shopping List'
// title.innerHTML = '<strong>Fuckin\' List</strong>'

// //!   CHANGE STYLES
// title.style.color = 'steelblue';
// title.style.backgroundColor = '#333';
// title.style.borderRadius = '10px'
// title.style.padding = '10px';

// //!   QUERY SELECTOR
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'))
// const secondItem = document.querySelector('li:nth-child(2)')
// secondItem.innerText = 'Apple Juice'
// secondItem.style.color = 'red'

// ?  use these methods on other elements
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li')
// firstItem.style.color = 'steelblue'

// !  querySelectorAll()
// const listItems = document.querySelectorAll('.item');
// console.log(listItems[1].innerText);

// ?  looping through listItems node list to change styles
// listItems.forEach((item, index) => {
//   item.style.color = 'red';
//   if (index === 1) {
//     item.remove()
//   }
//   if (index === 0) {
//     item.innerHTML = `
//           Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   }
// })

// const listItems2 = document.getElementsByClassName('item')
// console.log(listItems2[2].innerText);

// ?    cant loop over an html collection
// listItems2.forEach(item => {
//   console.log(item.innerText);
// });

// ?    use Array.from() to create an array from the collection
// const listItemsArray = Array.from(listItems2);

// listItemsArray.forEach((item) => {
//   console.log(item.innerText);
// })

// !    GET ELEMENTS BY TAG NAME
// const listItems3 = document.getElementsByTagName('li')
// console.log(listItems3[0].innerText);

//~ /////////////////////////////////////////////////
//!           CREATE & APPEND ELEMENTS             //
//~ /////////////////////////////////////////////////

// const div = document.createElement("div");
// div.className = "my-element";
// div.id = "my-element";
// div.setAttribute("title", "My Element");
// div.innerText = "Fuckin\' A Man"

// ?  creating a text node to append text content inside div
// const text = document.createTextNode("Fuckin' A Man");
// div.appendChild(text)

// ?   inserting div into the DOM
// document.body.appendChild(div);
// document.querySelector('ul').appendChild(div);
// console.log(div);

//~ /////////////////////////////////////////////////
//!           innerHTML vs createElement()         //
//~ /////////////////////////////////////////////////

//, ////// QUICK AND DIRTY /////////////
//* innerHTML causes the browser to re-parse all the DOM nodes inside the ul
//* can also cause issues regarding event handlers

// function createListItem(item) {
//   const li = document.createElement('li');

//   li.innerHTML = `${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`
//   document.querySelector('.items').appendChild(li);
// }
// createListItem('Eggs');


//*  ////// CLEAN AND PERFORMANT //////////
// function createNewItem(item) {
//   const li = document.createElement("li"); // ~  create the list tag
//   li.appendChild(document.createTextNode(item)); // ~  create the text and append it to the li

//   const button = document.createElement("button"); // ~  create the button
//   button.className = "remove-item btn-link text-red"; // ~  add classnames to button

//   const icon = document.createElement("i"); // ~  create icon element
//   icon.className = "fa-solid fa-xmark"; // ~  add classnames to icon

//   button.appendChild(icon); // ~  inserting icon inside the button
//   li.appendChild(button); // ~  inserting the button inside the li
//   document.querySelector(".items").appendChild(li); // ~  inserting the li inside the ul
// }

//~ /////////////////////////////////////////////////
//!           MAKING IT MORE REUSABLE         //
//~ /////////////////////////////////////////////////

function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);
  document.querySelector(".items").appendChild(li);
}

// ?  function to create button
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark"); //~ calling createIcon inside button
  button.appendChild(icon); //~ and appending it

  return button;
}

// ?  function to create icon
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon
}

createNewItem('Cheese');
createNewItem('Lindt');