!function(t){var e={};function n(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return t[c].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(c,l,function(e){return t[e]}.bind(null,l));return c},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\nconst addButton = document.querySelector('.hydrapp__button--add-js');\nconst removeButton = document.querySelector('.hydrapp__button--remove-js');\nconst info = document.querySelector('.hydrapp__cunter--js');\nconst table = document.querySelector('.history-table__data--js');\nconst water = document.querySelector('.hydrapp__water--js');\nconst key = new Date().toISOString().slice(0, 10);\nconst status = localStorage.getItem(key);\nlet counter;\n\nif (addButton && removeButton && info) {\n  if (!status) {\n    info.textContent = 0;\n    localStorage.setItem(key, '0');\n    water.classList.add('hydrapp__water--0')\n  } else {\n    counter = status;\n    info.textContent = counter;\n  }\n  counter = status;\n  water.classList.add(`hydrapp__water--${counter}`);\n\n  addButton.addEventListener('click', () => {\n    if (localStorage.getItem(key) !== \"9\") {\n      localStorage.setItem(key, ++counter);\n      water.classList.remove(`hydrapp__water--${counter - 1}`);\n      water.classList.add(`hydrapp__water--${counter}`);\n      console.log(counter);\n      info.textContent = counter;\n    }\n  });\n  removeButton.addEventListener('click', () => {\n    if (localStorage.getItem(key) !== \"0\") {\n      localStorage.setItem(key, --counter);\n      water.classList.remove(`hydrapp__water--${counter + 1}`);\n      water.classList.add(`hydrapp__water--${counter}`);\n      console.log(counter);\n      info.textContent = counter;\n    };\n  });\n}\n\nif (table) {\n  for (let i = 0; i < localStorage.length; i++) {\n    let key = localStorage.key(i);\n    const value = localStorage.getItem(key);\n    console.log(key);\n    console.log(value);\n    table.innerHTML += `<tr class=\"history-table__row--js\"><th class=\"history-table__th\">${key}</th><th class=\"history-table__th\">${value}</th></tr>`;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxZQUFZO0FBQzVELDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RCw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLElBQUkscUNBQXFDLE1BQU07QUFDMUk7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh5ZHJhcHBfX2J1dHRvbi0tYWRkLWpzJyk7XG5jb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHlkcmFwcF9fYnV0dG9uLS1yZW1vdmUtanMnKTtcbmNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHlkcmFwcF9fY3VudGVyLS1qcycpO1xuY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlzdG9yeS10YWJsZV9fZGF0YS0tanMnKTtcbmNvbnN0IHdhdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh5ZHJhcHBfX3dhdGVyLS1qcycpO1xuY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbmNvbnN0IHN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5sZXQgY291bnRlcjtcblxuaWYgKGFkZEJ1dHRvbiAmJiByZW1vdmVCdXR0b24gJiYgaW5mbykge1xuICBpZiAoIXN0YXR1cykge1xuICAgIGluZm8udGV4dENvbnRlbnQgPSAwO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgJzAnKTtcbiAgICB3YXRlci5jbGFzc0xpc3QuYWRkKCdoeWRyYXBwX193YXRlci0tMCcpXG4gIH0gZWxzZSB7XG4gICAgY291bnRlciA9IHN0YXR1cztcbiAgICBpbmZvLnRleHRDb250ZW50ID0gY291bnRlcjtcbiAgfVxuICBjb3VudGVyID0gc3RhdHVzO1xuICB3YXRlci5jbGFzc0xpc3QuYWRkKGBoeWRyYXBwX193YXRlci0tJHtjb3VudGVyfWApO1xuXG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAhPT0gXCI5XCIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgKytjb3VudGVyKTtcbiAgICAgIHdhdGVyLmNsYXNzTGlzdC5yZW1vdmUoYGh5ZHJhcHBfX3dhdGVyLS0ke2NvdW50ZXIgLSAxfWApO1xuICAgICAgd2F0ZXIuY2xhc3NMaXN0LmFkZChgaHlkcmFwcF9fd2F0ZXItLSR7Y291bnRlcn1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50ZXIpO1xuICAgICAgaW5mby50ZXh0Q29udGVudCA9IGNvdW50ZXI7XG4gICAgfVxuICB9KTtcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9PSBcIjBcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAtLWNvdW50ZXIpO1xuICAgICAgd2F0ZXIuY2xhc3NMaXN0LnJlbW92ZShgaHlkcmFwcF9fd2F0ZXItLSR7Y291bnRlciArIDF9YCk7XG4gICAgICB3YXRlci5jbGFzc0xpc3QuYWRkKGBoeWRyYXBwX193YXRlci0tJHtjb3VudGVyfWApO1xuICAgICAgY29uc29sZS5sb2coY291bnRlcik7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gY291bnRlcjtcbiAgICB9O1xuICB9KTtcbn1cblxuaWYgKHRhYmxlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIHRhYmxlLmlubmVySFRNTCArPSBgPHRyIGNsYXNzPVwiaGlzdG9yeS10YWJsZV9fcm93LS1qc1wiPjx0aCBjbGFzcz1cImhpc3RvcnktdGFibGVfX3RoXCI+JHtrZXl9PC90aD48dGggY2xhc3M9XCJoaXN0b3J5LXRhYmxlX190aFwiPiR7dmFsdWV9PC90aD48L3RyPmA7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);