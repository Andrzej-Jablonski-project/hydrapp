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

// date

const dateFormat = {
  day: String(new Date().getDate()).padStart(2, '0'),
  month: String(new Date().getMonth() + 1).padStart(2, '0'),
  year: new Date().getFullYear(),
}
const date = dateFormat.year + dateFormat.month + dateFormat.day;

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
  const status = localStorage.getItem(date);
  let counter;

  if (!status) {
    info.textContent = 0;
    localStorage.setItem(date, '0');
    water.classList.add('hydrapp__water--0')
  } else {
    counter = status;
    info.textContent = counter;
  }
  counter = status;
  water.classList.add(`hydrapp__water--${counter}`);


  const waterCount = (memoryState, displayWater) => {
    localStorage.setItem(date, memoryState);
    water.classList.remove(`hydrapp__water--${displayWater}`);
    water.classList.add(`hydrapp__water--${counter}`);
    info.textContent = counter;
  }

  addButton.addEventListener('click', () => {
    if (localStorage.getItem(date) !== "9") {
      waterCount(++counter, counter - 1);
    }
    if (localStorage.getItem('toggleAudio') === '1') {
      audio('assets/sounds/water.wav');
    }
  });

  removeButton.addEventListener('click', () => {
    if (localStorage.getItem(date) !== "0") {
      waterCount(--counter, counter + 1);
    }
    if (localStorage.getItem('toggleAudio') === '1') {
      audio('assets/sounds/drain.wav');
    }
  });

  // sounds

  const audio = (source) => {
    const audio = new Audio(source);
    audio.loop = false;
    audio.play();
  }
}

// history table

if (table) {
  const convertDate = function (date) {
    const day = date.slice(6, 8);
    const month = date.slice(4, 6);
    const year = date.slice(0, 4);
    const newDate = `${day}/${month}/${year}`;
    return newDate;
  }

  const data = {
    ...localStorage
  }

  for (let date in data) {
    const newDate = convertDate(date);
    date !== 'toggleAudio' ? table.innerHTML += `<tr class="history-table__row--js"><th class="history-table__th">${newDate}</th><th class="history-table__th">${data[date]}</th></tr>` : '';
  }

  const clear = () => {
    const newDate = convertDate(date);
    localStorage.clear();
    localStorage.setItem(date, '0');
    table.innerHTML = `<tr class="history-table__row--js"><th class="history-table__th">${newDate}</th><th class="history-table__th">0</th></tr>`;
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