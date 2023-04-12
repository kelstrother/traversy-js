//~ /////////////////////////////////
//!     TRAVERSING THE DOM         //
//~ /////////////////////////////////
let output;
//? DOM ELEMENT RELATIONSHIPS
//~ ////////////////////////////////////
//* parentElement
//* firstElementChild
//* lastElementChild
//* nextElementSibling
//* previousElementSibling
//~ ////////////////////////////////////

// ! GET CHILD ELEMENTS FROM PARENT
// const parent = document.querySelector('.parent');

// output = parent.children;

// output = parent.children[1].nodeName;
// output = parent.children[1].innerText;
// output = parent.children[1].className;

// parent.children[1].innerText = 'Child Two'
// parent.children[1].style.color = 'red';
// parent.children[1].style.fontSize = '2rem';

// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// !  GET PARENT ELEMENT FROM CHILD
// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.padding = '10px';

// !    SIBLING ELEMENTS
// const secondItem = document.querySelector('.child:nth-child(2)')
// output = secondItem;
// output = secondItem.nextElementSibling;
// secondItem.nextElementSibling.style.color = 'steelblue';
// secondItem.previousElementSibling.style.color = 'goldenrod';
// console.log(output);

//~ /////////////////////////////////////////////////
//!     TRAVERSING THE DOM - ALL NODES             //
//~ /////////////////////////////////////////////////

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0];
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[5].style.color = 'steelblue';
output = parent.childNodes[5].style.fontSize = '2rem';

output = parent.firstChild;
output = parent.lastChild.textContent = 'Hello';

// !  PARENT NODE
const child = document.querySelector('.child');
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.background = 'goldenrod'
child.parentNode.style.padding = '2rem'

// !    SIBLINGS
const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
