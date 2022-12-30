function calc() {
  const PERSONS = document.querySelectorAll('.counter-block-input')[0],
    REST_DAYS = document.querySelectorAll('.counter-block-input')[1],
    PLACE = document.getElementById('select'),
    TOTAL_VALUE = document.getElementById('total');
  let personSum = 0,
    daysSum = 0,
    total = 0;

  TOTAL_VALUE.innerHTML = 0;

  PERSONS.addEventListener('change', function () {
    personSum = +this.value;
    total = (daysSum + personSum) * 400;

    if (REST_DAYS.value === '') {
      TOTAL_VALUE.innerHTML = 0;
    } else if (REST_DAYS.value === '' || PERSONS.value === '') {
      TOTAL_VALUE.innerHTML = 0;
    } else {
      TOTAL_VALUE.innerHTML = total;
    }
  });

  REST_DAYS.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personSum) * 400;

    if (PERSONS.value === '') {
      TOTAL_VALUE.innerHTML = 0;
    } else if (REST_DAYS.value === '' || PERSONS.value === '') {
      TOTAL_VALUE.innerHTML = 0;
    } else {
      TOTAL_VALUE.innerHTML = total;
    }
  });

  PLACE.addEventListener('change', function () {
    if (REST_DAYS.value === '' || PERSONS.value === '') {
      TOTAL_VALUE.innerHTML = 0;
    } else {
      let a = total;
      TOTAL_VALUE.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;