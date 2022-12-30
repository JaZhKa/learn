/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./U2/js/parts/calc.js":
/*!*****************************!*\
  !*** ./U2/js/parts/calc.js ***!
  \*****************************/
/***/ ((module) => {

eval("function calc() {\r\n  const PERSONS = document.querySelectorAll('.counter-block-input')[0],\r\n    REST_DAYS = document.querySelectorAll('.counter-block-input')[1],\r\n    PLACE = document.getElementById('select'),\r\n    TOTAL_VALUE = document.getElementById('total');\r\n  let personSum = 0,\r\n    daysSum = 0,\r\n    total = 0;\r\n\r\n  TOTAL_VALUE.innerHTML = 0;\r\n\r\n  PERSONS.addEventListener('change', function () {\r\n    personSum = +this.value;\r\n    total = (daysSum + personSum) * 400;\r\n\r\n    if (REST_DAYS.value === '') {\r\n      TOTAL_VALUE.innerHTML = 0;\r\n    } else if (REST_DAYS.value === '' || PERSONS.value === '') {\r\n      TOTAL_VALUE.innerHTML = 0;\r\n    } else {\r\n      TOTAL_VALUE.innerHTML = total;\r\n    }\r\n  });\r\n\r\n  REST_DAYS.addEventListener('change', function () {\r\n    daysSum = +this.value;\r\n    total = (daysSum + personSum) * 400;\r\n\r\n    if (PERSONS.value === '') {\r\n      TOTAL_VALUE.innerHTML = 0;\r\n    } else if (REST_DAYS.value === '' || PERSONS.value === '') {\r\n      TOTAL_VALUE.innerHTML = 0;\r\n    } else {\r\n      TOTAL_VALUE.innerHTML = total;\r\n    }\r\n  });\r\n\r\n  PLACE.addEventListener('change', function () {\r\n    if (REST_DAYS.value === '' || PERSONS.value === '') {\r\n      TOTAL_VALUE.innerHTML = 0;\r\n    } else {\r\n      let a = total;\r\n      TOTAL_VALUE.innerHTML = a * this.options[this.selectedIndex].value;\r\n    }\r\n  });\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./U2/js/parts/calc.js?");

/***/ }),

/***/ "./U2/js/parts/form.js":
/*!*****************************!*\
  !*** ./U2/js/parts/form.js ***!
  \*****************************/
/***/ ((module) => {

eval("function form() {\r\n  const MESSAGE = {\r\n    loading: 'Загрузка...',\r\n    success: 'Спасибо! Скоро мы c вами свяжемся!',\r\n    failure: 'Что-то пошло не так...',\r\n  };\r\n\r\n  const MAIN_FORM = document.querySelector('.main-form'),\r\n    INPUT = document.getElementsByTagName('input'),\r\n    STATUS_MESSAGE = document.createElement('div'),\r\n    FORM = document.querySelector('form');\r\n  STATUS_MESSAGE.classList.add('stasus');\r\n  STATUS_MESSAGE.style.color = '#fff';\r\n\r\n  function sendForm(elem) {\r\n    elem.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      elem.appendChild(STATUS_MESSAGE);\r\n      const FORM_DATA = new FormData(elem);\r\n\r\n      function postData(data) {\r\n        return new Promise(function (resolve, reject) {\r\n          const REQUEST = new XMLHttpRequest();\r\n          REQUEST.open('POST', 'https://jsonplaceholder.typicode.com/posts');\r\n          REQUEST.setRequestHeader(\r\n            'Content-type',\r\n            'application/x-www-form-urlencoded'\r\n          );\r\n          REQUEST.onreadystatechange = function () {\r\n            if (REQUEST.readyState < 4) {\r\n              resolve();\r\n            } else if (REQUEST.readyState === 4) {\r\n              if (REQUEST.status >= 200 && REQUEST.status < 300) {\r\n                resolve();\r\n              } else {\r\n                reject();\r\n              }\r\n            }\r\n          };\r\n          REQUEST.send(data);\r\n        });\r\n      }\r\n\r\n      function clearInput() {\r\n        for (let i = 0; i < INPUT.length; i++) {\r\n          INPUT[i].value = '';\r\n        }\r\n      }\r\n\r\n      postData(FORM_DATA)\r\n        .then(() => (STATUS_MESSAGE.innerHTML = MESSAGE.loading))\r\n        .then(() => {\r\n          STATUS_MESSAGE.innerHTML = MESSAGE.success;\r\n        })\r\n        .catch(() => (STATUS_MESSAGE.innerHTML = MESSAGE.failure))\r\n        .then(clearInput);\r\n    });\r\n  }\r\n\r\n  sendForm(FORM);\r\n  sendForm(MAIN_FORM);\r\n}\r\n\r\nmodule.exports = form;\r\n\n\n//# sourceURL=webpack:///./U2/js/parts/form.js?");

/***/ }),

/***/ "./U2/js/parts/modal.js":
/*!******************************!*\
  !*** ./U2/js/parts/modal.js ***!
  \******************************/
/***/ ((module) => {

eval("function modal() {\r\n  const MORE = document.querySelector('.more'),\r\n    OVERLAY = document.querySelector('.overlay');\r\n\r\n  document.addEventListener('click', (event) => {\r\n    if (event.target === MORE || event.target.closest('.description-btn')) {\r\n      OVERLAY.style.display = 'block';\r\n      MORE.classList.add('more-splash');\r\n      document.body.style.overflow = 'hidden';\r\n    }\r\n  });\r\n\r\n  OVERLAY.addEventListener('click', (event) => {\r\n    if (event.target === OVERLAY || event.target.closest('.popup-close')) {\r\n      OVERLAY.style.display = 'none';\r\n      MORE.classList.remove('more-splash');\r\n      document.body.style.overflow = '';\r\n    }\r\n  });\r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./U2/js/parts/modal.js?");

/***/ }),

/***/ "./U2/js/parts/slider.js":
/*!*******************************!*\
  !*** ./U2/js/parts/slider.js ***!
  \*******************************/
/***/ ((module) => {

eval("function slider() {\r\n  let slideIndex = 1;\r\n  const SLIDES = document.querySelectorAll('.slider-item'),\r\n    PREV = document.querySelector('.prev'),\r\n    NEXT = document.querySelector('.next'),\r\n    DOTS_WRAP = document.querySelector('.slider-dots'),\r\n    DOTS = document.querySelectorAll('.dot');\r\n\r\n  showSlides(slideIndex);\r\n\r\n  function showSlides(n) {\r\n    if (n > SLIDES.length) {\r\n      slideIndex = 1;\r\n    }\r\n    if (n < 1) {\r\n      slideIndex = SLIDES.length;\r\n    }\r\n\r\n    SLIDES.forEach((item) => (item.style.display = 'none'));\r\n    DOTS.forEach((item) => item.classList.remove('dot-active'));\r\n\r\n    SLIDES[slideIndex - 1].style.display = 'block';\r\n    DOTS[slideIndex - 1].classList.add('dot-active');\r\n  }\r\n\r\n  function plusSlides(n) {\r\n    showSlides((slideIndex += n));\r\n  }\r\n  function currentSlide(n) {\r\n    showSlides((slideIndex = n));\r\n  }\r\n  PREV.addEventListener('click', () => plusSlides(-1));\r\n  NEXT.addEventListener('click', () => plusSlides(1));\r\n\r\n  DOTS_WRAP.addEventListener('click', (e) => {\r\n    for (let i = 0; i < DOTS.length + 1; i++) {\r\n      if (e.target.classList.contains('dot') && e.target == DOTS[i - 1]) {\r\n        currentSlide(i);\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./U2/js/parts/slider.js?");

/***/ }),

/***/ "./U2/js/parts/tabs.js":
/*!*****************************!*\
  !*** ./U2/js/parts/tabs.js ***!
  \*****************************/
/***/ ((module) => {

eval("function tabs() {\r\n  const TAB = document.querySelectorAll('.info-header-tab'),\r\n    INFO = document.querySelector('.info-header'),\r\n    TAB_CONTENT = document.querySelectorAll('.info-tabcontent');\r\n\r\n  const HIDEN_TAB_CONTENT = (h = 1) => {\r\n    for (let i = h; i < TAB_CONTENT.length; i++) {\r\n      TAB_CONTENT[i].classList.remove('show');\r\n      TAB_CONTENT[i].classList.add('hide');\r\n    }\r\n  };\r\n  HIDEN_TAB_CONTENT();\r\n\r\n  const SHOW_TAB_CONTENT = (s) => {\r\n    if (TAB_CONTENT[s].classList.contains('hide')) {\r\n      TAB_CONTENT[s].classList.remove('hide');\r\n      TAB_CONTENT[s].classList.add('show');\r\n    }\r\n  };\r\n\r\n  INFO.addEventListener('click', (event) => {\r\n    const TARGET = event.target;\r\n    if (TARGET && TARGET.classList.contains('info-header-tab')) {\r\n      for (let i = 0; i < TAB.length; i++) {\r\n        if (TARGET === TAB[i]) {\r\n          HIDEN_TAB_CONTENT(0);\r\n          SHOW_TAB_CONTENT(i);\r\n          break;\r\n        }\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./U2/js/parts/tabs.js?");

/***/ }),

/***/ "./U2/js/parts/timer.js":
/*!******************************!*\
  !*** ./U2/js/parts/timer.js ***!
  \******************************/
/***/ ((module) => {

eval("function timer() {\r\n  const DEADLINE = '2023-01-01 00:00:00';\r\n\r\n  const GET_TIMER_RAMAINING = (endtime) => {\r\n    const T = Date.parse(endtime) - Date.parse(new Date()),\r\n      SECONDS = Math.floor((T / 1000) % 60),\r\n      MINUTES = Math.floor((T / 1000 / 60) % 60),\r\n      HOURS = Math.floor(T / (1000 * 60 * 60));\r\n    // hours = Math.floor((t / 1000/60/60) % 24);   if need days\r\n    // days = Math.floor((t / (1000*60*60*24)));\r\n\r\n    return {\r\n      total: T,\r\n      hours: HOURS < 10 ? '0' + HOURS : HOURS,\r\n      minutes: MINUTES < 10 ? '0' + MINUTES : MINUTES,\r\n      seconds: SECONDS < 10 ? '0' + SECONDS : SECONDS,\r\n    };\r\n  };\r\n\r\n  const SET_CLOCK = (id = 'timer', endtime = DEADLINE) => {\r\n    const TIMER = document.getElementById(id),\r\n      HOURS = TIMER.querySelector('.hours'),\r\n      MINUTES = TIMER.querySelector('.minutes'),\r\n      SECONDS = TIMER.querySelector('.seconds'),\r\n      TIME_INTERVAL = setInterval(updeteClock, 1000);\r\n\r\n    function updeteClock() {\r\n      const T = GET_TIMER_RAMAINING(endtime);\r\n      HOURS.textContent = T.hours;\r\n      MINUTES.textContent = T.minutes;\r\n      SECONDS.textContent = T.seconds;\r\n\r\n      if (T.total < 1) {\r\n        clearInterval(TIME_INTERVAL);\r\n        HOURS.textContent = '00';\r\n        MINUTES.textContent = '00';\r\n        SECONDS.textContent = '00';\r\n      }\r\n    }\r\n  };\r\n\r\n  SET_CLOCK();\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./U2/js/parts/timer.js?");

/***/ }),

/***/ "./U2/js/script.js":
/*!*************************!*\
  !*** ./U2/js/script.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.addEventListener('DOMContentLoaded', () => {\r\n  'use strict';\r\n  let tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./U2/js/parts/tabs.js\"),\r\n    timer = __webpack_require__(/*! ./parts/timer.js */ \"./U2/js/parts/timer.js\"),\r\n    modal = __webpack_require__(/*! ./parts/modal.js */ \"./U2/js/parts/modal.js\"),\r\n    form = __webpack_require__(/*! ./parts/form.js */ \"./U2/js/parts/form.js\"),\r\n    slider = __webpack_require__(/*! ./parts/slider.js */ \"./U2/js/parts/slider.js\"),\r\n    calc = __webpack_require__(/*! ./parts/calc.js */ \"./U2/js/parts/calc.js\");\r\n    \r\n    tabs();\r\n  timer();\r\n  modal();\r\n  form();\r\n  slider();\r\n  calc();\r\n});\n\n//# sourceURL=webpack:///./U2/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./U2/js/script.js");
/******/ 	
/******/ })()
;