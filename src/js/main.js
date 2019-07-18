"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const addButton = document.querySelector('.hydrapp__button--add-js');
const removeButton = document.querySelector('.hydrapp__button--remove-js');
const info = document.querySelector('.hydrapp__cunter--js');
const key = new Date().toISOString().slice(0, 10);
const status = localStorage.getItem(key);

let counter;

if (!status) {
  info.textContent = 0;
  localStorage.setItem(key, '0');
} else {
  counter = status;
  info.textContent = counter;
}
counter = status;
addButton.addEventListener('click', () => {
  if (localStorage.getItem(key) !== "99") {
    localStorage.setItem(key, ++counter);
    info.textContent = counter;
  }
});
removeButton.addEventListener('click', () => {
  if (localStorage.getItem(key) !== "0") {
    localStorage.setItem(key, --counter);
    info.textContent = counter;
  };
});

const archive = JSON.stringify(localStorage);
console.log(archive);