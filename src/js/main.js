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

const audioButton = document.querySelector('.hydrapp__button--audio-js');
const addButton = document.querySelector('.hydrapp__button--add-js');
const removeButton = document.querySelector('.hydrapp__button--remove-js');
const info = document.querySelector('.hydrapp__cunter--js');
const table = document.querySelector('.history-table__data--js');
const water = document.querySelector('.hydrapp__water--js');

// functon audio button

if (audioButton) {
  audioButton.addEventListener('click', () => {
    audioButton.classList.toggle('hydrapp__button--audio-on');
    if (audioButton.classList.contains('hydrapp__button--audio-on')) {
      audioButton.textContent = 'audio on';
    } else {
      audioButton.textContent = 'audio off';
    }
  })
}

if (addButton && removeButton && info) {
  const key = new Date().toISOString().slice(0, 10);
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
      console.log(counter);
      info.textContent = counter;
      if (audioButton.classList.contains('hydrapp__button--audio-on')) {
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
      console.log(counter);
      info.textContent = counter;
      if (audioButton.classList.contains('hydrapp__button--audio-on')) {
        audio();
      }
    };
  });

  // changes sound for button

  const audio = () => {
    const path = ['assets/sounds/water.wav', 'assets/sounds/drain.wav'];

    if (thisClick) {
      const audio = new Audio(path[0]);
      audio.loop = false;
      audio.play();
      console.log('click ok');
    } else {
      const audio = new Audio(path[1]);
      audio.loop = false;
      audio.play();
    }
    console.log('ok');
  }
}

// history table

if (table) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key);
    console.log(value);
    table.innerHTML += `<tr class="history-table__row--js"><th class="history-table__th">${key}</th><th class="history-table__th">${value}</th></tr>`;
  }
}