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

