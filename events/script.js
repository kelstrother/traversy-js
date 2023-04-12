const clearBtn = document.querySelector('#clear')
const itemList = document.querySelector('.items')
const items = document.getElementsByTagName('li')

//! JAVASCRIPT EVENT LISTENER
// clearBtn.onclick = function () {
//   console.log('clear items');
// }
// const onClear = (clearBtn) => console.log('clear items');

//?   addEventListener()
clearBtn.addEventListener('click', () => {
  itemList.removeChild(items);
}) 
// clearBtn.addEventListener('click', onClear); 

// setTimeout(() => clearBtn.removeEventListener('click', onClear) ,5000);

//?   A TIMER FUNCTION WHERE JS AUTOMATICALLY RUNS THE CLICK AFTER 5S 
// setTimeout(() => clearBtn.click(), 5000);