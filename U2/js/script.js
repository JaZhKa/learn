window.addEventListener('DOMContentLoaded', () => {
  // Tabs

  'use strict';
  const TAB = document.querySelectorAll('.info-header-tab'),
    INFO = document.querySelector('.info-header'),
    TAB_CONTENT = document.querySelectorAll('.info-tabcontent');

  const HIDEN_TAB_CONTENT = (h = 1) => {
    for (let i = h; i < TAB_CONTENT.length; i++) {
      TAB_CONTENT[i].classList.remove('show');
      TAB_CONTENT[i].classList.add('hide');
    }
  };
  HIDEN_TAB_CONTENT();

  const SHOW_TAB_CONTENT = (s) => {
    if (TAB_CONTENT[s].classList.contains('hide')) {
      TAB_CONTENT[s].classList.remove('hide');
      TAB_CONTENT[s].classList.add('show');
    }
  };

  INFO.addEventListener('click', (event) => {
    const TARGET = event.target;
    if (TARGET && TARGET.classList.contains('info-header-tab')) {
      for (let i = 0; i < TAB.length; i++) {
        if (TARGET === TAB[i]) {
          HIDEN_TAB_CONTENT(0);
          SHOW_TAB_CONTENT(i);
          break;
        }
      }
    }
  });

  // Timer

  const DEADLINE = '2022-09-26 00:00:00';

  const GET_TIMER_RAMAINING = (endtime) => {
    const T = Date.parse(endtime) - Date.parse(new Date()),
      SECONDS = Math.floor((T / 1000) % 60),
      MINUTES = Math.floor((T / 1000 / 60) % 60),
      HOURS = Math.floor(T / (1000 * 60 * 60));
    // hours = Math.floor((t / 1000/60/60) % 24);   if need days
    // days = Math.floor((t / (1000*60*60*24)));

    return {
      total: T,
      hours: HOURS < 10 ? '0' + HOURS : HOURS,
      minutes: MINUTES < 10 ? '0' + MINUTES : MINUTES,
      seconds: SECONDS < 10 ? '0' + SECONDS : SECONDS,
    };
  };

  const SET_CLOCK = (id = 'timer', endtime = DEADLINE) => {
    const TIMER = document.getElementById(id),
      HOURS = TIMER.querySelector('.hours'),
      MINUTES = TIMER.querySelector('.minutes'),
      SECONDS = TIMER.querySelector('.seconds'),
      TIME_INTERVAL = setInterval(updeteClock, 1000);

    function updeteClock() {
      const T = GET_TIMER_RAMAINING(endtime);
      HOURS.textContent = T.hours;
      MINUTES.textContent = T.minutes;
      SECONDS.textContent = T.seconds;

      if (T.total < 1) {
        clearInterval(TIME_INTERVAL);
        HOURS.textContent = '00';
        MINUTES.textContent = '00';
        SECONDS.textContent = '00';
      }
    }
  };

  SET_CLOCK();

  // Modal

  const MORE = document.querySelector('.more'),
    OVERLAY = document.querySelector('.overlay');

  document.addEventListener('click', (event) => {
    if (event.target === MORE || event.target.closest('.description-btn')) {
      OVERLAY.style.display = 'block';
      MORE.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }
  });

  OVERLAY.addEventListener('click', (event) => {
    if (event.target === OVERLAY || event.target.closest('.popup-close')) {
      OVERLAY.style.display = 'none';
      MORE.classList.remove('more-splash');
      document.body.style.overflow = '';
    }
  });

  // Form

  const MESSAGE = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы c вами свяжемся!',
    failure: 'Что-то пошло не так...',
  };

  const MAIN_FORM = document.querySelector('.main-form'),
    INPUT = document.getElementsByTagName('input'),
    STATUS_MESSAGE = document.createElement('div'),
    FORM = document.querySelector('form');
  STATUS_MESSAGE.classList.add('stasus');
  STATUS_MESSAGE.style.color = '#fff';

  function sendForm(elem) {
    elem.addEventListener('submit', (e) => {
      e.preventDefault();
      elem.appendChild(STATUS_MESSAGE);
      const FORM_DATA = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          const REQUEST = new XMLHttpRequest();
          REQUEST.open('POST', 'https://jsonplaceholder.typicode.com/posts');
          REQUEST.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded'
          );
          REQUEST.onreadystatechange = function () {
            if (REQUEST.readyState < 4) {
              resolve();
            } else if (REQUEST.readyState === 4) {
              if (REQUEST.status >= 200 && REQUEST.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          };
          REQUEST.send(data);
        });
      }

      function clearInput() {
        for (let i = 0; i < INPUT.length; i++) {
          INPUT[i].value = '';
        }
      }

      postData(FORM_DATA)
        .then(() => (STATUS_MESSAGE.innerHTML = MESSAGE.loading))
        .then(() => {
          STATUS_MESSAGE.innerHTML = MESSAGE.success;
        })
        .catch(() => (STATUS_MESSAGE.innerHTML = MESSAGE.failure))
        .then(clearInput);
    });
  }

  sendForm(FORM);
  sendForm(MAIN_FORM);

  //Slider

  let slideIndex = 1;
  const SLIDES = document.querySelectorAll('.slider-item'),
    PREV = document.querySelector('.prev'),
    NEXT = document.querySelector('.next'),
    DOTS_WRAP = document.querySelector('.slider-dots'),
    DOTS = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > SLIDES.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = SLIDES.length;
    }

    SLIDES.forEach((item) => (item.style.display = 'none'));
    DOTS.forEach((item) => item.classList.remove('dot-active'));

    SLIDES[slideIndex - 1].style.display = 'block';
    DOTS[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  PREV.addEventListener('click', () => plusSlides(-1));
  NEXT.addEventListener('click', () => plusSlides(1));

  DOTS_WRAP.addEventListener('click', (e) => {
    for (let i = 0; i < DOTS.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == DOTS[i - 1]) {
        currentSlide(i);
      }
    }
  });
});
