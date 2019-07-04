import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';

function Countdown() {
  const [time, setTime] = useState('');
  const [timer, setTimer] = useState(null);

  let endDate = dayjs().add(1, 'day');
  endDate = endDate.add(8, 'hour');
  endDate = endDate.add(10, 'second');

  const calculateTimeLeft = () => {
    const now = dayjs();
    const daysLeft = endDate.diff(now, 'day');

    if (daysLeft > 7) {
      setTime('Ongoing');
    } else if (daysLeft > 1 && daysLeft < 7) {
      setTime(`${daysLeft} days left`);
    } else if (daysLeft === 1) {
      const hoursLeft = endDate.diff(now, 'hour') - 24;

      if (hoursLeft > 0) {
        setTime(`${daysLeft} day ${hoursLeft} hours left`);
      } else {
        setTime(`${daysLeft} day left`);
      }
    } else {
      let timeLeft = dayjs(endDate.valueOf() - now.valueOf());

      timeLeft = timeLeft.subtract(dayjs().utcOffset(), 'minute');

      setTime(timeLeft.format('H[h] mm[m] ss[s]'));
    }
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
