function form() {
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
}

module.exports = form;
