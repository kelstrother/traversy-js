const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector('button')
let isEditMode = false;

//~ ////////////////////////////////////
//!         ADD ITEM TO LIST          //
//~ ////////////////////////////////////

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  //~ validate input
  if (newItem === "") {
    alert("please add item");
    return;
  }
  //~ check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert('That item already exists.')
      checkUI()
      return;
    }
  }
  //~ create item DOM element
  addItemToDOM(newItem);

  //~ add item to local storage
  addItemToStorage(newItem);

  checkUI();
  //~ resetting the input field
  itemInput.value = "";
}

// ? FUNCTION TO ADD NEW ITEM TO DOM
function addItemToDOM(item) {
  //~ Create list element
  const li = document.createElement("li");
  // ~ Adding the value of the input as a text node to the li
  li.appendChild(document.createTextNode(item));
  //~ Building the button
  const button = createButton("remove-item btn-link text-red");
  //~ Appending the button to the li
  li.appendChild(button);
  //~ Appending the li to the Shopping List
  itemList.appendChild(li);
}

//~ Function to create a button that takes in it's classes
function createButton(classes) {
  const button = document.createElement("button");
  //~ Setting the classname to the classes parameter
  button.className = classes;
  //~ Building the icon
  const icon = createIcon("fa-solid fa-xmark");
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
//!         ADDING LOCAL STORAGE         //
//~ ////////////////////////////////////

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item); //~ add new item to array

  //~ Convert to JSON string, set to localStorage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    //~ checking localStorage for items key
    itemsFromStorage = []; //~ if no items, then set itemsFromStorage to an empty arr
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromStorage;
}

//~ ////////////////////////////////////
//!         REMOVE & CLEAR ITEMS          //
//~ ////////////////////////////////////

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return (itemsFromStorage.includes(item));
}

//~ ////////////////////////////////////
//!         EDIT MODE          //
//~ ////////////////////////////////////
function setItemToEdit(item) {
  isEditMode = true;
  itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'));
  item.classList.add('edit-mode')
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
  formBtn.style.background = '#228b22'
  itemInput.value = item.textContent
}

//? REMOVE ITEMS FUNCTION
function removeItem(item) {
  if (confirm("Are you sure?")) {
    //, remove item from DOM
    item.remove();
    //, remove item from localStorage
    removeItemFromStorage(item.textContent);
    checkUI();
  }
}
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  //~ filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  //~ re-set to localStorage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}
//? CLEAR ITEMS FUNCTION
function clearItems(e) {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  //~ clear from storage
  localStorage.removeItem("items");

  checkUI();
}

//~ //////////////////////////////
//!       FILTERING ITEMS       //
//~ //////////////////////////////
function filterItems(e) {
  // ~  get the items
  const items = itemList.querySelectorAll("li");
  //~ get input text
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    // ~  looping through the items, getting text node, converting to lowercase
    const itemName = item.firstChild.textContent.toLowerCase();
    //~ checking if the list item matches the input text
    if (itemName.indexOf(text) != -1) {
      //? indexOf(returns -1 if false)
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

//~ //////////////////////////////
//!       CLEARING UI FUNCTION       //
//~ //////////////////////////////
function checkUI() {
  itemInput.value = '';
  const items = itemList.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.background = '#333';

  isEditMode = false;
}

//~ //////////////////////////////
//!       EVENT LISTENERS       //
//~ //////////////////////////////
//? INITIALIZE APP (to wrap event listeners so not to be in global scope)
function init() {
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", onClickItem);
  clearBtn.addEventListener("click", clearItems);
  itemFilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);

  checkUI();
}

init();
