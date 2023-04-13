const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById('clear');

//~ ////////////////////////////////////
//!         ADD ITEM TO LIST          //
//~ ////////////////////////////////////
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  //~ validate input
  if (newItem === "") {
    alert("please add item");
    return;
  }
  //~ Create list element
  const li = document.createElement("li");
  // ~ Adding the value of the input as a text node to the li
  li.appendChild(document.createTextNode(newItem));
  //~ Building the button
  const button = createButton("remove-item btn-link text-red");
  //~ Appending the button to the li
  li.appendChild(button);
  //~ Appending the li to the Shopping List
  itemList.appendChild(li);
  //~ resetting the input field
  itemInput.value = "";
}

//~ Function to create a button that takes in it's classes
function createButton(classes) {
  const button = document.createElement("button");
  //~ Setting the classname to the classes parameter
  button.className = classes;
  //~ Building the icon
  const icon = createIcon("fa-solid fa-plus");
  //~ Appending the icon the the button
  button.appendChild(icon);
  return button;
}

//~ Function the create an icon that takes in it's classes
function createIcon(classes) {
  const icon = document.createElement("i");
  //~ Setting it's classname to classes param
  icon.className = classes;
  return icon;
}

//~ ////////////////////////////////////
//!         REMOVE & CLEAR ITEMS          //
//~ ////////////////////////////////////

function removeItem(e) {
  if(e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems(e) {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild)
  }
}


//~ //////////////////////////////
//!       EVENT LISTENERS       //
//~ //////////////////////////////
itemForm.addEventListener("submit", addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
