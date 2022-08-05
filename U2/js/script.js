window.addEventListener('DOMContentLoaded', function () {

// Tabs

  'use strict';
  const tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(h) {
    for (let i = h; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      }
  }
  hideTabContent(1);

  function showTabContent(s) {
    if (tabContent[s].classList.contains('hide')) {
      tabContent[s].classList.remove('hide');
      tabContent[s].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

// Timer

  const deadline = '2022-08-26 00:00:00';

  function getTimeRamaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000*60*60)));
        // hours = Math.floor((t / 1000/60/60) % 24);   if need days
        // days = Math.floor((t / (1000*60*60*24)));

        return {
          'total' : t,
          'hours' : hours < 10 ? '0' + hours : hours,
          'minutes' : minutes < 10 ? '0' + minutes : minutes,
          'seconds' : seconds < 10 ? '0' + seconds : seconds
        };
      }
      
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updeteClock, 1000);
    
    function updeteClock() {
      let t = getTimeRamaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;
      
      if(t.total < 1) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);

// Modal

  const more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay');

  more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  overlay.addEventListener('click', function(event) {
    if(event.target == overlay || event.target.closest('.popup-close')) {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
    }
  });
});

document.addEventListener('click', function(e) {
  console.log(e.target);
});