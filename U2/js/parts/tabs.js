function tabs() {
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
}

module.exports = tabs;