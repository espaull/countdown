import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';

function Countdown() {
  const [time, setTime] = useState('');
  const [timer, setTimer] = useState(null);

  const endDate = dayjs().add(1, 'hour');

  let timeLeft;

  const calculateTimeLeft = () => {
    const now = dayjs();

    timeLeft = dayjs(endDate.valueOf() - now.valueOf());
    timeLeft = timeLeft.subtract(dayjs().utcOffset(), 'minute');

    setTime(timeLeft.format('H[h] mm[m] ss[s]'));
  };

  const startTimer = () => {
    const newTimer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    setTimer(newTimer);
  };

  useEffect(() => {
    if (!timer) {
      startTimer();
    }
  });

  return (
    <div>
      <div>Countdown!</div>
      <br />
      <div>{time}</div>
    </div>
  );
}

export default Countdown;
