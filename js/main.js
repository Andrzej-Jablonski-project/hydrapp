!function(t){var n={};function e(c){if(n[c])return n[c].exports;var g=n[c]={i:c,l:!1,exports:{}};return t[c].call(g.exports,g,g.exports,e),g.l=!0,g.exports}e.m=t,e.c=n,e.d=function(t,n,c){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:c})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var g in t)e.d(c,g,function(n){return t[n]}.bind(null,g));return c},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\nconst audioButton = document.querySelector('.audio__toggle--js');\nconst audioInput = document.querySelector('.audio__button--js');\nconst addButton = document.querySelector('.hydrapp__button--add-js');\nconst removeButton = document.querySelector('.hydrapp__button--remove-js');\nconst info = document.querySelector('.hydrapp__cunter--js');\nconst table = document.querySelector('.history-table__data--js');\nconst water = document.querySelector('.hydrapp__water--js');\nconst clearHistory = document.querySelector('.history-table__clear--js');\nconst key = currentDate();\n\nfunction currentDate() {\n  const today = new Date();\n  const dd = String(today.getDate()).padStart(2, '0');\n  const mm = String(today.getMonth() + 1).padStart(2, '0');\n  const yyyy = today.getFullYear();\n  const current = `${dd}/${mm}/${yyyy}`;\n  return current;\n}\n\n// functon audio button\n\nif (audioButton) {\n  if (!localStorage.getItem('toggleAudio')) {\n    localStorage.setItem('toggleAudio', '0');\n  }\n  if (localStorage.getItem('toggleAudio') === '0') {\n    audioInput.checked = false;\n  } else {\n    audioInput.checked = true;\n  }\n  audioButton.addEventListener('click', () => {\n    if (localStorage.getItem('toggleAudio') === '0') {\n      localStorage.setItem('toggleAudio', '1');\n      audioInput.checked = false;\n    } else {\n      localStorage.setItem('toggleAudio', '0');\n      audioInput.checked = true;\n    }\n  })\n}\n\nif (addButton && removeButton && info) {\n  const status = localStorage.getItem(key);\n  let counter;\n  let thisClick;\n\n  if (!status) {\n    info.textContent = 0;\n    localStorage.setItem(key, '0');\n    water.classList.add('hydrapp__water--0')\n  } else {\n    counter = status;\n    info.textContent = counter;\n  }\n  counter = status;\n  water.classList.add(`hydrapp__water--${counter}`);\n\n  addButton.addEventListener('click', () => {\n    thisClick = true;\n    if (localStorage.getItem(key) !== \"9\") {\n      localStorage.setItem(key, ++counter);\n      water.classList.remove(`hydrapp__water--${counter - 1}`);\n      water.classList.add(`hydrapp__water--${counter}`);\n      info.textContent = counter;\n      if (localStorage.getItem('toggleAudio') === '1') {\n        audio();\n      }\n    }\n  });\n\n  removeButton.addEventListener('click', () => {\n    thisClick = false;\n    if (localStorage.getItem(key) !== \"0\") {\n      localStorage.setItem(key, --counter);\n      water.classList.remove(`hydrapp__water--${counter + 1}`);\n      water.classList.add(`hydrapp__water--${counter}`);\n      info.textContent = counter;\n      if (localStorage.getItem('toggleAudio') === '1') {\n        audio();\n      }\n    }\n  });\n\n  // changes sound for button\n\n  const audio = () => {\n    const path = ['assets/sounds/water.wav', 'assets/sounds/drain.wav'];\n\n    if (thisClick) {\n      const audio = new Audio(path[0]);\n      audio.loop = false;\n      audio.play();\n    } else {\n      const audio = new Audio(path[1]);\n      audio.loop = false;\n      audio.play();\n    }\n  }\n}\n\n// history table\n\nif (table) {\n  const dataTable = () => {\n    for (let i = 0; i < localStorage.length - 1; i++) {\n      let key = localStorage.key(i);\n      const value = localStorage.getItem(key);\n      table.innerHTML += `<tr class=\"history-table__row--js\"><th class=\"history-table__th\">${key}</th><th class=\"history-table__th\">${value}</th></tr>`;\n    }\n  }\n  dataTable();\n\n  const clear = () => {\n    localStorage.clear();\n    localStorage.setItem(key, '0');\n    table.innerHTML = `<tr class=\"history-table__row--js\"><th class=\"history-table__th\">${key}</th><th class=\"history-table__th\">0</th></tr>`;\n  }\n  clearHistory.addEventListener('click', () => {\n    if (localStorage.getItem('toggleAudio') === \"0\") {\n      clear();\n    } else {\n      clear();\n      localStorage.setItem('toggleAudio', '1');\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLO0FBQ3RDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RCw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxZQUFZO0FBQzVELDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQSw2RkFBNkYsSUFBSSxxQ0FBcUMsTUFBTTtBQUM1STtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLElBQUk7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5jb25zdCBhdWRpb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpb19fdG9nZ2xlLS1qcycpO1xuY29uc3QgYXVkaW9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpb19fYnV0dG9uLS1qcycpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh5ZHJhcHBfX2J1dHRvbi0tYWRkLWpzJyk7XG5jb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHlkcmFwcF9fYnV0dG9uLS1yZW1vdmUtanMnKTtcbmNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHlkcmFwcF9fY3VudGVyLS1qcycpO1xuY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlzdG9yeS10YWJsZV9fZGF0YS0tanMnKTtcbmNvbnN0IHdhdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh5ZHJhcHBfX3dhdGVyLS1qcycpO1xuY29uc3QgY2xlYXJIaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnktdGFibGVfX2NsZWFyLS1qcycpO1xuY29uc3Qga2V5ID0gY3VycmVudERhdGUoKTtcblxuZnVuY3Rpb24gY3VycmVudERhdGUoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGN1cnJlbnQgPSBgJHtkZH0vJHttbX0vJHt5eXl5fWA7XG4gIHJldHVybiBjdXJyZW50O1xufVxuXG4vLyBmdW5jdG9uIGF1ZGlvIGJ1dHRvblxuXG5pZiAoYXVkaW9CdXR0b24pIHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9nZ2xlQXVkaW8nKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2dnbGVBdWRpbycsICcwJyk7XG4gIH1cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2dnbGVBdWRpbycpID09PSAnMCcpIHtcbiAgICBhdWRpb0lucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBhdWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICB9XG4gIGF1ZGlvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9nZ2xlQXVkaW8nKSA9PT0gJzAnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9nZ2xlQXVkaW8nLCAnMScpO1xuICAgICAgYXVkaW9JbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2dnbGVBdWRpbycsICcwJyk7XG4gICAgICBhdWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGFkZEJ1dHRvbiAmJiByZW1vdmVCdXR0b24gJiYgaW5mbykge1xuICBjb25zdCBzdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICBsZXQgY291bnRlcjtcbiAgbGV0IHRoaXNDbGljaztcblxuICBpZiAoIXN0YXR1cykge1xuICAgIGluZm8udGV4dENvbnRlbnQgPSAwO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgJzAnKTtcbiAgICB3YXRlci5jbGFzc0xpc3QuYWRkKCdoeWRyYXBwX193YXRlci0tMCcpXG4gIH0gZWxzZSB7XG4gICAgY291bnRlciA9IHN0YXR1cztcbiAgICBpbmZvLnRleHRDb250ZW50ID0gY291bnRlcjtcbiAgfVxuICBjb3VudGVyID0gc3RhdHVzO1xuICB3YXRlci5jbGFzc0xpc3QuYWRkKGBoeWRyYXBwX193YXRlci0tJHtjb3VudGVyfWApO1xuXG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0aGlzQ2xpY2sgPSB0cnVlO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9PSBcIjlcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCArK2NvdW50ZXIpO1xuICAgICAgd2F0ZXIuY2xhc3NMaXN0LnJlbW92ZShgaHlkcmFwcF9fd2F0ZXItLSR7Y291bnRlciAtIDF9YCk7XG4gICAgICB3YXRlci5jbGFzc0xpc3QuYWRkKGBoeWRyYXBwX193YXRlci0tJHtjb3VudGVyfWApO1xuICAgICAgaW5mby50ZXh0Q29udGVudCA9IGNvdW50ZXI7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZ2dsZUF1ZGlvJykgPT09ICcxJykge1xuICAgICAgICBhdWRpbygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRoaXNDbGljayA9IGZhbHNlO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9PSBcIjBcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAtLWNvdW50ZXIpO1xuICAgICAgd2F0ZXIuY2xhc3NMaXN0LnJlbW92ZShgaHlkcmFwcF9fd2F0ZXItLSR7Y291bnRlciArIDF9YCk7XG4gICAgICB3YXRlci5jbGFzc0xpc3QuYWRkKGBoeWRyYXBwX193YXRlci0tJHtjb3VudGVyfWApO1xuICAgICAgaW5mby50ZXh0Q29udGVudCA9IGNvdW50ZXI7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZ2dsZUF1ZGlvJykgPT09ICcxJykge1xuICAgICAgICBhdWRpbygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gY2hhbmdlcyBzb3VuZCBmb3IgYnV0dG9uXG5cbiAgY29uc3QgYXVkaW8gPSAoKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IFsnYXNzZXRzL3NvdW5kcy93YXRlci53YXYnLCAnYXNzZXRzL3NvdW5kcy9kcmFpbi53YXYnXTtcblxuICAgIGlmICh0aGlzQ2xpY2spIHtcbiAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHBhdGhbMF0pO1xuICAgICAgYXVkaW8ubG9vcCA9IGZhbHNlO1xuICAgICAgYXVkaW8ucGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhwYXRoWzFdKTtcbiAgICAgIGF1ZGlvLmxvb3AgPSBmYWxzZTtcbiAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gaGlzdG9yeSB0YWJsZVxuXG5pZiAodGFibGUpIHtcbiAgY29uc3QgZGF0YVRhYmxlID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB0YWJsZS5pbm5lckhUTUwgKz0gYDx0ciBjbGFzcz1cImhpc3RvcnktdGFibGVfX3Jvdy0tanNcIj48dGggY2xhc3M9XCJoaXN0b3J5LXRhYmxlX190aFwiPiR7a2V5fTwvdGg+PHRoIGNsYXNzPVwiaGlzdG9yeS10YWJsZV9fdGhcIj4ke3ZhbHVlfTwvdGg+PC90cj5gO1xuICAgIH1cbiAgfVxuICBkYXRhVGFibGUoKTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksICcwJyk7XG4gICAgdGFibGUuaW5uZXJIVE1MID0gYDx0ciBjbGFzcz1cImhpc3RvcnktdGFibGVfX3Jvdy0tanNcIj48dGggY2xhc3M9XCJoaXN0b3J5LXRhYmxlX190aFwiPiR7a2V5fTwvdGg+PHRoIGNsYXNzPVwiaGlzdG9yeS10YWJsZV9fdGhcIj4wPC90aD48L3RyPmA7XG4gIH1cbiAgY2xlYXJIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9nZ2xlQXVkaW8nKSA9PT0gXCIwXCIpIHtcbiAgICAgIGNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9nZ2xlQXVkaW8nLCAnMScpO1xuICAgIH1cbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);