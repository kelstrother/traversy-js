//~ /////////////////////////////////////////////////
//!           REMOVING ELEMENTS                   //
//~ /////////////////////////////////////////////////

function removeClearButton() {
  document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul')
  const li = document.querySelector('li');

  ul.removeChild(li)
}
// ! FUNCTION TO REMOVE CERTAIN ITEM BASED ON ITS INDEX
// ?  FIRST WAY
function removeItem1(itemIndex) {
  const ul = document.querySelector('ul');
  const items = document.querySelectorAll('li');
  items.forEach((item, index) => 
  index === itemIndex ? ul.removeChild(item) : '') 
}
// ?  SECOND WAY
//~ ////////// WHY DOESN'T THIS WORK????? //////////
//, function removeItem2(itemNumber) {
  //,   const ul = document.querySelector('ul');
  //,   console.log(ul);
//,   const li = document.querySelector(`li:nth-child(${itemNumber})`);
//,   console.log(li);

//,   ul.removeChild(li);
//, }
// ?  THIRD WAY
function removeItem3(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber - 1];
  
  ul.removeChild(li)
}
// ?  FOURTH WAY
const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton()
removeFirstItem()
removeItem1(2)
//, removeItem2()
removeItem3(3)
removeItem4(1)
