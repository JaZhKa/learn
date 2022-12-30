function timer() {
  const DEADLINE = '2023-01-01 00:00:00';

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
}

module.exports = timer;