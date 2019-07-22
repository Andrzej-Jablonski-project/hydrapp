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

const audioButton = document.querySelector('.audio__toggle--js');
const audioInput = document.querySelector('.audio__button--js');
const addButton = document.querySelector('.hydrapp__button--add-js');
const removeButton = document.querySelector('.hydrapp__button--remove-js');
const info = document.querySelector('.hydrapp__cunter--js');
const table = document.querySelector('.history-table__data--js');
const water = document.querySelector('.hydrapp__water--js');
const clearHistory = document.querySelector('.history-table__clear--js');
const key = currentDate();

function currentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const current = `${dd}/${mm}/${yyyy}`;
  return current;
}

// functon audio button

if (audioButton) {
  if (!localStorage.getItem('toggleAudio')) {
    localStorage.setItem('toggleAudio', '0');
  }
  if (localStorage.getItem('toggleAudio') === '0') {
    audioInput.checked = false;
  } else {
    audioInput.checked = true;
  }
  audioButton.addEventListener('click', () => {
    if (localStorage.getItem('toggleAudio') === '0') {
      localStorage.setItem('toggleAudio', '1');
      audioInput.checked = false;
    } else {
      localStorage.setItem('toggleAudio', '0');
      audioInput.checked = true;
    }
  })
}

if (addButton && removeButton && info) {
  const status = localStorage.getItem(key);
  let counter;
  let thisClick;

  if (!status) {
    info.textContent = 0;
    localStorage.setItem(key, '0');
    water.classList.add('hydrapp__water--0')
  } else {
    counter = status;
    info.textContent = counter;
  }
  counter = status;
  water.classList.add(`hydrapp__water--${counter}`);

  addButton.addEventListener('click', () => {
    thisClick = true;
    if (localStorage.getItem(key) !== "9") {
      localStorage.setItem(key, ++counter);
      water.classList.remove(`hydrapp__water--${counter - 1}`);
      water.classList.add(`hydrapp__water--${counter}`);
      info.textContent = counter;
      if (localStorage.getItem('toggleAudio') === '1') {
        audio();
      }
    }
  });

  removeButton.addEventListener('click', () => {
    thisClick = false;
    if (localStorage.getItem(key) !== "0") {
      localStorage.setItem(key, --counter);
      water.classList.remove(`hydrapp__water--${counter + 1}`);
      water.classList.add(`hydrapp__water--${counter}`);
      info.textContent = counter;
      if (localStorage.getItem('toggleAudio') === '1') {
        audio();
      }
    }
  });

  // changes sound for button

  const audio = () => {
    const path = ['assets/sounds/water.wav', 'assets/sounds/drain.wav'];

    if (thisClick) {
      const audio = new Audio(path[0]);
      audio.loop = false;
      audio.play();
    } else {
      const audio = new Audio(path[1]);
      audio.loop = false;
      audio.play();
    }
  }
}

// history table

if (table) {
  const dataTable = () => {
    for (let i = 0; i < localStorage.length - 1; i++) {
      let key = localStorage.key(i);
      const value = localStorage.getItem(key);
      table.innerHTML += `<tr class="history-table__row--js"><th class="history-table__th">${key}</th><th class="history-table__th">${value}</th></tr>`;
    }
  }
  dataTable();

  const clear = () => {
    localStorage.clear();
    localStorage.setItem(key, '0');
    table.innerHTML = `<tr class="history-table__row--js"><th class="history-table__th">${key}</th><th class="history-table__th">0</th></tr>`;
  }
  clearHistory.addEventListener('click', () => {
    if (localStorage.getItem('toggleAudio') === "0") {
      clear();
    } else {
      clear();
      localStorage.setItem('toggleAudio', '1');
    }
  });
}