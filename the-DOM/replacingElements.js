//~ /////////////////////////////////////////////////
//!           REPLACING ELEMENTS                   //
//~ /////////////////////////////////////////////////

// function replaceFirstItem() {
//   const firstItem = document.querySelector("li");
//   const li = document.createElement("li");
//   li.textContent = "Replaced First";
//   firstItem.replaceWith(li);
// }

// function replaceSecondItem() {
//   const secondItem = document.querySelector("li:nth-child(2)");
//   secondItem.outerHTML = "<li>Replaced Second</li>";
// }

// function replaceAllItems() {
//   const items = document.querySelectorAll("li");
  // !querySelectorAll returns a node list, so we dont need to create an array
  //, const itemsArr = Array.from(items);
  // ? OG solution (which is correct, just wanna make it shorter)
  // items.forEach((item, index) => {
  //   item.innerHTML = 'Replaced All';
  //   if (index === 2) {
  //     item.style.color = 'steelblue';
  //     item.style.fontSize = '1.5rem';
  //   }
  // })
//   items.forEach((item, index) =>
//     index === 2
//       ? ((item.style.color = "steelblue"),
//         (item.innerHTML = "Third Item"),
//         (item.style.fontSize = "1.5rem"))
//       : (item.innerHTML = "Replaced All")
//   );
// }

// function replaceChildHeading() {
//   const header = document.querySelector('header');
//   const h1 = document.querySelector('header h1');

//   const h2 = document.createElement('h2');
//   h2.id = 'app-title';
//   h2.textContent = 'Shopping List'
//   header.replaceChild(h2, h1);
// }

// replaceFirstItem();
// replaceSecondItem();
// replaceAllItems();
// replaceChildHeading()