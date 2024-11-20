//change the background theme: dark or light (color from css)

const toggleBtn = document.getElementById("toggle")
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

function applyMode(mode) {
  let icon;
  let circleColor;

  if (mode === 'light') {
    icon = '' //bright sunlight
    circleColor = '#ffb100'
  } else {
    icon = '🌒';
    circleColor = '#8570a5';
  }
  toggleBtn.textContent = icon;
  document.body.classList = mode;
  document.documentElement.style.setProperty('--circle-color', circleColor)
}

function handleToggle() {
  const mode = localStorage.getItem('mode') || 'dark';

  let nextMode;

  if (mode === 'light') {
    nextMode = 'dark'
  } else {
    nextMode = 'light'
  }

  applyMode(nextMode)
  saveMode(nextMode)
}

function saveMode(mode) {
  localStorage.setItem('mode', mode)
}

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const circle = document.querySelector(".circle");
  circle.classList.toggle("dark-mode");
  
  const currentMode = document.body.classList.contains("dark-mode") ? "dark" : "ligit"
  localStorage.setItem("theme", currentMode);
}

themeSwitch.addEventListener("click", handleToggle);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
// function readLocalStorage(key) {
//   const data = localStorage.getItem(key);
//   return data ? JSON.parse(data) : [];
// }

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
// function storeLocalStorage(newData) {
//   const storageKey = 'blogData';
//   const existingData = JSON.parse(LocalStorage, getItem(storageKey));
//   existingData.push(newData);
//   localStorage.setItem(storageKey, JSON.stringify(existingData));
// }


// () => {
//   mode = mode === "dark" ? "light" : "dark";

// })
