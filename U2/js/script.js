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

  const DEADLINE = '2022-08-26 00:00:00';

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

  const massage = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы c вами свяжемся!',
    failure: 'Что-то пошло не так...',
  };

  const mainForm = document.querySelector('.main-form'),
    input = mainForm.getElementsByTagName('input'),
    statusMassage = document.createElement('div'),
    form = document.querySelector('form');

  statusMassage.classList.add('stasus');
  statusMassage.style.color = '#fff';

  document.addEventListener('submit', (e) => {
    if (e.target.closest('.main-form') || e.target.closest('.contact-form')) {
      e.preventDefault();
      e.target.closest('.contact-form')
        ? form.appendChild(statusMassage)
        : mainForm.appendChild(statusMassage);
      const request = new XMLHttpRequest();
      request.open('POST', 'https://jsonplaceholder.typicode.com/posts');
      let choise = [];
      request.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
      );
      const formData = new FormData(mainForm),
        contactData = new FormData(form);

      function chooseData() {
        if (e.target.closest('.contact-form')) {
          choise = contactData;
        } else {
          choise = formData;
        }
      }
      chooseData();

      const obj = {};
      choise.forEach((value, key) => {
        obj[key] = value;
      });
      const json = JSON.stringify(obj);

      request.send(json);

      request.addEventListener('readystatechange', () => {
        if (request.readyState < 4) {
          statusMassage.innerHTML = massage.loading;
        } else if (
          request.readyState === 4 &&
          request.status >= 200 &&
          request.status <= 299
        ) {
          statusMassage.innerHTML = massage.success;
        } else {
          statusMassage.innerHTML = massage.failure;
        }
      });

      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }
  });
});