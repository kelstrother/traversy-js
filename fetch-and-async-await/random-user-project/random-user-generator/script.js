const userDisplay = document.getElementById("user");

function fetchUser() {
  showSpinner();
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    });
}

function displayUser(user) {
  if (user.gender === "female") {
    document.body.style.background = "rebeccapurple";
  } else {
    document.body.style.background = "steelblue";
  }
  userDisplay.innerHTML = `<div class="flex justify-between">
      <div class="flex">
        <img src="${user.picture.large}" alt="" class="w-48 rounded-full mr-8">
        <div class="space-y-3">
          <p class="text-xl">
            <span class="font-bold">Name: ${user.name.first} ${user.name.last}</span>
          </p>
          <p class="text-xl">
            <span class="font-bold">Email: ${user.email}</span>
          </p>
          <p class="text-xl">
            <span class="font-bold">Phone: ${user.phone}</span>
          </p>
          <p class="text-xl">
            <span class="font-bold">Location: ${user.location.city} ${user.location.country}</span>
          </p>
          <p class="text-xl">
            <span class="font-bold">Age: ${user.dob.age}</span>
          </p>
        </div>
      </div>
    </div>`;
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}

document.querySelector("#generate").addEventListener("click", fetchUser);

fetchUser();
