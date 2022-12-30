function slider() {
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
    showSlides((slideIndex = n));
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
}

module.exports = slider;