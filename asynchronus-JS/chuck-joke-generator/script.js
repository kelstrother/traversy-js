const jokeBtn = document.querySelector('#joke-btn');
const jokeValue = document.querySelector('#joke');

const newJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  
  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeValue.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeValue.innerHTML = 'Something went wrong.'
      }
    }
  }
  xhr.send()
}
jokeBtn.addEventListener('click', newJoke)

//~ event listener to add joke to dom when page is loaded
document.addEventListener('DOMContentLoaded', newJoke);