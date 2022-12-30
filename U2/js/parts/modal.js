function modal() {
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
}

module.exports = modal;