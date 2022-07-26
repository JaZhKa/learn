window.addEventListener('DOMContentLoaded', function () {
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
});