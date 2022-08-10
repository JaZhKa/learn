window.addEventListener('DOMContentLoaded', () => {
  
  // Tabs

  'use strict';
  const TAB = document.querySelectorAll('.info-header-tab'),
    INFO = document.querySelector('.info-header'),
    TAB_CONTENT = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(h) {
    for (let i = h; i < TAB_CONTENT.length; i++) {
      TAB_CONTENT[i].classList.remove('show');
      TAB_CONTENT[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(s) {
    if (TAB_CONTENT[s].classList.contains('hide')) {
      TAB_CONTENT[s].classList.remove('hide');
      TAB_CONTENT[s].classList.add('show');
    }
  }

  INFO.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < TAB.length; i++) {
        if (target == TAB[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  const DEADLINE = '2022-08-26 00:00:00';

  function getTimeRamaining(endtime) {
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
  }

  function setClock(id, endtime) {
    const TIMER = document.getElementById(id),
      HOURS = TIMER.querySelector('.hours'),
      MINUTES = TIMER.querySelector('.minutes'),
      SECONDS = TIMER.querySelector('.seconds'),
      TIME_INTERVAL = setInterval(updeteClock, 1000);

    function updeteClock() {
      const T = getTimeRamaining(endtime);
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
  }

  setClock('timer', DEADLINE);

  // Modal

  const MORE = document.querySelector('.more'),
    OVERLAY = document.querySelector('.overlay');

  document.addEventListener('click', function (event) {
    if (event.target === MORE || event.target.closest('.description-btn')) {
      OVERLAY.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }
  });

  OVERLAY.addEventListener('click', function (event) {
    if (event.target == OVERLAY || event.target.closest('.popup-close')) {
      OVERLAY.style.display = 'none';
      MORE.classList.remove('more-splash');
      document.body.style.overflow = '';
    }
  });
});